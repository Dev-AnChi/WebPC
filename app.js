const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const money = n => Number(n).toLocaleString('vi-VN') + 'đ';

const items = [
  { id: 1, category: 'pc', name: 'NEXUS Aurora Gaming', price: 24990000, desc: 'PC gaming RGB, thiết kế kính trong, cấu hình cân đối.', img: 'pcmixed.webp', badge: 'Nổi bật', tags: ['Gaming', '32GB RAM', '1TB SSD'], kind: 'gaming' },
  { id: 2, category: 'pc', name: 'NEXUS Creator White', price: 32990000, desc: 'Case trắng thanh lịch cho đồ họa và sáng tạo.', img: 'pcblue.webp', badge: 'Mới', tags: ['Đồ họa', '32GB RAM', 'RTX'], kind: 'creative' },
  { id: 3, category: 'pc', name: 'NEXUS Sky Studio', price: 18990000, desc: 'Góc làm việc gọn đẹp, hiệu năng ổn định.', img: 'pcstudio.webp', badge: 'Đề xuất', tags: ['Văn phòng', 'Tiết kiệm'], kind: 'office' },
  { id: 4, category: 'pc', name: 'NEXUS Dream Setup', price: 39990000, desc: 'Bộ PC gaming cao cấp với không gian thiết kế riêng.', img: 'showroom.webp', badge: 'Showcase', tags: ['Gaming', 'RGB'], kind: 'gaming' },
  { id: 5, category: 'pc', name: 'NEXUS Frost White', price: 29990000, desc: 'PC RGB trắng với hệ thống tản nhiệt nổi bật.', img: 'pcwhite.webp', badge: 'Mới', tags: ['Gaming', '32GB RAM'], kind: 'gaming' },
  { id: 6, category: 'pc', name: 'NEXUS Compact Custom', price: 15990000, desc: 'Cấu hình minh họa để tùy chỉnh theo nhu cầu.', img: 'hero.webp', badge: 'Build riêng', tags: ['Văn phòng', 'Tiết kiệm'], kind: 'office' },
  { id: 7, category: 'figure', name: 'Crystal Blue Fantasy', price: 1290000, desc: 'Figure phong cách pha lê xanh, làm điểm nhấn setup.', img: 'figure.webp', badge: 'Figure', tags: ['Resin', 'Trưng bày'], kind: 'figure' },
  { id: 8, category: 'figure', name: 'Fairy Crystal Statue', price: 1590000, desc: 'Mô hình fantasy chi tiết dùng để trưng bày.', img: 'fairy.webp', badge: 'Yêu thích', tags: ['Resin', 'Fantasy'], kind: 'figure' },
  { id: 9, category: 'figure', name: 'Ice Cat Girl', price: 890000, desc: 'Mô hình chủ đề anime tông trắng xanh.', img: 'cat.webp', badge: 'Mới', tags: ['Anime', 'Decor'], kind: 'figure' },
  { id: 10, category: 'figure', name: 'NEXUS Studio Edition', price: 1990000, desc: 'Tác phẩm mô hình lấy cảm hứng studio in 3D.', img: 'studio3d.webp', badge: 'Studio', tags: ['In theo yêu cầu'], kind: 'service' },
  { id: 11, category: 'figure', name: 'Custom Resin Figure', price: 0, desc: 'Nhận in mô hình theo bản vẽ hoặc yêu cầu.', img: 'printer.webp', badge: 'Đặt riêng', tags: ['Resin', 'Tư vấn'], kind: 'service' },
  { id: 12, category: 'figure', name: 'Creative Idol Concept', price: 990000, desc: 'Mẫu minh họa phong cách anime cho bộ sưu tập.', img: 'idol.webp', badge: 'Concept', tags: ['Anime', 'Resin'], kind: 'figure' }
];

const img = n => 'assets/' + n;

const card = x => `
<article class="product" data-tilt="card">
  <span class="badge">${x.badge}</span>
  <figure>
    <img loading="lazy" src="${img(x.img)}" alt="${x.name}">
  </figure>
  <div class="product-info">
    <h3>${x.name}</h3>
    <p>${x.desc}</p>
    <div class="tags">
      ${x.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="price">${x.price ? money(x.price) : 'Liên hệ báo giá'}</div>
    <div class="product-actions">
      <a class="btn primary small" href="product.html?id=${x.id}">Xem chi tiết →</a>
      <a class="btn small" href="contact.html?type=${x.category}">Tư vấn</a>
    </div>
  </div>
</article>`;

function header(page) {
  return `
<header id="mainHeader">
  <div class="scroll-progress-bar" id="scrollProgress"></div>
  <div class="container nav">
    <a href="index.html" class="logo">
      <span class="logoicon">N</span>
      <span>
        <b>NEXUS PC</b>
        <small>SHOP PC CÁ NHÂN · BUILD · IN 3D</small>
      </span>
    </a>
    <nav class="links">
      <a class="${page === 'home' ? 'active' : ''}" href="index.html">Trang chủ</a>
      <a class="${page === 'pc' ? 'active' : ''}" href="pc.html">PC Build</a>
      <a class="${page === 'figure' ? 'active' : ''}" href="models.html">Mô hình 3D</a>
      <a href="index.html#services">Dịch vụ</a>
      <a class="${page === 'contact' ? 'active' : ''}" href="contact.html">Liên hệ</a>
    </nav>
    <div class="nav-actions">
      <a class="btn secondary small" href="index.html#services">⚙ Dịch vụ</a>
      <a class="btn primary small" href="contact.html">✉ Liên hệ tư vấn →</a>
    </div>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="foot">
  <div class="container footer-flex">
    <div>
      <b>NEXUS PC</b>
      <p>Shop PC cá nhân kết hợp dịch vụ in mô hình 3D. Đây là website demo với hình minh họa và giá tham khảo giả định, chưa có tồn kho và thanh toán trực tuyến.</p>
    </div>
    <div>
      <b>Khám phá</b>
      <p><a href="pc.html">PC Build</a> · <a href="models.html">Mô hình 3D</a> · <a href="contact.html">Liên hệ</a></p>
    </div>
    <div>
      <b>Chăm sóc khách hàng</b>
      <p>Tư vấn cấu hình · Nâng cấp · In 3D theo yêu cầu</p>
    </div>
  </div>
</footer>`;
}

function initEffects() {
  // 1. Particle Canvas System
  const canvas = document.getElementById('canvasParticles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 32), 48);

    const colors = [
      'rgba(0, 210, 255, 0.45)',
      'rgba(0, 102, 255, 0.35)',
      'rgba(168, 85, 247, 0.4)',
      'rgba(244, 114, 182, 0.35)'
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.55 - 0.2,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.angle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  // 2. Ambient Mouse Glow Follower
  const ambientSpot = document.getElementById('ambientSpotlight');
  if (ambientSpot) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let spotX = mouseX;
    let spotY = mouseY;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateAmbient() {
      spotX += (mouseX - spotX) * 0.08;
      spotY += (mouseY - spotY) * 0.08;
      ambientSpot.style.transform = `translate(${spotX - 250}px, ${spotY - 250}px)`;
      requestAnimationFrame(updateAmbient);
    }
    updateAmbient();
  }

  // 3. Header Scroll & Progress Bar
  const progressBar = document.getElementById('scrollProgress');
  const headerElem = document.getElementById('mainHeader');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (headerElem) {
      if (window.scrollY > 25) {
        headerElem.classList.add('scrolled');
      } else {
        headerElem.classList.remove('scrolled');
      }
    }
  });

  // 4. Reveal on Scroll with Smooth Staggering
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.01, rootMargin: '0px 0px 60px 0px' }
  );
  $$('.reveal').forEach(x => {
    const rect = x.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      x.classList.add('visible');
    }
    io.observe(x);
  });

  // 5. 3D Card Tilt & Dynamic Spotlight Reaction
  const tiltCards = $$('.product, .service, .promo, .contact-card, .feature-strip');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Card spotlight position
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Gentle 3D Tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}

function initHeroParallax() {
  const heroStage = document.getElementById('heroStage');
  const heroScene = document.getElementById('heroScene');
  if (!heroStage || !heroScene) return;

  const pcCase = document.getElementById('stagePc');
  const printer = document.getElementById('stagePrinter');
  const figure = document.getElementById('stageFigure');
  const badge1 = document.getElementById('stageBadge1');
  const badge2 = document.getElementById('stageBadge2');
  const badge3 = document.getElementById('stageBadge3');

  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  let isHovered = false;

  const heroWrapper = heroStage.closest('.hero');

  if (heroWrapper) {
    heroWrapper.addEventListener('mousemove', e => {
      isHovered = true;
      const rect = heroWrapper.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = normX * 14; // Horizontal tilt
      targetRotX = -normY * 12; // Vertical tilt
    });

    heroWrapper.addEventListener('mouseleave', () => {
      isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    });
  }

  function animateHeroParallax() {
    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;

    heroScene.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

    // Multi-layer Depth Parallax shifts
    const px = currentRotY;
    const py = currentRotX;

    if (pcCase) {
      pcCase.style.transform = `translate(-50%, -50%) translateZ(40px) translate3d(${(px * 1.5).toFixed(1)}px, ${(-py * 1.5).toFixed(1)}px, 0)`;
    }
    if (printer) {
      printer.style.transform = `translateZ(75px) translate3d(${(px * 2.8).toFixed(1)}px, ${(-py * 2.8).toFixed(1)}px, 0)`;
    }
    if (figure) {
      figure.style.transform = `translateZ(105px) translate3d(${(-px * 3.2).toFixed(1)}px, ${(py * 3.2).toFixed(1)}px, 0)`;
    }
    if (badge1) {
      badge1.style.transform = `translateZ(90px) translate3d(${(px * 2.2).toFixed(1)}px, ${(-py * 2.2).toFixed(1)}px, 0)`;
    }
    if (badge2) {
      badge2.style.transform = `translateZ(95px) translate3d(${(-px * 2.4).toFixed(1)}px, ${(py * 2.4).toFixed(1)}px, 0)`;
    }
    if (badge3) {
      badge3.style.transform = `translateZ(65px) translate3d(${(px * 1.8).toFixed(1)}px, ${(-py * 1.8).toFixed(1)}px, 0)`;
    }

    requestAnimationFrame(animateHeroParallax);
  }
  animateHeroParallax();
}

function shell(page, body) {
  document.body.innerHTML = `
    <canvas id="canvasParticles"></canvas>
    <div class="ambient-spotlight" id="ambientSpotlight"></div>
    ${header(page)}
    ${body}
    ${footer()}
  `;
  initEffects();
}

function home() {
  shell('home', `
<main>
  <!-- 3D ANTI-GRAVITY HERO SECTION -->
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-copy reveal">
        <span class="eyebrow">
          <span>◆</span> PC CUSTOM × MÔ HÌNH 3D × SÁNG TẠO
        </span>
        <h1>BUILD PC ĐẸP,<br><span class="gradient">MẠNH VÀ ĐÚNG</span><br>NHU CẦU</h1>
        <p>NEXUS PC là concept cửa hàng PC cá nhân: tư vấn, build máy theo ngân sách, nâng cấp linh kiện và nhận in mô hình 3D theo yêu cầu. Cùng tạo nên góc setup mang phong cách riêng.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#services">Khám phá dịch vụ →</a>
          <a class="btn" href="contact.html">Liên hệ tư vấn</a>
        </div>
        <div class="metrics">
          <div class="metric">✦ Tư vấn theo nhu cầu</div>
          <div class="metric">◈ Tùy chỉnh cấu hình</div>
          <div class="metric">⬡ Thiết kế & in 3D</div>
        </div>
      </div>

      <!-- 3D Anti-Gravity Holographic Stage -->
      <div class="hero-stage-wrapper" id="heroStage">
        <div class="hero-3d-scene" id="heroScene">
          <!-- Ambient Orbitals & Pedestal Glow -->
          <div class="pedestal-glow"></div>
          <div class="orbit-halo"></div>
          <div class="orbit-halo-2"></div>

          <!-- Central Levitating PC Case -->
          <div class="stage-pc" id="stagePc">
            <img src="${img('pcwhite.webp')}" alt="NEXUS High-End PC RGB" loading="eager">
            <div class="pc-shadow"></div>
          </div>

          <!-- Independent Floating 3D Printer with Laser Scan -->
          <div class="stage-printer" id="stagePrinter">
            <img src="${img('printer.webp')}" alt="Resin 8K 3D Printer">
            <div class="laser-beam"></div>
          </div>

          <!-- Foreground Levitating Mascot / Figure -->
          <div class="stage-figure" id="stageFigure">
            <img src="${img('figure.webp')}" alt="Resin Fantasy Figure">
          </div>

          <!-- Holographic Floating Glass Badges -->
          <div class="glass-badge badge-1" id="stageBadge1">
            <div class="status-dot"></div>
            <span>✦ RTX 40-SERIES · DLSS 3.5</span>
          </div>

          <div class="glass-badge badge-2" id="stageBadge2">
            <div class="status-dot purple"></div>
            <span>⬡ RESIN 8K · 0.02mm PRECISION</span>
          </div>

          <div class="glass-badge badge-3" id="stageBadge3">
            <div class="status-dot green"></div>
            <span>◈ AURA SYNC · 100% TESTED</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-beam"></div>

  <!-- SERVICES SECTION -->
  <section class="container section center" id="services">
    <span class="eyebrow">DỊCH VỤ NỔI BẬT</span>
    <h2>Giải pháp <span class="gradient">công nghệ & sáng tạo</span></h2>
    <p class="section-sub">Từ PC build đến mô hình in 3D, tất cả trong một không gian riêng.</p>
    
    <div class="grid4 reveal">
      ${[
        ['pcblue.webp', 'Build PC theo yêu cầu', 'Lựa chọn cấu hình hợp ngân sách, đẹp và mạnh.', 'pc.html'],
        ['gpu.webp', 'Nâng cấp linh kiện', 'Tư vấn VGA, CPU, RAM, SSD và nâng cấp hiệu năng.', 'contact.html'],
        ['gear.webp', 'Tối ưu góc máy', 'Hỗ trợ lựa chọn thiết bị và setup gọn gàng.', 'contact.html'],
        ['printer.webp', 'In mô hình 3D', 'Nhận ý tưởng, file 3D hoặc in mô hình sưu tầm.', 'models.html']
      ]
        .map(
          z => `
        <a class="service" href="${z[3]}">
          <img src="${img(z[0])}" alt="${z[1]}">
          <div>
            <h3>${z[1]}</h3>
            <p>${z[2]}</p>
          </div>
        </a>`
        )
        .join('')}
    </div>
  </section>

  <!-- HIGHLIGHT FEATURE STRIP -->
  <section class="container section">
    <div class="surface feature-strip reveal">
      <div>💙 Tư vấn tận tâm<span>Hợp nhu cầu, đúng ngân sách</span></div>
      <div>⚙ Cấu hình linh hoạt<span>Tuỳ chọn linh kiện, phong cách</span></div>
      <div>◇ Mô hình sáng tạo<span>Figure, quà tặng và décor</span></div>
      <div>☏ Hỗ trợ trực tiếp<span>Trao đổi trước khi đặt hàng</span></div>
    </div>
  </section>

  <div class="section-beam"></div>

  <!-- PROMO BANNERS -->
  <section class="container section">
    <div class="banner-row reveal">
      <a class="promo" style="background-image:url('${img('pcstudio.webp')}')" href="pc.html">
        <div>
          <small>KHÁM PHÁ PC</small>
          <h3>PC Build & Linh kiện</h3>
          <p>Chọn cấu hình mẫu, tùy biến theo mục đích sử dụng.</p>
          <span class="pill">Xem PC Build →</span>
        </div>
      </a>
      <a class="promo" style="background-image:url('${img('studio3d.webp')}')" href="models.html">
        <div>
          <small>THẾ GIỚI MÔ HÌNH</small>
          <h3>Mô hình 3D & In theo yêu cầu</h3>
          <p>Khám phá những mẫu figure sáng tạo và gửi ý tưởng của bạn.</p>
          <span class="pill">Khám phá mô hình →</span>
        </div>
      </a>
    </div>
  </section>

  <!-- FEATURED PRODUCTS -->
  <section class="container section">
    <div class="title-row">
      <h2>Một vài mẫu <span class="gradient">nổi bật</span></h2>
      <a href="pc.html" class="pill">Xem tất cả →</a>
    </div>
    <div class="grid4 reveal">
      ${[items[0], items[1], items[6], items[7]].map(card).join('')}
    </div>
  </section>
</main>`);

  initHeroParallax();
}

function catalog(which) {
  let pc = which === 'pc';
  let arr = items.filter(x => x.category === (pc ? 'pc' : 'figure'));

  shell(
    pc ? 'pc' : 'figure',
    `
<main>
  <section class="hero inner" style="background-image:url('${img(pc ? 'pcstudio.webp' : 'studio3d.webp')}')">
    <div class="container hero-content">
      <div class="hero-copy reveal">
        <span class="eyebrow">Trang chủ › ${pc ? 'PC Build' : 'Mô hình 3D'}</span>
        <h1>${pc ? 'PC BUILD <span class="gradient">THEO NHU CẦU</span>' : 'MÔ HÌNH 3D & <span class="gradient">DỊCH VỤ IN 3D</span>'}</h1>
        <p>${pc ? 'Khám phá cấu hình minh họa cho gaming, đồ họa và văn phòng. Bộ lọc giúp tìm nhanh mẫu phù hợp.' : 'Khám phá mẫu figure, decor và nhận in theo bản vẽ, ý tưởng riêng của bạn.'}</p>
        <div class="hero-actions">
          <a class="btn primary" href="contact.html?type=${pc ? 'pc' : 'figure'}">${pc ? 'Nhận tư vấn cấu hình' : 'Gửi yêu cầu in 3D'} →</a>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="filters" id="filterRow">
      ${(pc
        ? [
            ['all', 'Tất cả'],
            ['gaming', 'Gaming'],
            ['creative', 'Đồ họa'],
            ['office', 'Văn phòng']
          ]
        : [
            ['all', 'Tất cả'],
            ['figure', 'Figure'],
            ['service', 'In theo yêu cầu']
          ]
      )
        .map(([k, v]) => `<button data-filter="${k}" class="chip ${k === 'all' ? 'active' : ''}">${v}</button>`)
        .join('')}
    </div>

    <div class="catalog-layout">
      <aside class="sidebar surface">
        <h3>⚑ Bộ lọc tìm kiếm</h3>
        <label>Mức giá tối đa</label>
        <input id="maxPrice" type="number" min="0" placeholder="Không giới hạn">
        <h3 style="margin-top:20px">Tìm kiếm</h3>
        <input id="query" class="form-field" placeholder="Tên sản phẩm...">
        <p class="muted" style="font-size:11.5px;margin-top:22px">Dữ liệu và giá chỉ minh họa, không phải danh sách hàng có sẵn.</p>
      </aside>

      <section style="padding:0">
        <div class="title-row">
          <b id="count"></b>
          <select id="sort" class="form-field" style="width:200px">
            <option value="default">Sắp xếp mặc định</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>
        <div class="product-grid" id="list"></div>
      </section>
    </div>
  </div>
</main>`
  );

  let active = 'all';

  function render() {
    let q = $('#query').value.toLowerCase();
    let max = Number($('#maxPrice').value);
    let filtered = arr.filter(
      x =>
        (active === 'all' || x.kind === active) &&
        x.name.toLowerCase().includes(q) &&
        (!max || x.price <= max)
    );

    if ($('#sort').value === 'asc') filtered.sort((a, b) => a.price - b.price);
    if ($('#sort').value === 'desc') filtered.sort((a, b) => b.price - a.price);

    $('#count').textContent = `Hiển thị ${filtered.length} sản phẩm mẫu`;
    $('#list').innerHTML = filtered.length
      ? filtered.map(card).join('')
      : '<div class="empty surface">Không có sản phẩm phù hợp bộ lọc.</div>';

    // Rebind tilt to newly rendered cards
    const newCards = $$('#list .product');
    newCards.forEach(c => {
      c.addEventListener('mousemove', e => {
        const rect = c.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        c.style.setProperty('--mouse-x', `${x}px`);
        c.style.setProperty('--mouse-y', `${y}px`);
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;
        c.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      c.addEventListener('mouseleave', () => {
        c.style.transform = '';
        c.style.removeProperty('--mouse-x');
        c.style.removeProperty('--mouse-y');
      });
    });
  }

  $$('#filterRow button').forEach(x => {
    x.onclick = () => {
      active = x.dataset.filter;
      $$('#filterRow button').forEach(b => b.classList.toggle('active', b === x));
      render();
    };
  });

  ['#query', '#maxPrice', '#sort'].forEach(s => $(s).addEventListener('input', render));
  render();
}

function detail() {
  let id = Number(new URLSearchParams(location.search).get('id')) || 1;
  let x = items.find(z => z.id === id) || items[0];

  shell(
    '',
    `
<main class="container">
  <p class="muted" style="margin:20px 0">Trang chủ › ${x.category === 'pc' ? 'PC Build' : 'Mô hình 3D'} › ${x.name}</p>
  <div class="detail-layout">
    <div>
      <div class="detail-photo surface">
        <img id="detailImg" src="${img(x.img)}" alt="${x.name}">
      </div>
      <div class="thumbs">
        ${[x.img, x.category === 'pc' ? 'pcwhite.webp' : 'fairy.webp', x.category === 'pc' ? 'pcstudio.webp' : 'studio3d.webp']
          .map((a, i) => `<button class="${i === 0 ? 'active' : ''}" data-img="${a}"><img src="${img(a)}"></button>`)
          .join('')}
      </div>
    </div>
    
    <div class="detail-main">
      <span class="eyebrow">${x.category === 'pc' ? 'PC CUSTOM' : '3D CREATIVE'}</span>
      <h1>${x.name}</h1>
      <h3 class="muted">${x.desc}</h3>
      <p>Ảnh và thông tin chỉ dùng để giới thiệu concept cửa hàng. Vui lòng liên hệ để xác nhận linh kiện, mẫu thực tế và mức giá.</p>
      
      <div class="surface config">
        <h3>${x.category === 'pc' ? 'Tùy chọn cấu hình demo' : 'Tùy chọn mô hình demo'}</h3>
        ${
          x.category === 'pc'
            ? `<label>CPU</label>
               <select><option>Intel Core i5</option><option>Intel Core i7</option><option>AMD Ryzen 7</option></select>
               <label>GPU</label>
               <select><option>RTX 4060</option><option>RTX 4070</option><option>RTX 5070</option></select>
               <label>RAM</label>
               <select><option>16GB DDR5</option><option>32GB DDR5</option><option>64GB DDR5</option></select>
               <label>SSD</label>
               <select><option>1TB NVMe</option><option>2TB NVMe</option></select>`
            : `<label>Kích thước</label>
               <select><option>Nhỏ</option><option>Vừa</option><option>Lớn</option></select>
               <label>Vật liệu</label>
               <select><option>Resin</option><option>PLA</option><option>PETG</option></select>
               <label>Hoàn thiện</label>
               <select><option>Thô</option><option>Sơn màu</option></select>`
        }
      </div>
    </div>

    <aside class="surface purchase">
      <span class="muted">Giá mẫu tham khảo</span>
      <div class="price">${x.price ? money(x.price) : 'Liên hệ báo giá'}</div>
      <p class="muted">Chưa áp dụng để thanh toán. Giá cuối cùng phụ thuộc lựa chọn thực tế.</p>
      <a href="contact.html?type=${x.category}" class="btn primary">Gửi yêu cầu tư vấn →</a>
      <a href="${x.category === 'pc' ? 'pc.html' : 'models.html'}" class="btn">← Xem các mẫu khác</a>
      <hr style="border:0;border-top:1px solid #e6edfc;margin:22px 0">
      <b>◈ Tư vấn theo nhu cầu</b>
      <p class="muted">Trao đổi để xác nhận thông số và thời gian thực hiện.</p>
    </aside>
  </div>

  <div class="surface specs">
    <h2>Mô tả & thông tin</h2>
    <div class="spec-row"><b>Loại sản phẩm</b><span>${x.category === 'pc' ? 'PC lắp ráp' : 'Mô hình in 3D'}</span></div>
    <div class="spec-row"><b>Tình trạng</b><span>Demo chưa xác nhận tồn kho</span></div>
    <div class="spec-row"><b>Hình ảnh</b><span>Minh họa được tạo cho giao diện</span></div>
  </div>
</main>`
  );

  $$('.thumbs button').forEach(b => {
    b.onclick = () => {
      $('#detailImg').src = img(b.dataset.img);
      $$('.thumbs button').forEach(y => y.classList.toggle('active', y === b));
    };
  });
}

function contact() {
  let type = new URLSearchParams(location.search).get('type') || '';

  shell(
    'contact',
    `
<main>
  <section class="hero inner" style="background-image:url('${img('showroom.webp')}')">
    <div class="container hero-content">
      <div class="hero-copy reveal">
        <span class="eyebrow">NEXUS PC › LIÊN HỆ</span>
        <h1>LIÊN HỆ <span class="gradient">TƯ VẤN</span></h1>
        <p>Cho mình biết bạn cần build PC, nâng cấp máy hay in mô hình 3D. Bản demo này tạo nội dung yêu cầu để bạn có thể sao chép và gửi cho shop.</p>
      </div>
    </div>
  </section>

  <div class="container section contact-grid">
    <div class="surface form-panel">
      <h2>Gửi yêu cầu tư vấn</h2>
      <p class="muted">Form demo chưa gửi dữ liệu đến máy chủ.</p>
      <form id="contactForm">
        <div class="form-grid">
          <div>
            <label>Họ tên *</label>
            <input class="form-field" name="name" required placeholder="Tên của bạn">
          </div>
          <div>
            <label>Số điện thoại *</label>
            <input class="form-field" name="phone" required placeholder="Số liên hệ">
          </div>
          <div>
            <label>Nhu cầu</label>
            <select class="form-field" name="type">
              <option value="pc" ${type === 'pc' ? 'selected' : ''}>Build PC</option>
              <option value="upgrade">Nâng cấp linh kiện</option>
              <option value="figure" ${type === 'figure' ? 'selected' : ''}>In 3D / Mô hình</option>
              <option value="other">Tư vấn khác</option>
            </select>
          </div>
          <div>
            <label>Ngân sách dự kiến</label>
            <input class="form-field" name="budget" placeholder="Ví dụ 20 triệu">
          </div>
        </div>
        <label>Ghi chú chi tiết</label>
        <textarea class="form-field" name="note" placeholder="Mô tả cấu hình muốn build, kích thước mô hình hoặc yêu cầu của bạn..."></textarea>
        <button class="btn primary full-button" type="submit">Tạo nội dung yêu cầu →</button>
        <div id="requestResult" class="muted" style="margin-top:16px"></div>
      </form>
    </div>

    <div>
      <div class="surface contact-card">
        <h3>☏ Zalo / Facebook</h3>
        <p>Thêm kênh liên hệ thật của shop tại đây khi triển khai.</p>
      </div>
      <div class="surface contact-card">
        <h3>✉ Email tư vấn</h3>
        <p>Chưa được cấu hình — không sử dụng địa chỉ minh họa.</p>
      </div>
      <div class="surface contact-card">
        <h3>◇ PC Build & nâng cấp</h3>
        <p>Trao đổi cấu hình, ngân sách và nhu cầu sử dụng.</p>
      </div>
      <div class="surface contact-card">
        <h3>⬡ In mô hình 3D</h3>
        <p>Gửi bản vẽ, kích thước, vật liệu, màu sắc và số lượng cần in.</p>
      </div>
    </div>
  </div>
</main>`
  );

  $('#contactForm').onsubmit = e => {
    e.preventDefault();
    const d = new FormData(e.target);
    let s = `YÊU CẦU TƯ VẤN NEXUS PC\nHọ tên: ${d.get('name')}\nLiên hệ: ${d.get('phone')}\nNhu cầu: ${d.get('type')}\nNgân sách: ${d.get('budget')}\nGhi chú: ${d.get('note')}`;
    $('#requestResult').innerHTML =
      '<p style="color:#0055ff;font-weight:700">Đã tạo nội dung yêu cầu. Hãy sao chép và gửi qua kênh liên hệ của shop.</p><textarea class="form-field" readonly id="copyText"></textarea><button class="btn primary" id="copyBtn" type="button" style="margin-top:10px">Sao chép nội dung</button>';
    $('#copyText').value = s;
    $('#copyBtn').onclick = () => {
      navigator.clipboard?.writeText(s)
        .then(() => ($('#copyBtn').textContent = 'Đã sao chép ✓'))
        .catch(() => {
          $('#copyText').select();
          document.execCommand('copy');
        });
    };
  };
}

// Router execution
let page = document.body.dataset.page;
if (page === 'home') home();
else if (page === 'pc') catalog('pc');
else if (page === 'figure') catalog('figure');
else if (page === 'detail') detail();
else contact();
