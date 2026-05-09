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
      const filtered = articles.filter(a => a.category === cat);
      grid.innerHTML = filtered.length
        ? filtered.map(renderCard).join('')
        : '<div class="no-results" style="grid-column:1/-1">このカテゴリーの記事はまだ準備中です。</div>';
      grid.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecent();
  initGrid();
  initSearch();
  initBackToTop();
  initCategoryFilter();
});
