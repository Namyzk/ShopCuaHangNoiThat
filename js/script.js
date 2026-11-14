/**
 * ==========================================================================
 * DỰ ÁN: WEBSITE NỘI THẤT CAO CẤP NHÀ XINH (ĐỒ ÁN WEB)
 * Kiến trúc: Hướng đối tượng ES6 (Class-based OOP Modules)
 * Bộ tính năng:
 *  1. Thanh tiến trình cuộn trang (Scroll Progress)
 *  2. Header cố định & Mega Menu (Sticky Header & Nav)
 *  3. Hero Banner Carousel tự động (Hero Slider)
 *  4. Lọc Tab nhanh trên Trang chủ (Homepage Filter Tabs)
 *  5. Bộ lọc đa tầng & Sắp xếp trên Trang danh mục (Faceted Filter & Sort Engine)
 *  6. Giỏ hàng đồng bộ LocalStorage (Persistent Cart Module)
 *  7. Danh sách yêu thích đồng bộ LocalStorage (Persistent Wishlist Module)
 *  8. Tìm kiếm gợi ý trực tiếp (Live Search Auto-suggest)
 *  9. Quản lý Modal & Hộp thoại chuẩn HTML5 <dialog> (Native Modals)
 * ==========================================================================
 */

/**
 * Danh mục sản phẩm dùng chung cho Tìm kiếm trực tiếp & Tra cứu nhanh
 */
const NX_PRODUCT_CATALOG = [
  { id: 'p1', title: 'Sofa Penny 3 Chỗ', price: '27,900,000 VND', numPrice: 27900000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp', url: 'product-detail.html' },
  { id: 'p2', title: 'Sofa Cabo 3 Chỗ Xanh Rêu', price: '35,200,000 VND', numPrice: 35200000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/09/sofa-cabo-xanh-la-2-1.webp', url: 'product-detail.html' },
  { id: 'p3', title: 'Sofa Valencia Góc Phải Da Thật', price: '99,900,000 VND', numPrice: 99900000, cat: 'Sofa da', img: 'https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-GP-AB1356-2-1.webp', url: 'product-detail.html' },
  { id: 'p4', title: 'Sofa Valencia Góc Trái Da Thật', price: '99,900,000 VND', numPrice: 99900000, cat: 'Sofa da', img: 'https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Valencia-Goc-Trai-AB1357-5-1.webp', url: 'product-detail.html' },
  { id: 'p5', title: 'Sofa Combo 3 Chỗ', price: '24,900,000 VND', numPrice: 24900000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/09/Sofa-Combo-3-cho.webp', url: 'product-detail.html' },
  { id: 'p6', title: 'Sofa 3 Chỗ Flow Beige', price: '25,900,000 VND', numPrice: 25900000, cat: 'Sofa vải', img: 'https://nhaxinh.com/wp-content/uploads/2026/08/sofa-flow-be-1.webp', url: 'product-detail.html' },
  { id: 'p7', title: 'Sofa Vintage Mansion Hoa', price: '89,000,000 VND', numPrice: 89000000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/08/Sofa-3-Cho-Vintage-Mansion-Hoa-1.webp', url: 'product-detail.html' },
  { id: 'p8', title: 'Sofa Vintage Mansion Xám', price: '89,000,000 VND', numPrice: 89000000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/08/sofa-fern-5.webp', url: 'product-detail.html' },
  { id: 'p9', title: 'Sofa Loveseats Mansion', price: '49,000,000 VND', numPrice: 49000000, cat: 'Sofa', img: 'https://nhaxinh.com/wp-content/uploads/2026/07/Sofa-Loveseats-Vintage-Mansion-2.webp', url: 'product-detail.html' },
  { id: 'p10', title: 'Sofa 3 Chỗ Moretti II', price: '73,300,000 VND', numPrice: 73300000, cat: 'Sofa da', img: 'https://nhaxinh.com/wp-content/uploads/2026/07/sofa-moretti-xam-dam-4.webp', url: 'product-detail.html' },
  { id: 'p11', title: 'Bàn Nước Moretti II', price: '14,900,000 VND', numPrice: 14900000, cat: 'Bàn trà', img: 'https://nhaxinh.com/wp-content/uploads/2026/07/ban-nuoc-moretti-3-2.webp', url: 'product-detail.html' },
  { id: 'p12', title: 'Bàn Ăn Victoria II 1M8', price: '34,500,000 VND', numPrice: 34500000, cat: 'Bàn ăn', img: 'https://nhaxinh.com/wp-content/uploads/2026/05/ban-an-victoria-II-1m8-3-1.webp', url: 'product-detail.html' },
  { id: 'p13', title: 'Giường Ngủ Victoria II', price: '44,900,000 VND', numPrice: 44900000, cat: 'Giường ngủ', img: 'https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp', url: 'product-detail.html' },
  { id: 'p14', title: 'Giường Mây II Khung Gỗ', price: '24,900,000 VND', numPrice: 24900000, cat: 'Giường ngủ', img: 'https://nhaxinh.com/wp-content/uploads/2026/07/giuong-may-1.webp', url: 'product-detail.html' }
];

/**
 * 1. Module Thanh tiến trình cuộn trang
 */
class ScrollProgressModule {
  constructor() {
    this.progressBar = document.querySelector('.nx-scroll-progress');
    this.init();
  }

  init() {
    if (!this.progressBar) return;
    window.addEventListener('scroll', () => this.update(), { passive: true });
  }

  update() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    this.progressBar.style.width = `${progress}%`;
  }
}

/**
 * 2. Module Header cố định khi cuộn
 */
class HeaderModule {
  constructor() {
    this.header = document.querySelector('.nx-header');
    this.init();
  }

  init() {
    if (!this.header) return;
    window.addEventListener('scroll', () => {
      this.header.classList.toggle('is-scrolled', window.scrollY > 40);
    }, { passive: true });
  }
}

/**
 * 3. Module Slider Hero Banner tự động
 */
class HeroSliderModule {
  constructor() {
    this.slides = document.querySelectorAll('.nx-hero__slide');
    this.dots = document.querySelectorAll('.nx-hero__dot');
    this.prevBtn = document.querySelector('.nx-hero__arrow--prev');
    this.nextBtn = document.querySelector('.nx-hero__arrow--next');
    this.container = document.querySelector('.nx-hero');
    this.currentIndex = 0;
    this.timer = null;
    this.init();
  }

  init() {
    if (!this.slides.length) return;

    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());

    this.dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => this.goTo(idx));
    });

    if (this.container) {
      this.container.addEventListener('mouseenter', () => this.stopAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }

    this.startAutoplay();
  }

  goTo(index) {
    if (index >= this.slides.length) index = 0;
    if (index < 0) index = this.slides.length - 1;

    this.slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    this.dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    this.currentIndex = index;
  }

  next() {
    this.goTo(this.currentIndex + 1);
    this.startAutoplay();
  }

  prev() {
    this.goTo(this.currentIndex - 1);
    this.startAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => this.goTo(this.currentIndex + 1), 5500);
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer);
  }
}

/**
 * 4. Module Lọc Tab nhanh trên Trang chủ
 */
class HomepageTabsFilterModule {
  constructor() {
    this.tabs = document.querySelectorAll('.nx-filter-tab');
    this.cards = document.querySelectorAll('.nx-products-grid .nx-card');
    this.init();
  }

  init() {
    if (!this.tabs.length) return;
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.tabs.forEach(t => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        const filter = tab.getAttribute('data-filter') || 'all';
        this.applyFilter(filter);
      });
    });
  }

  applyFilter(filter) {
    this.cards.forEach(card => {
      const category = card.getAttribute('data-category') || '';
      if (filter === 'all' || category === filter) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  }
}

/**
 * 5. Module Lọc Đa Tầng (Faceted Filter & Sort Engine) trên Trang Danh Mục (category.html)
 */
class CategoryFacetedFilterModule {
  constructor() {
    this.grid = document.getElementById('category-grid');
    this.sortSelect = document.getElementById('sort-select');
    this.resetBtn = document.getElementById('btn-reset-filters');
    this.countEl = document.getElementById('cat-shown-count');
    this.emptyState = document.getElementById('category-empty-state');
    
    if (!this.grid) return; // Chỉ chạy trên category.html
    this.init();
  }

  init() {
    // Lắng nghe sự kiện thay đổi của tất cả checkbox lọc
    document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => this.filterAndSort());
    });

    // Lắng nghe sự kiện đổi cách sắp xếp
    if (this.sortSelect) {
      this.sortSelect.addEventListener('change', () => this.filterAndSort());
    }

    // Nút reset bộ lọc
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetFilters());
    }

    // Kiểm tra URL Parameter (Tìm kiếm hoặc danh mục phòng)
    this.checkUrlParameters();
  }

  checkUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    const searchVal = params.get('search');
    if (searchVal) {
      const decoded = decodeURIComponent(searchVal).toLowerCase();
      let matchedCount = 0;
      const cards = Array.from(this.grid.querySelectorAll('.nx-card'));
      cards.forEach(card => {
        const title = (card.querySelector('.nx-card__title, .product-title')?.textContent || '').toLowerCase();
        const cat = (card.querySelector('.nx-card__category')?.textContent || '').toLowerCase();
        const match = title.includes(decoded) || cat.includes(decoded);
        card.style.display = match ? '' : 'none';
        if (match) matchedCount++;
      });
      if (this.countEl) this.countEl.textContent = matchedCount;
      if (this.emptyState) this.emptyState.style.display = (matchedCount === 0) ? 'block' : 'none';
      const heading = document.querySelector('.nx-section-header__title, .category-page-title');
      if (heading) heading.textContent = `KẾT QUẢ TÌM KIẾM: "${searchVal.toUpperCase()}"`;
      NhaXinhApp.toast(`Tìm thấy ${matchedCount} sản phẩm khớp với "${searchVal}"`);
    }
  }

  resetFilters() {
    document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
    if (this.sortSelect) this.sortSelect.value = 'newest';
    this.filterAndSort();
    NhaXinhApp.toast('Đã xóa tất cả bộ lọc');
  }

  filterAndSort() {
    const cards = Array.from(this.grid.querySelectorAll('.nx-card'));

    // Lấy các giá trị đã tích chọn theo từng nhóm
    const selectedTypes = Array.from(document.querySelectorAll('input[name="cat_type"]:checked')).map(el => el.value);
    const selectedMaterials = Array.from(document.querySelectorAll('input[name="cat_material"]:checked')).map(el => el.value);
    const selectedPrices = Array.from(document.querySelectorAll('input[name="cat_price"]:checked')).map(el => el.value);

    let visibleCount = 0;

    cards.forEach(card => {
      const type = card.getAttribute('data-type') || '';
      const material = card.getAttribute('data-material') || '';
      const price = parseInt(card.getAttribute('data-price')) || 0;

      // 1. Kiểm tra nhóm Kiểu dáng
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(type);

      // 2. Kiểm tra nhóm Chất liệu
      const matchMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(material);

      // 3. Kiểm tra nhóm Mức giá
      let matchPrice = selectedPrices.length === 0;
      if (!matchPrice) {
        if (selectedPrices.includes('under-30') && price < 30000000) matchPrice = true;
        if (selectedPrices.includes('30-60') && price >= 30000000 && price <= 60000000) matchPrice = true;
        if (selectedPrices.includes('over-60') && price > 60000000) matchPrice = true;
      }

      const isMatch = matchType && matchMaterial && matchPrice;
      card.style.display = isMatch ? 'flex' : 'none';
      if (isMatch) visibleCount++;
    });

    // Cập nhật số lượng sản phẩm hiển thị
    if (this.countEl) this.countEl.textContent = visibleCount;

    // Hiển thị trạng thái rỗng nếu không tìm thấy
    if (this.emptyState) {
      this.emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }

    // Sắp xếp các sản phẩm hiển thị
    this.sortCards(cards);
  }

  sortCards(cards) {
    if (!this.sortSelect) return;
    const sortVal = this.sortSelect.value;

    cards.sort((a, b) => {
      const priceA = parseInt(a.getAttribute('data-price')) || 0;
      const priceB = parseInt(b.getAttribute('data-price')) || 0;
      const nameA = (a.getAttribute('data-name') || '').toLowerCase();
      const nameB = (b.getAttribute('data-name') || '').toLowerCase();

      if (sortVal === 'price-asc') return priceA - priceB;
      if (sortVal === 'price-desc') return priceB - priceA;
      if (sortVal === 'name-asc') return nameA.localeCompare(nameB, 'vi');
      return 0; // Mặc định 'newest'
    });

    // Cập nhật lại vị trí DOM
    cards.forEach(card => this.grid.appendChild(card));
  }
}

/**
 * 6. Module Quản lý Giỏ hàng (Đồng bộ qua LocalStorage)
 */
class CartModule {
  constructor() {
    this.storageKey = 'nx_cart_items';
    this.items = this.loadItems();
    this.drawer = document.getElementById('cart-drawer');
    this.overlay = document.getElementById('cart-overlay');
    this.openBtns = document.querySelectorAll('[data-open-cart]');
    this.closeBtns = document.querySelectorAll('[data-close-cart]');
    this.badges = document.querySelectorAll('.cart-count-badge');
    this.itemsContainer = document.querySelector('.nx-drawer__body');
    this.totalAmountEl = document.querySelector('.cart-total-amount');

    this.init();
  }

  loadItems() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  saveItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    this.render();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.open();
    }));

    this.closeBtns.forEach(btn => btn.addEventListener('click', () => this.close()));
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    // Ủy quyền sự kiện thêm vào giỏ hàng
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.nx-card__add-btn, .btn-add-cart, [data-add-to-cart]');
      if (!addBtn) return;

      e.preventDefault();
      const card = addBtn.closest('.nx-card, .product-card, .pdp-grid, .nx-dialog__body');
      let title = "Sofa Penny 3 Chỗ";
      let price = "27,900,000 VND";
      let img = "https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp";
      let qty = 1;

      // Đọc số lượng nếu đang ở trang chi tiết sản phẩm
      const qtyInput = document.getElementById('pdp-qty');
      if (qtyInput) {
        qty = parseInt(qtyInput.value) || 1;
      }

      if (card) {
        const titleEl = card.querySelector('.nx-card__title, .product-title, .pdp-title, .quickview-title');
        const priceEl = card.querySelector('.nx-card__price, .product-price, .pdp-price, .quickview-price');
        const imgEl = card.querySelector('img, #main-product-img, .quickview-img');
        if (titleEl) title = titleEl.textContent.trim();
        if (priceEl) price = priceEl.textContent.trim();
        if (imgEl) img = imgEl.src;
      }

      this.addItem(title, price, img, qty);
      NhaXinhApp.toast(`Đã thêm ${qty} x "${title}" vào giỏ hàng!`);
      this.open();
    });

    this.render();
  }

  open() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.add('is-open');
      this.overlay.classList.add('is-open');
    }
  }

  close() {
    if (this.drawer && this.overlay) {
      this.drawer.classList.remove('is-open');
      this.overlay.classList.remove('is-open');
    }
  }

  addItem(title, price, img, qty = 1) {
    const existing = this.items.find(i => i.title === title);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ title, price, img, qty });
    }
    this.saveItems();
  }

  changeQty(index, delta) {
    if (!this.items[index]) return;
    this.items[index].qty += delta;
    if (this.items[index].qty <= 0) {
      this.items.splice(index, 1);
    }
    this.saveItems();
  }

  render() {
    const totalQty = this.items.reduce((sum, item) => sum + item.qty, 0);
    this.badges.forEach(b => b.textContent = totalQty);

    if (!this.itemsContainer) return;

    if (this.items.length === 0) {
      this.itemsContainer.innerHTML = `<p style="text-align:center; color:#888; padding: 40px 0;">Giỏ hàng của bạn đang trống</p>`;
      if (this.totalAmountEl) this.totalAmountEl.textContent = '0 VND';
      return;
    }

    this.itemsContainer.innerHTML = this.items.map((item, idx) => `
      <div class="nx-cart-item">
        <img src="${item.img}" class="nx-cart-item__img" alt="${item.title}">
        <div class="nx-cart-item__info">
          <div class="nx-cart-item__title">${item.title}</div>
          <div class="nx-cart-item__price">${item.price}</div>
          <div class="nx-cart-item__qty-ctrl">
            <button class="nx-cart-item__btn" onclick="window.nhaXinhApp.cart.changeQty(${idx}, -1)">&minus;</button>
            <span style="font-size:0.85rem; font-weight:600; min-width:20px; text-align:center;">${item.qty}</span>
            <button class="nx-cart-item__btn" onclick="window.nhaXinhApp.cart.changeQty(${idx}, 1)">&plus;</button>
          </div>
        </div>
        <button onclick="window.nhaXinhApp.cart.changeQty(${idx}, -999)" style="color:#999; font-size:1.2rem; cursor:pointer;" title="Xóa">&times;</button>
      </div>
    `).join('');

    let total = 0;
    this.items.forEach(it => {
      const num = parseInt(it.price.replace(/[^0-9]/g, '')) || 0;
      total += num * it.qty;
    });
    if (this.totalAmountEl) {
      this.totalAmountEl.textContent = total.toLocaleString('vi-VN') + ' VND';
    }
  }
}

/**
 * 7. Module Danh sách Yêu thích (Đồng bộ qua LocalStorage & Drawer tương tác)
 */
class WishlistModule {
  constructor() {
    this.storageKey = 'nx_wishlist_items';
    this.items = this.loadItems();
    this.drawer = document.getElementById('wishlist-drawer');
    this.overlay = document.getElementById('wishlist-overlay');
    this.openBtns = document.querySelectorAll('[data-open-wishlist]');
    this.closeBtns = document.querySelectorAll('[data-close-wishlist]');
    this.badges = document.querySelectorAll('.wishlist-count-badge');
    this.init();
  }

  loadItems() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    } catch {
      return [];
    }
  }

  saveItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    this.badges.forEach(b => b.textContent = this.items.length);
    this.render();
  }

  init() {
    this.badges.forEach(b => b.textContent = this.items.length);

    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.open();
    }));

    this.closeBtns.forEach(btn => btn.addEventListener('click', () => this.close()));
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());

    // Ủy quyền sự kiện click nút Yêu thích trên Product Card
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.nx-card__wishlist, .product-wishlist-btn');
      if (!btn) return;

      e.stopPropagation();
      e.preventDefault();
      const card = btn.closest('.nx-card, .product-card, .pdp-grid, .nx-dialog__body');
      const title = card ? (card.querySelector('.nx-card__title, .product-title, .pdp-title, .quickview-title')?.textContent.trim() || 'Sản phẩm') : 'Sản phẩm';
      const price = card ? (card.querySelector('.nx-card__price, .product-price, .pdp-price, .quickview-price')?.textContent.trim() || '27,900,000 VND') : '27,900,000 VND';
      const img = card ? (card.querySelector('img')?.src || 'https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp') : 'https://nhaxinh.com/wp-content/uploads/2026/09/sofa-penny-2.webp';
      const url = card ? (card.querySelector('a')?.getAttribute('href') || 'product-detail.html') : 'product-detail.html';

      const existingIdx = this.items.findIndex(it => it.title === title);
      if (existingIdx >= 0) {
        this.items.splice(existingIdx, 1);
        btn.classList.remove('is-active');
        NhaXinhApp.toast(`Đã bỏ "${title}" khỏi mục yêu thích!`);
      } else {
        this.items.push({ title, price, img, url });
        btn.classList.add('is-active');
        NhaXinhApp.toast(`Đã thêm "${title}" vào mục yêu thích!`);
      }

      this.saveItems();
    });
  }

  open() {
    if (!this.drawer) return;
    this.render();
    this.drawer.classList.add('is-open');
    if (this.overlay) this.overlay.classList.add('is-open');
  }

  close() {
    if (this.drawer) this.drawer.classList.remove('is-open');
    if (this.overlay) this.overlay.classList.remove('is-open');
  }

  render() {
    if (!this.drawer) return;
    const body = this.drawer.querySelector('.nx-drawer__body');
    if (!body) return;

    if (this.items.length === 0) {
      body.innerHTML = `
        <div style="text-align:center; padding:50px 10px; color:#888;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5" style="margin:0 auto 16px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <p style="font-size:0.9rem; margin-bottom:14px; font-weight:500;">Danh sách yêu thích đang trống</p>
          <p style="font-size:0.8rem; color:#aaa; margin-bottom:20px;">Lưu lại những món đồ nội thất bạn yêu thích để dễ dàng tham khảo sau.</p>
          <a href="category.html" class="nx-btn nx-btn--outline" style="font-size:0.75rem; padding:8px 18px;" onclick="window.nhaXinhApp.wishlist.close()">Khám phá sản phẩm</a>
        </div>
      `;
      return;
    }

    body.innerHTML = this.items.map((item, idx) => `
      <div class="nx-cart-item" style="display:flex; gap:14px; margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid #f0f0f0; align-items:center;">
        <img src="${item.img}" style="width:65px; height:65px; object-fit:cover; border-radius:2px;" alt="${item.title}">
        <div style="flex:1;">
          <a href="${item.url}" style="font-size:0.85rem; font-weight:600; color:#111; text-decoration:none; display:block; margin-bottom:4px;">${item.title}</a>
          <div style="font-size:0.8rem; font-weight:700; color:#c49a6c; margin-bottom:8px;">${item.price}</div>
          <div style="display:flex; gap:10px; align-items:center;">
            <button type="button" class="nx-btn nx-btn--primary" style="font-size:0.7rem; padding:4px 12px;" onclick="window.nhaXinhApp.wishlist.moveToCart(${idx})">Thêm vào giỏ</button>
            <button type="button" style="background:none; border:none; font-size:0.75rem; color:#999; cursor:pointer;" onclick="window.nhaXinhApp.wishlist.removeItem(${idx})">Xóa</button>
          </div>
        </div>
      </div>
    `).join('') + `
      <div style="margin-top:20px; text-align:center;">
        <button type="button" style="background:none; border:none; font-size:0.75rem; color:#999; text-decoration:underline; cursor:pointer;" onclick="window.nhaXinhApp.wishlist.clearAll()">Xóa tất cả danh sách</button>
      </div>
    `;
  }

  moveToCart(index) {
    const item = this.items[index];
    if (!item) return;
    if (window.nhaXinhApp && window.nhaXinhApp.cart) {
      window.nhaXinhApp.cart.addItem({
        title: item.title,
        price: item.price,
        img: item.img
      });
      NhaXinhApp.toast(`Đã chuyển "${item.title}" vào giỏ hàng!`);
    }
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.saveItems();
    NhaXinhApp.toast('Đã xóa khỏi danh sách yêu thích');
  }

  clearAll() {
    this.items = [];
    this.saveItems();
    NhaXinhApp.toast('Đã làm trống danh sách yêu thích');
  }
}

/**
 * 8. Module Tìm kiếm trực tiếp & Chuyển trang (Live Search & Redirection)
 */
class LiveSearchModule {
  constructor() {
    this.inputs = document.querySelectorAll('.nx-search-form__input, .search-input');
    this.init();
  }

  init() {
    this.inputs.forEach(input => {
      const form = input.closest('form, .nx-search-form, .search-box');
      if (!form) return;

      let dropdown = form.querySelector('.nx-search-results-dropdown');
      if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'nx-search-results-dropdown';
        form.appendChild(dropdown);
      }

      // Xử lý khi Submit Form tìm kiếm (Nhấn Enter hoặc Click icon kính lúp)
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = input.value.trim();
        if (query) {
          window.location.href = `category.html?search=${encodeURIComponent(query)}`;
        }
      });

      // Gợi ý trực tiếp theo thời gian thực (Live Auto-suggest)
      input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length < 2) {
          dropdown.style.display = 'none';
          dropdown.innerHTML = '';
          return;
        }

        const matches = NX_PRODUCT_CATALOG.filter(p => 
          p.title.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
          dropdown.innerHTML = `<div style="padding:14px; font-size:0.8rem; color:#888; text-align:center;">Không tìm thấy sản phẩm phù hợp</div>`;
          dropdown.style.display = 'block';
          return;
        }

        dropdown.innerHTML = matches.map(p => `
          <div class="nx-search-item" onclick="window.location.href='${p.url}'">
            <img src="${p.img}" class="nx-search-item__img" alt="${p.title}">
            <div>
              <div class="nx-search-item__title">${p.title}</div>
              <div class="nx-search-item__price">${p.price}</div>
            </div>
          </div>
        `).join('') + `
          <div style="padding:10px; text-align:center; background:#f9f9f9; border-top:1px solid #eee;">
            <a href="category.html?search=${encodeURIComponent(query)}" style="font-size:0.75rem; font-weight:600; color:#111; text-decoration:none;">Xem tất cả kết quả cho "${query}" &rarr;</a>
          </div>
        `;
        dropdown.style.display = 'block';
      });

      // Đóng popup khi click ra ngoài
      document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });
    });
  }
}

/**
 * 9. Module Quản lý Hộp thoại (<dialog> Native Modals)
 */
class ModalModule {
  constructor() {
    this.initShowroomModal();
    this.initQuickviewModal();
    this.initArticleModal();
  }

  initShowroomModal() {
    const dialog = document.getElementById('showroom-modal');
    if (!dialog) return;

    document.querySelectorAll('[data-open-showroom]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.showModal();
      });
    });

    document.querySelectorAll('[data-close-showroom]').forEach(btn => {
      btn.addEventListener('click', () => dialog.close());
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  initArticleModal() {
    const dialog = document.getElementById('article-modal');
    if (!dialog) return;

    const mockArticles = {
      "1": {
        cat: "XU HƯỚNG THIẾT KẾ",
        meta: "15 THÁNG 10, 2026 • KTS. ĐẶNG THANH TÙNG",
        title: "Nghệ Thuật Phối Màu Trung Tính: Bí Quyết Tạo Chiều Sâu Cho Phòng Khách Hiện Đại",
        img: "https://nhaxinh.com/wp-content/uploads/2026/07/nha-xinh-victoria-phong-khach-tong-quan-1200x800.webp",
        body: `
          <p>Gam màu trung tính như be, xám sáng, cát ấm và gỗ sồi tự nhiên luôn là chuẩn mực thanh lịch trong thiết kế nội thất đương đại. Khi được vận dụng đúng cách, chúng không chỉ giúp căn phòng trở nên rộng mở mà còn mang lại cảm giác an yên tuyệt đối cho gia chủ.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">1. Phân tầng thị giác bằng chất liệu (Texture Layering)</h4>
          <p>Điểm mấu chốt để phòng khách đơn sắc không bị nhàm chán là sự tương phản về bề mặt: kết hợp giữa vải sofa dệt thô mộc, thảm len ngắn trải sàn, mặt bàn đá marble vân mờ cùng các thanh lam gỗ sồi trang trí.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">2. Ánh sáng tán xạ tôn vinh đường nét</h4>
          <p>Hệ thống đèn hắt trần 3000K kết hợp đèn cây đọc sách góc phòng sẽ tạo nên những mảng sáng tối dịu nhẹ, tôn lên vẻ đẹp mềm mại của từng món đồ nội thất.</p>
        `
      },
      "2": {
        cat: "GIẢI PHÁP KHÔNG GIAN",
        meta: "28 THÁNG 09, 2026 • KTS. HOÀNG MINH TRANG",
        title: "Tối Ưu Hóa Ánh Sáng Tự Nhiên Và Luồng Khí Tươi Cho Căn Hộ Đô Thị",
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/ban-an-victoria-II-1m8-3-1.webp",
        body: `
          <p>Trong các căn hộ hiện đại, việc lưu thông không khí và đón nhận ánh sáng mặt trời là nhân tố quyết định đến sức khỏe và tinh thần của các thành viên trong gia đình.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">1. Thiết kế mặt bằng liên thông (Open Plan)</h4>
          <p>Kết nối liền mạch giữa khu vực ăn uống và phòng khách giúp ánh sáng tự nhiên từ ban công len lỏi đến từng góc sâu nhất của ngôi nhà. Bàn ăn gỗ tự nhiên được dùng như một vách ngăn mềm đầy duyên dáng.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">2. Điểm xuyết mảng xanh điều hòa vi khí hậu</h4>
          <p>Những chậu cây cảnh lọc không khí như bàng Singapore, trầu bà lá xẻ đặt cạnh khung cửa kính vừa giảm bức xạ nhiệt vừa tạo cảm giác gần gũi với thiên nhiên.</p>
        `
      },
      "3": {
        cat: "CẨM NANG VẬT LIỆU",
        meta: "05 THÁNG 11, 2026 • KỸ SƯ NGUYỄN HỮU ĐỨC",
        title: "Bí Quyết Chăm Sóc Nội Thất Gỗ Tự Nhiên & Da Thật Luôn Bền Đẹp Theo Năm Tháng",
        img: "https://nhaxinh.com/wp-content/uploads/2026/05/giuong-victoria-II-2-1.webp",
        body: `
          <p>Nội thất làm từ da bò thuộc cao cấp và gỗ tự nhiên là những vật liệu hữu cơ sống động. Nếu được bảo dưỡng đúng cách, vẻ đẹp của chúng sẽ ngày càng thăng hoa theo thời gian.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">1. Vệ sinh và cấp ẩm cho bề mặt da</h4>
          <p>Nên hút bụi định kỳ bằng đầu chổi mềm và lau sạch bằng khăn vi sợi hơi ẩm. Cứ 6 tháng, hãy thoa một lớp kem dưỡng da chuyên dụng để ngăn ngừa khô ráp do máy lạnh.</p>
          <h4 style="font-size:1.05rem; font-weight:700; margin:18px 0 8px; color:#121212;">2. Duy trì độ ẩm ổn định cho gỗ tự nhiên</h4>
          <p>Tránh đặt sản phẩm gỗ sát cửa kính nắng gắt hoặc luồng gió phả trực tiếp từ máy sưởi/điều hòa để thớ gỗ giữ được độ ẩm tự nhiên, không cong vênh hay co ngót.</p>
        `
      }
    };

    document.querySelectorAll('[data-article]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-article');
        const data = mockArticles[id];
        if (!data) return;

        const catEl = document.getElementById('modal-article-cat');
        const titleEl = document.getElementById('modal-article-title');
        const metaEl = document.getElementById('modal-article-meta');
        const imgEl = document.getElementById('modal-article-img');
        const contentEl = document.getElementById('modal-article-content');

        if (catEl) catEl.textContent = data.cat;
        if (titleEl) titleEl.textContent = data.title;
        if (metaEl) metaEl.textContent = data.meta;
        if (imgEl) {
          imgEl.src = data.img;
          imgEl.alt = data.title;
        }
        if (contentEl) contentEl.innerHTML = data.body;

        dialog.showModal();
      });
    });

    document.querySelectorAll('[data-close-article]').forEach(btn => {
      btn.addEventListener('click', () => dialog.close());
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  initQuickviewModal() {
    const dialog = document.getElementById('quickview-modal');
    if (!dialog) return;

    document.querySelectorAll('[data-quickview]').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title') || 'Sản phẩm Nhà Xinh';
        const price = btn.getAttribute('data-price') || 'Liên hệ';
        const img = btn.getAttribute('data-img') || '';
        const sku = btn.getAttribute('data-sku') || 'NX-FURNITURE';

        const qTitle = dialog.querySelector('.quickview-title');
        const qPrice = dialog.querySelector('.quickview-price');
        const qImg = dialog.querySelector('.quickview-img');
        const qSku = dialog.querySelector('.quickview-sku');

        if (qTitle) qTitle.textContent = title;
        if (qPrice) qPrice.textContent = price;
        if (qImg) qImg.src = img;
        if (qSku) qSku.textContent = `Mã sản phẩm: ${sku}`;

        dialog.showModal();
      });
    });

    document.querySelectorAll('[data-close-quickview]').forEach(btn => {
      btn.addEventListener('click', () => dialog.close());
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }
}

/**
 * 10. Module Tra Cứu Đơn Hàng & Tiến Độ Giao Hàng Tại Hưng Yên
 */
class OrderTrackingModule {
  constructor() {
    this.dialog = document.getElementById('tracking-modal');
    this.openBtns = document.querySelectorAll('[data-open-tracking]');
    this.closeBtns = document.querySelectorAll('[data-close-tracking]');
    this.form = document.getElementById('order-tracking-form');
    this.resultBox = document.getElementById('tracking-result-box');
    this.init();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.dialog) this.dialog.showModal();
    }));

    this.closeBtns.forEach(btn => btn.addEventListener('click', () => {
      if (this.dialog) this.dialog.close();
    }));

    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => {
        if (e.target === this.dialog) this.dialog.close();
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('tracking-code-input');
        if (!input) return;
        const code = input.value.trim().toUpperCase();
        this.trackOrder(code);
      });
    }
  }

  trackOrder(query) {
    if (!this.resultBox) return;
    const orders = JSON.parse(localStorage.getItem('nx_orders') || '[]');
    let order = orders.find(o => o.code === query || o.phone === query);

    // Nếu người dùng nhập mã mẫu dạng NX-2026-XXXX hoặc số điện thoại, mô phỏng dữ liệu trực quan
    if (!order && (query.startsWith('NX-') || /^[0-9]{9,11}$/.test(query))) {
      order = {
        code: query.startsWith('NX-') ? query : 'NX-2026-8892',
        date: '14/11/2026',
        name: 'Phạm Trọng Nam',
        phone: '0988 125 240',
        address: 'Khu Đô Thị Ecopark Văn Giang, Tỉnh Hưng Yên',
        total: '27,900,000 VND',
        items: [{ title: 'Sofa Penny 3 Chỗ', qty: 1, price: '27,900,000 VND' }],
        step: 3
      };
    }

    if (!order) {
      this.resultBox.innerHTML = `
        <div style="background:#fff3e0; border:1px solid #ffe0b2; padding:16px; border-radius:4px; text-align:center; color:#e65100; font-size:0.85rem;">
          Không tìm thấy đơn hàng với mã hoặc số điện thoại: <strong>${query}</strong>.<br>
          <span style="font-size:0.75rem; color:#888;">Gợi ý mã thử nghiệm: <strong>NX-2026-8892</strong></span>
        </div>
      `;
      this.resultBox.style.display = 'block';
      return;
    }

    const step = order.step || 3;

    this.resultBox.innerHTML = `
      <div style="background:#f9f9f9; border:1px solid #eee; border-radius:4px; padding:20px; margin-top:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e0e0e0; padding-bottom:12px; margin-bottom:16px;">
          <div>
            <span style="font-size:0.75rem; color:#888; text-transform:uppercase;">MÃ ĐƠN HÀNG:</span>
            <div style="font-size:1.1rem; font-weight:700; color:#121212;">${order.code}</div>
          </div>
          <span style="background:#e8f5e9; color:#2e7d32; font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:12px;">
            ĐANG VẬN CHUYỂN ĐẾN HƯNG YÊN
          </span>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.82rem; margin-bottom:20px; line-height:1.6;">
          <div><strong>Người nhận:</strong> ${order.name}</div>
          <div><strong>Số điện thoại:</strong> ${order.phone}</div>
          <div style="grid-column:1/-1;"><strong>Địa chỉ:</strong> ${order.address}</div>
          <div><strong>Ngày đặt:</strong> ${order.date}</div>
          <div><strong>Tổng thanh toán:</strong> <span style="font-weight:700; color:#c49a6c;">${order.total}</span></div>
        </div>

        <!-- Timeline 4 Bước -->
        <div style="margin:24px 0 10px;">
          <h4 style="font-size:0.85rem; font-weight:700; text-transform:uppercase; margin-bottom:14px;">Tiến độ thực hiện:</h4>
          <div style="display:flex; justify-content:space-between; position:relative; text-align:center;">
            <div style="position:absolute; top:12px; left:12%; right:12%; height:2px; background:#e0e0e0; z-index:1;"></div>
            <div style="position:absolute; top:12px; left:12%; width:${(step - 1) * 33.3}%; height:2px; background:#2e7d32; z-index:1; transition:width 0.5s;"></div>

            <div style="position:relative; z-index:2; flex:1;">
              <div style="width:26px; height:26px; border-radius:50%; background:#2e7d32; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 6px; font-size:0.75rem; font-weight:700;">✓</div>
              <span style="font-size:0.72rem; font-weight:600; color:#2e7d32;">1. Đã tiếp nhận</span>
            </div>

            <div style="position:relative; z-index:2; flex:1;">
              <div style="width:26px; height:26px; border-radius:50%; background:${step >= 2 ? '#2e7d32' : '#ccc'}; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 6px; font-size:0.75rem; font-weight:700;">${step >= 2 ? '✓' : '2'}</div>
              <span style="font-size:0.72rem; font-weight:600; color:${step >= 2 ? '#2e7d32' : '#888'};">2. Sản xuất & Đóng gói</span>
            </div>

            <div style="position:relative; z-index:2; flex:1;">
              <div style="width:26px; height:26px; border-radius:50%; background:${step >= 3 ? '#2e7d32' : '#ccc'}; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 6px; font-size:0.75rem; font-weight:700;">${step >= 3 ? '🚚' : '3'}</div>
              <span style="font-size:0.72rem; font-weight:700; color:${step >= 3 ? '#2e7d32' : '#888'};">3. Đang giao Hưng Yên</span>
            </div>

            <div style="position:relative; z-index:2; flex:1;">
              <div style="width:26px; height:26px; border-radius:50%; background:${step >= 4 ? '#2e7d32' : '#ccc'}; color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 6px; font-size:0.75rem; font-weight:700;">${step >= 4 ? '✓' : '4'}</div>
              <span style="font-size:0.72rem; font-weight:600; color:${step >= 4 ? '#2e7d32' : '#888'};">4. Lắp đặt & Bảo hành</span>
            </div>
          </div>
        </div>

        <div style="margin-top:20px; padding:12px; background:#fff; border:1px dashed #c49a6c; border-radius:3px; font-size:0.78rem; color:#555;">
          <strong>Chuyên viên phụ trách giao vận tại Hưng Yên:</strong> Kỹ thuật viên Nguyễn Văn Thành (Hotline hỗ trợ: <strong>0988 125 240</strong>).
        </div>
      </div>
    `;
    this.resultBox.style.display = 'block';
  }
}

/**
 * 11. Module Đăng Ký Tư Vấn Thiết Kế Nội Thất 3D Miễn Phí
 */
class DesignConsultationModule {
  constructor() {
    this.dialog = document.getElementById('consultation-modal');
    this.openBtns = document.querySelectorAll('[data-open-consultation]');
    this.closeBtns = document.querySelectorAll('[data-close-consultation]');
    this.form = document.getElementById('consultation-form');
    this.init();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.dialog) this.dialog.showModal();
    }));

    this.closeBtns.forEach(btn => btn.addEventListener('click', () => {
      if (this.dialog) this.dialog.close();
    }));

    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => {
        if (e.target === this.dialog) this.dialog.close();
      });
    }

    if (this.form) {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = 'TV-2026-' + Math.floor(1000 + Math.random() * 9000);
        const name = this.form.querySelector('[name="client_name"]')?.value || 'Quý khách';
        const phone = this.form.querySelector('[name="client_phone"]')?.value || '';
        const project = this.form.querySelector('[name="project_type"]')?.value || 'Căn hộ';
        const location = this.form.querySelector('[name="project_location"]')?.value || 'Hưng Yên';

        const record = { code, name, phone, project, location, date: new Date().toLocaleDateString('vi-VN') };
        const list = JSON.parse(localStorage.getItem('nx_consultations') || '[]');
        list.unshift(record);
        localStorage.setItem('nx_consultations', JSON.stringify(list));

        this.form.reset();
        if (this.dialog) this.dialog.close();

        NhaXinhApp.toast(`Đã gửi yêu cầu tư vấn thành công! Mã hồ sơ: ${code}`);
        alert(`Chúc mừng ${name}!\n\nYêu cầu tư vấn thiết kế 3D cho công trình tại ${location} đã được tiếp nhận thành công.\n\n• Mã hồ sơ tư vấn: ${code}\n• Đội ngũ Kiến trúc sư Nhà Xinh Hưng Yên sẽ liên hệ qua số điện thoại ${phone} trong vòng 24h để trao đổi và lên lịch hẹn khảo sát thực tế miễn phí.`);
      });
    }
  }
}

/**
 * 12. Module Tài Khoản & Hội Viên VIP (Member Auth Module)
 */
class AuthModule {
  constructor() {
    this.dialog = document.getElementById('auth-modal');
    this.openBtns = document.querySelectorAll('[data-open-auth]');
    this.closeBtns = document.querySelectorAll('[data-close-auth]');
    this.storageKey = 'nx_current_user';
    this.currentUser = this.loadUser();
    this.init();
  }

  loadUser() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey)) || null;
    } catch {
      return null;
    }
  }

  saveUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.storageKey);
    }
    this.updateHeaderUI();
  }

  init() {
    this.openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (this.currentUser) {
        this.showUserProfile();
      } else {
        if (this.dialog) this.dialog.showModal();
      }
    }));

    this.closeBtns.forEach(btn => btn.addEventListener('click', () => {
      if (this.dialog) this.dialog.close();
    }));

    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => {
        if (e.target === this.dialog) this.dialog.close();
      });

      // Tab switcher
      const tabLogin = document.getElementById('tab-btn-login');
      const tabRegister = document.getElementById('tab-btn-register');
      const formLogin = document.getElementById('form-login');
      const formRegister = document.getElementById('form-register');

      if (tabLogin && tabRegister && formLogin && formRegister) {
        tabLogin.addEventListener('click', () => {
          tabLogin.classList.add('is-active');
          tabRegister.classList.remove('is-active');
          formLogin.style.display = 'block';
          formRegister.style.display = 'none';
        });

        tabRegister.addEventListener('click', () => {
          tabRegister.classList.add('is-active');
          tabLogin.classList.remove('is-active');
          formRegister.style.display = 'block';
          formLogin.style.display = 'none';
        });

        // Form Login submit
        formLogin.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('login-email').value;
          const user = {
            name: 'Phạm Trọng Nam',
            email: email || 'phamtrongnam@gmail.com',
            phone: '0988 125 240',
            level: 'Hội Viên Kim Cương',
            points: 1250,
            city: 'Hưng Yên'
          };
          this.saveUser(user);
          if (this.dialog) this.dialog.close();
          NhaXinhApp.toast(`Đăng nhập thành công! Chào mừng ${user.name}`);
        });

        // Form Register submit
        formRegister.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = document.getElementById('reg-name').value;
          const email = document.getElementById('reg-email').value;
          const phone = document.getElementById('reg-phone').value;
          const user = {
            name: name || 'Phạm Trọng Nam',
            email: email,
            phone: phone,
            level: 'Hội Viên Thân Thiết',
            points: 100,
            city: 'Hưng Yên'
          };
          this.saveUser(user);
          if (this.dialog) this.dialog.close();
          NhaXinhApp.toast(`Đăng ký thành viên thành công! Tặng bạn 100 điểm thưởng.`);
        });
      }
    }

    this.updateHeaderUI();
  }

  showUserProfile() {
    if (!this.currentUser) return;
    const confirmLogout = confirm(`THÔNG TIN TÀI KHOẢN HỘI VIÊN:\n\n• Họ và tên: ${this.currentUser.name}\n• Hạng thành viên: ${this.currentUser.level}\n• Điểm tích lũy: ${this.currentUser.points} điểm\n• Email: ${this.currentUser.email}\n• Số điện thoại: ${this.currentUser.phone}\n• Tỉnh thành: ${this.currentUser.city || 'Hưng Yên'}\n\nBạn có muốn đăng xuất khỏi hệ thống không?`);
    if (confirmLogout) {
      this.saveUser(null);
      NhaXinhApp.toast('Đã đăng xuất tài khoản thành công!');
    }
  }

  updateHeaderUI() {
    const authLabels = document.querySelectorAll('.auth-user-label');
    authLabels.forEach(lbl => {
      if (this.currentUser) {
        lbl.textContent = `Chào, ${this.currentUser.name.split(' ').pop()} (VIP)`;
        lbl.style.fontWeight = '700';
        lbl.style.color = '#c49a6c';
      } else {
        lbl.textContent = 'Đăng nhập';
        lbl.style.fontWeight = 'normal';
        lbl.style.color = '';
      }
    });
  }
}

/**
 * 13. Module Tiếp Nhận Liên Hệ & Phản Hồi (Contact Form Module)
 */
class ContactFormModule {
  constructor() {
    this.form = document.getElementById('contact-feedback-form');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: (this.form.querySelector('[name="name"]') || {}).value || '',
      phone: (this.form.querySelector('[name="phone"]') || {}).value || '',
      email: (this.form.querySelector('[name="email"]') || {}).value || '',
      topic: (this.form.querySelector('[name="topic"]') || {}).value || '',
      showroom: (this.form.querySelector('[name="showroom"]') || {}).value || '',
      message: (this.form.querySelector('[name="message"]') || {}).value || '',
      time: new Date().toLocaleString('vi-VN')
    };

    let contacts = [];
    try {
      contacts = JSON.parse(localStorage.getItem('nx_contacts')) || [];
    } catch (err) {
      contacts = [];
    }
    contacts.push(data);
    localStorage.setItem('nx_contacts', JSON.stringify(contacts));

    NhaXinhApp.toast(`Gửi thành công! Nhà Xinh Hưng Yên sẽ liên hệ lại sớm.`);
    alert(`CẢM ƠN QUÝ KHÁCH: ${data.name.toUpperCase()}\n\nNhà Xinh Hưng Yên đã tiếp nhận yêu cầu:\n• Chủ đề: ${data.topic}\n• Showroom: ${data.showroom}\n• Điện thoại: ${data.phone}\n• Email: ${data.email}\n\nChuyên viên tư vấn kiến trúc & nội thất sẽ liên hệ trực tiếp hỗ trợ bạn trong vòng 15 phút!`);
    this.form.reset();
  }
}

/**
 * 14. Ứng dụng điều phối tổng (Master Orchestrator App)
 */
class NhaXinhApp {
  constructor() {
    this.scroll = new ScrollProgressModule();
    this.header = new HeaderModule();
    this.slider = new HeroSliderModule();
    this.homeTabs = new HomepageTabsFilterModule();
    this.categoryFilter = new CategoryFacetedFilterModule();
    this.cart = new CartModule();
    this.wishlist = new WishlistModule();
    this.search = new LiveSearchModule();
    this.modal = new ModalModule();
    this.tracking = new OrderTrackingModule();
    this.consultation = new DesignConsultationModule();
    this.auth = new AuthModule();
    this.contact = new ContactFormModule();

    this.initMobileMenu();
    this.initNewsletter();
  }

  initMobileMenu() {
    const toggle = document.querySelector('.nx-hamburger, .menu-toggle-btn');
    const nav = document.querySelector('.nx-nav, .main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
    }

    document.querySelectorAll('.nx-nav__item.has-dropdown > .nx-nav__link, .nav-item.has-dropdown > .nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          link.parentElement.classList.toggle('is-expanded');
        }
      });
    });
  }

  initNewsletter() {
    const form = document.querySelector('.nx-newsletter__group, .newsletter-input-group');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('.nx-newsletter__input, .newsletter-input');
        if (input && input.value) {
          const email = input.value.trim();
          NhaXinhApp.toast(`Đăng ký thành công! Mã voucher: NHAXINH2026`);
          alert(`CẢM ƠN BẠN ĐÃ ĐĂNG KÝ BẢN TIN NHÀ XINH HƯNG YÊN!\n\nEmail ghi nhận: ${email}\n\nNhà Xinh gửi tặng bạn mã ưu đãi chào mừng:\n• Mã giảm giá 10%: NHAXINH2026\n• Áp dụng khi nhập tại bước Thanh Toán (checkout.html).`);
          input.value = '';
        }
      });
    }
  }

  static toast(msg) {
    let box = document.querySelector('.nx-toast-box');
    if (!box) {
      box = document.createElement('div');
      box.className = 'nx-toast-box';
      document.body.appendChild(box);
    }

    const t = document.createElement('div');
    t.className = 'nx-toast';
    t.textContent = msg;
    box.appendChild(t);

    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateY(-10px)';
      t.style.transition = 'all 0.4s ease';
      setTimeout(() => t.remove(), 400);
    }, 3200);
  }
}

// Khởi động toàn bộ ứng dụng
document.addEventListener('DOMContentLoaded', () => {
  window.nhaXinhApp = new NhaXinhApp();
});
