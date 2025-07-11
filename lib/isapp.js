/**
 * SmartCampus アプリケーション共通ライブラリ
 * 全ページで共通して使用される機能を提供
 */

const isapp = {
    // 現在のユーザー情報
    currentUser: null,
    
    /**
     * ユーザー初期化処理
     * ログイン確認と基本情報の取得、未登録ユーザーの自動登録
     */
    async initUser() {
        try {
            // 外部認証システムからユーザー情報を取得
            this.currentUser = await osql.getMe();
            
            if (!this.currentUser || !this.currentUser.id) {
                throw new Error('ユーザー情報の取得に失敗しました');
            }
            
            // usersテーブルにユーザーが存在するかチェック
            const checkUserSQL = `SELECT id FROM users WHERE id = '${this.currentUser.id}'`;
            const checkResult = await osql.connect(checkUserSQL, false);
            console.log('Result of user check:', checkResult);
            if (checkResult.status === 200 && checkResult.objects && checkResult.objects.length > 0) {
                // ユーザーが既に存在する場合
                console.log('既存ユーザーでログイン:', this.currentUser.id);
            } else {
                // ユーザーが存在しない場合、自動登録
                console.log('新規ユーザーを自動登録:', this.currentUser.id);
                
                // SQLインジェクション対策のためにエスケープ処理
                const escapedFname = this.currentUser.fname.replace(/'/g, "''");
                const escapedLname = this.currentUser.lname.replace(/'/g, "''");
                const escapedId = this.currentUser.id.replace(/'/g, "''");
                
                const insertUserSQL = `INSERT INTO users (id, fname, lname, role) VALUES ('${escapedId}', '${escapedFname}', '${escapedLname}', 'student')`;
                const insertResult = await osql.connect(insertUserSQL, false);
                
                if (insertResult.status === 200) {
                    console.log('新規ユーザー登録完了:', this.currentUser.id);
                } else {
                    console.error('新規ユーザー登録失敗:', insertResult);
                    // 登録に失敗してもアプリケーションは継続（外部認証は成功しているため）
                }
            }
            
            return this.currentUser;
        } catch (error) {
            console.error('ユーザー初期化エラー:', error);
            throw error;
        }
    },

    /**
     * 日付関連のユーティリティ関数
     */
    utils: {
        /**
         * 曜日番号を日本語に変換
         * @param {string|number} dayOfWeek 曜日番号 (1=月, 2=火, ..., 7=日)
         * @returns {string} 日本語の曜日
         */
        getDayName(dayOfWeek) {
            const days = {
                '1': '月', '2': '火', '3': '水',
                '4': '木', '5': '金', '6': '土', '7': '日'
            };
            return days[String(dayOfWeek)] || String(dayOfWeek);
        },

        /**
         * 現在の曜日番号を取得 (JavaScript のgetDay()を学校の曜日番号に変換)
         * @returns {number} 曜日番号 (1=月, 2=火, ..., 7=日)
         */
        getCurrentDayOfWeek() {
            const jsDay = new Date().getDay(); // 0=日, 1=月, ..., 6=土
            return jsDay === 0 ? 7 : jsDay; // 日曜日を7に変換、他はそのまま
        },

        /**
         * 期間名を日本語に変換
         * @param {string|number} semester 期間 (1=前期, 2=後期 or 'spring', 'fall', etc.)
         * @returns {string} 日本語の期間名
         */
        getSemesterName(semester) {
            // 数値形式の場合
            if (typeof semester === 'number' || !isNaN(Number(semester))) {
                const numericSemesters = {
                    1: '前期',
                    2: '後期'
                };
                return numericSemesters[Number(semester)] || `第${semester}学期`;
            }
            
            // 文字列形式の場合（後方互換性のため）
            const semesters = {
                'spring': '春学期',
                'fall': '秋学期',
                'summer': '夏学期',
                'winter': '冬学期',
                'intensive': '集中講義'
            };
            return semesters[semester] || semester;
        },

        /**
         * 日付を日本語形式でフォーマット
         * @param {Date|string} date 日付
         * @returns {string} フォーマットされた日付文字列
         */
        formatDate(date) {
            const d = new Date(date);
            return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
        },

        /**
         * UUIDを生成
         * @returns {string} UUID文字列
         */
        generateId() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    },

    /**
     * プロジェクト関連の操作
     */
    projects: {
        /**
         * ユーザーの全プロジェクトを取得
         * @param {string} userId ユーザーID
         * @returns {Array} プロジェクト配列
         */
        async getUserProjects(userId = null) {
            const uid = userId || isapp.currentUser?.id;
            if (!uid) throw new Error('ユーザーIDが指定されていません');
            
            const sql = `SELECT * FROM projects WHERE user_id = '${uid}' ORDER BY year DESC, semester DESC`;
            return await osql.connect(sql, true) || [];
        },

        /**
         * 最新のプロジェクトを取得
         * @param {string} userId ユーザーID
         * @returns {Object|null} 最新のプロジェクト
         */
        async getLatestProject(userId = null) {
            const uid = userId || isapp.currentUser?.id;
            if (!uid) throw new Error('ユーザーIDが指定されていません');
            
            const sql = `SELECT * FROM projects WHERE user_id = '${uid}' ORDER BY year DESC, semester DESC LIMIT 1`;
            const projects = await osql.connect(sql, true);
            return projects && projects.length > 0 ? projects[0] : null;
        },

        /**
         * 新しいプロジェクトを作成
         * @param {Object} projectData プロジェクトデータ
         * @returns {Object} 作成されたプロジェクト
         */
        async createProject(projectData) {
            const userId = projectData.user_id || isapp.currentUser?.id;
            if (!userId) throw new Error('ユーザーIDが指定されていません');
            
            const project = {
                id: isapp.utils.generateId(),
                user_id: userId,
                year: projectData.year || new Date().getFullYear(),
                semester: projectData.semester || 1, // 1=前期, 2=後期
                public: projectData.public || false
            };
            
            const sql = `INSERT INTO projects (id, user_id, year, semester, public) VALUES (
                '${project.id}', '${project.user_id}', ${project.year}, ${project.semester}, ${project.public}
            )`;
            
            await osql.connect(sql, false);
            return project;
        },

        /**
         * プロジェクトを削除
         * @param {string} projectId プロジェクトID
         */
        async deleteProject(projectId) {
            if (!projectId) throw new Error('プロジェクトIDが指定されていません');
            
            // まず関連する履修登録データを削除
            const deleteSelectionsSQL = `DELETE FROM selections WHERE project_id = '${projectId}'`;
            await osql.connect(deleteSelectionsSQL, false);
            
            // プロジェクトを削除
            const deleteProjectSQL = `DELETE FROM projects WHERE id = '${projectId}'`;
            await osql.connect(deleteProjectSQL, false);
        }
    },

    /**
     * 履修登録関連の操作
     */
    selections: {
        /**
         * プロジェクトの履修科目を取得
         * @param {string} projectId プロジェクトID
         * @returns {Array} 履修科目ID配列
         */
        async getProjectSelections(projectId) {
            if (!projectId) return [];
            
            const sql = `SELECT class_id FROM selections WHERE project_id = '${projectId}'`;
            const selections = await osql.connect(sql, true) || [];
            return selections.map(s => s.class_id);
        },

        /**
         * プロジェクトの履修科目詳細を取得
         * @param {string} projectId プロジェクトID
         * @returns {Array} 履修科目詳細配列
         */
        async getProjectCourses(projectId) {
            if (!projectId) return [];
            
            const sql = `
                SELECT c.* FROM classes c 
                INNER JOIN selections s ON c.id = s.class_id 
                WHERE s.project_id = '${projectId}'
                ORDER BY c.day_of_week, c.period
            `;
            return await osql.connect(sql, true) || [];
        },

        /**
         * 科目を履修登録
         * @param {string} projectId プロジェクトID
         * @param {string} classId 科目ID
         */
        async addSelection(projectId, classId) {
            const selectionId = isapp.utils.generateId();
            const sql = `INSERT INTO selections (id, project_id, class_id) VALUES ('${selectionId}', '${projectId}', '${classId}')`;
            await osql.connect(sql, false);
        },

        /**
         * 科目の履修登録を解除
         * @param {string} projectId プロジェクトID
         * @param {string} classId 科目ID
         */
        async removeSelection(projectId, classId) {
            const sql = `DELETE FROM selections WHERE project_id = '${projectId}' AND class_id = '${classId}'`;
            await osql.connect(sql, false);
        }
    },

    /**
     * 科目関連の操作
     */
    courses: {
        /**
         * 全科目を取得
         * @returns {Array} 科目配列
         */
        async getAllCourses() {
            const sql = 'SELECT * FROM classes ORDER BY day_of_week, period';
            return await osql.connect(sql, true) || [];
        },

        /**
         * 科目IDで科目詳細を取得
         * @param {string} classId 科目ID
         * @returns {Object|null} 科目詳細
         */
        async getCourseById(classId) {
            const sql = `SELECT * FROM classes WHERE id = '${classId}'`;
            const courses = await osql.connect(sql, true);
            return courses && courses.length > 0 ? courses[0] : null;
        },

        /**
         * 履修科目の総単位数を計算
         * @param {Array} courseIds 科目ID配列
         * @param {Array} allCourses 全科目データ（省略可能）
         * @returns {number} 総単位数
         */
        async calculateTotalCredits(courseIds, allCourses = null) {
            if (!allCourses) {
                allCourses = await this.getAllCourses();
            }
            
            return courseIds.reduce((total, courseId) => {
                const course = allCourses.find(c => c.id === courseId);
                return total + (course ? parseInt(course.credit || 0) : 0);
            }, 0);
        },

        /**
         * 今日の履修科目を取得
         * @param {Array} courseIds 履修科目ID配列
         * @param {Array} allCourses 全科目データ（省略可能）
         * @returns {Array} 今日の科目配列
         */
        async getTodayCourses(courseIds, allCourses = null) {
            if (!allCourses) {
                allCourses = await this.getAllCourses();
            }
            
            const today = isapp.utils.getCurrentDayOfWeek();
            return allCourses.filter(course => 
                courseIds.includes(course.id) && 
                course.day_of_week == today
            );
        }
    },

    /**
     * UI関連のユーティリティ
     */
    ui: {
        /**
         * ローディング表示
         * @param {string} message ローディングメッセージ
         */
        showLoading(message = '読み込み中...') {
            // 実装は各ページで必要に応じてオーバーライド
            console.log('Loading:', message);
        },

        /**
         * ローディング非表示
         */
        hideLoading() {
            // 実装は各ページで必要に応じてオーバーライド
            console.log('Loading finished');
        },

        /**
         * エラーメッセージ表示
         * @param {string} message エラーメッセージ
         */
        showError(message) {
            alert(`エラー: ${message}`);
        },

        /**
         * 成功メッセージ表示
         * @param {string} message 成功メッセージ
         */
        showSuccess(message) {
            // 簡単な実装。各ページでより良いUIに置き換え可能
            alert(message);
        },

        /**
         * ユーザー情報をヘッダーに設定
         * @param {Object} user ユーザー情報
         */
        setUserHeader(user) {
            const nameEl = document.getElementById('user-name') || document.getElementById('header-username');
            const initialsEl = document.getElementById('user-initials');
            
            if (nameEl) {
                nameEl.innerText = `${user.lname} ${user.fname}`;
            }
            if (initialsEl) {
                initialsEl.innerText = (user.lname.charAt(0) + user.fname.charAt(0)).toUpperCase();
            }
        }
    }
};

// グローバルに公開
window.isapp = isapp;
