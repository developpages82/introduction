/* Shared works data — used by index.html (grid) and project.html (detail) */
const WORKS=[
 {id:"p6",img:"img/p6.jpeg",gallery:["img/p6/1.jpg","img/p6/2.jpg","img/p6/3.jpg","img/p6/4.jpg","img/p6/5.jpg"],t:"Physical Twin Symphony",client:"Japan Association for the 2025 World Exposition",year:"2025",cat:"experience",tags:["Live Entertainment","Experience"],agency:"DENTSU LIVE",production:"D2C IMG SRC STUDIO",role:"サウンド生成AIシステム構築 / 楽器開発",link:"https://youtu.be/QOWN8l9anwI",lt:"Movie",
  descJP:`大阪・関西万博のオープニングを飾る、世界初のライブエンターテインメント。テクノロジーで人を身体・脳・空間・時間の制約から解放し、多様な人々の技能や経験を共有する「Physical Twin Symphony」。D2C ID IMG SRC STUDIOはサウンド生成AIシステムの構築と楽器開発を担当しました。`,
  descEN:`A world-first live entertainment piece for the opening of Expo 2025 Osaka, Kansai. "Physical Twin Symphony" frees people from the constraints of body, brain, space and time, letting diverse skills and experiences be shared. We developed the generative-AI sound system and the instruments.`},

 {id:"p7",img:"img/p7.jpeg",gallery:["img/p7/1.jpg","img/p7/2.jpg","img/p7/3.jpg","img/p7/4.jpg"],t:"Fure-au Denwa",client:"NTT",year:"2025",cat:"experience",tags:["NTT","Installation"],agency:"",production:"D2C IMG SRC STUDIO",role:"テクニカルディレクション / 什器設計",link:"https://group.ntt/jp/expo2025/fd/",lt:"Link",
  descJP:`「電話から、伝話へ。」2025年大阪・関西万博に設置された、振動で触覚を伝え合う遠隔コミュニケーションメディア。映像と音声に加えて振動を送り合うことで、離れた相手とまるでそこにいるかのような感覚を共有します。テクニカルディレクションや什器設計などの開発に協力しました。`,
  descEN:`"From telephone to tele-touch." A remote communication medium at Expo 2025 that conveys the sense of touch through vibration. Adding vibration to video and audio lets people share a feeling of presence across distance. We supported technical direction and fixture design.`},

 {id:"p8",img:"img/p8.jpeg",gallery:["img/p8/1.jpg","img/p8/2.jpg","img/p8/3.jpg","img/p8/4.jpg","img/p8/5.jpg","img/p8/6.jpg"],t:"TOYOTA Design LAB & Main Stage Show",client:"TOYOTA",year:"2025",cat:"experience",tags:["TOYOTA","Experience"],agency:"DENTSU LIVE",production:"D2C IMG SRC STUDIO",role:"体験設計 / システム開発",link:"https://youtu.be/u1CeD-8Qfhc",lt:"Movie",
  descJP:`ジャパンモビリティショー2025 トヨタブース「TO YOU」の体験コンテンツ。来場者が描いたインスピレーションをAIが読み取り、世界に一台だけのモビリティイメージを生成。メインステージでは生成されたモビリティがライブカメラ映像とXRで合成され、人々の想いが壮大なショーへと展開します。`,
  descEN:`Experiences for the "TO YOU" Toyota booth at Japan Mobility Show 2025. AI reads each visitor's sketched inspiration and generates a one-of-a-kind mobility image. On the main stage the generated vehicles are composited with live camera footage in XR, turning visitors' feelings into a grand show.`},

 {id:"p9",img:"img/p9.jpeg",gallery:["img/p9/1.jpg","img/p9/2.jpg","img/p9/3.jpg"],t:"HOOP HEROS",client:"Mitsui Fudosan",year:"2023",cat:"experience",tags:["Mitsui Fudosan","Installation"],agency:"DENTSU",production:"D2C IMG SRC STUDIO",role:"SNS / コンテンツ制作 / テクニカルディレクション / システム開発",link:"https://youtu.be/WggOQFXEWvQ",lt:"Movie",
  descJP:`ららぽーと堺のスタジアムコートで開催されたバスケットボール参加型アクティベーション。シュートを決めて超大型ビジョンの巨大モンスター「XBEAST」を倒す、壮大なSFアクションゲーム体験です。SNS、コンテンツ制作、テクニカルディレクション、システム開発を担当しました。`,
  descEN:`A participatory basketball activation at LaLaport Sakai. Players shoot hoops to defeat "XBEAST," a giant monster on a massive LED vision — an epic sci-fi action game experience. We handled social, content production, technical direction and system development.`},

 {id:"p10",img:"img/p10.jpeg",t:"IMV 0 DIGITAL CUSTOMIZE",client:"TOYOTA",year:"2023",cat:"experience",tags:["TOYOTA","Event"],agency:"DENTSU LIVE",production:"D2C IMG SRC STUDIO",role:"参加型コンテンツ開発",link:"https://www.youtube.com/watch?v=mv0yOart7kY",lt:"Movie",
  descJP:`JAPAN MOBILITY SHOW 2023 トヨタブースの参加型コンテンツ。「砂漠に花屋を開こう」などのミッションに沿ってIMV 0をカスタマイズし、400個超のパーツから何百万通りの組み合わせを即座にバーチャル投影。生成した画像はその場でQRから入手しSNSへ共有できます。`,
  descEN:`Interactive content for the Toyota booth at Japan Mobility Show 2023. Following missions like "open a flower shop in the desert," visitors customize the IMV 0 from 400+ parts — millions of combinations projected instantly. The result can be grabbed via QR and shared on social.`},

 {id:"p17",img:"img/p17.jpeg",t:"POKÉMON AR RIDEON",client:"The Pokémon Company",year:"2023",cat:"experience",tags:["The Pokémon Company","AR"],agency:"IMG SRC",production:"IMG SRC",role:"企画 / 制作 / 実装 / 空間デザイン",link:"https://youtu.be/MhJDOKUlbpw",lt:"Movie",
  descJP:`ポケモンセンターメガトウキョーに設置された、伝説のポケモン コライドン/ミライドンと駆け巡るムービーを生成するARアトラクション。オブジェにまたがりポーズを取ると、自分だけのライド体験ムービーが生成され、その場でダウンロードできます。企画・制作・実装と空間デザインを担当。`,
  descEN:`An AR attraction at Pokémon Center Mega Tokyo that generates a movie of riding the legendary Pokémon Koraidon/Miraidon. Straddling the object and posing creates a personalized ride movie, downloadable on the spot. We handled planning, production, implementation and spatial design.`},

 {id:"p16",img:"img/p16.jpeg",t:"SALONPAS Smile Maker",client:"Hisamitsu",year:"2022",cat:"experience",tags:["Hisamitsu","UI/UX"],agency:"TOPPAN",production:"IMG SRC",role:"UI/UX設計 / システム構築 / デザイン / プログラム実装",link:"https://youtu.be/ZypksfDvjQY",lt:"Movie",
  descJP:`ワールドレディスチャンピオンシップ サロンパスカップに設置された、720個のパッケージで作られたビジョン。前に立つとパッケージが回転して顔をリアルタイム表示し、応援スマイルで記念撮影ができます。UI/UX設計、システム構築、デザイン、プログラム実装を担当しました。`,
  descEN:`A vision wall built from 720 Salonpas packages at the World Ladies Championship. Standing in front, the packages rotate to show the viewer's face in real time for a smiling cheer photo. We handled UI/UX, system, design and programming.`},

 {id:"p19",img:"img/p19.jpeg",t:"COLOR MACHINE",client:"Maison KOSÉ",year:"2022",cat:"experience",tags:["Maison KOSÉ","Projection"],agency:"DENTSU, DENTSU LIVE",production:"IMG SRC",role:"UIUXデザイン / 映像制作 / 入力アプリ開発",link:"https://www.youtube.com/watch?v=W4QGp36d06c",lt:"Movie",
  descJP:`コーセー研究所と東京工業大学渡辺研究室による、3次元の顔への高速追従プロジェクションマッピングを応用した最先端メイクシミュレーター。顔に直接立体的に投影され、204万種類以上の組み合わせから瞬時にメイクを体験できます。UIUXデザイン、映像制作、入力アプリ開発を担当。`,
  descEN:`A cutting-edge makeup simulator using high-speed face-tracking projection mapping, developed with Kosé and the Watanabe Lab at Tokyo Tech. Makeup is projected directly and three-dimensionally onto the face, with over 2.04 million combinations experienced instantly. We handled UI/UX, projection visuals and the input app.`},

 {id:"p20",img:"img/p20.jpeg",t:"NEW ME COLLECTION",client:"Maison KOSÉ",year:"2021",cat:"experience",tags:["Maison KOSÉ","Experience"],agency:"DENTSU, DENTSU LIVE",production:"IMG SRC",role:"UI/UX設計 / システム / デザイン / 映像制作",link:"https://youtu.be/2BJJhwAVCiM",lt:"Movie",
  descJP:`Maison KOSÉ銀座の「NEW ME COLLECTION」。様々なポーズで5回撮影すると50種類のメイクが自動生成され、全長12mの大型ディスプレイに投影。50種に紐づく約400の商品サイトへつながる、店舗体験とECを結ぶ施策です。UI/UX設計、システム、デザイン、映像制作を担当。`,
  descEN:`"NEW ME COLLECTION" at Maison KOSÉ Ginza. Five shots in various poses auto-generate 50 makeup looks projected on a 12m display, linking to about 400 product pages — connecting the in-store experience with e-commerce. We handled UI/UX, system, design and video.`},

 {id:"p13",img:"img/p13.jpeg",t:"Audi A8/A7 Japan Launch Premium Night",client:"Audi",year:"2018",cat:"experience",tags:["Audi","Event"],agency:"DENTSU LIVE",production:"IMG SRC",role:"企画 / デザイン / CG制作 / サウンド設計 / プログラム実装",link:"https://youtu.be/rlTg6ZoDZ1k",lt:"Movie",
  descJP:`新型Audi A8/A7の日本発売を記念したプレミアムイベント。光の線が音とともに来場者を「Space for Progress」へ誘うCube Entranceなど、最新テクノロジーで革新的な世界観を体験できます。企画、デザイン、CG制作、サウンド設計、プログラム実装を担当しました。`,
  descEN:`A premium event for the Japan launch of the new Audi A8/A7. Visitors are drawn into "Space for Progress" through experiences like the Cube Entrance, where lines of light move with sound. We handled planning, design, CG, sound design and programming.`},

 {id:"p14",img:"img/p14.jpeg",t:"YOYOGI CANDLE 2020",client:"NTT / NTT docomo",year:"2017",cat:"experience",tags:["NTT docomo","Projection"],agency:"KAKEZAN",production:"IMG SRC",role:"企画 / プロデュース / 制作",link:"https://youtu.be/7odZ4ASRaZw",lt:"Movie",
  descJP:`個人のスマートフォンが投影面とリアルタイムに同期する、新体感プロジェクションマッピング。巨大建築物とネットワークでつながる全30分・3部構成の演出で、屋外広告規制の厳しい東京都内で初の大規模実例となりました。企画からプロデュース、制作まで総合的に担当。`,
  descEN:`A new projection-mapping experience where personal smartphones sync with the projection surface in real time. A 30-minute, three-part show connected to a huge building over the network — one of the first large-scale cases in tightly regulated central Tokyo. We led everything from planning to production.`},

 {id:"p15",img:"img/p15.jpeg",t:"NEW LIVE VIEWING",client:"NTT docomo",year:"2017",cat:"experience",tags:["NTT docomo","Live"],agency:"KAKEZAN",production:"IMG SRC",role:"体験設計 / システム / 映像",link:"https://youtu.be/NZhIXBmJrOY",lt:"Movie",
  descJP:`NTTドコモが提案する新体感ライブビューイング。渋谷のライブを幕張メッセへリアルタイム配信し、透過スクリーンやスマホを使って、アーティストが自由に動き回る演出や自作アートの投影を楽しめる新しい体験を提案しました。`,
  descEN:`A next-generation live-viewing experience by NTT docomo. A Shibuya concert was streamed in real time to Makuhari Messe, where transparent screens and smartphones let artists roam freely and audiences project their own artwork.`},

 {id:"p25",img:"img/p25.jpeg",t:"TOKYO MOTOR SHOW 2019",client:"TOYOTA",year:"2019",cat:"experience",tags:["TOYOTA","Art Direction"],agency:"DENTSU LIVE",production:"IMG SRC",role:"アートディレクション / デザイン / プログラム実装",link:"",lt:"",
  descJP:`第46回東京モーターショー2019 トヨタブースの「FUTURE RESIDENCE CARD」と特設サイト。顔写真から色・柄を生成するレジデンスカードを軸に、デジタルスタンプラリーやグッズ交換までブースを回遊する体験を設計しました。アートディレクション、デザイン、プログラム実装を担当。`,
  descEN:`The "Future Residence Card" and special site for the Toyota booth at the 46th Tokyo Motor Show 2019. Centered on a residence card that generates colors and patterns from a face photo, it designed a journey through the booth with a digital stamp rally and goods exchange. We handled art direction, design and programming.`},

 {id:"p26",img:"img/p26.jpeg",t:"COCOLAB",client:"KAO",year:"2016",cat:"experience",tags:["KAO","Space"],agency:"qualix",production:"qualix",role:"エクスペリエンスデザイン / 空間・コンテンツ",link:"https://youtu.be/gTggW5ssjXU",lt:"Movie",
  descJP:`花王小田原事業所内に誕生した、美の可能性を広げるラボスペース「ここラボ」。非接触で所作の美しさを診断するビューティーモーションなど7つのコンテンツで、新しい美を創造する楽しさを体感。空間・コンテンツをエクスペリエンスデザインとして総合プロデュースしました。`,
  descEN:`"CocoLab," a lab space at Kao's Odawara site that expands the possibilities of beauty. Seven contents — such as a touch-free Beauty Motion that assesses the grace of one's movements — let visitors enjoy creating new beauty. We produced the space and content as an integrated experience design.`},

 {id:"p27",img:"img/p27.jpeg",t:"TOYOTA HYBRID MUSIC EXPERIENCE",client:"TOYOTA",year:"2013",cat:"experience",tags:["TOYOTA","Installation"],agency:"ADK",production:"AOI Pro, qualix",role:"CG制作 / インターフェースデザイン / アプリ開発",link:"",lt:"",
  descJP:`ル・マン24時間を戦うハイブリッドレースカーTS040 HYBRIDのサウンドをサンプリングし、中田ヤスタカ氏プロデュースの楽曲に合わせて踊って体感するゲーミングコンテンツ。Kinectの非接触操作で動きに音が反応します。サンパウロ・ジュネーブのモーターショーで展示。CG制作、インターフェースデザイン、アプリ開発を担当。`,
  descEN:`A gaming content sampling the sound of the Le Mans hybrid racer TS040 HYBRID, danced to a track produced by Yasutaka Nakata. Kinect's touch-free control makes sound respond to movement. Shown at the São Paulo and Geneva motor shows. We handled CG, interface design and app development.`},

 {id:"p11",img:"img/p11.jpeg",t:"SPACE LIGHT SHUTTLE",client:"IMG SRC Original Works",year:"2019",cat:"experience",tags:["IMG SRC Original","Installation"],agency:"",production:"IMG SRC",role:"企画 / 制作",link:"https://youtu.be/MgvGYu3TqvQ",lt:"Movie",
  descJP:`コートを都市に見立て、立体的に浮かび上がる光のシャトルを打ち合うインスタレーション。400km/hを超えるシャトルスピードを彷彿させる飛行体験や、場所やいる人の距離を問わない遠隔ラリーを楽しめます。`,
  descEN:`An installation where players rally a three-dimensional shuttle of light over a court imagined as a city. It evokes the 400km/h+ speed of badminton and enables remote rallies regardless of location or distance between players.`},

 {id:"p12",img:"img/p12.jpeg",t:"BIT WAVE SURFIN'",client:"IMG SRC Original Works",year:"2018",cat:"experience",tags:["IMG SRC Original","Shibuya"],agency:"",production:"IMG SRC",role:"企画 / 制作",link:"https://youtu.be/e9dQqGI4lss",lt:"Movie",
  descJP:`IMG SRC、NTT、KAKEZANによる共創プロジェクト。スクランブル交差点の歩行者の流れを解析してデジタルな波"ビットウェーブ"を生成し、ボードに乗って波乗りを楽しむデータエクスペリエンス。SOCIAL INNOVATION WEEK 2018 出展作品です。`,
  descEN:`A co-creation project by IMG SRC, NTT and KAKEZAN. Pedestrian flows at a scramble crossing are analyzed to generate a digital wave — "bit wave" — that visitors surf on a board. Exhibited at Social Innovation Week 2018 in Shibuya.`},

 {id:"p23",img:"img/p23.jpeg",t:"Virtual Textiles Simulator",client:"ZOZO NEXT",year:"2024",cat:"web",tags:["ZOZO NEXT","Vision Pro"],agency:"",production:"D2C ID / IMG SRC",role:"Apple Vision Pro App開発",link:"https://youtu.be/jAnO6W4mUTk",lt:"Movie",
  descJP:`動的に意匠が変化するスマートテキスタイルをデジタル空間で体験する、Apple Vision Pro向け空間コンピューティングアプリ。素材・形状・スケール・ライティングをリアルタイムに変えながらバーチャルシミュレーションでき、作品イメージを共有できます。`,
  descEN:`A spatial-computing app for Apple Vision Pro to experience dynamically changing smart textiles in digital space. Users can alter material, shape, scale and lighting in real time for virtual simulation, sharing the image of the work.`},

 {id:"p24",img:"img/p24.jpeg",t:"Ambient Weaving II Virtual Gallery",client:"ZOZO NEXT",year:"2024",cat:"web",tags:["ZOZO NEXT","WebGL"],agency:"",production:"D2C ID / IMG SRC",role:"体験設計 / 写真 / 映像 / 3DCG / Web",link:"https://ambientweaving2.lab.zozo.jp/",lt:"Link",
  descJP:`ZOZO NEXT・東京大学筧研究室・細尾の共同研究の成果展「Ambient Weaving Ⅱ」(京都・HOSOO GALLERY)のバーチャルギャラリー。フォトグラメトリで取得した空間スキャンをもとに再設計し、展示空間を巡るような鑑賞体験を実現しました。体験設計、写真、映像、3DCG、Web制作を担当。`,
  descEN:`A virtual gallery for "Ambient Weaving II" (HOSOO GALLERY, Kyoto), a joint research exhibition by ZOZO NEXT, the Kakehi Lab at the University of Tokyo, and Hosoo. Rebuilt from photogrammetry scans, it recreates the experience of walking the exhibition. We handled experience design, photo, video, 3DCG and web.`},

 {id:"p22",img:"img/p22.jpeg",t:"UN-SCALABLE VISION",client:"DENTSU LIVE / IMAGICA EEX",year:"2025",cat:"web",tags:["DENTSU LIVE / IMAGICA","Web"],agency:"DENTSU LIVE",production:"D2C ID",role:"WEBサイト制作",link:"https://www.un-scalablevision.com/",lt:"Link",
  descJP:`電通ライブとIMAGICA GROUPによる、場所やサイズ・アスペクト比に縛られない最先端の映像ソリューション。D2C IDはインタラクティブ領域を担う組織として参画し、コンセプトを体現するWEBサイトの制作を担当しました。`,
  descEN:`A leading-edge video solution by Dentsu Live and IMAGICA GROUP, free from constraints of place, size and aspect ratio. D2C ID joined as the interactive arm and produced the website embodying the concept.`},

 {id:"p18",img:"img/p18.jpeg",t:"AR Message",client:"NTT docomo",year:"2021",cat:"web",tags:["NTT docomo","WebAR"],agency:"KAKEZAN",production:"IMG SRC",role:"体験設計 / キャラクター開発 / WebARデザイン / プログラム実装",link:"",lt:"",
  descJP:`文字や写真とは違うかたちで気持ちを届けるWebARメッセージ。アプリ不要のスマホブラウザ体験で、キャラクターとメッセージを選んでARメッセージを作成し、メールやSNSで届けられます。体験設計、キャラクター開発、WebARデザイン、プログラム実装を担当。`,
  descEN:`A WebAR message service to convey feelings in a new way beyond text and photos. Running in the smartphone browser with no app install, users pick a character and message and send an AR message via email or social. We handled experience design, character development, WebAR design and programming.`},

 {id:"p21",img:"img/p21.jpeg",t:"AISIN CES Virtual Exhibition",client:"AISIN",year:"2021",cat:"web",tags:["AISIN","3D Web"],agency:"DENTSU LIVE",production:"IMG SRC",role:"WEBコンテンツ制作",link:"",lt:"",
  descJP:`オンライン開催のCES 2021でアイシングループが出展した、WEBブラウザで体験できる3Dウォークスルーのバーチャルエキシビション。立体的な空間表現で、PC・タブレット・スマホから自由に技術・サービスを閲覧できます。WEBコンテンツ制作を担当。`,
  descEN:`A 3D walkthrough virtual exhibition for the Aisin Group at the online CES 2021, experienced in the web browser. Its immersive spatial design lets users explore technologies and services freely from PC, tablet or smartphone. We produced the web content.`},

 {id:"p28",img:"img/p28.jpeg",t:"Advanced Automation Total Direction",client:"azbil",year:"2012–16",cat:"brand",tags:["azbil","Exhibition"],agency:"qualix",production:"qualix",role:"デザインディレクション / 展示設計・施工 / カタログ / 映像",link:"",lt:"",
  descJP:`アズビルのアドバンスオートメーションカンパニーの展示ブースを2013年SCF計測展でプロデュース。約15m四方に2階建て構造を採用し、危機予測や未来のプラントをイメージさせる映像を制作。デザインディレクション、展示設計・施工、カタログ・映像制作を総合的に担当しました(2012–2016)。`,
  descEN:`Produced the Advanced Automation Company booth at the 2013 SCF measurement exhibition for azbil. A two-story structure in a roughly 15m-square space, with films envisioning risk prediction and future plants. We comprehensively handled design direction, exhibition design/build, catalogs and video (2012–2016).`},

 {id:"p29",img:"img/p29.jpeg",t:"PROLOGIS Promotion",client:"PROLOGIS",year:"2014–16",cat:"brand",tags:["PROLOGIS","Film"],agency:"qualix",production:"qualix",role:"映像制作 / タブレットアプリ開発",link:"",lt:"",
  descJP:`賃貸用物流施設のスタンダードをつくるプロロジスのテナントリーシング映像をシリーズ制作。竣工前のCGアニメーションやドローン撮影、営業がお客様へ説明するためのタブレットアプリ開発まで、年間を通じてリーシングを支援しました(2014–2016)。`,
  descEN:`A series of tenant-leasing films for Prologis, a leader in logistics-facility development. From pre-completion CG animation and drone footage to a tablet app for sales presentations, we supported leasing throughout the year (2014–2016).`},

 {id:"p30",img:"img/p30.jpeg",t:"Genuine Parts Global Promotion",client:"SUMITOMO",year:"2014–15",cat:"brand",tags:["SUMITOMO","Branding"],agency:"qualix",production:"qualix",role:"デザインディレクション / カタログ・ポスター・映像制作",link:"",lt:"",
  descJP:`住友建機の純正部品のグローバル向けコミュニケーションを担当。「長寿命でローコスト」という価値を作り込まれたCGと統一したグラフィックで表現し、カタログ・ポスターにQRを設置して映像と連動。海外PRに向けた感覚的なツールに仕上げました(2014–2015)。`,
  descEN:`Global communication for Sumitomo Construction Machinery's genuine parts. Their value — "long life, low cost" — was expressed through finely crafted CG and unified graphics, with QR codes linking catalogs and posters to video. A more intuitive toolkit for overseas PR (2014–2015).`},

 {id:"p33",img:"img/p33.jpeg",t:"DAITO TRUST CONSTRUCTION TVCM",client:"Daito Trust Construction",year:"2012",cat:"brand",tags:["Daito Trust","3DCG"],agency:"",production:"HAKUHODO PRODUCTS / 3DCG: qualix",role:"3DCG制作",link:"",lt:"",
  descJP:`全国放映のTVCM向けCG制作。大東建託の建物が建つことで街が発展していく様子を、時の移ろいとともに表現しました。低層集合住宅に合う街・公園・デパートを一つひとつ丁寧にモデリングし、昼の木々の揺れや夜の街灯までこだわりました。CMはシリーズ化されました(2012)。`,
  descEN:`CG production for a nationally aired TV commercial. It depicts a town flourishing as Daito Trust's buildings rise, through the passage of time. Streets, parks and department stores suited to low-rise housing were carefully modeled — down to swaying trees by day and streetlight color by night. The CM became a series (2012).`},

 {id:"p34",img:"img/p34.jpeg",t:"TOKUJIN YOSHIOKA DESIGN",client:"Tokujin Yoshioka Design",year:"2006–10",cat:"brand",tags:["吉岡徳仁デザイン事務所","Product"],agency:"",production:"Tokujin Yoshioka Design",role:"サイン計画 / 作品紹介映像 / 3DCAD / デザイン設計",link:"https://www.tokujin.com/",lt:"Link",
  descJP:`吉岡徳仁デザイン事務所での担当案件。展示会のサイン・バナー計画や作品紹介映像、検証モデルや3DCAD作成、Kartell・Moroso・Vitra・ISSEY MIYAKEなどのデザイン設計、SUQQU・CHICCAの化粧品ブランド・パッケージ開発などに携わりました(2006–2010)。`,
  descEN:`Projects at Tokujin Yoshioka Design. Involvement spanned exhibition signage and banner planning, project films, study models and 3D CAD, design work for Kartell, Moroso, Vitra and ISSEY MIYAKE, and cosmetics brand and package development for SUQQU and CHICCA (2006–2010).`}
];

/* Image galleries per project (count of files in img/<id>/1.jpg..N.jpg) */
const GAL={p6:6,p7:4,p8:7,p9:3,p10:6,p11:6,p12:5,p13:5,p14:6,p15:6,p16:2,p17:3,p18:4,p19:4,p20:4,p21:3,p22:5,p23:3,p24:6,p25:6,p26:6,p27:6,p28:2,p29:4,p30:3,p33:2,p34:1};
WORKS.forEach(w=>{
  const n=GAL[w.id];
  if(n){w.gallery=Array.from({length:n},(_,i)=>`img/${w.id}/${i+1}.jpg`); w.img=w.gallery[0];}
});

/* Sort newest first by year (start year used for ranges like "2012–16") */
WORKS.sort((a,b)=>{
  const y=s=>parseInt(String(s.year).match(/\d{4}/)[0],10);
  return y(b)-y(a);
});
