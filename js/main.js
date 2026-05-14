const C  = f => `https://commons.wikimedia.org/wiki/Special:FilePath/${f}?width=640`;
const EN = f => `https://en.wikipedia.org/wiki/Special:FilePath/${f}?width=640`;

const articles = [
  {
    id: "jack-in-the-box-1993",
    title: "ジャック・イン・ザ・ボックス集団食中毒事件（1993年）",
    category: "食中毒", tag: "tag-food", emoji: "🍔",
    date: "1993年1月", country: "アメリカ", victims: "死者4名・患者700名以上",
    summary: "アメリカのファストフードチェーンで発生したO157:H7による大規模食中毒。食品安全規制の抜本的改革につながった歴史的事件。",
    file: "articles/jack-in-the-box-1993.html", difficulty: 2,
    image: C("E_coli_at_10000x,_original.jpg")
  },
  {
    id: "everest-1996",
    title: "エベレスト大量遭難事故（1996年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1996年5月", country: "ネパール/中国", victims: "死者8名",
    summary: "商業登山ツアーが引き起こした史上最悪級のエベレスト遭難。嵐と判断ミスが重なり8名が命を落とした。",
    file: "articles/everest-1996.html", difficulty: 3,
    image: C("Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg")
  },
  {
    id: "thai-cave-2018",
    title: "タイ洞窟少年救出作戦（2018年）",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "2018年7月", country: "タイ", victims: "救出成功（ダイバー1名死亡）",
    summary: "タムルアン洞窟に閉じ込められた少年サッカーチーム13名の18日間にわたる救出劇。世界中が固唾を飲んで見守った。",
    file: "articles/thai-cave-2018.html", difficulty: 2,
    image: C("Rescue_equipment_in_Tham_Luang_entrance_chamber_(cropped).jpg")
  },
  {
    id: "andrea-gail-1991",
    title: "パーフェクト・ストーム：アンドレア・ゲイル号遭難（1991年）",
    category: "海難", tag: "tag-sea", emoji: "🌊",
    date: "1991年10月", country: "北大西洋", victims: "死者6名（乗組員全員）",
    summary: "3つの気象システムが合体した100年に1度の巨大嵐に巻き込まれた漁船の悲劇。映画化でも有名。",
    file: "articles/andrea-gail-1991.html", difficulty: 2,
    image: C("Uss_fiske_DD-842_and_USS_Bigelow_DD-942_under_heavy_sea.jpg")
  },
  {
    id: "chernobyl-1986",
    title: "チェルノブイリ原子力発電所事故（1986年）",
    category: "原子力", tag: "tag-nuclear", emoji: "☢️",
    date: "1986年4月", country: "ソビエト連邦（現ウクライナ）", victims: "直接死31名・推計数千〜数万名",
    summary: "人類史上最大級の原子力事故。ソ連の隠蔽体質と安全軽視がもたらした大惨事と、その後の長期的影響。",
    file: "articles/chernobyl-1986.html", difficulty: 3,
    image: C("IAEA_02790015_(5613115146).jpg")
  },
  {
    id: "argo-2000",
    title: "雪印乳業集団食中毒事件（2000年）",
    category: "食中毒", tag: "tag-food", emoji: "🥛",
    date: "2000年6〜7月", country: "日本", victims: "患者約14,780名",
    summary: "黄色ブドウ球菌毒素による日本史上最大規模の食中毒事件。企業の隠蔽と危機管理の失敗が招いた社会的大事件。",
    file: "articles/yukijirushi-2000.html", difficulty: 2,
    image: C("Snow_Brand_Milk_Products_(head_office_2).jpg")
  },
  {
    id: "blue-hole-2017",
    title: "ダハブ・ブルーホール水中洞窟事故（繰り返す死の罠）",
    category: "水中洞窟", tag: "tag-cave", emoji: "🤿",
    date: "継続中（年間複数件）", country: "エジプト", victims: "推計200名以上（累計）",
    summary: "世界最危険のダイビングスポットとして知られるエジプトの水中洞窟。なぜ熟練ダイバーですら命を落とすのか。",
    file: "articles/dahab-blue-hole.html", difficulty: 4,
    image: C("Blue_Hole,_Dahab.jpg")
  },
  {
    id: "kegon-1903",
    title: "1996年エベレスト南東稜ルート：嵐の解剖",
    category: "登山", tag: "tag-mountain", emoji: "⛰️",
    date: "1996年5月", country: "ネパール", victims: "死者8名",
    summary: "気象・判断・商業化が絡み合った悲劇の詳細分析。ロブ・ホールとスコット・フィッシャーが選択した道とは。",
    file: "articles/everest-1996.html", difficulty: 4,
    image: C("Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg")
  },
  {
    id: "cocoanut-grove-1942",
    title: "ナイトクラブ火災：ココナッツ・グローブ惨事（1942年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1942年11月", country: "アメリカ", victims: "死者492名",
    summary: "一夜で492名が犠牲になったボストンのナイトクラブ火災。現代の防火規制の原点となった悲劇。",
    file: "articles/cocoanut-grove-1942.html", difficulty: 2,
    image: C("Cocoanut_Grove_fire_car.jpg")
  },
  {
    id: "tenerife-1977",
    title: "テネリフェ空港衝突事故（1977年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1977年3月", country: "スペイン（カナリア諸島）", victims: "死者583名（航空史上最多）",
    summary: "2機のジャンボジェットが滑走路上で衝突した航空史上最大の惨事。霧・誤解・コミュニケーション不全の連鎖。",
    file: "articles/tenerife-1977.html", difficulty: 3,
    image: C("Het_verongelukte_KLM-toestel_De_Rijn,_Bestanddeelnr_929-1005_-_cropped.jpg")
  },
  {
    id: "aberfan-1966",
    title: "アバーファン炭坑廃棄物崩落事故（1966年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "⛏️",
    date: "1966年10月", country: "イギリス（ウェールズ）", victims: "死者116名（うち小学生109名）",
    summary: "炭鉱の廃棄物山が小学校を飲み込んだ惨事。警告を無視し続けた企業と行政の責任が問われた。",
    file: "articles/aberfan-1966.html", difficulty: 2,
    image: C("Aberfan_-_Merthyr_Vale_Colliery.jpg")
  },
  {
    id: "kursk-2000",
    title: "原子力潜水艦クルスク沈没事故（2000年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2000年8月", country: "ロシア（バレンツ海）", victims: "死者118名",
    summary: "ロシア海軍の誇りが海底に沈んだ。魚雷爆発から救助拒否まで、プーチン政権初期の対応が露呈した問題。",
    file: "articles/kursk-2000.html", difficulty: 3,
    image: EN("Kursk_wreck.jpg")
  },
  {
    id: "jal123-1985",
    title: "日本航空123便墜落事故（1985年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1985年8月", country: "日本（群馬県）", victims: "死者520名・生存者4名",
    summary: "単独機事故として世界最多の死者を出した日本最大の航空惨事。7年前の修理ミスが招いた32分間の壮絶な闘い。",
    file: "articles/jal123-1985.html", difficulty: 3,
    image: C("Japan_Airlines_123_124_The_accident_aircraft_flying_over_Okutama.png")
  },
  {
    id: "titanic-1912",
    title: "タイタニック号沈没事故（1912年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1912年4月", country: "北大西洋", victims: "死者約1,500名",
    summary: "「沈まない船」の慢心と氷山警告の無視が招いた20世紀最大の海難事故。救命ボート不足と階級格差が生存率を分けた。",
    file: "articles/titanic-1912.html", difficulty: 2,
    image: C("RMS_Titanic_3_(cropped_to_ship).jpg")
  },
  {
    id: "bhopal-1984",
    title: "ボパール化学工場ガス漏れ事故（1984年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "☣️",
    date: "1984年12月", country: "インド", victims: "死者推計2〜2.5万名・負傷者55万人以上",
    summary: "史上最悪の産業事故。コスト削減で安全装置を停止した工場から猛毒ガスが噴出し、一夜で数千名が命を落とした。",
    file: "articles/bhopal-1984.html", difficulty: 3,
    image: C("Union_Carbide_pesticide_factory,_Bhopal,_India,_1985.jpg")
  },
  {
    id: "k2-2008",
    title: "K2大量遭難事故（2008年）",
    category: "登山", tag: "tag-mountain", emoji: "⛰️",
    date: "2008年8月", country: "パキスタン", victims: "死者11名",
    summary: "「野蛮な山」と呼ばれるK2で一夜に11名が命を落とした。セラック崩落・渋滞・多国籍チームの混乱が重なった惨事。",
    file: "articles/k2-2008.html", difficulty: 4,
    image: C("K2-big.jpg")
  },
  {
    id: "o157-sakai-1996",
    title: "堺市学童集団食中毒事件（1996年）",
    category: "食中毒", tag: "tag-food", emoji: "🥗",
    date: "1996年7月", country: "日本（大阪府）", victims: "死者3名・患者9,578名",
    summary: "学校給食を介したO157集団感染。感染源の断定的公表が農家に甚大な損害を与え、リスクコミュニケーションの失敗例としても知られる。",
    file: "articles/o157-sakai-1996.html", difficulty: 2,
    image: C("Escherichia_coli_(SEM).jpg")
  },
  {
    id: "deepwater-horizon-2010",
    title: "ディープウォーター・ホライゾン爆発事故（2010年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "2010年4月", country: "アメリカ（メキシコ湾）", victims: "死者11名・原油流出490万バレル",
    summary: "史上最大の海洋石油流出。BPの安全手順省略とコスト優先の判断が87日間にわたる環境大惨事を引き起こした。",
    file: "articles/deepwater-horizon-2010.html", difficulty: 3,
    image: C("Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg")
  },
  {
    id: "challenger-1986",
    title: "スペースシャトル・チャレンジャー号爆発事故（1986年）",
    category: "航空", tag: "tag-aviation", emoji: "🚀",
    date: "1986年1月", country: "アメリカ", victims: "死者7名",
    summary: "打ち上げ73秒後の爆発。前夜の「飛ばすな」という技術者の警告を握り潰してNASAが下した判断の代償。",
    file: "articles/challenger-1986.html", difficulty: 3,
    image: C("Challenger_explosion.jpg")
  },
  {
    id: "concorde-2000",
    title: "コンコルド墜落事故（2000年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "2000年7月", country: "フランス", victims: "死者113名",
    summary: "超音速旅客機コンコルドの唯一の大惨事。滑走路上の金属片がタイヤを破裂させ、炎上したまま離陸した113名の悲劇。",
    file: "articles/concorde-2000.html", difficulty: 3,
    image: C("Air_France_Concorde_F-BVFC_at_Heathrow_1986.jpg")
  },
  {
    id: "hillsborough-1989",
    title: "ヒルズボロの悲劇（1989年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "⚽",
    date: "1989年4月", country: "イギリス（シェフィールド）", victims: "死者97名",
    summary: "FAカップ準決勝で起きたスタジアム将棋倒し事故。警察の不手際と長年にわたる隠蔽工作、27年後にようやく認められた真実。",
    file: "articles/hillsborough-1989.html", difficulty: 3,
    image: C("Hillsborough_memorial.jpg")
  },
  {
    id: "three-mile-island-1979",
    title: "スリーマイル島原子力発電所事故（1979年）",
    category: "原子力", tag: "tag-nuclear", emoji: "☢️",
    date: "1979年3月", country: "アメリカ（ペンシルバニア州）", victims: "直接死者0名・長期影響不明",
    summary: "アメリカ史上最悪の原子力事故。炉心溶融の危機と政府の情報管理の失敗が全米を恐怖に陥れ、原発建設を25年間停止させた。",
    file: "articles/three-mile-island-1979.html", difficulty: 3,
    image: C("Three_Mile_Island_(color)-2.jpg")
  },
  {
    id: "fukuchiyama-2005",
    title: "JR福知山線脱線事故（2005年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🚃",
    date: "2005年4月", country: "日本（兵庫県尼崎市）", victims: "死者107名・負傷者562名",
    summary: "制限速度を46km/hも超えたカーブで脱線しマンションに激突。日勤教育というJR西日本の異常な組織文化が招いた惨事。",
    file: "articles/fukuchiyama-2005.html", difficulty: 3,
    image: C("JR_Fukuchiyama_line_accident_site.jpg")
  },
  {
    id: "exxon-valdez-1989",
    title: "エクソン・ヴァルデーズ号原油流出事故（1989年）",
    category: "海難", tag: "tag-sea", emoji: "🛢️",
    date: "1989年3月", country: "アメリカ（アラスカ州）", victims: "乗員死者0・海鳥25万羽死亡",
    summary: "船長の飲酒運航で起きたアラスカ最大の環境災害。2,000kmの海岸線を汚染し、生態系の回復に数十年を要した。",
    file: "articles/exxon-valdez-1989.html", difficulty: 2,
    image: C("Exxon_Valdez_Refloating.jpg")
  },
  {
    id: "columbia-2003",
    title: "スペースシャトル・コロンビア号空中分解事故（2003年）",
    category: "航空", tag: "tag-aviation", emoji: "🚀",
    date: "2003年2月", country: "アメリカ（テキサス州上空）", victims: "死者7名",
    summary: "打ち上げ時の断熱材脱落を「許容範囲」と判断したNASAの組織文化。チャレンジャーの教訓が活かされなかった17年後の悲劇。",
    file: "articles/columbia-2003.html", difficulty: 3,
    image: C("Columbia_sts-107-crew.jpg")
  },
  {
    id: "rana-plaza-2013",
    title: "ラナプラザ崩壊事故（2013年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🏗️",
    date: "2013年4月", country: "バングラデシュ", victims: "死者1,134名",
    summary: "「ひびが入っている」という警告を無視して出勤を強制された縫製工場の崩壊。ファストファッションの裏側で何が起きていたか。",
    file: "articles/rana-plaza-2013.html", difficulty: 3,
    image: C("2013_Dhaka_garment_factory_collapse.jpg")
  },
  {
    id: "piper-alpha-1988",
    title: "パイパーアルファ石油プラットフォーム爆発事故（1988年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1988年7月", country: "イギリス（北海）", victims: "死者167名",
    summary: "整備中の許可証ミスが引き起こした北海最大の石油施設爆発。167名が犠牲となり、海洋石油産業の安全基準を根底から変えた。",
    file: "articles/piper-alpha-1988.html", difficulty: 3,
    image: C("Piper_Alpha_burning.jpg")
  },
  {
    id: "nevado-del-ruiz-1985",
    title: "ネバド・デル・ルイス火山噴火と泥流（1985年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🌋",
    date: "1985年11月", country: "コロンビア", victims: "死者約23,000名",
    summary: "科学者の警告を無視した政府と教会が避難を拒否。45分後、火山泥流が街を飲み込んだ——避けられた2万人の死。",
    file: "articles/nevado-del-ruiz-1985.html", difficulty: 3,
    image: C("Nevado_del_Ruiz_Armero_aftermath.jpg")
  },
  {
    id: "uss-indianapolis-1945",
    title: "USSインディアナポリス沈没事故（1945年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1945年7月", country: "太平洋", victims: "死者880名（うちサメ被害多数）",
    summary: "原爆部品を届けた帰路に魚雷で撃沈され、4日間誰にも気づかれなかった。サメに食われ続ける漂流と、艦長への不当な有罪判決。",
    file: "articles/uss-indianapolis-1945.html", difficulty: 3,
    image: C("USS_Indianapolis_(CA-35)_1937.jpg")
  },
  {
    id: "windscale-1957",
    title: "ウィンズケール原子炉火災事故（1957年）",
    category: "原子力", tag: "tag-nuclear", emoji: "☢️",
    date: "1957年10月", country: "イギリス（カンブリア州）", victims: "直接死者0名・がん死推計200〜240名",
    summary: "英国史上最悪の原子力事故。4日間燃え続けた原子炉の火と、放射性物質の飛散を30年間隠し続けた英国政府の欺瞞。",
    file: "articles/windscale-1957.html", difficulty: 3,
    image: C("Windscale_chimneys.jpg")
  },
  {
    id: "mont-blanc-tunnel-1999",
    title: "モンブラントンネル火災（1999年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1999年3月", country: "フランス・イタリア国境", victims: "死者39名",
    summary: "アルプスの長大トンネルで53時間燃え続けた火災。避難場所の設計不備と国際間の消防連携の欠如が招いた悲劇。",
    file: "articles/mont-blanc-tunnel-1999.html", difficulty: 2,
    image: C("Mont_Blanc_tunnel_french_entrance.jpg")
  },
  {
    id: "air-france-447-2009",
    title: "エールフランス447便墜落事故（2009年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "2009年6月", country: "大西洋（ブラジル沖）", victims: "死者228名（全員）",
    summary: "ピトー管の凍結から3分30秒で大西洋に消えた228名。自動化への過信と手動操縦技能の喪失が引き起こした現代航空の悲劇。",
    file: "articles/air-france-447-2009.html", difficulty: 4,
    image: C("Air_France_Airbus_A330-200_Silber.jpg")
  },
  {
    id: "grenfell-tower-2017",
    title: "グレンフェル・タワー火災（2017年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "2017年6月", country: "イギリス（ロンドン）", victims: "死者72名",
    summary: "80万円のコスト削減が72名の命を奪った。外壁が点火剤となった公営住宅の火災と、何年も前から届いていた住民の「警告」。",
    file: "articles/grenfell-tower-2017.html", difficulty: 3,
    image: C("Grenfell_Tower_fire.jpg")
  },
  {
    id: "sewol-2014",
    title: "セウォル号沈没事故（2014年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2014年4月", country: "韓国（珍島沖）", victims: "死者・行方不明者304名",
    summary: "修学旅行中の高校生250名以上を含む304名が犠牲になった韓国フェリー沈没事故。「その場に留まれ」という船内放送と船長の先逃げが、韓国社会全体を揺るがした。",
    file: "articles/sewol-2014.html", difficulty: 3,
    image: C("MV_Sewol_sinking.jpg")
  },
  {
    id: "fukushima-2011",
    title: "福島第一原子力発電所事故（2011年）",
    category: "原子力", tag: "tag-nuclear", emoji: "☢️",
    date: "2011年3月", country: "日本（福島県）", victims: "直接死1名・避難関連死2,000名以上",
    summary: "東日本大震災による津波が引き起こしたレベル7の原子力事故。三重のメルトダウンと政府・東電の情報隠蔽が、15万人の避難者を生んだ。",
    file: "articles/fukushima-2011.html", difficulty: 4,
    image: C("Fukushima_I_by_Digital_Globe.jpg")
  },
  {
    id: "costa-concordia-2012",
    title: "コスタ・コンコルディア座礁事故（2012年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2012年1月", country: "イタリア（ジリオ島沖）", victims: "死者32名",
    summary: "船長の見栄によるルート逸脱が4,200名を乗せた豪華客船を岩礁に衝突させた。「船に戻れ」という怒号と、先に逃げた船長の対比が世界を震撼させた。",
    file: "articles/costa-concordia-2012.html", difficulty: 2,
    image: C("Costa_Concordia_shipwreck_2013.jpg")
  },
  {
    id: "boeing-737max-2019",
    title: "ボーイング737MAX連続墜落事故（2018〜2019年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "2018〜2019年", country: "インドネシア・エチオピア", victims: "死者346名",
    summary: "MCASという欠陥ソフトウェアが346名の命を奪った。コスト優先で安全審査を形骸化させたボーイングと規制当局の癒着の実態。",
    file: "articles/boeing-737max-2019.html", difficulty: 4,
    image: C("Ethiopian_Airlines_B737_MAX8_ET-AVJ.jpg")
  },
  {
    id: "hindenburg-1937",
    title: "飛行船ヒンデンブルク号爆発事故（1937年）",
    category: "航空", tag: "tag-aviation", emoji: "🎈",
    date: "1937年5月", country: "アメリカ（ニュージャージー州）", victims: "死者36名",
    summary: "「空の宮殿」が着陸寸前にわずか34秒で炎に包まれた。ラジオ実況された史上初のリアルタイム大惨事は、飛行船時代の終焉を告げた。",
    file: "articles/hindenburg-1937.html", difficulty: 2,
    image: C("Hindenburg_disaster.jpg")
  },
  {
    id: "triangle-shirtwaist-1911",
    title: "トライアングル・シャツウエスト工場火災（1911年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1911年3月", country: "アメリカ（ニューヨーク）", victims: "死者146名",
    summary: "施錠された出口から逃げられなかった移民女性たちが窓から身を投げた。この惨事が米国労働法と職場安全規制の原点となった。",
    file: "articles/triangle-shirtwaist-1911.html", difficulty: 2,
    image: C("Triangle_shirtwaist_factory_fire_on_March_25_-_1911.jpg")
  },
  {
    id: "sampoong-1995",
    title: "三豊百貨店崩壊事故（1995年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🏢",
    date: "1995年6月", country: "韓国（ソウル）", victims: "死者502名・負傷者937名",
    summary: "亀裂を知りながら客を入れ続けた百貨店が昼間に崩壊した。502名が犠牲となり、17日間後に救出された生存者は韓国の建設腐敗を象徴する事件となった。",
    file: "articles/sampoong-1995.html", difficulty: 3,
    image: C("Sampoong_department_store_collapse.jpg")
  },
  {
    id: "herald-free-enterprise-1987",
    title: "ヘラルド・オブ・フリー・エンタープライズ転覆事故（1987年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1987年3月", country: "ベルギー（ゼーブルッヘ沖）", victims: "死者193名",
    summary: "バウランプを開けたまま出港したカーフェリーが出港からわずか90秒で転覆した。組織的な安全管理の欠如と企業過失致死法誕生の契機となった惨事。",
    file: "articles/herald-free-enterprise-1987.html", difficulty: 3,
    image: C("Herald_of_Free_Enterprise.jpg")
  },
  {
    id: "vajont-dam-1963",
    title: "バイオントダム崩壊事故（1963年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🌊",
    date: "1963年10月", country: "イタリア（ベッルーノ県）", victims: "死者約2,000名",
    summary: "地質学者の警告を無視し続けた末に山が動いた。2億6千万立方メートルの岩盤がダム湖に崩落し、45秒で谷間の集落2,000名を死に至らしめた「計算された虐殺」。",
    file: "articles/vajont-dam-1963.html", difficulty: 4,
    image: C("Vajont_Dam_from_below.jpg")
  },
  {
    id: "mh370-2014",
    title: "マレーシア航空370便失踪事件（2014年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "2014年3月", country: "インド洋", victims: "死者239名（推定）",
    summary: "消えた旅客機の謎は10年以上経った今も解けていない。史上最大規模の捜索で判明したことと、いまなお答えを求め続ける遺族たちの苦闘。",
    file: "articles/mh370-2014.html", difficulty: 4,
    image: C("Malaysia_Airlines_Boeing_777-200ER_9M-MRO.jpg")
  },
  {
    id: "hyatt-regency-1981",
    title: "カンザスシティ・ハイアット・リージェンシー歩道崩壊事故（1981年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🏨",
    date: "1981年7月", country: "アメリカ（ミズーリ州）", victims: "死者114名・負傷者216名",
    summary: "電話一本で変更された設計図が114名の命を奪った。ティーダンスパーティ中に頭上の歩道が崩落した事故は、工学倫理教育の必修事例となった。",
    file: "articles/hyatt-regency-1981.html", difficulty: 3,
    image: C("Hyatt_Regency_walkway_collapse.jpg")
  },
  {
    id: "lac-megantic-2013",
    title: "ラック・メガンティック列車脱線火災（2013年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🚂",
    date: "2013年7月", country: "カナダ（ケベック州）", victims: "死者47名",
    summary: "無人で停車中の原油タンク列車が動き出し、深夜の街の中心部に突入・爆発した。47名の命と街の半分を奪った事故が問う、人員削減と安全の限界。",
    file: "articles/lac-megantic-2013.html", difficulty: 3,
    image: C("Lac-Megantic_rail_disaster_site.jpg")
  },
  {
    id: "dona-paz-1987",
    title: "ドニャ・パス号沈没事故（1987年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1987年12月", country: "フィリピン（タブラス海峡）", victims: "死者推計4,386名",
    summary: "定員の3倍以上の乗客を乗せたフェリーがタンカーと衝突し、炎の海に沈んだ。平時最悪の海難事故として記録されるが、正確な死者数さえ今も不明だ。",
    file: "articles/dona-paz-1987.html", difficulty: 3,
    image: C("MV_Dona_Paz_sinking.jpg")
  },
  {
    id: "genova-bridge-2018",
    title: "ジェノバ・モランディ橋崩壊事故（2018年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🌉",
    date: "2018年8月", country: "イタリア（ジェノバ）", victims: "死者43名",
    summary: "半世紀にわたる腐食劣化の警告を無視した高速道路会社の怠慢が、43名の命を奪った。インフラ老朽化という先進国共通の難題を突きつけた惨事。",
    file: "articles/genova-bridge-2018.html", difficulty: 3,
    image: C("Ponte_Morandi_collapse.jpg")
  },
  {
    id: "lockerbie-1988",
    title: "ロッカービー爆破事件（1988年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1988年12月", country: "イギリス（スコットランド）", victims: "死者270名",
    summary: "空中爆破されたパンナム103便の残骸がスコットランドの小さな町に降り注いだ。リビア工作員の関与が判明するまでに要した13年間の国際捜査の全貌。",
    file: "articles/lockerbie-1988.html", difficulty: 3,
    image: C("Lockerbie_Pan_Am_Flight_103_crash_site.jpg")
  },
  {
    id: "texas-city-1947",
    title: "テキサスシティ大爆発（1947年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "💥",
    date: "1947年4月", country: "アメリカ（テキサス州）", victims: "死者581名・負傷者5,000名以上",
    summary: "「小火」のはずが硝酸アンモニウム肥料2,300トンの爆発に発展した。爆風は28km先まで届き、581名が死亡した米国史上最悪の産業爆発事故。",
    file: "articles/texas-city-1947.html", difficulty: 3,
    image: C("Texas_City_disaster.jpg")
  },
  {
    id: "el-faro-2015",
    title: "コンテナ船エル・ファロ沈没事故（2015年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2015年10月", country: "バハマ沖", victims: "死者33名",
    summary: "ハリケーン・ホアキンの直撃を受けたコンテナ船が33名全員とともに沈んだ。水深4,600mから回収されたVDRが明かした最後の8時間の真実。",
    file: "articles/el-faro-2015.html", difficulty: 3,
    image: C("El_Faro_container_ship.jpg")
  },
  {
    id: "de-havilland-comet-1954",
    title: "デ・ハビランド・コメット連続墜落事故（1954年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1954年1〜4月", country: "地中海", victims: "死者56名（2事故合計）",
    summary: "世界初のジェット旅客機が相次いで空中分解した。金属疲労という未知の現象を解明した史上初の航空事故科学捜査が、現代航空安全の礎を築いた。",
    file: "articles/de-havilland-comet-1954.html", difficulty: 4,
    image: C("BOAC_Comet_Yoke_Peter.jpg")
  },
  {
    id: "thalidomide-1950s",
    title: "サリドマイド薬害事件（1950〜60年代）",
    category: "火災・災害", tag: "tag-disaster", emoji: "💊",
    date: "1950〜60年代", country: "西ドイツ発・世界各国", victims: "被害児童推計10,000名以上",
    summary: "「安全な睡眠薬」が世界中で1万人以上の子どもたちに障害を与えた薬害の原点。日本の9ヶ月遅れた販売停止が問う、行政の薬事責任とは何か。",
    file: "articles/thalidomide-1950s.html", difficulty: 3,
    image: C("Thalidomide.svg")
  },
  {
    id: "kaprun-2000",
    title: "カプルン鉄道トンネル火災（2000年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "2000年11月", country: "オーストリア（カプルン）", victims: "死者155名",
    summary: "スキーリゾートの山岳鉄道トンネル内で発生した火災が、煙突効果により155名の命を奪った。下方向に逃げた12名だけが生き残り、全員無罪の判決が遺族を苦しめた。",
    file: "articles/kaprun-2000.html", difficulty: 3,
    image: C("Kitzsteinhorn_Gletscherbahn.jpg")
  },
  {
    id: "tylenol-1982",
    title: "シカゴ・タイレノール毒物混入事件（1982年）",
    category: "食中毒", tag: "tag-food", emoji: "🥩",
    date: "1982年9月", country: "アメリカ（シカゴ）", victims: "死者7名",
    summary: "市販の鎮痛薬に青酸カリが混入され7名が死亡。犯人は未逮捕のまま、事件は改ざん防止包装を世界中に広めた。",
    file: "articles/tylenol-1982.html", difficulty: 3,
    image: C("Tylenol_poisoning_1982.jpg")
  },
  {
    id: "bse-crisis-1990s",
    title: "狂牛病（BSE）パニック（1990年代）",
    category: "食中毒", tag: "tag-food", emoji: "🥩",
    date: "1990年代", country: "イギリス（欧州全体）", victims: "変異型クロイツフェルト・ヤコブ病死者200名以上",
    summary: "牛海綿状脳症（BSE）が人に感染し得ると判明した瞬間、欧州の牛肉産業は崩壊した。プリオンという未知の病原体が引き起こした前例のない危機。",
    file: "articles/bse-crisis-1990s.html", difficulty: 4,
    image: C("Cow_female_black_white.jpg")
  },
  {
    id: "minamata-1956",
    title: "水俣病（1956年〜）",
    category: "食中毒", tag: "tag-food", emoji: "🥩",
    date: "1956年〜", country: "日本（熊本県水俣市）", victims: "公式認定患者2,283名・死者1,784名以上",
    summary: "チッソ水俣工場が排出したメチル水銀が魚介類を汚染し、地域住民に深刻な神経障害をもたらした。日本四大公害病のひとつ。",
    file: "articles/minamata-1956.html", difficulty: 4,
    image: C("Minamata_disease_1.jpg")
  },
  {
    id: "morinaga-1955",
    title: "森永ヒ素ミルク事件（1955年）",
    category: "食中毒", tag: "tag-food", emoji: "🥩",
    date: "1955年8月", country: "日本（西日本中心）", victims: "死者130名・患者12,344名",
    summary: "森永乳業の粉ミルクにヒ素が混入し、乳幼児に甚大な健康被害をもたらした。被害者への救済が数十年遅れた企業・行政責任の問題。",
    file: "articles/morinaga-1955.html", difficulty: 3,
    image: C("Powdered_milk.jpg")
  },
  {
    id: "spinach-ecoli-2006",
    title: "アメリカほうれん草E.coli集団食中毒（2006年）",
    category: "食中毒", tag: "tag-food", emoji: "🥩",
    date: "2006年9月", country: "アメリカ（全国26州）", victims: "死者3名・患者199名",
    summary: "バックドア型農場での汚染により野菜産地イメージを直撃。トレーサビリティと農場GAP認証の普及を加速させた事件。",
    file: "articles/spinach-ecoli-2006.html", difficulty: 2,
    image: C("Spinach_leaves.jpg")
  },
  {
    id: "mallory-irvine-1924",
    title: "マロリーとアーヴィンの消息（1924年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1924年6月", country: "ネパール/チベット（エベレスト）", victims: "死者2名",
    summary: "ヒラリーの29年前、エベレストに挑んだ2人の登山家は山頂に達したのか。1999年に遺体が発見されるも、謎は解けないまま。",
    file: "articles/mallory-irvine-1924.html", difficulty: 3,
    image: C("Mallory_1924.jpg")
  },
  {
    id: "nanga-parbat-1934",
    title: "ナンガパルバット大量遭難（1934年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1934年7月", country: "パキスタン（ヒマラヤ）", victims: "死者10名（登山隊員3名・高地ポーター7名）",
    summary: "「人喰い山」の異名を持つナンガパルバットで下山中に嵐に遭い、10名が凍死した。第二次世界大戦前の登山史上最悪の惨事のひとつ。",
    file: "articles/nanga-parbat-1934.html", difficulty: 3,
    image: C("Nanga_Parbat_-_SRTM.jpg")
  },
  {
    id: "mount-hood-1986",
    title: "マウントフッド高校生遭難事故（1986年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1986年5月", country: "アメリカ（オレゴン州）", victims: "死者9名（生徒7名・教師2名）",
    summary: "春の登山遠足で山頂を目指した高校生たちが急激な天候悪化に遭い9名が死亡。引率判断と学校登山の安全管理が問われた。",
    file: "articles/mount-hood-1986.html", difficulty: 2,
    image: C("Mount_Hood_reflected_in_Mirror_Lake,_Oregon.jpg")
  },
  {
    id: "ama-dablam-2006",
    title: "アマ・ダブラム雪崩遭難（2006年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "2006年11月", country: "ネパール（ヒマラヤ）", victims: "死者6名",
    summary: "ネパールの人気峰アマ・ダブラムで高所キャンプが雪崩に飲み込まれ、複数国の登山者が犠牲となった。",
    file: "articles/ama-dablam-2006.html", difficulty: 3,
    image: C("Ama_Dablam_from_Namche.jpg")
  },
  {
    id: "galeras-1993",
    title: "ガレラス火山噴火科学者遭難（1993年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1993年1月", country: "コロンビア", victims: "死者9名（火山学者6名含む）",
    summary: "国際会議の一環としてクレーターを調査中に突然噴火し、世界トップ級の火山学者たちが犠牲になった。",
    file: "articles/galeras-1993.html", difficulty: 3,
    image: C("Galeras_Volcano.jpg")
  },
  {
    id: "nutty-putty-2009",
    title: "ナティパティ洞窟事故（2009年）",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "2009年11月", country: "アメリカ（ユタ州）", victims: "死者1名（ジョン・ジョーンズ氏）",
    summary: "ユタ州の洞窟で逆さまの狭い亀裂に挟まった28歳の男性。28時間の救助活動も実らず、洞窟はそのまま彼の墓となった。",
    file: "articles/nutty-putty-2009.html", difficulty: 3,
    image: C("Nutty_Putty_Cave_entrance.jpg")
  },
  {
    id: "cueva-de-villa-luz",
    title: "毒ガス洞窟クエバ・デ・ビジャ・ルス",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "探検継続中", country: "メキシコ（タバスコ州）", victims: "複数の探検家が硫化水素中毒",
    summary: "硫化水素が噴出し続けるメキシコの洞窟。生物学的には極限生物の宝庫だが、一歩間違えば致死的な環境。",
    file: "articles/cueva-de-villa-luz.html", difficulty: 4,
    image: C("Cueva_de_Villa_Luz_-_snottites.jpg")
  },
  {
    id: "boesmansgat-2004",
    title: "ボースマンスガット洞窟水中捜索事故（2004年）",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "2004年8月", country: "南アフリカ", victims: "死者1名（デイヴ・ショー氏）",
    summary: "深度270mの水中洞窟で溺死した仲間の遺体を回収しようとした世界最高峰のケイブダイバーが、遺体とともに戻らなかった。",
    file: "articles/boesmansgat-2004.html", difficulty: 5,
    image: C("Diver_in_Boesmansgat.jpg")
  },
  {
    id: "cave-diving-florida",
    title: "フロリダ水中洞窟連続死亡事故",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "1970年代〜", country: "アメリカ（フロリダ州）", victims: "数十名以上が死亡",
    summary: "フロリダの水中洞窟は世界最大規模だが、装備も訓練もない潜水者を次々と命取りにした。「洞窟に入るな」警告の誕生秘話。",
    file: "articles/cave-diving-florida.html", difficulty: 4,
    image: C("Cave_diving_in_Florida.jpg")
  },
  {
    id: "american-191-1979",
    title: "アメリカン航空191便墜落事故（1979年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1979年5月", country: "アメリカ（シカゴ）", victims: "死者273名（全員）",
    summary: "離陸直後にエンジンが脱落しシカゴ郊外に墜落。アメリカ史上最悪の航空機事故。整備マニュアル無視が招いた人災。",
    file: "articles/american-191-1979.html", difficulty: 3,
    image: C("American_Airlines_Flight_191_crash_site.jpg")
  },
  {
    id: "valuejet-592-1996",
    title: "バリュージェット592便墜落事故（1996年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1996年5月", country: "アメリカ（フロリダ州）", victims: "死者110名（全員）",
    summary: "貨物室の酸素発生装置が発火しフロリダの湿地帯に墜落。低コスト航空の安全管理と外注整備の問題を浮き彫りにした。",
    file: "articles/valuejet-592-1996.html", difficulty: 3,
    image: C("ValuJet_Airlines_Flight_592.jpg")
  },
  {
    id: "swissair-111-1998",
    title: "スイス航空111便墜落事故（1998年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1998年9月", country: "カナダ（ノバスコシア州沖）", victims: "死者229名（全員）",
    summary: "機内の電気系統から出火し夜の大西洋に墜落。229名全員死亡。「エンターテイメント配線」が招いた悲劇。",
    file: "articles/swissair-111-1998.html", difficulty: 3,
    image: C("Swissair_111_crash_site.jpg")
  },
  {
    id: "estonia-1994",
    title: "エストニア号沈没事故（1994年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1994年9月", country: "バルト海（エストニア・フィンランド間）", victims: "死者852名",
    summary: "嵐のバルト海で船首扉が破損し浸水転覆。852名が犠牲となった欧州最大の平時海難事故。船体は今も海底に眠る。",
    file: "articles/estonia-1994.html", difficulty: 4,
    image: C("MS_Estonia_1994.jpg")
  },
  {
    id: "le-joola-2002",
    title: "ル・ジュオラ号沈没事故（2002年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2002年9月", country: "セネガル（大西洋）", victims: "死者1,863名",
    summary: "定員の6倍以上を乗せたセネガルの国営フェリーが嵐で転覆。1,863名が死亡しタイタニック号を超える史上最悪級の平時海難となった。",
    file: "articles/le-joola-2002.html", difficulty: 4
  },
  {
    id: "our-lady-of-angels-1958",
    title: "天使の聖母学校火災（1958年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1958年12月", country: "アメリカ（シカゴ）", victims: "死者92名（うち児童87名）",
    summary: "シカゴの小学校で発生した火災により92名が死亡。そのほとんどが幼い子どもたちだった。アメリカ全土の学校防火基準を根本から変えた惨事。",
    file: "articles/our-lady-of-angels-1958.html", difficulty: 3
  }
];

function renderDifficulty(level) {
  let dots = '';
  for (let i = 1; i <= 5; i++) {
    dots += `<span class="dot ${i <= level ? 'active' : ''}"></span>`;
  }
  return `<span class="difficulty" title="深刻度 ${level}/5">${dots}</span>`;
}

function renderCard(a) {
  const iconHtml = a.image
    ? `<img src="${a.image}" alt="${a.title}" loading="lazy" onerror="this.parentElement.classList.remove('card-icon--photo');this.replaceWith(Object.assign(document.createElement('span'),{className:'card-emoji',textContent:'${a.emoji}'}))">`
    : `<span class="card-emoji">${a.emoji}</span>`;
  return `
    <div class="article-card" data-id="${a.id}">
      <div class="card-icon ${a.image ? 'card-icon--photo' : ''}">${iconHtml}</div>
      <div class="card-body">
        <span class="tag ${a.tag}">${a.category}</span>
        <h3><a href="${a.file}">${a.title}</a></h3>
        <p>${a.summary}</p>
        <div class="card-footer">
          <span>${a.date} · ${a.country}</span>
          ${renderDifficulty(a.difficulty)}
        </div>
      </div>
    </div>`;
}

function renderRecent() {
  const list = document.getElementById('recent-list');
  if (!list) return;
  list.innerHTML = articles.slice(0, 5).map((a, i) => `
    <li>
      <span class="recent-num">${i + 1}</span>
      <div class="recent-info">
        <a href="${a.file}">${a.title}</a>
        <span>${a.category} · ${a.country}</span>
      </div>
    </li>`).join('');
}

function initGrid() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  grid.innerHTML = articles.slice(0, 6).map(renderCard).join('');

  let shown = 6;
  const btn = document.getElementById('load-more');
  if (btn) {
    btn.addEventListener('click', () => {
      const next = articles.slice(shown, shown + 6);
      grid.insertAdjacentHTML('beforeend', next.map(renderCard).join(''));
      shown += 6;
      if (shown >= articles.length) btn.style.display = 'none';
      // 追加カードを visible に（observeNewCards が呼ばれる前のフォールバック）
      setTimeout(observeNewCards, 80);
    });
    if (articles.length <= 6) btn.style.display = 'none';
  }
}

function initSearch() {
  const input = document.getElementById('search-input');
  const overlay = document.getElementById('search-results');
  if (!input || !overlay) return;

  function doSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) { overlay.classList.remove('active'); return; }
    const matches = articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q)
    );
    document.getElementById('search-header').textContent = `「${q}」の検索結果：${matches.length}件`;
    const results = document.getElementById('search-results-list');
    results.innerHTML = matches.length
      ? matches.map(a => `
          <div class="search-result-item" onclick="location.href='${a.file}'">
            ${a.image ? `<img class="search-thumb" src="${a.image}" alt="" loading="lazy">` : `<span class="search-emoji">${a.emoji}</span>`}
            <div><h4>${a.title}</h4><p>${a.category} · ${a.country} · ${a.date}</p></div>
          </div>`).join('')
      : '<div class="no-results">一致する記事が見つかりませんでした。</div>';
    overlay.classList.add('active');
  }

  input.addEventListener('input', (e) => doSearch(e.target.value));
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('active'); });
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCategoryFilter() {
  document.querySelectorAll('[data-category]').forEach(c => {
    c.addEventListener('click', () => {
      const cat = c.dataset.category;
      const grid = document.getElementById('articles-grid');
      if (!grid) return;
      // 洞窟カードは「洞窟」+「水中洞窟」両方を表示
      const filtered = articles.filter(a =>
        cat === '洞窟' ? (a.category === '洞窟' || a.category === '水中洞窟') : a.category === cat
      );
      grid.innerHTML = filtered.length
        ? filtered.map(renderCard).join('')
        : '<div class="no-results" style="grid-column:1/-1">このカテゴリーの記事はまだ準備中です。</div>';
      // 新しく挿入したカードをすぐ visible にする（アニメーション不要）
      grid.querySelectorAll('.article-card').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 40);
      });
      grid.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Auto-update category counts ── */
function updateCategoryCounts() {
  const countMap = {};
  articles.forEach(a => {
    countMap[a.category] = (countMap[a.category] || 0) + 1;
  });
  // 洞窟カードは「洞窟」+「水中洞窟」の合計を表示
  document.querySelectorAll('[data-cat]').forEach(el => {
    const key = el.dataset.cat;
    let count = countMap[key] || 0;
    if (key === '洞窟') count = (countMap['洞窟'] || 0) + (countMap['水中洞窟'] || 0);
    if (count > 0) el.textContent = count + '記事';
  });
}

/* ── Counter animation ── */
function animateCounters() {
  document.querySelectorAll('.counter[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const startTime = performance.now();
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

/* ── Scroll-reveal with IntersectionObserver ── */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // stagger for category cards
        const delay = el.closest('.categories-grid')
          ? Array.from(el.parentElement.children).indexOf(el) * 70
          : 0;
        setTimeout(() => el.classList.add('visible'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  // observe cards, section titles, featured card
  document.querySelectorAll(
    '.article-card, .category-card, .section-title, .featured-card'
  ).forEach(el => io.observe(el));
}

/* Re-observe new cards when "load more" adds them */
function observeNewCards() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.article-card:not(.visible)').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecent();
  initGrid();
  initSearch();
  initBackToTop();
  initCategoryFilter();
  updateCategoryCounts();
  animateCounters();
  initScrollReveal();

  // re-observe after load-more clicks
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      setTimeout(observeNewCards, 80);
    });
  }
});
