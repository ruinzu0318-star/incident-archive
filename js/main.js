const W = "https://upload.wikimedia.org/wikipedia/commons/thumb/";
const WE = "https://upload.wikimedia.org/wikipedia/en/thumb/";

const articles = [
  {
    id: "jack-in-the-box-1993",
    title: "ジャック・イン・ザ・ボックス集団食中毒事件（1993年）",
    category: "食中毒", tag: "tag-food", emoji: "🍔",
    date: "1993年1月", country: "アメリカ", victims: "死者4名・患者700名以上",
    summary: "アメリカのファストフードチェーンで発生したO157:H7による大規模食中毒。食品安全規制の抜本的改革につながった歴史的事件。",
    file: "articles/jack-in-the-box-1993.html", difficulty: 2,
    image: W + "3/32/E_coli_at_10000x%2C_original.jpg/640px-E_coli_at_10000x%2C_original.jpg"
  },
  {
    id: "everest-1996",
    title: "エベレスト大量遭難事故（1996年）",
    category: "登山", tag: "tag-mountain", emoji: "🏔️",
    date: "1996年5月", country: "ネパール/中国", victims: "死者8名",
    summary: "商業登山ツアーが引き起こした史上最悪級のエベレスト遭難。嵐と判断ミスが重なり8名が命を落とした。",
    file: "articles/everest-1996.html", difficulty: 3,
    image: W + "e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
  },
  {
    id: "thai-cave-2018",
    title: "タイ洞窟少年救出作戦（2018年）",
    category: "洞窟", tag: "tag-cave", emoji: "🕳️",
    date: "2018年7月", country: "タイ", victims: "救出成功（ダイバー1名死亡）",
    summary: "タムルアン洞窟に閉じ込められた少年サッカーチーム13名の18日間にわたる救出劇。世界中が固唾を飲んで見守った。",
    file: "articles/thai-cave-2018.html", difficulty: 2,
    image: W + "b/be/Rescue_equipment_in_Tham_Luang_entrance_chamber_%28cropped%29.jpg/640px-Rescue_equipment_in_Tham_Luang_entrance_chamber_%28cropped%29.jpg"
  },
  {
    id: "andrea-gail-1991",
    title: "パーフェクト・ストーム：アンドレア・ゲイル号遭難（1991年）",
    category: "海難", tag: "tag-sea", emoji: "🌊",
    date: "1991年10月", country: "北大西洋", victims: "死者6名（乗組員全員）",
    summary: "3つの気象システムが合体した100年に1度の巨大嵐に巻き込まれた漁船の悲劇。映画化でも有名。",
    file: "articles/andrea-gail-1991.html", difficulty: 2,
    image: W + "0/04/Uss_fiske_DD-842_and_USS_Bigelow_DD-942_under_heavy_sea.jpg/640px-Uss_fiske_DD-842_and_USS_Bigelow_DD-942_under_heavy_sea.jpg"
  },
  {
    id: "chernobyl-1986",
    title: "チェルノブイリ原子力発電所事故（1986年）",
    category: "原子力", tag: "tag-nuclear", emoji: "☢️",
    date: "1986年4月", country: "ソビエト連邦（現ウクライナ）", victims: "直接死31名・推計数千〜数万名",
    summary: "人類史上最大級の原子力事故。ソ連の隠蔽体質と安全軽視がもたらした大惨事と、その後の長期的影響。",
    file: "articles/chernobyl-1986.html", difficulty: 3,
    image: W + "8/87/IAEA_02790015_%285613115146%29.jpg/640px-IAEA_02790015_%285613115146%29.jpg"
  },
  {
    id: "argo-2000",
    title: "雪印乳業集団食中毒事件（2000年）",
    category: "食中毒", tag: "tag-food", emoji: "🥛",
    date: "2000年6〜7月", country: "日本", victims: "患者約14,780名",
    summary: "黄色ブドウ球菌毒素による日本史上最大規模の食中毒事件。企業の隠蔽と危機管理の失敗が招いた社会的大事件。",
    file: "articles/yukijirushi-2000.html", difficulty: 2,
    image: W + "6/6b/Milk_glass.jpg/640px-Milk_glass.jpg"
  },
  {
    id: "blue-hole-2017",
    title: "ダハブ・ブルーホール水中洞窟事故（繰り返す死の罠）",
    category: "水中洞窟", tag: "tag-cave", emoji: "🤿",
    date: "継続中（年間複数件）", country: "エジプト", victims: "推計200名以上（累計）",
    summary: "世界最危険のダイビングスポットとして知られるエジプトの水中洞窟。なぜ熟練ダイバーですら命を落とすのか。",
    file: "articles/dahab-blue-hole.html", difficulty: 4,
    image: W + "3/34/Blue_Whole%2C_Dahab.jpg/640px-Blue_Whole%2C_Dahab.jpg"
  },
  {
    id: "kegon-1903",
    title: "1996年エベレスト南東稜ルート：嵐の解剖",
    category: "登山", tag: "tag-mountain", emoji: "⛰️",
    date: "1996年5月", country: "ネパール", victims: "死者8名",
    summary: "気象・判断・商業化が絡み合った悲劇の詳細分析。ロブ・ホールとスコット・フィッシャーが選択した道とは。",
    file: "articles/everest-1996.html", difficulty: 4,
    image: W + "e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/640px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
  },
  {
    id: "cocoanut-grove-1942",
    title: "ナイトクラブ火災：ココナッツ・グローブ惨事（1942年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "1942年11月", country: "アメリカ", victims: "死者492名",
    summary: "一夜で492名が犠牲になったボストンのナイトクラブ火災。現代の防火規制の原点となった悲劇。",
    file: "articles/cocoanut-grove-1942.html", difficulty: 2,
    image: W + "8/8e/Cocoanut_Grove_fire_car.jpg/640px-Cocoanut_Grove_fire_car.jpg"
  },
  {
    id: "tenerife-1977",
    title: "テネリフェ空港衝突事故（1977年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1977年3月", country: "スペイン（カナリア諸島）", victims: "死者583名（航空史上最多）",
    summary: "2機のジャンボジェットが滑走路上で衝突した航空史上最大の惨事。霧・誤解・コミュニケーション不全の連鎖。",
    file: "articles/tenerife-1977.html", difficulty: 3,
    image: W + "d/da/Het_verongelukte_KLM-toestel_De_Rijn%2C_Bestanddeelnr_929-1005_-_cropped.jpg/640px-Het_verongelukte_KLM-toestel_De_Rijn%2C_Bestanddeelnr_929-1005_-_cropped.jpg"
  },
  {
    id: "aberfan-1966",
    title: "アバーファン炭坑廃棄物崩落事故（1966年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "⛏️",
    date: "1966年10月", country: "イギリス（ウェールズ）", victims: "死者116名（うち小学生109名）",
    summary: "炭鉱の廃棄物山が小学校を飲み込んだ惨事。警告を無視し続けた企業と行政の責任が問われた。",
    file: "articles/aberfan-1966.html", difficulty: 2,
    image: W + "6/6a/Aberfan_-_Merthyr_Vale_Colliery.jpg/640px-Aberfan_-_Merthyr_Vale_Colliery.jpg"
  },
  {
    id: "kursk-2000",
    title: "原子力潜水艦クルスク沈没事故（2000年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "2000年8月", country: "ロシア（バレンツ海）", victims: "死者118名",
    summary: "ロシア海軍の誇りが海底に沈んだ。魚雷爆発から救助拒否まで、プーチン政権初期の対応が露呈した問題。",
    file: "articles/kursk-2000.html", difficulty: 3,
    image: WE + "f/f6/Kursk_wreck.jpg/640px-Kursk_wreck.jpg"
  },
  {
    id: "jal123-1985",
    title: "日本航空123便墜落事故（1985年）",
    category: "航空", tag: "tag-aviation", emoji: "✈️",
    date: "1985年8月", country: "日本（群馬県）", victims: "死者520名・生存者4名",
    summary: "単独機事故として世界最多の死者を出した日本最大の航空惨事。7年前の修理ミスが招いた32分間の壮絶な闘い。",
    file: "articles/jal123-1985.html", difficulty: 3,
    image: W + "4/41/Japan_Airlines_123_124_The_accident_aircraft_flying_over_Okutama.png/640px-Japan_Airlines_123_124_The_accident_aircraft_flying_over_Okutama.png"
  },
  {
    id: "titanic-1912",
    title: "タイタニック号沈没事故（1912年）",
    category: "海難", tag: "tag-sea", emoji: "🚢",
    date: "1912年4月", country: "北大西洋", victims: "死者約1,500名",
    summary: "「沈まない船」の慢心と氷山警告の無視が招いた20世紀最大の海難事故。救命ボート不足と階級格差が生存率を分けた。",
    file: "articles/titanic-1912.html", difficulty: 2,
    image: W + "6/6d/RMS_Titanic_3_%28cropped_to_ship%29.jpg/640px-RMS_Titanic_3_%28cropped_to_ship%29.jpg"
  },
  {
    id: "bhopal-1984",
    title: "ボパール化学工場ガス漏れ事故（1984年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "☣️",
    date: "1984年12月", country: "インド", victims: "死者推計2〜2.5万名・負傷者55万人以上",
    summary: "史上最悪の産業事故。コスト削減で安全装置を停止した工場から猛毒ガスが噴出し、一夜で数千名が命を落とした。",
    file: "articles/bhopal-1984.html", difficulty: 3,
    image: W + "4/45/Union_Carbide_pesticide_factory%2C_Bhopal%2C_India%2C_1985.jpg/640px-Union_Carbide_pesticide_factory%2C_Bhopal%2C_India%2C_1985.jpg"
  },
  {
    id: "k2-2008",
    title: "K2大量遭難事故（2008年）",
    category: "登山", tag: "tag-mountain", emoji: "⛰️",
    date: "2008年8月", country: "パキスタン", victims: "死者11名",
    summary: "「野蛮な山」と呼ばれるK2で一夜に11名が命を落とした。セラック崩落・渋滞・多国籍チームの混乱が重なった惨事。",
    file: "articles/k2-2008.html", difficulty: 4,
    image: W + "1/16/K2-big.jpg/640px-K2-big.jpg"
  },
  {
    id: "o157-sakai-1996",
    title: "堺市学童集団食中毒事件（1996年）",
    category: "食中毒", tag: "tag-food", emoji: "🥗",
    date: "1996年7月", country: "日本（大阪府）", victims: "死者3名・患者9,578名",
    summary: "学校給食を介したO157集団感染。感染源の断定的公表が農家に甚大な損害を与え、リスクコミュニケーションの失敗例としても知られる。",
    file: "articles/o157-sakai-1996.html", difficulty: 2,
    image: W + "3/32/E_coli_at_10000x%2C_original.jpg/640px-E_coli_at_10000x%2C_original.jpg"
  },
  {
    id: "deepwater-horizon-2010",
    title: "ディープウォーター・ホライゾン爆発事故（2010年）",
    category: "火災・災害", tag: "tag-disaster", emoji: "🔥",
    date: "2010年4月", country: "アメリカ（メキシコ湾）", victims: "死者11名・原油流出490万バレル",
    summary: "史上最大の海洋石油流出。BPの安全手順省略とコスト優先の判断が87日間にわたる環境大惨事を引き起こした。",
    file: "articles/deepwater-horizon-2010.html", difficulty: 3,
    image: W + "9/9d/Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg/640px-Deepwater_Horizon_offshore_drilling_unit_on_fire_2010.jpg"
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
