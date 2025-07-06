// 履修科目データベースモック
var CoursesDB = {
    // 科目データ
    courses: [
        // 月曜日
        {
            id: 'MATH001',
            name: '離散数学',
            credits: 2,
            description: '集合、論理、グラフ理論など計算機科学の基礎となる数学を学習します。',
            instructor: '加藤 教授',
            dayOfWeek: 1, period: 1, classroom: 'B-301'
        },
        {
            id: 'PROG101',
            name: 'Java基礎',
            credits: 2,
            description: 'Javaプログラミングの基本文法とオブジェクト指向の概念を学習します。',
            instructor: '田中 講師',
            dayOfWeek: 1, period: 2, classroom: 'C-201'
        },
        {
            id: 'IS001',
            name: '情報システム開発論',
            credits: 2,
            description: '情報システムの開発手法、プロジェクト管理、要件定義などについて学習します。',
            instructor: '田中 教授',
            dayOfWeek: 1, period: 3, classroom: 'A-201'
        },
        {
            id: 'WEB101',
            name: 'HTML/CSS基礎',
            credits: 1,
            description: 'Webページ作成の基本となるHTMLとCSSを学習します。',
            instructor: '山田 講師',
            dayOfWeek: 1, period: 4, classroom: 'C-302'
        },
        {
            id: 'AI001',
            name: '人工知能入門',
            credits: 3,
            description: '機械学習、深層学習、自然言語処理などAIの基礎から応用まで学習します。',
            instructor: '伊藤 教授',
            dayOfWeek: 1, period: 5, classroom: 'D-401'
        },
        
        // 火曜日
        {
            id: 'CALC001',
            name: '微分積分学',
            credits: 3,
            description: '微分・積分の基礎理論と計算手法を学習します。',
            instructor: '数学科 教授',
            dayOfWeek: 2, period: 1, classroom: 'A-301'
        },
        {
            id: 'DB001',
            name: 'データベース設計',
            credits: 2,
            description: 'データベースの設計手法、正規化、SQLの基礎から応用まで幅広く学習します。',
            instructor: '佐藤 准教授',
            dayOfWeek: 2, period: 2, classroom: 'B-105'
        },
        {
            id: 'OS001',
            name: 'オペレーティングシステム',
            credits: 2,
            description: 'OSの役割、プロセス管理、メモリ管理、ファイルシステムについて学習します。',
            instructor: '中村 教授',
            dayOfWeek: 2, period: 3, classroom: 'A-103'
        },
        {
            id: 'MOBILE001',
            name: 'モバイルアプリ開発',
            credits: 3,
            description: 'Android/iOSアプリケーション開発の基礎を学習します。',
            instructor: '木村 講師',
            dayOfWeek: 2, period: 4, classroom: 'C-205'
        },
        {
            id: 'LANG001',
            name: '英語コミュニケーション',
            credits: 1,
            description: '技術文書の読解とプレゼンテーション能力を向上させます。',
            instructor: 'Smith 講師',
            dayOfWeek: 2, period: 5, classroom: 'E-201'
        },
        
        // 水曜日
        {
            id: 'STAT001',
            name: '統計学基礎',
            credits: 2,
            description: '記述統計、確率分布、仮説検定などデータ分析の基礎を学習します。',
            instructor: '田村 准教授',
            dayOfWeek: 3, period: 1, classroom: 'B-202'
        },
        {
            id: 'PHYS001',
            name: '物理学基礎',
            credits: 2,
            description: '力学、電磁気学の基礎理論を学習します。',
            instructor: '物理科 教授',
            dayOfWeek: 3, period: 2, classroom: 'A-401'
        },
        {
            id: 'WEB001',
            name: 'Webアプリケーション開発',
            credits: 3,
            description: 'HTML、CSS、JavaScript、フレームワークを使ったWebアプリケーション開発を実践的に学習します。',
            instructor: '山田 講師',
            dayOfWeek: 3, period: 3, classroom: 'C-301'
        },
        {
            id: 'CLOUD001',
            name: 'クラウドコンピューティング',
            credits: 2,
            description: 'AWS、Azure、GCPなどクラウドサービスの活用方法を学習します。',
            instructor: '松田 講師',
            dayOfWeek: 3, period: 4, classroom: 'D-203'
        },
        {
            id: 'DESIGN001',
            name: 'UI/UXデザイン',
            credits: 2,
            description: 'ユーザーインターフェースとユーザーエクスペリエンスの設計手法を学習します。',
            instructor: '川口 講師',
            dayOfWeek: 3, period: 5, classroom: 'E-105'
        },
        
        // 木曜日
        {
            id: 'LINEAR001',
            name: '線形代数学',
            credits: 2,
            description: '行列、ベクトル空間、固有値などの線形代数の基礎を学習します。',
            instructor: '数学科 准教授',
            dayOfWeek: 4, period: 1, classroom: 'A-302'
        },
        {
            id: 'PROG001',
            name: 'プログラミング基礎',
            credits: 2,
            description: 'プログラミングの基本概念、アルゴリズム、データ構造について学習します。',
            instructor: '鈴木 教授',
            dayOfWeek: 4, period: 2, classroom: 'A-102'
        },
        {
            id: 'NET002',
            name: 'ネットワークプログラミング',
            credits: 3,
            description: 'TCP/IP、HTTP、WebSocketを使ったネットワークアプリケーション開発を学習します。',
            instructor: '高橋 准教授',
            dayOfWeek: 4, period: 3, classroom: 'B-203'
        },
        {
            id: 'ALGO001',
            name: 'アルゴリズムとデータ構造',
            credits: 3,
            description: '効率的なアルゴリズムの設計と解析、基本的なデータ構造について学習します。',
            instructor: '松本 教授',
            dayOfWeek: 4, period: 4, classroom: 'A-104'
        },
        {
            id: 'GAME001',
            name: 'ゲーム開発基礎',
            credits: 2,
            description: 'Unity、Unreal Engineを使ったゲーム開発の基礎を学習します。',
            instructor: '小林 講師',
            dayOfWeek: 4, period: 5, classroom: 'D-301'
        },
        
        // 金曜日
        {
            id: 'CHEM001',
            name: '化学基礎',
            credits: 2,
            description: '無機化学、有機化学の基礎理論を学習します。',
            instructor: '化学科 教授',
            dayOfWeek: 5, period: 1, classroom: 'F-101'
        },
        {
            id: 'NET001',
            name: 'ネットワーク基礎',
            credits: 2,
            description: 'コンピュータネットワークの基礎理論、TCP/IP、セキュリティについて学習します。',
            instructor: '高橋 准教授',
            dayOfWeek: 5, period: 2, classroom: 'B-203'
        },
        {
            id: 'SEC001',
            name: '情報セキュリティ',
            credits: 2,
            description: '暗号技術、認証、セキュリティ脅威と対策について学習します。',
            instructor: '林 准教授',
            dayOfWeek: 5, period: 3, classroom: 'C-205'
        },
        {
            id: 'DEVOPS001',
            name: 'DevOps実践',
            credits: 2,
            description: 'CI/CD、Docker、Kubernetesを使った開発・運用自動化を学習します。',
            instructor: '渡辺 講師',
            dayOfWeek: 5, period: 4, classroom: 'D-105'
        },
        {
            id: 'PROJECT001',
            name: 'システム開発演習',
            credits: 4,
            description: 'チームでのシステム開発を通じて実践的なスキルを身につけます。',
            instructor: '野田 教授',
            dayOfWeek: 5, period: 5, classroom: 'D-301'
        },
        
        // 土曜日
        {
            id: 'INTERN001',
            name: 'インターンシップ',
            credits: 2,
            description: '企業での実習を通じて実務経験を積みます。',
            instructor: '企業指導者',
            dayOfWeek: 6, period: 1, classroom: '学外'
        },
        {
            id: 'ETHICS001',
            name: '情報倫理',
            credits: 1,
            description: '情報社会における倫理的問題と責任について学習します。',
            instructor: '法学部 教授',
            dayOfWeek: 6, period: 2, classroom: 'E-301'
        },
        {
            id: 'RESEARCH001',
            name: '卒業研究',
            credits: 6,
            description: '指導教員の下で専門分野の研究を行います。',
            instructor: '各指導教員',
            dayOfWeek: 6, period: 3, classroom: '研究室'
        },
        {
            id: 'SEMINAR001',
            name: '専門ゼミナール',
            credits: 2,
            description: '専門分野における文献購読と発表を行います。',
            instructor: '各担当教員',
            dayOfWeek: 6, period: 4, classroom: 'ゼミ室'
        },
        {
            id: 'CAREER001',
            name: 'キャリア開発',
            credits: 1,
            description: '就職活動支援と職業意識の向上を図ります。',
            instructor: 'キャリア支援室',
            dayOfWeek: 6, period: 5, classroom: 'E-205'
        },

        // 追加科目（異なる時間に開講される科目）
        {
            id: 'PROG102',
            name: 'Python基礎',
            credits: 2,
            description: 'Pythonプログラミングの基本とライブラリの使用方法を学習します。',
            instructor: '石田 講師',
            dayOfWeek: 1, period: 1, classroom: 'C-103'
        },
        {
            id: 'PROG103',
            name: 'C++プログラミング',
            credits: 2,
            description: 'C++言語の基本文法とオブジェクト指向プログラミングを学習します。',
            instructor: '佐々木 講師',
            dayOfWeek: 1, period: 2, classroom: 'C-104'
        },
        {
            id: 'PROG104',
            name: 'JavaScript基礎',
            credits: 2,
            description: 'JavaScriptの基本文法とDOM操作について学習します。',
            instructor: '田口 講師',
            dayOfWeek: 1, period: 3, classroom: 'C-105'
        },
        {
            id: 'FRAMEWORK001',
            name: 'React.js開発',
            credits: 3,
            description: 'React.jsを使ったモダンWebアプリケーション開発を学習します。',
            instructor: '中島 講師',
            dayOfWeek: 1, period: 4, classroom: 'C-106'
        },
        {
            id: 'FRAMEWORK002',
            name: 'Vue.js開発',
            credits: 3,
            description: 'Vue.jsフレームワークを使ったSPA開発を学習します。',
            instructor: '山本 講師',
            dayOfWeek: 1, period: 5, classroom: 'C-107'
        },
        {
            id: 'DB002',
            name: 'NoSQLデータベース',
            credits: 2,
            description: 'MongoDB、Redis等のNoSQLデータベースの活用方法を学習します。',
            instructor: '橋本 講師',
            dayOfWeek: 2, period: 1, classroom: 'B-106'
        },
        {
            id: 'DB003',
            name: 'データウェアハウス',
            credits: 3,
            description: 'データウェアハウスの設計と構築について学習します。',
            instructor: '森田 教授',
            dayOfWeek: 2, period: 2, classroom: 'B-107'
        },
        {
            id: 'ML001',
            name: '機械学習基礎',
            credits: 3,
            description: '教師あり学習、教師なし学習の基本アルゴリズムを学習します。',
            instructor: '藤田 教授',
            dayOfWeek: 2, period: 3, classroom: 'D-402'
        },
        {
            id: 'ML002',
            name: '深層学習',
            credits: 3,
            description: 'ニューラルネットワークとディープラーニングの理論と実践を学習します。',
            instructor: '井上 教授',
            dayOfWeek: 2, period: 4, classroom: 'D-403'
        },
        {
            id: 'ML003',
            name: '自然言語処理',
            credits: 3,
            description: 'テキストマイニングと自然言語処理の技術を学習します。',
            instructor: '清水 准教授',
            dayOfWeek: 2, period: 5, classroom: 'D-404'
        },
        {
            id: 'CV001',
            name: 'コンピュータビジョン',
            credits: 3,
            description: '画像認識と画像処理の基礎理論と応用を学習します。',
            instructor: '長谷川 教授',
            dayOfWeek: 3, period: 1, classroom: 'D-405'
        },
        {
            id: 'ROBOT001',
            name: 'ロボティクス',
            credits: 3,
            description: 'ロボット工学の基礎と制御システムについて学習します。',
            instructor: '中川 教授',
            dayOfWeek: 3, period: 2, classroom: 'E-401'
        },
        {
            id: 'IOT001',
            name: 'IoT基礎',
            credits: 2,
            description: 'IoTシステムの構築とセンサーデータの活用方法を学習します。',
            instructor: '斎藤 講師',
            dayOfWeek: 3, period: 3, classroom: 'E-402'
        },
        {
            id: 'BLOCKCHAIN001',
            name: 'ブロックチェーン技術',
            credits: 2,
            description: 'ブロックチェーンの仕組みと暗号通貨の技術的基盤を学習します。',
            instructor: '吉田 講師',
            dayOfWeek: 3, period: 4, classroom: 'D-205'
        },
        {
            id: 'AR001',
            name: 'AR/VR開発',
            credits: 3,
            description: '拡張現実と仮想現実のアプリケーション開発を学習します。',
            instructor: '大野 講師',
            dayOfWeek: 3, period: 5, classroom: 'E-403'
        },
        {
            id: 'QUANTUM001',
            name: '量子コンピューティング',
            credits: 3,
            description: '量子力学の基礎と量子アルゴリズムについて学習します。',
            instructor: '宮本 教授',
            dayOfWeek: 4, period: 1, classroom: 'F-401'
        },
        {
            id: 'BIG001',
            name: 'ビッグデータ分析',
            credits: 3,
            description: 'Hadoop、Sparkを使った大規模データ処理を学習します。',
            instructor: '村上 教授',
            dayOfWeek: 4, period: 2, classroom: 'D-206'
        },
        {
            id: 'CYBER001',
            name: 'サイバーセキュリティ',
            credits: 3,
            description: 'サイバー攻撃と防御技術の最新動向を学習します。',
            instructor: '小川 准教授',
            dayOfWeek: 4, period: 3, classroom: 'C-206'
        },
        {
            id: 'FORENSIC001',
            name: 'デジタルフォレンジック',
            credits: 2,
            description: 'デジタル証拠の収集と解析手法を学習します。',
            instructor: '平田 講師',
            dayOfWeek: 4, period: 4, classroom: 'C-207'
        },
        {
            id: 'CRYPTO001',
            name: '暗号理論',
            credits: 3,
            description: '現代暗号の数学的基礎と実装について学習します。',
            instructor: '松井 教授',
            dayOfWeek: 4, period: 5, classroom: 'B-301'
        },
        {
            id: 'COMPILER001',
            name: 'コンパイラ設計',
            credits: 3,
            description: 'プログラミング言語の処理系設計と実装を学習します。',
            instructor: '河野 教授',
            dayOfWeek: 5, period: 1, classroom: 'A-105'
        },
        {
            id: 'PARALLEL001',
            name: '並列プログラミング',
            credits: 3,
            description: 'マルチスレッドとMPIを使った並列計算を学習します。',
            instructor: '岡田 准教授',
            dayOfWeek: 5, period: 2, classroom: 'A-106'
        },
        {
            id: 'DISTRIB001',
            name: '分散システム',
            credits: 3,
            description: '分散コンピューティングの理論と実装について学習します。',
            instructor: '青木 教授',
            dayOfWeek: 5, period: 3, classroom: 'B-108'
        },
        {
            id: 'MICRO001',
            name: 'マイクロサービス',
            credits: 2,
            description: 'マイクロサービスアーキテクチャの設計と運用を学習します。',
            instructor: '福田 講師',
            dayOfWeek: 5, period: 4, classroom: 'C-208'
        },
        {
            id: 'API001',
            name: 'API設計',
            credits: 2,
            description: 'RESTful APIとGraphQLの設計原則を学習します。',
            instructor: '西村 講師',
            dayOfWeek: 5, period: 5, classroom: 'C-209'
        },
        {
            id: 'TEST001',
            name: 'ソフトウェアテスト',
            credits: 2,
            description: '単体テスト、結合テスト、E2Eテストの手法を学習します。',
            instructor: '三浦 講師',
            dayOfWeek: 6, period: 1, classroom: 'A-107'
        },
        {
            id: 'AGILE001',
            name: 'アジャイル開発',
            credits: 2,
            description: 'スクラム、カンバンなどのアジャイル手法を学習します。',
            instructor: '後藤 講師',
            dayOfWeek: 6, period: 2, classroom: 'A-108'
        },
        {
            id: 'PM001',
            name: 'プロジェクトマネジメント',
            credits: 2,
            description: 'ITプロジェクトの計画、実行、監視・制御を学習します。',
            instructor: '山口 教授',
            dayOfWeek: 6, period: 3, classroom: 'B-109'
        },
        {
            id: 'REQ001',
            name: '要件定義',
            credits: 2,
            description: 'システム要件の抽出と仕様書作成技法を学習します。',
            instructor: '金田 准教授',
            dayOfWeek: 6, period: 4, classroom: 'B-110'
        },
        {
            id: 'ARCH001',
            name: 'ソフトウェアアーキテクチャ',
            credits: 3,
            description: '大規模システムの設計パターンとアーキテクチャを学習します。',
            instructor: '木下 教授',
            dayOfWeek: 6, period: 5, classroom: 'A-109'
        },
        {
            id: 'DIGITAL001',
            name: 'デジタル回路',
            credits: 2,
            description: '論理回路とディジタル信号処理の基礎を学習します。',
            instructor: '電子工学科 教授',
            dayOfWeek: 1, period: 1, classroom: 'F-201'
        },
        {
            id: 'SIGNAL001',
            name: '信号処理',
            credits: 3,
            description: 'アナログ・デジタル信号処理の理論と応用を学習します。',
            instructor: '電子工学科 准教授',
            dayOfWeek: 1, period: 2, classroom: 'F-202'
        },
        {
            id: 'CONTROL001',
            name: '制御工学',
            credits: 3,
            description: '自動制御システムの理論と実装について学習します。',
            instructor: '機械工学科 教授',
            dayOfWeek: 1, period: 3, classroom: 'F-203'
        },
        {
            id: 'EMBEDDED001',
            name: '組み込みシステム',
            credits: 3,
            description: 'マイコンとFPGAを使った組み込み開発を学習します。',
            instructor: '電子工学科 講師',
            dayOfWeek: 1, period: 4, classroom: 'F-204'
        },
        {
            id: 'REALTIME001',
            name: 'リアルタイムシステム',
            credits: 2,
            description: 'リアルタイム制約下でのシステム設計を学習します。',
            instructor: '情報工学科 准教授',
            dayOfWeek: 1, period: 5, classroom: 'F-205'
        },
        {
            id: 'HCI001',
            name: 'ヒューマンコンピュータインタラクション',
            credits: 2,
            description: 'ユーザビリティとアクセシビリティの設計原則を学習します。',
            instructor: '認知科学科 教授',
            dayOfWeek: 2, period: 1, classroom: 'E-301'
        },
        {
            id: 'VISUAL001',
            name: '情報可視化',
            credits: 2,
            description: 'データの可視化技術とインフォグラフィックスを学習します。',
            instructor: 'デザイン学科 講師',
            dayOfWeek: 2, period: 2, classroom: 'E-302'
        },
        {
            id: 'MULTI001',
            name: 'マルチメディア処理',
            credits: 3,
            description: '音声、画像、動画の処理技術を学習します。',
            instructor: '情報工学科 教授',
            dayOfWeek: 2, period: 3, classroom: 'E-303'
        },
        {
            id: 'GRAPHICS001',
            name: 'コンピュータグラフィックス',
            credits: 3,
            description: '3Dグラフィックスの理論とOpenGL/DirectXプログラミングを学習します。',
            instructor: '情報工学科 准教授',
            dayOfWeek: 2, period: 4, classroom: 'E-304'
        },
        {
            id: 'ANIMATION001',
            name: '3Dアニメーション',
            credits: 2,
            description: 'Blender、Mayaを使った3Dモデリングとアニメーション制作を学習します。',
            instructor: 'デザイン学科 講師',
            dayOfWeek: 2, period: 5, classroom: 'E-305'
        },
        {
            id: 'BUSINESS001',
            name: 'ITビジネス概論',
            credits: 2,
            description: 'IT業界のビジネスモデルと市場動向を学習します。',
            instructor: '経営学部 教授',
            dayOfWeek: 3, period: 1, classroom: 'G-101'
        },
        {
            id: 'STARTUP001',
            name: 'スタートアップ論',
            credits: 2,
            description: '起業とイノベーションの理論と実践を学習します。',
            instructor: '経営学部 准教授',
            dayOfWeek: 3, period: 2, classroom: 'G-102'
        },
        {
            id: 'FINANCE001',
            name: 'フィンテック',
            credits: 2,
            description: '金融とテクノロジーの融合分野について学習します。',
            instructor: '経済学部 教授',
            dayOfWeek: 3, period: 3, classroom: 'G-103'
        },
        {
            id: 'ECOMMERCE001',
            name: 'Eコマース',
            credits: 2,
            description: 'オンラインビジネスとデジタルマーケティングを学習します。',
            instructor: '経営学部 講師',
            dayOfWeek: 3, period: 4, classroom: 'G-104'
        },
        {
            id: 'SOCIAL001',
            name: 'ソーシャルメディア論',
            credits: 1,
            description: 'SNSとコミュニティ形成の社会的影響を学習します。',
            instructor: '社会学部 准教授',
            dayOfWeek: 3, period: 5, classroom: 'G-105'
        },
        {
            id: 'LAW001',
            name: 'IT法務',
            credits: 2,
            description: '知的財産権、個人情報保護法などIT関連法規を学習します。',
            instructor: '法学部 教授',
            dayOfWeek: 4, period: 1, classroom: 'G-201'
        },
        {
            id: 'PRIVACY001',
            name: 'プライバシー保護',
            credits: 2,
            description: '個人情報の取扱いとプライバシー技術を学習します。',
            instructor: '法学部 准教授',
            dayOfWeek: 4, period: 2, classroom: 'G-202'
        },
        {
            id: 'STANDARD001',
            name: '国際標準化',
            credits: 1,
            description: 'ISO、IEEE等の国際標準化活動について学習します。',
            instructor: '工学部 教授',
            dayOfWeek: 4, period: 3, classroom: 'G-203'
        },
        {
            id: 'PATENT001',
            name: '特許・知財',
            credits: 2,
            description: 'ソフトウェア特許と知的財産戦略を学習します。',
            instructor: '法学部 講師',
            dayOfWeek: 4, period: 4, classroom: 'G-204'
        },
        {
            id: 'COMPLIANCE001',
            name: 'コンプライアンス',
            credits: 1,
            description: 'IT業界における法令遵守とガバナンスを学習します。',
            instructor: '経営学部 教授',
            dayOfWeek: 4, period: 5, classroom: 'G-205'
        }
    ],

    // 履修登録データ（ユーザーごと）
    registrations: {},

    // 全科目を取得
    getAllCourses: function() {
        return this.courses;
    },

    // IDで科目を取得
    getCourseById: function(courseId) {
        return this.courses.find(course => course.id === courseId);
    },

    // 曜日・時限で科目を取得
    getCourseBySchedule: function(dayOfWeek, period) {
        return this.courses.filter(course => 
            course.dayOfWeek === dayOfWeek && course.period === period
        );
    },

    // 科目名で検索
    searchCourses: function(keyword) {
        return this.courses.filter(course => 
            course.name.includes(keyword) || 
            course.description.includes(keyword) ||
            course.instructor.includes(keyword)
        );
    },

    // ユーザーの履修登録科目を取得
    getUserRegistrations: function(userId) {
        return this.registrations[userId] || [];
    },

    // ユーザーの総単位数を計算
    getTotalCredits: function(userId) {
        const userCourses = this.getUserRegistrations(userId)
            .map(courseId => this.getCourseById(courseId))
            .filter(course => course);
        return userCourses.reduce((total, course) => total + course.credits, 0);
    },

    // 履修登録
    registerCourse: function(userId, courseId) {
        if (!this.registrations[userId]) {
            this.registrations[userId] = [];
        }
        
        // 既に登録済みかチェック
        if (this.registrations[userId].includes(courseId)) {
            return { success: false, message: '既に履修登録済みです' };
        }

        // 時間割重複チェック
        const newCourse = this.getCourseById(courseId);
        const userCourses = this.registrations[userId].map(id => this.getCourseById(id));
        
        for (let course of userCourses) {
            if (course && course.dayOfWeek === newCourse.dayOfWeek && course.period === newCourse.period) {
                return { success: false, message: '同じ時間に別の科目が登録されています' };
            }
        }

        // 履修登録実行
        this.registrations[userId].push(courseId);
        
        return { success: true, message: '履修登録が完了しました' };
    },

    // 履修登録解除
    unregisterCourse: function(userId, courseId) {
        if (!this.registrations[userId]) {
            return { success: false, message: '履修登録されていません' };
        }

        const index = this.registrations[userId].indexOf(courseId);
        if (index === -1) {
            return { success: false, message: '履修登録されていません' };
        }

        // 履修登録解除実行
        this.registrations[userId].splice(index, 1);

        return { success: true, message: '履修登録を解除しました' };
    },

    // 履修登録済みかチェック
    isRegistered: function(userId, courseId) {
        const userRegs = this.getUserRegistrations(userId);
        return userRegs.includes(courseId);
    },

    // 曜日名を取得
    getDayName: function(dayOfWeek) {
        const dayNames = ['', '月', '火', '水', '木', '金', '土'];
        return dayNames[dayOfWeek];
    },

    // 時限名を取得
    getPeriodName: function(period) {
        return `${period}限`;
    }
};

// グローバルに公開
window.CoursesDB = CoursesDB;
