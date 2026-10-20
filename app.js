const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const money = n => Number(n).toLocaleString('vi-VN') + 'đ';

// PRODUCT CATALOG DATA
const items = [
  { id: 1, category: 'pc', name: 'NEXUS Aurora Gaming', price: 24990000, desc: 'PC gaming RGB kính vô cực Panoramic 270°, tản nhiệt nước AIO 360.', img: 'pc-white-rgb.png', badge: 'Nổi bật', tags: ['Gaming 2K', 'Core i5-14600KF', 'RTX 4060Ti White', '32GB DDR5'], kind: 'gaming' },
  { id: 2, category: 'pc', name: 'NEXUS Creator White', price: 34990000, desc: 'Setup đồ họa & 3D render chuyên nghiệp kết hợp figure pha lê.', img: 'combo-pc-figure.png', badge: 'Showcase', tags: ['Đồ họa 3D', 'Core i7-14700K', 'RTX 4070Ti Super', '64GB DDR5'], kind: 'creative' },
  { id: 3, category: 'pc', name: 'NEXUS Sky Studio', price: 18990000, desc: 'Góc làm việc hiện đại, vận hành êm ái, tối ưu không gian bàn làm việc.', img: 'pc-white-rgb.png', badge: 'Đề xuất', tags: ['Văn phòng VIP', 'Core i5-13400', '16GB RAM', '1TB NVMe'], kind: 'office' },
  { id: 4, category: 'pc', name: 'NEXUS Dream Extreme', price: 45990000, desc: 'Cỗ máy gaming tối thượng, tản nhiệt nước đồng bộ đèn ARGB Aura Sync.', img: 'combo-pc-figure.png', badge: 'Flagship', tags: ['Ultra 4K', 'Core i9-14900K', 'RTX 4080 Super', '64GB RGB'], kind: 'gaming' },
  { id: 5, category: 'pc', name: 'NEXUS Frost Valkyrie', price: 29990000, desc: 'Tone trắng tuyết sang trọng, cáp bọc lưới custom, luồng gió đối lưu cao.', img: 'pc-white-rgb.png', badge: 'Bán chạy', tags: ['Gaming Esports', 'Ryzen 7 7800X3D', 'RTX 4070 White'], kind: 'gaming' },
  { id: 6, category: 'pc', name: 'NEXUS Compact Mini', price: 16990000, desc: 'Case nhỏ gọn thanh lịch, phù hợp góc làm việc tinh tế và tối giản.', img: 'hero.webp', badge: 'Build riêng', tags: ['Mini-ITX', 'Tiết kiệm điện', 'Gọn gàng'], kind: 'office' },
  { id: 7, category: 'figure', name: 'Crystal Blue Fantasy', price: 1290000, desc: 'Figure phong cách pha lê xanh, hoàn thiện resin 8K siêu sắc nét.', img: 'figure-crystal-blue.png', badge: 'Figure 8K', tags: ['Resin Cao Cấp', 'Đế Led Pha Lê', 'Trưng bày Setup'], kind: 'figure' },
  { id: 8, category: 'figure', name: 'Fairy Crystal Statue', price: 1590000, desc: 'Mô hình fantasy điêu khắc tinh xảo, sơn phủ mờ chống bám vân tay.', img: 'figure-fairy-stand.png', badge: 'Yêu thích', tags: ['Resin 8K', 'Chi tiết tóc siêu nét', 'Fantasy'], kind: 'figure' },
  { id: 9, category: 'figure', name: 'Ice Cat Girl Anime', price: 890000, desc: 'Mô hình anime tone trắng xanh pastel, điểm nhấn dễ thương cho góc máy.', img: 'cat.webp', badge: 'Mới', tags: ['Anime Decor', 'Resin UV', 'Trưng bày VGA'], kind: 'figure' },
  { id: 10, category: 'figure', name: 'NEXUS Studio Edition', price: 1990000, desc: 'Tác phẩm độc bản sản xuất giới hạn kèm chứng nhận số thứ tự.', img: 'combo-printer-figure.png', badge: 'Studio Limit', tags: ['Sơn thủ công', 'Resin 8K', 'Độc bản'], kind: 'service' },
  { id: 11, category: 'figure', name: 'Dịch Vụ In 3D Theo File', price: 0, desc: 'Nhận in mô hình resin độ chính xác 0.02mm theo file 3D hoặc ý tưởng riêng.', img: 'printer-figure.png', badge: 'Đặt riêng', tags: ['Độ chính xác 0.02mm', 'Resin 8K', 'Tư vấn 1-1'], kind: 'service' },
  { id: 12, category: 'figure', name: 'Creative Idol Concept', price: 990000, desc: 'Mẫu thiết kế mô hình thần tượng phong cách tương lai Cyberpunk.', img: 'figure-crystal-blue.png', badge: 'Concept', tags: ['Cyberpunk', 'Resin', 'Góc máy đẹp'], kind: 'figure' }
];

const img = n => 'assets/' + n;

// HERO SHOWCASE PRESETS DATA
const heroModes = {
  aurora: {
    title: 'NEXUS Aurora Gaming',
    badge: 'PC GAMING FLAGSHIP',
    accentColor: '#00d2ff',
    auraGlow: 'rgba(0, 210, 255, 0.35)',
    tagline: 'Cỗ máy toàn cảnh Panoramic 270° · Tản nước ARGB Aura Sync',
    desc: 'Thiết kế kính trong suốt hai mặt không cột chắn góc, trang bị luồng gió 9 quạt ARGB đối lưu và linh kiện tone trắng nguyên khối cực kỳ cuốn hút.',
    image: 'pc-white-rgb.png',
    specs: [
      { icon: '🧠', label: 'CPU', val: 'Intel Core i7-14700KF', pos: 'pos-cpu' },
      { icon: '🎮', label: 'VGA', val: 'RTX 4070 Ti Super 16G White', pos: 'pos-vga' },
      { icon: '⚡', label: 'RAM', val: '32GB DDR5 6400 ARGB', pos: 'pos-ram' },
      { icon: '❄️', label: 'TẢN NHIỆT', val: 'AIO 360 Liquid Infinity Mirror', pos: 'pos-cooler' }
    ],
    hotspots: [
      { top: '24%', left: '50%', title: 'AIO Liquid 360', desc: 'Mặt gương vô cực Infinity Mirror, 3 fan ARGB thủy lực êm ái dưới 22dB.' },
      { top: '63%', left: '46%', title: 'VGA RTX White Dựng Đứng', desc: 'Cáp Riser PCIe 4.0 bọc bạc chống nhiễu, show trọn dải LED 3 quạt ARGB.' },
      { top: '42%', left: '68%', title: 'DDR5 6400MHz XMP 3.0', desc: 'Đồng bộ hiệu ứng led Asus Aura / MSI Mystic Light qua phần mềm.' },
      { top: '78%', left: '26%', title: 'Kính Panoramic 270°', desc: 'Kính cường lực vát góc siêu trong, không dùng trụ kim loại cản tầm nhìn.' }
    ]
  },
  combo: {
    title: 'NEXUS Creator & Crystal Figure',
    badge: 'SHOWCASE NGHỆ THUẬT',
    accentColor: '#a855f7',
    auraGlow: 'rgba(168, 85, 247, 0.4)',
    tagline: 'Sự giao thoa hoàn hảo giữa PC Đỉnh Cao & Figure Điêu Khắc 3D',
    desc: 'Mang tinh hoa nghệ thuật vào góc máy: Mô hình Crystal Blue sắc nét từng đường nét seated bên cạnh cỗ máy gaming tone trắng băng tuyết.',
    image: 'combo-pc-figure.png',
    specs: [
      { icon: '🎨', label: 'Chủ đề', val: 'Crystal Blue & Snow White', pos: 'pos-cpu' },
      { icon: '💎', label: 'Figure', val: 'Resin 8K Điêu Khắc Thủ Công', pos: 'pos-vga' },
      { icon: '✨', label: 'Đế Led', val: 'Pha Lê Tròn Chiếu Sáng Đa Tầng', pos: 'pos-ram' },
      { icon: '⚡', label: 'Hiệu năng', val: 'Render 3D & Gaming 4K Siêu Mượt', pos: 'pos-cooler' }
    ],
    hotspots: [
      { top: '56%', left: '33%', title: 'Figure Resin 8K Thủ Công', desc: 'Tái hiện sắc nét từng sợi tóc và nếp gấp váy, phủ bóng nano chống trầy.' },
      { top: '38%', left: '74%', title: 'Case PC Tone Trắng Đồng Điệu', desc: 'Ánh sáng ARGB xanh pha lê đồng bộ hoàn toàn với màu sắc mô hình.' },
      { top: '88%', left: '32%', title: 'Đế Pha Lê Chiếu Đèn LED', desc: 'Phản chiếu hiệu ứng ánh sáng quang sai lung linh lên không gian làm việc.' }
    ]
  },
  printer: {
    title: 'Trạm In 3D Resin 8K Ultra',
    badge: 'DỊCH VỤ IN 3D CHUYÊN NGHIỆP',
    accentColor: '#00f2fe',
    auraGlow: 'rgba(0, 242, 254, 0.35)',
    tagline: 'Độ chính xác 0.02mm · Hiện thực hóa mọi bản vẽ & ý tưởng nhân vật',
    desc: 'Hệ thống máy in 3D công nghệ Resin 8K công nghiệp khép kín, lọc mùi than hoạt tính và kiểm soát nhiệt độ buồng in chuẩn xác cho độ mịn màng bề mặt tuyệt đối.',
    image: 'printer-figure.png',
    specs: [
      { icon: '🎯', label: 'Độ nét', val: 'Màn hình 8K đơn sắc (0.02mm)', pos: 'pos-cpu' },
      { icon: '🧪', label: 'Vật liệu', val: 'Resin dẻo chống giòn cao cấp', pos: 'pos-vga' },
      { icon: '💡', label: 'Xử lý', val: 'Rửa siêu âm & Sấy UV 360°', pos: 'pos-ram' },
      { icon: '🎨', label: 'Dịch vụ', val: 'Sơn phủ chi tiết theo file 3D', pos: 'pos-cooler' }
    ],
    hotspots: [
      { top: '28%', left: '50%', title: 'Cụm Đầu In Trục Z Kép', desc: 'Thanh trượt tuyến tính kép khử hoàn toàn rung lắc và vân ngang bề mặt.' },
      { top: '58%', left: '46%', title: 'Buồng In Nhiệt Độ Cố Định', desc: 'Đảm bảo nhựa resin lưu hóa đồng đều, không bị biến dạng chi tiết nhỏ.' },
      { top: '80%', left: '26%', title: 'Sản Phẩm Mẫu Hoàn Thiện', desc: 'Bề mặt láng mịn sẵn sàng cho các công đoạn đánh bóng và lên màu.' }
    ]
  },
  gear: {
    title: 'Góc Máy & Gear White Edition',
    badge: 'SETUP GEAR ĐỒNG BỘ',
    accentColor: '#3b82f6',
    auraGlow: 'rgba(59, 130, 246, 0.35)',
    tagline: 'Phím cơ Custom · Chuột không dây công thái học · Tai nghe ARGB',
    desc: 'Hoàn thiện góc setup mơ ước với bộ phụ kiện gaming tone trắng cao cấp, switch bôi trơn sẵn mượt mà và hệ thống led viền huyền ảo.',
    image: 'gear-setup-white.png',
    specs: [
      { icon: '⌨️', label: 'Bàn phím', val: 'Gasket Mount Custom White', pos: 'pos-cpu' },
      { icon: '🖱️', label: 'Chuột', val: 'Paw3395 26000DPI Siêu Nhẹ 55g', pos: 'pos-vga' },
      { icon: '🎧', label: 'Tai nghe', val: 'Âm thanh vòm 7.1 Surround', pos: 'pos-ram' },
      { icon: '📶', label: 'Kết nối', val: 'Tri-Mode: 2.4G / BT 5.2 / Type-C', pos: 'pos-cooler' }
    ],
    hotspots: [
      { top: '65%', left: '28%', title: 'Bàn Phím Cơ Vỏ Trong Suốt', desc: 'Keycap PBT Double-shot xuyên led, cấu trúc Gasket tiêu âm đầm tay.' },
      { top: '78%', left: '72%', title: 'Chuột Gaming Ergonomic', desc: 'Form cầm ôm sát bàn tay, phủ lớp phủ chống mồ hôi và switch quang học.' },
      { top: '30%', left: '76%', title: 'Headset Vành Nhôm Cao Cấp', desc: 'Đệm tai memory foam thoáng khí, mic khử ồn AI lọc âm trong trẻo.' }
    ]
  }
};

// INTERACTIVE CONFIGURATOR DATA
const configPresets = {
  gaming: {
    name: 'Cấu Hình Esports & Gaming 2K',
    target: 'Chuyên game FPS, MOBA và game AAA đồ họa cao ở độ phân giải 2K',
    price: 24990000,
    cpu: 'Intel Core i5-14600KF (14 nhân 20 luồng, Turbo 5.3GHz)',
    gpu: 'NVIDIA GeForce RTX 4060 Ti 8GB White OC',
    ram: '32GB DDR5 6000MHz RGB TeamGroup T-Force (2x16GB)',
    ssd: '1TB M.2 PCIe Gen4 NVMe (Tốc độ đọc 5000MB/s)',
    main: 'B760M Steel Legend WiFi White Edition',
    psu: '750W 80 Plus Bronze / Gold Modular',
    caseCooler: 'Case Kính Bể Cá Trắng + Tản Nước AIO 240 ARGB',
    games: [
      { name: 'CS2 (2K High)', fps: '320+ FPS' },
      { name: 'Valorant (2K Max)', fps: '450+ FPS' },
      { name: 'Black Myth: Wukong (2K DLSS)', fps: '85+ FPS' },
      { name: 'Cyberpunk 2077 (2K RT Ultra)', fps: '78+ FPS' }
    ]
  },
  creative: {
    name: 'Cấu Hình Đồ Họa 3D & Video 4K',
    target: 'Chuyên Premiere 4K, After Effects, Blender, 3Ds Max, Photoshop',
    price: 36990000,
    cpu: 'Intel Core i7-14700K (20 nhân 28 luồng, Turbo 5.6GHz)',
    gpu: 'NVIDIA GeForce RTX 4070 Super 12GB GDDR6X',
    ram: '64GB DDR5 6400MHz Corsair Vengeance White (2x32GB)',
    ssd: '2TB Kingston KC3000 PCIe 4.0 (Đọc 7000MB/s - Ghi 7000MB/s)',
    main: 'Z790 White Gaming WiFi',
    psu: '850W 80 Plus Gold ATX 3.0 PCIe 5.0',
    caseCooler: 'Case Dual-Chamber Kính Panoramic + Tản Nước AIO 360',
    games: [
      { name: 'Blender Viewport', fps: 'Render Siêu Tốc' },
      { name: 'Premiere Pro 4K', fps: 'Live Playback 100%' },
      { name: 'Wukong (4K DLSS Balanced)', fps: '75+ FPS' },
      { name: 'Forza Horizon 5 (4K Extreme)', fps: '110+ FPS' }
    ]
  },
  ai: {
    name: 'Cấu Hình Streamer & AI Workstation',
    target: 'Livestream đa nền tảng, chạy Stable Diffusion, V-Tuber, Local LLM',
    price: 49990000,
    cpu: 'AMD Ryzen 9 7900X3D hoặc Core i9-14900K',
    gpu: 'NVIDIA GeForce RTX 4080 Super 16GB GDDR6X White',
    ram: '64GB DDR5 6400MHz RGB CL32',
    ssd: '2TB PCIe 4.0 NVMe + 2TB Lưu trữ video stream',
    main: 'X670E / Z790 Creator WiFi cao cấp',
    psu: '1000W 80 Plus Platinum Chuẩn ATX 3.0',
    caseCooler: 'Case Full Tower Trắng Tuyết + Tản Nước AIO 360 LCD Display',
    games: [
      { name: 'OBS Stream + Game 2K', fps: '0 Giật Lag' },
      { name: 'Stable Diffusion XL', fps: '1.8s / bức ảnh' },
      { name: 'Cyberpunk 2077 (4K Pathtracing)', fps: '80+ FPS' },
      { name: 'Black Myth (4K Cinematic)', fps: '95+ FPS' }
    ]
  },
  minimal: {
    name: 'Cấu Hình Tối Giản & Văn Phòng Sang',
    target: 'Góc làm việc tinh tế, lướt web, xử lý tài liệu, giải trí nhẹ nhàng',
    price: 15990000,
    cpu: 'Intel Core i5-13400 (10 nhân 16 luồng)',
    gpu: 'Intel UHD Graphics 730 hoặc GTX 1650 / RTX 3050',
    ram: '16GB DDR4/DDR5 3200-5200MHz',
    ssd: '512GB M.2 NVMe Tốc độ cao',
    main: 'B760M White Edition',
    psu: '550W 80 Plus Bronze Chứng nhận chuẩn',
    caseCooler: 'Case Mini m-ATX Kính cường lực + Fan Led êm ru',
    games: [
      { name: 'LOL / FO4 (Max Setting)', fps: '200+ FPS' },
      { name: 'Khởi động Windows', fps: '5 Giây' },
      { name: 'Nhiệt độ văn phòng', fps: 'Dưới 48°C' },
      { name: 'Độ ồn hoạt động', fps: 'Hoàn toàn tĩnh lặng' }
    ]
  }
};

const card = x => `
<article class="product" data-tilt="card">
  <span class="badge">${x.badge}</span>
  <span class="product-tech-chip">✦ ${x.category === 'pc' ? 'PCIe 5.0 · ARGB' : 'RESIN 8K · 0.02mm'}</span>
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
      <a class="btn secondary small" href="contact.html?type=${x.category}">Tư vấn</a>
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
        <small>PC CUSTOM · HIỆU NĂNG · IN 3D NGHỆ THUẬT</small>
      </span>
    </a>
    <nav class="links">
      <a class="${page === 'home' ? 'active' : ''}" href="index.html">Trang chủ</a>
      <a class="${page === 'pc' ? 'active' : ''}" href="pc.html">PC Build</a>
      <a class="${page === 'figure' ? 'active' : ''}" href="models.html">Mô hình 3D</a>
      <a href="index.html#configurator">Dự toán cấu hình</a>
      <a href="index.html#services">Dịch vụ</a>
      <a class="${page === 'contact' ? 'active' : ''}" href="contact.html">Liên hệ</a>
    </nav>
    <div class="nav-actions">
      <a class="btn secondary small" href="index.html#configurator">⚡ Tự chọn cấu hình</a>
      <a class="btn primary small" href="contact.html">✉ Tư vấn ngay →</a>
    </div>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="foot">
  <div class="container footer-flex">
    <div class="foot-col-main">
      <a href="index.html" class="logo foot-logo">
        <span class="logoicon">N</span>
        <span>
          <b>NEXUS PC</b>
          <small>NÂNG TẦM GÓC MÁY CÔNG NGHỆ</small>
        </span>
      </a>
      <p>NEXUS PC định hình trải nghiệm PC Gaming và Góc Làm Việc hiện đại: Sự kết hợp giữa cấu hình tối ưu hiệu năng, thẩm mỹ tinh tế và mô hình nghệ thuật in 3D độc bản.</p>
      <div class="foot-trust-badges">
        <span>✓ 100% Linh kiện chính hãng</span>
        <span>✓ Bảo hành tận tâm 36T</span>
        <span>✓ Hỗ trợ kỹ thuật trọn đời</span>
      </div>
    </div>
    <div class="foot-col">
      <b>Sản Phẩm & Dịch Vụ</b>
      <p><a href="pc.html">✦ PC Gaming Cao Cấp</a></p>
      <p><a href="pc.html">✦ PC Đồ Họa & 3D Render</a></p>
      <p><a href="models.html">✦ Dịch Vụ In 3D Resin 8K</a></p>
      <p><a href="models.html">✦ Mô Hình Anime Sưu Tầm</a></p>
    </div>
    <div class="foot-col">
      <b>Hỗ Trợ Khách Hàng</b>
      <p><a href="contact.html">Tư vấn cấu hình theo ngân sách</a></p>
      <p><a href="contact.html">Yêu cầu báo giá in file 3D</a></p>
      <p><a href="contact.html">Chính sách bảo hành & nâng cấp</a></p>
      <p><a href="index.html#process">Quy trình làm việc chuẩn</a></p>
    </div>
  </div>
  <div class="container foot-bottom">
    <p>© 2026 NEXUS PC. All rights reserved. Website trải nghiệm tương tác cao cấp.</p>
  </div>
</footer>`;
}

// ==========================================================================
// DYNAMIC CYBER WORLD BACKGROUND ENGINE (AMBIENT CONSTELLATION & MORPH PULSE)
// ==========================================================================
function initCyberWorldEngine() {
  const canvas = document.getElementById('canvasParticles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = window.innerWidth;
  let h = window.innerHeight;

  let currentWorld = 0;
  let targetWorld = 0;
  let morphProgress = 1;
  let shockwaves = [];
  let time = 0;

  // 7 Unique Stage World Color Themes matching the White Cyber Showroom aesthetic
  const worldThemes = [
    { neon: '#00d2ff', line: 'rgba(0, 180, 255, 0.22)', core: 'rgba(0, 102, 255, 0.35)', pulse: '#00d2ff' }, // 0: Hero
    { neon: '#00f5d4', line: 'rgba(0, 245, 212, 0.20)', core: 'rgba(0, 168, 140, 0.35)', pulse: '#00f5d4' }, // 1: Services
    { neon: '#f59e0b', line: 'rgba(245, 158, 11, 0.20)', core: 'rgba(217, 119, 6, 0.35)', pulse: '#fbbf24' }, // 2: Configurator
    { neon: '#a855f7', line: 'rgba(168, 85, 247, 0.22)', core: 'rgba(124, 58, 237, 0.35)', pulse: '#c084fc' }, // 3: Showcase
    { neon: '#0284c7', line: 'rgba(2, 132, 199, 0.22)', core: 'rgba(3, 105, 161, 0.35)', pulse: '#38bdf8' }, // 4: Products
    { neon: '#2563eb', line: 'rgba(37, 99, 235, 0.22)', core: 'rgba(29, 78, 216, 0.35)', pulse: '#60a5fa' }, // 5: Process
    { neon: '#f43f5e', line: 'rgba(244, 63, 94, 0.22)', core: 'rgba(190, 18, 60, 0.35)', pulse: '#fb7185' }  // 6: CTA
  ];

  let particles = [];

  function initWorldAssets() {
    particles = [];
    const pCount = Math.min(Math.floor(w / 28), 65);
    for (let i = 0; i < pCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 1.2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.45 - 0.12,
        alpha: Math.random() * 0.55 + 0.35,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    initWorldAssets();
  }
  window.addEventListener('resize', resize);
  resize();

  function render() {
    time += 0.016;
    ctx.clearRect(0, 0, w, h);

    const curTheme = worldThemes[currentWorld] || worldThemes[0];
    const tgtTheme = worldThemes[targetWorld] || curTheme;
    const activeNeon = morphProgress < 1 ? tgtTheme.neon : curTheme.neon;
    const activeLine = morphProgress < 1 ? tgtTheme.line : curTheme.line;
    const activePulse = morphProgress < 1 ? tgtTheme.pulse : curTheme.pulse;

    // 1. Subtle Horizon Perspective Glow Wave (Very gentle bottom atmosphere)
    const horizonY = h * 0.92;
    const grad = ctx.createLinearGradient(0, horizonY - 60, 0, h);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, activeLine);
    ctx.fillStyle = grad;
    ctx.fillRect(0, horizonY - 60, w, h - (horizonY - 60));

    // 2. Dynamic Expanding Shockwave Sonar Ripples on World Morph
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += (sw.maxRadius - sw.radius) * 0.055;
      sw.alpha -= 0.022;

      if (sw.alpha <= 0 || sw.radius >= sw.maxRadius * 0.98) {
        shockwaves.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = sw.alpha * 0.7;
      ctx.strokeStyle = activePulse;
      ctx.lineWidth = 2.4;
      ctx.shadowColor = activePulse;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();

      if (sw.radius > 60) {
        ctx.globalAlpha = sw.alpha * 0.35;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius * 0.72, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }

    // 3. Connective Constellation Laser Links between nearby particles
    const maxDist = 95;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const linkAlpha = (1 - dist / maxDist) * 0.32;
          ctx.strokeStyle = activeLine;
          ctx.globalAlpha = linkAlpha;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // 4. Floating Ambient Cyber Light Motes (Glowing energy motes)
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -15) { p.y = h + 15; p.x = Math.random() * w; }
      if (p.x < -15) p.x = w + 15;
      if (p.x > w + 15) p.x = -15;

      const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.25 + 0.75;
      ctx.save();
      ctx.globalAlpha = p.alpha * pulse;
      ctx.fillStyle = activeNeon;
      ctx.shadowColor = activeNeon;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // White hot core
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Transition controller
  function morphToWorld(newWorldIdx, duration = 1.15, shockX = w * 0.5, shockY = h * 0.5) {
    if (newWorldIdx === targetWorld && morphProgress >= 1) return;
    targetWorld = newWorldIdx;
    morphProgress = 0;

    shockwaves.push({
      x: shockX,
      y: shockY,
      radius: 15,
      maxRadius: Math.max(w, h) * 1.35,
      alpha: 1
    });

    gsap.killTweensOf(window.cyberWorldEngineState || {});
    window.cyberWorldEngineState = { p: 0 };
    gsap.to(window.cyberWorldEngineState, {
      p: 1,
      duration: duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        morphProgress = window.cyberWorldEngineState.p;
      },
      onComplete: () => {
        currentWorld = newWorldIdx;
        morphProgress = 1;
      }
    });
  }

  window.cyberWorldEngine = {
    morphToWorld,
    getCurrentWorld: () => currentWorld
  };
}

function initEffects() {
  // 1. High-Performance Cyber World Background Engine
  initCyberWorldEngine();

  // (Mouse follower spotlight removed per user request)


  // 3. Header Progress Bar & Scrolled State
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

  // 4. Reveal on Scroll with Smooth Stagger
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal').forEach(x => {
    const rect = x.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30) {
      x.classList.add('visible');
    }
    io.observe(x);
  });

  // 5. 3D Card Hover Perspective Tilt
  const tiltCards = $$('.product, .service-card, .promo, .contact-card, .process-card, .bento-item');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });
}

// HERO INTERACTIVE SHOWCASE CONTROLLER
function initHeroShowcase() {
  const heroStage = document.getElementById('heroHoloStage');
  const heroImg = document.getElementById('heroMainImg');
  const heroTitle = document.getElementById('heroModeTitle');
  const heroTagline = document.getElementById('heroModeTagline');
  const heroBadge = document.getElementById('heroModeBadge');
  const heroSpecsList = document.getElementById('heroSpecsList');
  const heroHotspotsWrap = document.getElementById('heroHotspotsWrap');
  const modeButtons = $$('.hero-mode-btn');

  if (!heroStage || !heroImg) return;

  function renderHotspots(modeData) {
    if (!heroHotspotsWrap) return;
    heroHotspotsWrap.innerHTML = modeData.hotspots
      .map(
        (h, idx) => `
      <div class="holo-hotspot" style="top: ${h.top}; left: ${h.left};" data-idx="${idx}">
        <div class="hotspot-beacon">
          <span class="beacon-pulse"></span>
          <span class="beacon-core"></span>
        </div>
        <div class="hotspot-hud-card">
          <div class="hud-header">
            <span class="hud-indicator"></span>
            <b>${h.title}</b>
          </div>
          <p>${h.desc}</p>
        </div>
      </div>
    `
      )
      .join('');
  }

  function switchHeroMode(key) {
    const data = heroModes[key];
    if (!data) return;

    modeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === key));
    heroStage.classList.add('mode-switching');

    setTimeout(() => {
      heroImg.src = img(data.image);
      heroImg.alt = data.title;
      if (heroTitle) heroTitle.textContent = data.title;
      if (heroTagline) heroTagline.textContent = data.tagline;
      if (heroBadge) heroBadge.textContent = data.badge;

      if (heroSpecsList) {
        heroSpecsList.innerHTML = data.specs
          .map(
            s => `
          <div class="hero-spec-tag-floating ${s.pos || ''}">
            <div class="spec-tag-icon-box">${s.icon || '✦'}</div>
            <div class="spec-tag-texts">
              <span class="spec-tag-cat">${s.label}</span>
              <b class="spec-tag-title">${s.val}</b>
            </div>
            <div class="spec-tag-leader-line"></div>
          </div>
        `
          )
          .join('');
      }

      heroStage.style.setProperty('--stage-glow', data.auraGlow);
      heroStage.style.setProperty('--stage-accent', data.accentColor);
      renderHotspots(data);
      heroStage.classList.remove('mode-switching');
    }, 180);
  }

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      switchHeroMode(btn.dataset.mode);
    });
  });

  switchHeroMode('aurora');

  let targetRotX = 0, targetRotY = 0, currentRotX = 0, currentRotY = 0;
  const heroWrapper = heroStage.closest('.hero');
  if (heroWrapper) {
    heroWrapper.addEventListener('mousemove', e => {
      const rect = heroWrapper.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = normX * 10;
      targetRotX = -normY * 8;
    });

    heroWrapper.addEventListener('mouseleave', () => {
      targetRotX = 0;
      targetRotY = 0;
    });
  }

  function animateShowcase() {
    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;

    const scrollY = window.scrollY;
    const scrollFactor = Math.min(1, Math.max(0, scrollY / 500));
    const translateY = scrollFactor * 40;
    const scale = 1 - scrollFactor * 0.05;

    heroStage.style.transform = `perspective(1200px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`;
    requestAnimationFrame(animateShowcase);
  }
  animateShowcase();
}

// INTERACTIVE CONFIGURATOR CONTROLLER
function initConfigurator() {
  const tabs = $$('.config-tab-btn');
  const resultCard = document.getElementById('configResultCard');
  if (!tabs.length || !resultCard) return;

  function renderPreset(key) {
    const data = configPresets[key];
    if (!data) return;

    tabs.forEach(t => t.classList.toggle('active', t.dataset.key === key));

    resultCard.innerHTML = `
      <div class="config-card-inner">
        <div class="config-header">
          <div>
            <span class="config-badge">✦ CẤU HÌNH ĐỀ XUẤT</span>
            <h3>${data.name}</h3>
            <p class="config-target">${data.target}</p>
          </div>
          <div class="config-price-box">
            <small>Mức giá tham khảo</small>
            <div class="config-price">${money(data.price)}</div>
          </div>
        </div>

        <div class="config-specs-grid">
          <div class="config-spec-row">
            <span class="spec-icon">🧠</span>
            <div>
              <small>Vi xử lý (CPU)</small>
              <b>${data.cpu}</b>
            </div>
          </div>
          <div class="config-spec-row">
            <span class="spec-icon">🎮</span>
            <div>
              <small>Card đồ họa (VGA)</small>
              <b>${data.gpu}</b>
            </div>
          </div>
          <div class="config-spec-row">
            <span class="spec-icon">⚡</span>
            <div>
              <small>Bộ nhớ trong (RAM)</small>
              <b>${data.ram}</b>
            </div>
          </div>
          <div class="config-spec-row">
            <span class="spec-icon">💾</span>
            <div>
              <small>Ổ cứng lưu trữ (SSD)</small>
              <b>${data.ssd}</b>
            </div>
          </div>
          <div class="config-spec-row">
            <span class="spec-icon">🔌</span>
            <div>
              <small>Bo mạch & Nguồn</small>
              <b>${data.main} · ${data.psu}</b>
            </div>
          </div>
          <div class="config-spec-row">
            <span class="spec-icon">❄️</span>
            <div>
              <small>Vỏ Case & Tản nhiệt</small>
              <b>${data.caseCooler}</b>
            </div>
          </div>
        </div>

        <div class="config-benchmarks">
          <span class="bench-title">Hiệu năng thực tế ước tính:</span>
          <div class="bench-tags">
            ${data.games.map(g => `<span class="bench-tag"><b>${g.name}:</b> ${g.fps}</span>`).join('')}
          </div>
        </div>

        <div class="config-card-actions">
          <a class="btn primary" href="contact.html?type=pc&build=${encodeURIComponent(data.name)}&budget=${data.price}">
            ✉ Nhận tư vấn cấu hình này ngay →
          </a>
          <a class="btn secondary" href="pc.html">
            Xem thêm các mẫu PC tương đương
          </a>
        </div>
      </div>
    `;
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      renderPreset(tab.dataset.key);
    });
  });

  renderPreset('gaming');
}

// ==========================================================================
// INTERACTIVE ROBOT SCROLL JOURNEY & PREVIEW CONTROLLER
// ==========================================================================
// ==========================================================================
// INTERACTIVE ROBOT SCROLL JOURNEY & CINEMATIC STAGE FLIGHT CONTROLLER
// ==========================================================================
let globalGoToStage = null;

function initRobotScrollJourney() {
  const robotEl = document.getElementById('nexusRobotCompanion');
  const speechBubble = document.getElementById('robotSpeechBubble');
  const speechText = document.getElementById('robotSpeechText');
  const holoEmitter = document.getElementById('robotHoloEmitter');
  const scanBeam = document.getElementById('robotScanBeam');
  const eyeScreen = document.getElementById('robotScreenOverlay');

  if (!robotEl) return;

  if (window.gsap && window.MotionPathPlugin) {
    gsap.registerPlugin(MotionPathPlugin);
  }

  // Safe landing stations that alternate dynamically across sections ("di chuyển qua lại")
  function getStations() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = w < 850;

    if (isMobile) {
      return {
        0: { x: w * 0.84, y: h * 0.16, facing: 'left' },
        1: { x: w * 0.84, y: h * 0.26, facing: 'left' },
        2: { x: w * 0.84, y: h * 0.32, facing: 'left' },
        3: { x: w * 0.84, y: h * 0.26, facing: 'left' },
        4: { x: w * 0.84, y: h * 0.70, facing: 'left' }
      };
    }

    // On Desktop: Alternate between Right and Left outer margin airspace ("di chuyển qua lại")
    const containerMargin = Math.max(50, (w - Math.min(1480, w * 0.93)) / 2);
    const leftMarginX = Math.max(70, Math.min(110, containerMargin / 2));
    const rightMarginX = Math.min(w - 70, Math.max(w - 110, w - containerMargin / 2));

    return {
      0: { x: Math.min(w - 95, w * 0.86), y: h * 0.22, facing: 'left' },   // Stage 0 (Hero): Upper Right
      1: { x: leftMarginX, y: h * 0.25, facing: 'right' },  // Stage 1 (Services Bento): Left Margin
      2: { x: rightMarginX, y: h * 0.30, facing: 'left' },   // Stage 2 (Configurator): Right Margin
      3: { x: leftMarginX, y: h * 0.28, facing: 'right' },  // Stage 3 (Showcase Banners): Left Margin
      4: { x: rightMarginX, y: h * 0.24, facing: 'left' },   // Stage 4 (Featured Products): Right Margin
      5: { x: leftMarginX, y: h * 0.28, facing: 'right' },  // Stage 5 (Craftsmanship Process): Left Margin
      6: { x: rightMarginX, y: h * 0.52, facing: 'left' }    // Stage 6 (Final CTA): Right Margin
    };
  }

  let speechFadeTimer = null;
  let effectTimer = null;
  let currentStageIndex = 0;
  let isFlying = false;

  const stageDialogues = [
    'Xin chào! Mình là NEXUS Bot ✨ Cùng khám phá dàn máy ước mơ nhé!',
    'Khu vực PC Build độc quyền nè! Đi dây giấu kín cực chuẩn ⚡',
    'Xem chip & GPU khủng ở đây nhé! Cân mượt mọi tựa game 4K 🎮',
    'Hai tuyệt tác đỉnh cao: PC Panoramic và Xưởng In 3D Độc Bản! 💎',
    'Top sản phẩm tuyển chọn! Cấu hình tối ưu và figure siêu chi tiết ✨',
    'Quy trình 4 bước chuẩn chỉ, bảo hành 1-đổi-1 an tâm tuyệt đối! 🛡️',
    'Sẵn sàng build góc máy trong mơ chưa? Nhắn ngay cho chúng mình nha! ✉️'
  ];

  function showSpeech(text, duration = 3500) {
    if (!speechBubble || !speechText) return;
    speechText.textContent = text;
    speechBubble.classList.add('bubble-visible');
    clearTimeout(speechFadeTimer);
    speechFadeTimer = setTimeout(() => {
      speechBubble.classList.remove('bubble-visible');
    }, duration);
  }

  // Set initial position
  const initialStations = getStations();
  const initSt = initialStations[0];
  gsap.set(robotEl, {
    xPercent: -50,
    yPercent: -50,
    transformOrigin: '50% 50%',
    x: initSt.x,
    y: initSt.y,
    scale: 1,
    rotateZ: 0
  });
  robotEl.classList.add('facing-left');
  robotEl.classList.remove('facing-right');
  showSpeech(stageDialogues[0]);

  // Set arrival state & effects
  function onArrival(stageIdx) {
    isFlying = false;
    robotEl.classList.remove('is-flying');

    // Direction facing: if on right half of screen, face left toward content, and vice versa
    const stations = getStations();
    const st = stations[stageIdx];
    if (st && st.x > window.innerWidth * 0.5) {
      robotEl.classList.add('facing-left');
      robotEl.classList.remove('facing-right');
    } else {
      robotEl.classList.add('facing-right');
      robotEl.classList.remove('facing-left');
    }

    // Dynamic eyes per stage
    if (eyeScreen) {
      if (stageIdx === 1) eyeScreen.className = 'robot-screen-overlay eye-state-scan';
      else if (stageIdx === 2) eyeScreen.className = 'robot-screen-overlay eye-state-telemetry';
      else if (stageIdx === 3) eyeScreen.className = 'robot-screen-overlay eye-state-heart';
      else if (stageIdx === 4) eyeScreen.className = 'robot-screen-overlay eye-state-scan';
      else if (stageIdx === 5) eyeScreen.className = 'robot-screen-overlay eye-state-telemetry';
      else eyeScreen.className = 'robot-screen-overlay eye-state-happy';
    }

    // Hologram / Scan beam special stage activations
    if (stageIdx === 2 && holoEmitter) {
      holoEmitter.classList.add('active');
    } else if (holoEmitter) {
      holoEmitter.classList.remove('active');
    }

    if ((stageIdx === 1 || stageIdx === 4) && scanBeam) {
      scanBeam.classList.add('active');
    } else if (scanBeam) {
      scanBeam.classList.remove('active');
    }

    // Speech dialogue for current stage
    if (stageDialogues[stageIdx]) {
      showSpeech(stageDialogues[stageIdx]);
    }

    // Staggered Block Assembly Entrance ("Mỗi lần di chuyển các khối xây 1 thế giới công nghệ khác")
    const stageIds = ['hero', 'services', 'configurator', 'showcase', 'products', 'process', 'cta'];
    const targetSection = document.getElementById(stageIds[stageIdx]);
    if (targetSection) {
      const techCards = targetSection.querySelectorAll('.tech-block-item, .product, .showcase-banner, .process-card, .config-wrapper, .final-cta-surface');
      if (techCards.length) {
        gsap.fromTo(techCards, {
          y: 26,
          scale: 0.96,
          opacity: 0.55
        }, {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: 'back.out(1.3)'
        });
      }
    }
  }

  // CINEMATIC FLIGHT ANIMATION: Scroll page and fly robot 100% CÙNG LÚC (simultaneous lockstep)
  function flyToStage(targetIdx, targetY, duration = 1.15) {
    if (targetIdx === currentStageIndex) return;
    const stations = getStations();
    const fromSt = stations[currentStageIndex];
    const toSt = stations[targetIdx];
    const w = window.innerWidth;
    const h = window.innerHeight;

    isFlying = true;
    robotEl.classList.add('is-flying');
    if (speechBubble) speechBubble.classList.remove('bubble-visible');
    if (holoEmitter) holoEmitter.classList.remove('active');
    if (scanBeam) scanBeam.classList.remove('active');
    if (eyeScreen) eyeScreen.className = 'robot-screen-overlay eye-state-fly';

    // Trigger Dynamic Cyber World Background Reconstruction
    if (window.cyberWorldEngine) {
      window.cyberWorldEngine.morphToWorld(targetIdx, duration, fromSt.x, fromSt.y);
    }

    // Kill any active robot animations
    gsap.killTweensOf(robotEl);

    const isDown = targetIdx > currentStageIndex;
    const isMovingLeft = toSt.x < fromSt.x;

    // Dynamic bank angle: steep dive when descending
    const bankAngle = isMovingLeft ? -22 : 22;

    // Deep downward dive across the screen when scrolling down ("Lướt xuống trang")
    const midX = (fromSt.x + toSt.x) / 2 + (isMovingLeft ? -w * 0.06 : w * 0.06);
    const midY = isDown
      ? Math.min(h * 0.72, Math.max(fromSt.y, toSt.y) + h * 0.35)
      : Math.max(h * 0.12, Math.min(fromSt.y, toSt.y) - h * 0.16);

    const flightTl = gsap.timeline({
      onComplete: () => {
        currentStageIndex = targetIdx;
        onArrival(targetIdx);
      }
    });

    // 0. Synchronized Page Scroll on the EXACT same timeline starting at frame 0
    if (typeof targetY === 'number') {
      const scrollObj = { y: window.scrollY };
      flightTl.to(scrollObj, {
        y: targetY,
        duration: duration,
        ease: 'power2.inOut',
        onUpdate: () => {
          window.scrollTo({ top: scrollObj.y, left: 0, behavior: 'auto' });
        }
      }, 0);
    }

    // 1. Initial take-off burst & steep dive bank at time 0
    flightTl.to(robotEl, {
      rotateZ: bankAngle,
      scale: 0.82,
      duration: duration * 0.38,
      ease: 'power2.in'
    }, 0);

    // 2. Majestic 2.5D curved swoop diving down through the screen at time 0
    flightTl.to(robotEl, {
      motionPath: {
        path: [
          { x: fromSt.x, y: fromSt.y },
          { x: midX, y: midY },
          { x: toSt.x, y: toSt.y }
        ],
        curviness: 1.6
      },
      duration: duration,
      ease: 'power2.inOut'
    }, 0);

    // 3. Flare thrusters to brake, pitch up, expand and buoyant settle
    flightTl.to(robotEl, {
      rotateZ: isMovingLeft ? 6 : -6,
      scale: 1.06,
      duration: duration * 0.38,
      ease: 'power1.out'
    }, duration * 0.62);

    flightTl.to(robotEl, {
      rotateZ: 0,
      scale: 1,
      duration: duration * 0.25,
      ease: 'back.out(1.5)'
    }, duration * 0.85);
  }

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const stations = getStations();
      const currentSt = stations[currentStageIndex];
      gsap.to(robotEl, {
        x: currentSt.x,
        y: currentSt.y,
        duration: 0.4,
        ease: 'power2.out'
      });
    }, 150);
  });

  // Interactive Hover: Show speech
  robotEl.addEventListener('mouseenter', () => {
    if (!isFlying) {
      showSpeech(stageDialogues[currentStageIndex], 3000);
    }
  });

  // Interactive Click: Joy Bounce & Easter egg
  robotEl.addEventListener('click', () => {
    robotEl.classList.add('robot-joy-bounce');
    setTimeout(() => robotEl.classList.remove('robot-joy-bounce'), 800);

    const easterQuotes = [
      'NEXUS PC: Đỉnh cao hiệu năng, thẩm mỹ bậc thầy! 💎',
      'Được thiết kế tỉ mỉ từng chi tiết cho góc máy của bạn! 🚀',
      'Cần tư vấn cấu hình hãy nhắn cho chúng mình nhé! ✉️',
      'In 3D Resin 8K sắc nét từng sợi tóc luôn đó! ✨'
    ];
    showSpeech(easterQuotes[Math.floor(Math.random() * easterQuotes.length)], 4000);
  });

  // Expose flight controller
  window.nexusFlightController = {
    flyToStage,
    getCurrentStage: () => currentStageIndex
  };
}

// ==========================================================================
// SECTION SCROLL SNAP & STAGE TRANSITION COORDINATOR
// ==========================================================================
function initSectionScrollSnap() {
  const stageIds = ['hero', 'services', 'configurator', 'showcase', 'products', 'process', 'cta'];
  const stages = stageIds.map(id => document.getElementById(id)).filter(Boolean);
  if (stages.length === 0) return;

  const dots = document.querySelectorAll('.stage-dot');
  let currentStageIndex = 0;
  let isSnapping = false;
  let snapCooldownTimer = null;
  const FLIGHT_DURATION = 1.15; // 1.15 seconds of synchronized flight & scroll

  function getStageTargetY(index) {
    if (index === 0) return 0;
    const stage = stages[index];
    if (!stage) return 0;
    return Math.max(0, stage.offsetTop - 75);
  }

  function updateActiveDot(index) {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  function goToStage(targetIndex) {
    if (targetIndex < 0 || targetIndex >= stages.length) return;
    if (targetIndex === currentStageIndex && !isSnapping) return;

    isSnapping = true;
    currentStageIndex = targetIndex;
    updateActiveDot(targetIndex);

    const targetY = getStageTargetY(targetIndex);

    // Trigger 100% concurrent flight & scroll on the exact same timeline
    if (window.nexusFlightController) {
      window.nexusFlightController.flyToStage(targetIndex, targetY, FLIGHT_DURATION);
    } else {
      window.scrollTo({ top: targetY, behavior: 'auto' });
    }

    clearTimeout(snapCooldownTimer);
    snapCooldownTimer = setTimeout(() => {
      isSnapping = false;
    }, FLIGHT_DURATION * 1000 + 40);
  }

  globalGoToStage = goToStage;

  // Click on dots to jump directly to section
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const stageIdx = parseInt(dot.dataset.stage, 10);
      goToStage(stageIdx);
    });
  });

  // Intercept in-page anchor links (e.g. #configurator, #services)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetIdx = stageIds.indexOf(targetId);
        if (targetIdx !== -1) {
          e.preventDefault();
          goToStage(targetIdx);
        }
      }
    });
  });

  // Wheel intercept: Clean, deliberate stage-by-stage snap (Không lướt tự do, không dịch chuyển)
  window.addEventListener('wheel', e => {
    if (document.body.dataset.page !== 'home') return;
    if (Math.abs(e.deltaY) < 18) return;

    e.preventDefault();
    if (isSnapping) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = Math.max(0, Math.min(stages.length - 1, currentStageIndex + direction));

    if (nextIndex !== currentStageIndex) {
      goToStage(nextIndex);
    }
  }, { passive: false });

  // Keyboard navigation
  window.addEventListener('keydown', e => {
    if (document.body.dataset.page !== 'home') return;
    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      e.preventDefault();
      if (isSnapping) return;
      const nextIndex = Math.min(stages.length - 1, currentStageIndex + 1);
      goToStage(nextIndex);
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      if (isSnapping) return;
      const prevIndex = Math.max(0, currentStageIndex - 1);
      goToStage(prevIndex);
    }
  });

  // Touch swipe on mobile
  let touchStartY = 0;
  window.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', e => {
    if (document.body.dataset.page !== 'home') return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 40 && !isSnapping) {
      const direction = diff > 0 ? 1 : -1;
      const nextIndex = Math.max(0, Math.min(stages.length - 1, currentStageIndex + direction));
      if (nextIndex !== currentStageIndex) {
        goToStage(nextIndex);
      }
    }
  }, { passive: true });
}

function shell(page, body) {
  const isHome = page === 'home';

  document.body.innerHTML = `
    <canvas id="canvasParticles"></canvas>

    ${isHome ? `
      <!-- Fixed Stage Dots for Section Snapping -->
      <nav class="home-stage-dots" id="homeStageDots" aria-label="Điều hướng phân khúc">
        <button class="stage-dot active" data-stage="0" aria-label="Hero"><span class="stage-tooltip">01 · Hero</span></button>
        <button class="stage-dot" data-stage="1" aria-label="Dịch vụ"><span class="stage-tooltip">02 · Dịch vụ</span></button>
        <button class="stage-dot" data-stage="2" aria-label="Cấu hình"><span class="stage-tooltip">03 · Cấu hình</span></button>
        <button class="stage-dot" data-stage="3" aria-label="Tiêu biểu"><span class="stage-tooltip">04 · Tiêu biểu</span></button>
        <button class="stage-dot" data-stage="4" aria-label="Sản phẩm"><span class="stage-tooltip">05 · Sản phẩm</span></button>
        <button class="stage-dot" data-stage="5" aria-label="Quy trình"><span class="stage-tooltip">06 · Quy trình</span></button>
        <button class="stage-dot" data-stage="6" aria-label="Liên hệ"><span class="stage-tooltip">07 · Liên hệ</span></button>
      </nav>

      <!-- Invisible SVG Motion Path for GSAP MotionPathPlugin -->
      <svg id="robotMotionCanvas" class="robot-motion-canvas-hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path id="robotFlightTrack" fill="none" />
      </svg>

      <!-- 2.5D Layered Interactive Robot Companion -->
      <div id="nexusRobotCompanion" class="nexus-robot-companion" aria-label="NEXUS Robot Mascot">
        <!-- Buoyant Idle Floating Sub-Container -->
        <div class="robot-buoyant-rig">
          <!-- Jet Thruster Exhaust Glow -->
          <div class="robot-thruster-exhaust">
            <div class="thruster-ring ring-1"></div>
            <div class="thruster-ring ring-2"></div>
            <div class="thruster-flame"></div>
          </div>

          <!-- Robot Body Sprite Image -->
          <div class="robot-body-wrapper">
            <img class="robot-sprite-main" src="assets/robot-mascot.png" alt="NEXUS Robot Companion">
            
            <!-- LED Face Screen Overlay with Dynamic Expressions -->
            <div class="robot-screen-overlay eye-state-happy" id="robotScreenOverlay">
              <div class="robot-led-eye eye-left"></div>
              <div class="robot-led-eye eye-right"></div>
            </div>

            <!-- Holographic Telemetry Projector from Hand -->
            <div class="robot-holo-emitter" id="robotHoloEmitter">
              <div class="holo-cone-light"></div>
              <div class="holo-floating-card">
                <span class="holo-chip-tag">⚡ HARDWARE TELEMETRY</span>
                <b>RTX 4070 Ti Super 16G</b>
                <p>16GB GDDR6X · PCIe 5.0 · DLSS 3.5</p>
              </div>
            </div>

            <!-- Laser Scan Beam for 3D Figures -->
            <div class="robot-scan-beam" id="robotScanBeam">
              <div class="scan-laser-cone"></div>
              <div class="scan-reticle-ring"></div>
            </div>
          </div>

          <!-- Contextual Robot Speech Bubble -->
          <div class="robot-speech-bubble" id="robotSpeechBubble">
            <div class="speech-speaker-row">
              <span class="speech-badge">AI MASCOT</span>
              <span class="speech-name">NEXUS-01</span>
            </div>
            <p id="robotSpeechText">Xin chào! Mình là NEXUS Bot ✨ Cùng khám phá dàn máy ước mơ nhé!</p>
          </div>
        </div>
      </div>
    ` : ''}

    ${header(page)}
    ${body}
    ${footer()}
  `;

  initEffects();
  if (isHome) {
    initRobotScrollJourney();
    initSectionScrollSnap();
  }
}

function home() {
  shell(
    'home',
    `
<main>
  <!-- 1. HERO SHOWCASE: THE WHITE CYBER SHOWROOM -->
  <section class="hero hero-showcase home-section-stage" id="hero">
    <div class="container hero-content">
      <!-- Left Column: Typography, Modes, Actions -->
      <div class="hero-copy reveal">
        <div class="eyebrow-pill">
          <span>◆</span> THIẾT KẾ PC CAO CẤP × NGHỆ THUẬT IN 3D
        </div>
        <h1 class="hero-title-main">
          ĐỈNH CAO HIỆU NĂNG,<br>
          <span class="gradient-cyan-purple">THẨM MỸ BẬC THẦY</span>
        </h1>
        <p class="hero-description">
          NEXUS PC kiến tạo không gian công nghệ đậm chất cá nhân. Từ những dàn PC Gaming hiệu năng mạnh mẽ đến các tác phẩm mô hình 3D Resin 8K độc bản, chúng tôi biến ý tưởng thành hiện thực.
        </p>

        <!-- Mode Switcher Tabs right in Hero -->
        <div class="hero-mode-switcher-wrap">
          <span class="switcher-label">CHỌN CHẾ ĐỘ TRẢI NGHIỆM:</span>
          <div class="hero-mode-switcher">
            <button class="hero-mode-btn active" data-mode="aurora">
              <span class="btn-icon">⚡</span> PC Gaming RGB
            </button>
            <button class="hero-mode-btn" data-mode="combo">
              <span class="btn-icon">💎</span> PC & Figure 3D
            </button>
            <button class="hero-mode-btn" data-mode="printer">
              <span class="btn-icon">⚙️</span> Trạm In Resin 8K
            </button>
            <button class="hero-mode-btn" data-mode="gear">
              <span class="btn-icon">🎧</span> Setup Gear
            </button>
          </div>
        </div>

        <!-- Hero Actions -->
        <div class="hero-actions">
          <a class="btn primary hero-cta-pill" href="#configurator">⚡ Dự toán cấu hình theo ngân sách →</a>
          <a class="btn secondary hero-sub-pill" href="contact.html">Liên hệ tư vấn 1-1 →</a>
        </div>
      </div>

      <!-- Right Column: Centerpiece PC on Glowing Tech Podium & Floating Specs -->
      <div class="hero-holo-deck">
        <div class="hero-holo-stage" id="heroHoloStage">
          <!-- Luminous Circular Tech Podium Stage on the Floor -->
          <div class="holo-pedestal">
            <div class="pedestal-disc-glow"></div>
            <div class="pedestal-ring ring-outer"></div>
            <div class="pedestal-ring ring-mid"></div>
            <div class="pedestal-ring ring-inner"></div>
            <div class="pedestal-light-aura"></div>
          </div>

          <!-- Main Object Showcase Centerpiece -->
          <div class="holo-centerpiece">
            <img id="heroMainImg" src="${img('pc-white-rgb.png')}" alt="NEXUS Aurora Gaming PC">
            <div class="holo-contact-shadow"></div>
          </div>

          <!-- Floating Spec Badges with Leader Lines around PC -->
          <div class="hero-floating-specs-wrap" id="heroSpecsList"></div>

          <!-- Quick Telemetry HUD Header on Stage -->
          <div class="holo-telemetry-hud">
            <span class="hud-status-dot"></span>
            <span id="heroModeBadge" class="hud-mode-badge">PC GAMING FLAGSHIP</span>
            <span class="hud-divider">|</span>
            <span id="heroModeTitle" class="hud-mode-title">NEXUS Aurora Gaming</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Width Horizontal Trust Bar (Directly below Hero grid) -->
    <div class="container">
      <div class="hero-trust-capsule-row reveal">
        <div class="trust-capsule-item">
          <div class="trust-capsule-icon">🛡️</div>
          <div class="trust-capsule-text">
            <b>100% Chính Hãng</b>
            <small>Linh kiện mới Fullbox</small>
          </div>
        </div>
        <div class="trust-capsule-item">
          <div class="trust-capsule-icon">🚚</div>
          <div class="trust-capsule-text">
            <b>Giao Hàng Toàn Quốc</b>
            <small>Nhanh chóng, an toàn</small>
          </div>
        </div>
        <div class="trust-capsule-item">
          <div class="trust-capsule-icon">⚙️</div>
          <div class="trust-capsule-text">
            <b>Bảo Hành Uy Tín</b>
            <small>Hỗ trợ tận tâm</small>
          </div>
        </div>
        <div class="trust-capsule-item">
          <div class="trust-capsule-icon">👥</div>
          <div class="trust-capsule-text">
            <b>Tư Vấn Chuyên Sâu</b>
            <small>Đồng hành cùng bạn</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 1.5 HIGHLIGHT CATEGORIES (DANH MỤC NỔI BẬT) -->
  <section class="container section section-categories-preview reveal">
    <div class="categories-header-flex">
      <div>
        <span class="eyebrow">• DANH MỤC NỔI BẬT</span>
        <h2>Khám phá hệ sinh thái <span class="gradient-cyan-purple">NEXUS PC</span></h2>
        <p class="section-sub">Từ PC Gaming, linh kiện cao cấp đến mô hình 3D và phụ kiện setup.</p>
      </div>
      <a class="btn-outline-pill" href="pc.html">Xem tất cả danh mục →</a>
    </div>

    <div class="categories-quad-cards">
      <a class="cat-card-item" href="pc.html">
        <div class="cat-card-thumb"><img src="${img('pc-white-rgb.png')}" alt="PC Gaming"></div>
        <div class="cat-card-info">
          <b>PC Gaming Theo Yêu Cầu</b>
          <span class="cat-card-arrow">→</span>
        </div>
      </a>
      <a class="cat-card-item" href="product.html?id=2">
        <div class="cat-card-thumb"><img src="${img('gpu-white-rgb.png')}" alt="Linh Kiện"></div>
        <div class="cat-card-info">
          <b>Linh Kiện PC Chính Hãng</b>
          <span class="cat-card-arrow">→</span>
        </div>
      </a>
      <a class="cat-card-item" href="models.html">
        <div class="cat-card-thumb"><img src="${img('figure-crystal-blue.png')}" alt="Mô Hình 3D"></div>
        <div class="cat-card-info">
          <b>Mô Hình 3D Resin 8K</b>
          <span class="cat-card-arrow">→</span>
        </div>
      </a>
      <a class="cat-card-item" href="product.html?id=3">
        <div class="cat-card-thumb"><img src="${img('gear-setup-white.png')}" alt="Setup Gear"></div>
        <div class="cat-card-info">
          <b>Setup Gear & Phụ Kiện</b>
          <span class="cat-card-arrow">→</span>
        </div>
      </a>
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 2. CORE PILLARS: 4 DỊCH VỤ CỐT LÕI (4-COLUMN BALANCED DECK) -->
  <section class="container section home-section-stage" id="services">
    <div class="section-title-center reveal" style="margin-bottom: 22px;">
      <span class="eyebrow">DỊCH VỤ CỐT LÕI</span>
      <h2>Không Gian Giải Pháp <span class="gradient">Công Nghệ Toàn Diện</span></h2>
      <p class="section-sub">Đồng hành cùng bạn từ ý tưởng ban đầu đến góc máy hoàn thiện đẳng cấp nhất.</p>
    </div>

    <div class="services-quad-deck reveal">
      <!-- 01: PC Custom -->
      <div class="service-quad-card tech-block-item" data-world-block="1">
        <div class="service-card-glow"></div>
        <div class="service-card-top">
          <span class="service-pill-badge blue">✦ THẾ MẠNH DẪN ĐẦU</span>
          <div class="service-visual-wrap">
            <img class="service-card-img" src="${img('pc-white-rgb.png')}" alt="PC Gaming Build">
          </div>
        </div>
        <div class="service-card-body">
          <h3>Tư Vấn & Lắp Ráp PC</h3>
          <p>Tối ưu cấu hình chuẩn chỉ đến từng đồng ngân sách. Đi dây giấu kín, cân chỉnh luồng gió đối lưu và stress test nhiệt độ 24H.</p>
          <div class="service-spec-chips">
            <span class="spec-tag">✓ Chuẩn Game 2K/4K</span>
            <span class="spec-tag">✓ Cáp lưới custom cao cấp</span>
          </div>
          <a class="service-card-action" href="pc.html">Khám phá các mẫu PC Build →</a>
        </div>
      </div>

      <!-- 02: In 3D Resin 8K -->
      <div class="service-quad-card tech-block-item" data-world-block="2">
        <div class="service-card-glow purple"></div>
        <div class="service-card-top">
          <span class="service-pill-badge purple">✦ ĐỘC BẢN SÁNG TẠO</span>
          <div class="service-visual-wrap">
            <img class="service-card-img" src="${img('combo-printer-figure.png')}" alt="3D Printing & Figure">
          </div>
        </div>
        <div class="service-card-body">
          <h3>In Mô Hình 3D Resin 8K</h3>
          <p>Hiện thực hóa nhân vật anime, game và linh kiện trang trí độc quyền. Độ phân giải 8K cho bề mặt láng mịn không tì vết.</p>
          <div class="service-spec-chips">
            <span class="spec-tag">✓ Chi tiết tinh xảo 0.02mm</span>
            <span class="spec-tag">✓ Sơn phủ mỹ thuật thủ công</span>
          </div>
          <a class="service-card-action purple" href="models.html">Xem bộ sưu tập mô hình →</a>
        </div>
      </div>

      <!-- 03: Nâng cấp linh kiện -->
      <div class="service-quad-card tech-block-item" data-world-block="3">
        <div class="service-card-glow cyan"></div>
        <div class="service-card-top">
          <span class="service-pill-badge cyan">✦ TỐI ƯU HIỆU NĂNG</span>
          <div class="service-visual-wrap">
            <img class="service-card-img" src="${img('gpu-white-rgb.png')}" alt="Nâng cấp VGA">
          </div>
        </div>
        <div class="service-card-body">
          <h3>Nâng Cấp & Tối Ưu</h3>
          <p>Tư vấn nâng cấp VGA, bổ sung RAM DDR5, thêm SSD NVMe Gen5 hoặc đổi vỏ case kính nghệ thuật với chi phí hợp lý nhất.</p>
          <div class="service-spec-chips">
            <span class="spec-tag">✓ Chống nghẽn cổ chai</span>
            <span class="spec-tag">✓ Đổi case nghệ thuật</span>
          </div>
          <a class="service-card-action" href="contact.html?type=upgrade">Tư vấn nâng cấp →</a>
        </div>
      </div>

      <!-- 04: Setup Gear -->
      <div class="service-quad-card tech-block-item" data-world-block="4">
        <div class="service-card-glow pink"></div>
        <div class="service-card-top">
          <span class="service-pill-badge pink">✦ ĐỒNG BỘ GÓC MÁY</span>
          <div class="service-visual-wrap">
            <img class="service-card-img" src="${img('gear-setup-white.png')}" alt="Setup gear">
          </div>
        </div>
        <div class="service-card-body">
          <h3>Setup Góc Máy & Gear</h3>
          <p>Hỗ trợ lựa chọn bàn nâng hạ thông minh, ghế công thái học, đèn ambient RGB Aura Sync và gear tone-sur-tone chuẩn gu.</p>
          <div class="service-spec-chips">
            <span class="spec-tag">✓ Công thái học VIP</span>
            <span class="spec-tag">✓ Đèn Ambient RGB</span>
          </div>
          <a class="service-card-action" href="contact.html?type=other">Tối ưu góc máy →</a>
        </div>
      </div>
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 3. INTERACTIVE CONFIGURATOR: DỰ TOÁN CẤU HÌNH THEO NHU CẦU -->
  <section class="container section home-section-stage" id="configurator">
    <div class="config-wrapper surface reveal">
      <div class="config-intro">
        <span class="eyebrow">BỘ CÔNG CỤ TƯƠNG TÁC</span>
        <h2>Chọn Cấu Hình <span class="gradient">Đúng Mục Đích & Ngân Sách</span></h2>
        <p>Bấm chọn mục đích sử dụng bên dưới để xem gợi ý linh kiện tối ưu, mức giá tham khảo và ước tính hiệu năng thực tế.</p>

        <div class="config-tabs-nav">
          <button class="config-tab-btn active" data-key="gaming">
            <span class="tab-emoji">🎮</span>
            <div>
              <b>Esports & Gaming</b>
              <small>Chiến mượt mọi tựa game hot</small>
            </div>
          </button>
          <button class="config-tab-btn" data-key="creative">
            <span class="tab-emoji">🎨</span>
            <div>
              <b>Đồ Họa & 3D Render</b>
              <small>Premiere, 3Ds Max, Blender</small>
            </div>
          </button>
          <button class="config-tab-btn" data-key="ai">
            <span class="tab-emoji">⚡</span>
            <div>
              <b>Streamer & AI Model</b>
              <small>Livestream mượt, chạy AI cục bộ</small>
            </div>
          </button>
          <button class="config-tab-btn" data-key="minimal">
            <span class="tab-emoji">💼</span>
            <div>
              <b>Văn Phòng & Tối Giản</b>
              <small>Gọn đẹp, thanh lịch, êm ái</small>
            </div>
          </button>
        </div>
      </div>

      <div class="config-display" id="configResultCard">
        <!-- Rendered by initConfigurator() -->
      </div>
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 4. DUAL SHOWCASE SPLIT BANNERS -->
  <section class="container section home-section-stage" id="showcase">
    <div class="section-title-center reveal" style="margin-bottom: 24px;">
      <span class="eyebrow">KHÔNG GIAN NGHỆ THUẬT & CÔNG NGHỆ</span>
      <h2>Định Hình Không Gian <span class="gradient">Trải Nghiệm Toàn Diện</span></h2>
      <p class="section-sub">Khám phá hai thế mạnh cốt lõi định hình nên thương hiệu NEXUS PC.</p>
    </div>

    <div class="banner-showcase-grid reveal">
      <div class="showcase-banner pc-banner">
        <div class="banner-overlay"></div>
        <div class="banner-body">
          <span class="banner-tag">THẾ GIỚI PC GAMING</span>
          <h3>Trải Nghiệm Sức Mạnh Phần Cứng Đích Thực</h3>
          <p>Mỗi bộ PC tại NEXUS không chỉ mạnh mẽ mà còn là tác phẩm trang trí công nghệ hoàn mỹ trên bàn làm việc của bạn.</p>
          <div class="banner-actions">
            <a class="btn primary small" href="pc.html">Xem danh mục PC mẫu →</a>
          </div>
        </div>
        <img class="banner-photo" src="${img('combo-pc-figure.png')}" alt="PC Gaming Banner">
      </div>

      <div class="showcase-banner figure-banner">
        <div class="banner-overlay"></div>
        <div class="banner-body">
          <span class="banner-tag purple">XƯỞNG IN 3D NGHỆ THUẬT</span>
          <h3>Mô Hình Tinh Xảo Cho Không Gian Độc Bản</h3>
          <p>Từ ý tưởng trong trí tưởng tượng đến hiện vật chân thực đặt trước mắt. Đón nhận tác phẩm mô hình chỉ thuộc về bạn.</p>
          <div class="banner-actions">
            <a class="btn secondary small" href="models.html">Khám phá mô hình 3D →</a>
          </div>
        </div>
        <img class="banner-photo" src="${img('combo-printer-figure.png')}" alt="3D Model Banner">
      </div>
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 5. FEATURED PRODUCTS: CÁC MẪU NỔI BẬT ĐẦY ĐỦ -->
  <section class="container section home-section-stage" id="products">
    <div class="title-row" style="margin-bottom: 20px;">
      <div>
        <span class="eyebrow">BỘ SƯU TẬP TIÊU BIỂU</span>
        <h2>Tác Phẩm & Sản Phẩm <span class="gradient">Nổi Bật</span></h2>
      </div>
      <a href="pc.html" class="pill">Xem tất cả sản phẩm →</a>
    </div>

    <div class="grid4 reveal">
      ${[items[0], items[1], items[6], items[7]].map(card).join('')}
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 6. CRAFTSMANSHIP PROCESS: QUY TRÌNH CHUẨN 4 BƯỚC -->
  <section class="container section home-section-stage" id="process">
    <div class="section-title-center reveal" style="margin-bottom: 28px;">
      <span class="eyebrow">CAM KẾT CHẤT LƯỢNG</span>
      <h2>Quy Trình Hoàn Thiện <span class="gradient">Chuẩn Mực & Minh Bạch</span></h2>
      <p class="section-sub">Chúng tôi tỉ mỉ trong từng khâu để trao đến bạn sản phẩm vượt mong đợi.</p>
    </div>

    <div class="process-grid reveal">
      <div class="process-card">
        <div class="step-num">01</div>
        <h4>Lắng Nghe & Tư Vấn 1-1</h4>
        <p>Phân tích đúng nhu cầu làm việc, tựa game yêu thích và hạn mức ngân sách để chọn linh kiện cân đối nhất.</p>
      </div>

      <div class="process-card">
        <div class="step-num">02</div>
        <h4>Lên Phối Cảnh & Báo Giá</h4>
        <p>Lên phương án màu sắc, vỏ case, tản nhiệt và mô hình 3D đi kèm kèm bảng giá chi tiết minh bạch từng món.</p>
      </div>

      <div class="process-card">
        <div class="step-num">03</div>
        <h4>Lắp Ráp & Stress Test 24H</h4>
        <p>Đi dây giấu kín, cân chỉnh quạt làm mát êm ái, test nhiệt độ FurMark & Cinebench liên tục đảm bảo 100% ổn định.</p>
      </div>

      <div class="process-card">
        <div class="step-num">04</div>
        <h4>Bàn Giao & Bảo Hành Tận Nơi</h4>
        <p>Đóng gói cẩn thận chống sốc, hỗ trợ cài đặt từ xa và chế độ bảo hành 1-đổi-1 nhanh chóng linh hoạt.</p>
      </div>
    </div>
  </section>

  <div class="cyber-section-divider"></div>

  <!-- 7. FINAL CALL TO ACTION -->
  <section class="container section home-section-stage final-cta-section reveal" id="cta">
    <div class="final-cta-surface">
      <div class="cta-glow-bg"></div>
      <div class="final-cta-content">
        <span class="eyebrow">✦ KHỞI TẠO BỘ MÁY CỦA BẠN HÔM NAY</span>
        <h2>Sẵn Sàng Kiến Tạo <span class="gradient">Góc Setup Trong Mơ?</span></h2>
        <p>Dù bạn cần một dàn máy chiến game đỉnh cao, trạm dựng phim 3D mạnh mẽ hay một mô hình resin độc bản cho góc bàn, NEXUS PC luôn sẵn sàng hiện thực hóa ý tưởng của bạn.</p>
        <div class="final-cta-actions">
          <a class="btn primary" href="contact.html">Bắt đầu trao đổi & nhận báo giá →</a>
          <a class="btn secondary" href="pc.html">Tham khảo cấu hình mẫu</a>
        </div>
      </div>
    </div>
  </section>
</main>`);

  initHeroShowcase();
  initConfigurator();
}

function catalog(which) {
  let pc = which === 'pc';
  let arr = items.filter(x => x.category === (pc ? 'pc' : 'figure'));

  shell(
    pc ? 'pc' : 'figure',
    `
<main>
  <section class="hero inner">
    <div class="container hero-content">
      <div class="hero-copy reveal">
        <span class="eyebrow">Trang chủ › ${pc ? 'PC Build' : 'Mô hình 3D'}</span>
        <h1>${pc ? 'DANH MỤC PC BUILD <span class="gradient">THEO NHU CẦU</span>' : 'MÔ HÌNH 3D & <span class="gradient">DỊCH VỤ IN RESIN 8K</span>'}</h1>
        <p>${pc ? 'Khám phá các cấu hình mẫu được tối ưu sẵn cho Esports, Gaming 2K-4K, Đồ họa 3D và Văn phòng sang trọng.' : 'Khám phá các mẫu tượng sưu tầm, decor góc máy và dịch vụ nhận in theo file 3D của bạn.'}</p>
        <div class="hero-actions">
          <a class="btn primary" href="contact.html?type=${pc ? 'pc' : 'figure'}">${pc ? 'Tư vấn cấu hình riêng' : 'Gửi file yêu cầu in 3D'} →</a>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="filters" id="filterRow">
      ${(pc
      ? [
        ['all', 'Tất cả'],
        ['gaming', 'Gaming & Esports'],
        ['creative', 'Đồ họa & 3D'],
        ['office', 'Văn phòng & Tối giản']
      ]
      : [
        ['all', 'Tất cả'],
        ['figure', 'Figure có sẵn'],
        ['service', 'Dịch vụ in theo yêu cầu']
      ]
    )
      .map(([k, v]) => `<button data-filter="${k}" class="chip ${k === 'all' ? 'active' : ''}">${v}</button>`)
      .join('')}
    </div>

    <div class="catalog-layout">
      <aside class="sidebar surface">
        <h3>⚑ Bộ lọc tìm kiếm</h3>
        <label>Mức giá tối đa</label>
        <input id="maxPrice" type="number" min="0" placeholder="Ví dụ: 30000000">
        <h3 style="margin-top:20px">Tìm kiếm theo tên</h3>
        <input id="query" class="form-field" placeholder="Nhập tên sản phẩm...">
        <p class="muted" style="font-size:12px;margin-top:20px">Dữ liệu và giá mang tính chất tham khảo, sẵn sàng tùy chỉnh theo mọi linh kiện bạn mong muốn.</p>
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
      : '<div class="empty surface">Không có sản phẩm phù hợp bộ lọc. Hãy thử tìm từ khóa khác.</div>';

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
        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;
        c.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
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
        ${[x.img, x.category === 'pc' ? 'pc-white-rgb.png' : 'figure-crystal-blue.png', x.category === 'pc' ? 'combo-pc-figure.png' : 'figure-fairy-stand.png']
      .map((a, i) => `<button class="${i === 0 ? 'active' : ''}" data-img="${a}"><img src="${img(a)}" alt="Thumb"></button>`)
      .join('')}
      </div>
    </div>
    
    <div class="detail-main">
      <span class="eyebrow">${x.category === 'pc' ? 'PC CUSTOM ĐỒNG BỘ' : '3D RESIN ART'}</span>
      <h1>${x.name}</h1>
      <h3 class="muted">${x.desc}</h3>
      <p>Mỗi cấu hình và mô hình tại NEXUS PC được chăm chút tỉ mỉ. Bạn có thể linh hoạt thay đổi linh kiện, vỏ case hoặc kích thước in theo mong muốn.</p>
      
      <div class="surface config">
        <h3>${x.category === 'pc' ? 'Tùy chọn cấu hình tham khảo' : 'Tùy chọn in ấn & hoàn thiện'}</h3>
        ${x.category === 'pc'
      ? `<label>Vi xử lý (CPU)</label>
               <select class="form-field"><option>Intel Core i5-14600KF</option><option>Intel Core i7-14700K</option><option>AMD Ryzen 7 7800X3D</option></select>
               <label>Card đồ họa (VGA)</label>
               <select class="form-field"><option>RTX 4060 Ti White 8GB</option><option>RTX 4070 Ti Super White 16GB</option><option>RTX 4080 Super White</option></select>
               <label>Bộ nhớ (RAM)</label>
               <select class="form-field"><option>32GB DDR5 6000MHz White RGB</option><option>64GB DDR5 6400MHz White RGB</option></select>
               <label>Tản nhiệt nước (AIO)</label>
               <select class="form-field"><option>AIO 360 Liquid ARGB White</option><option>AIO 240 Liquid ARGB White</option></select>`
      : `<label>Kích thước mô hình</label>
               <select class="form-field"><option>Cao 18cm (Tỷ lệ 1/10)</option><option>Cao 25cm (Tỷ lệ 1/7)</option><option>Cao 32cm (Tỷ lệ 1/6)</option></select>
               <label>Vật liệu chế tác</label>
               <select class="form-field"><option>Resin 8K Cao Cấp (Bề mặt siêu láng)</option><option>Resin Trong Suốt Pha Lê</option></select>
               <label>Mức độ hoàn thiện</label>
               <select class="form-field"><option>Sơn màu nghệ thuật thủ công</option><option>Phôi thô đánh bóng sẵn</option></select>`
    }
      </div>
    </div>

    <aside class="surface purchase">
      <span class="muted">Mức giá tham khảo</span>
      <div class="price">${x.price ? money(x.price) : 'Liên hệ báo giá'}</div>
      <p class="muted">Giá thực tế có thể thay đổi tùy theo linh kiện bạn chọn và thời điểm thị trường.</p>
      <a href="contact.html?type=${x.category}&product=${encodeURIComponent(x.name)}" class="btn primary">Gửi yêu cầu tư vấn mẫu này →</a>
      <a href="${x.category === 'pc' ? 'pc.html' : 'models.html'}" class="btn secondary">← Xem các mẫu khác</a>
      <hr style="border:0;border-top:1px solid #e6edfc;margin:22px 0">
      <b>◈ Cam kết từ NEXUS PC</b>
      <p class="muted" style="margin-top:6px;font-size:12.5px;">✓ Linh kiện mới 100% bảo hành hãng<br>✓ Đi dây thẩm mỹ giấu kín<br>✓ Hỗ trợ kỹ thuật trọn đời qua Zalo/Phone</p>
    </aside>
  </div>

  <div class="surface specs">
    <h2>Thông tin chi tiết & Cam kết</h2>
    <div class="spec-row"><b>Phân loại</b><span>${x.category === 'pc' ? 'Máy tính để bàn Custom' : 'Mô hình điêu khắc 3D'}</span></div>
    <div class="spec-row"><b>Tình trạng</b><span>Lắp ráp mới theo đơn đặt hàng</span></div>
    <div class="spec-row"><b>Chính sách bảo hành</b><span>Bảo hành theo từng linh kiện từ 24 - 36 tháng</span></div>
    <div class="spec-row"><b>Đóng gói vận chuyển</b><span>Hộp xốp chuyên dụng, chống sốc 2 lớp an toàn toàn quốc</span></div>
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
  let params = new URLSearchParams(location.search);
  let type = params.get('type') || '';
  let build = params.get('build') || '';
  let budget = params.get('budget') ? money(params.get('budget')) : '';
  let product = params.get('product') || '';

  let initialNote = '';
  if (build) initialNote += `Tôi quan tâm đến cấu hình: ${build}.\n`;
  if (product) initialNote += `Tôi muốn tư vấn về sản phẩm: ${product}.\n`;

  shell(
    'contact',
    `
<main>
  <section class="hero inner">
    <div class="container hero-content">
      <div class="hero-copy reveal">
        <span class="eyebrow">NEXUS PC › LIÊN HỆ & TƯ VẤN</span>
        <h1>KẾT NỐI VỚI <span class="gradient">NEXUS PC</span></h1>
        <p>Cho chúng tôi biết nhu cầu của bạn: build PC gaming, nâng cấp máy tính hay đặt in mô hình 3D độc bản. Chúng tôi sẽ phản hồi cấu hình và báo giá tối ưu nhất.</p>
      </div>
    </div>
  </section>

  <div class="container section contact-grid">
    <div class="surface form-panel">
      <h2>Gửi yêu cầu tư vấn</h2>
      <p class="muted">Điền thông tin bên dưới để tạo nhanh mẫu yêu cầu gửi trực tiếp qua Zalo / Facebook của shop.</p>
      <form id="contactForm">
        <div class="form-grid">
          <div>
            <label>Họ và tên của bạn *</label>
            <input class="form-field" name="name" required placeholder="Ví dụ: Hoàng Long">
          </div>
          <div>
            <label>Số điện thoại / Zalo *</label>
            <input class="form-field" name="phone" required placeholder="Ví dụ: 0912 345 678">
          </div>
          <div>
            <label>Nhu cầu chính</label>
            <select class="form-field" name="type">
              <option value="pc" ${type === 'pc' ? 'selected' : ''}>Build PC Gaming / Đồ họa</option>
              <option value="upgrade" ${type === 'upgrade' ? 'selected' : ''}>Nâng cấp linh kiện</option>
              <option value="figure" ${type === 'figure' ? 'selected' : ''}>Đặt in mô hình 3D Resin 8K</option>
              <option value="other">Tối ưu góc máy & setup gear</option>
            </select>
          </div>
          <div>
            <label>Ngân sách dự kiến</label>
            <input class="form-field" name="budget" value="${budget}" placeholder="Ví dụ: 25 triệu">
          </div>
        </div>
        <label>Ghi chú chi tiết yêu cầu</label>
        <textarea class="form-field" name="note" placeholder="Mô tả cụ thể tựa game muốn chơi, phần mềm đồ họa sử dụng hoặc gửi link file 3D...">${initialNote}</textarea>
        <button class="btn primary full-button" type="submit">Tạo nội dung trao đổi →</button>
        <div id="requestResult" style="margin-top:16px"></div>
      </form>
    </div>

    <div>
      <div class="surface contact-card">
        <h3>☏ Kênh Trao Đổi Nhanh (Zalo / Hotline)</h3>
        <p>Liên hệ trao đổi trực tiếp 1-1 để nhận báo giá chi tiết, gửi file 3D hoặc tư vấn cấu hình tức thì.</p>
        <b style="color:#0055ff;display:block;margin-top:8px;">Zalo: 09xx xxx xxx (NEXUS PC)</b>
      </div>
      <div class="surface contact-card">
        <h3>✉ Hỗ Trợ Kỹ Thuật & Báo Giá</h3>
        <p>Gửi danh sách linh kiện hoặc bản vẽ 3D (.stl, .obj) để nhận báo giá in resin chi tiết trong vòng 2 giờ.</p>
      </div>
      <div class="surface contact-card">
        <h3>◈ Cam Kết Từ NEXUS PC</h3>
        <p>✓ Tư vấn đúng nhu cầu, không vẽ thêm linh kiện không cần thiết<br>✓ Bảo hành phần cứng chu đáo tận tâm<br>✓ Tặng kèm gói vệ sinh và tra keo tản nhiệt định kỳ</p>
      </div>
    </div>
  </div>
</main>`
  );

  $('#contactForm').onsubmit = e => {
    e.preventDefault();
    const d = new FormData(e.target);
    let s = `=== YÊU CẦU TƯ VẤN NEXUS PC ===\nHọ tên: ${d.get('name')}\nSố liên hệ: ${d.get('phone')}\nNhu cầu: ${d.get('type')}\nNgân sách: ${d.get('budget')}\nGhi chú: ${d.get('note')}\nThời gian: ${new Date().toLocaleString('vi-VN')}`;

    $('#requestResult').innerHTML = `
      <div style="background:rgba(0,102,255,0.08);border:1px solid #b5d4fe;padding:16px;border-radius:14px;margin-top:12px;">
        <p style="color:#0052e0;font-weight:800;margin-bottom:8px;">✓ Đã tạo thành công nội dung yêu cầu!</p>
        <p style="font-size:13px;color:#374e78;margin-bottom:10px;">Bạn có thể sao chép đoạn nội dung bên dưới và gửi ngay qua Zalo hoặc Messenger của shop:</p>
        <textarea class="form-field" readonly id="copyText" style="height:110px;font-size:13px;font-family:monospace;"></textarea>
        <button class="btn primary small" id="copyBtn" type="button" style="margin-top:10px;">📋 Sao chép nội dung</button>
      </div>
    `;
    $('#copyText').value = s;
    $('#copyBtn').onclick = () => {
      navigator.clipboard?.writeText(s)
        .then(() => ($('#copyBtn').textContent = 'Đã sao chép vào bộ nhớ tạm ✓'))
        .catch(() => {
          $('#copyText').select();
          document.execCommand('copy');
          $('#copyBtn').textContent = 'Đã sao chép vào bộ nhớ tạm ✓';
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
