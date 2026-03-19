'use strict';

/* ============================================
   ДАННЫЕ ТОВАРОВ
   ============================================ */
const PRODUCTS = [
  {
    id: 1,
    name: 'Эспрессо',
    price: 150,
    image: 'images/espresso_new.jpg',
    sku: 'COF-001',
    category: 'Кофе',
    description: 'Классический крепкий кофе с плотной пенкой крема. Готовится из зёрен собственной обжарки с насыщенным ореховым послевкусием.'
  },
  {
    id: 2,
    name: 'Капучино',
    price: 220,
    image: 'images/latte_art.jpg',
    sku: 'COF-002',
    category: 'Кофе',
    description: 'Идеальный баланс эспрессо, горячего молока и воздушной молочной пены. Наш бариста украсит латте-артом каждую чашку.'
  },
  {
    id: 3,
    name: 'Латте',
    price: 250,
    image: 'images/latte.png',
    sku: 'COF-003',
    category: 'Кофе',
    description: 'Нежный кофейный напиток с большим количеством тёплого молока. Мягкий вкус с лёгкой кофейной горчинкой.'
  },
  {
    id: 4,
    name: 'Раф кофе',
    price: 280,
    image: 'images/raf_coffee.png',
    sku: 'COF-004',
    category: 'Кофе',
    description: 'Авторский напиток — эспрессо со сливками и ванильным сахаром, взбитые вместе в пышную пену.'
  },
  {
    id: 5,
    name: 'Какао',
    price: 200,
    image: 'images/cocoa.png',
    sku: 'NAP-001',
    category: 'Напитки',
    description: 'Горячий шоколадный напиток на цельном молоке с бельгийским какао. Сладкий, насыщенный, согревающий.'
  },
  {
    id: 6,
    name: 'Матча латте',
    price: 270,
    image: 'images/matcha_latte.png',
    sku: 'NAP-002',
    category: 'Напитки',
    description: 'Японский зелёный чай матча, взбитый с горячим молоком. Мягкий травянистый вкус с кремовой текстурой.'
  },
  {
    id: 7,
    name: 'Облепиховый чай',
    price: 230,
    image: 'images/sea_buckthorn_tea.png',
    sku: 'NAP-003',
    category: 'Напитки',
    description: 'Авторский горячий чай с облепихой, мёдом и пряностями. Идеально согревает в холодную погоду.'
  },
  {
    id: 8,
    name: 'Круассан',
    price: 180,
    image: 'images/croissant_new.jpg',
    sku: 'BAK-001',
    category: 'Выпечка',
    description: 'Хрустящий французский рогалик из слоёного теста на сливочном масле. Выпекается каждое утро нашим кондитером.'
  },
  {
    id: 9,
    name: 'Чизкейк',
    price: 320,
    image: 'images/cheesecake.png',
    sku: 'BAK-002',
    category: 'Выпечка',
    description: 'Нью-Йоркский чизкейк с нежной сливочной начинкой на песочной основе. Подаётся с ягодным соусом.'
  },
  {
    id: 10,
    name: 'Тирамису',
    price: 350,
    image: 'images/tiramisu.png',
    sku: 'BAK-003',
    category: 'Выпечка',
    description: 'Итальянский десерт из маскарпоне, пропитанного эспрессо савоярди и какао. Готовится по классическому рецепту.'
  }
];

/* ============================================
   СОСТОЯНИЕ КОРЗИНЫ
   ============================================ */
let cart = {};

function loadCart() {
  try {
    const saved = localStorage.getItem('aromaCart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = {};
  }
}

function saveCart() {
  localStorage.setItem('aromaCart', JSON.stringify(cart));
}

function getCartTotal() {
  let total = 0;
  let count = 0;
  for (const id in cart) {
    const product = PRODUCTS.find(p => p.id === Number(id));
    if (product) {
      total += product.price * cart[id];
      count += cart[id];
    }
  }
  return { total, count };
}

/* ============================================
   ОБНОВЛЕНИЕ СЧЁТЧИКА В ШАПКЕ
   ============================================ */
function updateCartCount() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const { count } = getCartTotal();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ============================================
   ДОБАВЛЕНИЕ В КОРЗИНУ
   ============================================ */
function addToCart(id) {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  saveCart();
  updateCartCount();
  updateCardButton(id);
}

/* ============================================
   ОБНОВЛЕНИЕ КНОПКИ НА КАРТОЧКЕ
   ============================================ */
function getCardButtonHTML(productId) {
  const qty = cart[productId] || 0;
  if (qty > 0) {
    return `
      <div class="card-qty-controls">
        <button class="card-qty-btn" data-action="card-minus" data-id="${productId}">−</button>
        <span class="card-qty-value">${qty}</span>
        <button class="card-qty-btn" data-action="card-plus" data-id="${productId}">+</button>
      </div>
    `;
  }
  return `<button class="btn btn-small btn-add-cart" data-action="add-to-cart" data-id="${productId}">В корзину</button>`;
}

function updateCardButton(id) {
  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (!card) return;
  const info = card.querySelector('.product-info');
  // Удаляем старую кнопку/контрол
  const oldBtn = info.querySelector('.btn-add-cart');
  const oldCtrl = info.querySelector('.card-qty-controls');
  if (oldBtn) oldBtn.remove();
  if (oldCtrl) oldCtrl.remove();
  // Вставляем новый
  info.insertAdjacentHTML('beforeend', getCardButtonHTML(id));
}

/* ============================================
   РЕНДЕР КАТАЛОГА
   ============================================ */
function renderCatalog(filter) {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const filtered = filter && filter !== 'Все'
    ? PRODUCTS.filter(p => p.category === filter)
    : PRODUCTS;

  grid.innerHTML = '';

  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="product-image" data-action="open-product" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <span class="price">${product.price} ₽</span>
      </div>
      <div class="product-info">
        <h3 data-action="open-product" data-id="${product.id}">${product.name}</h3>
        <p>${product.description.substring(0, 80)}...</p>
        ${getCardButtonHTML(product.id)}
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ============================================
   ФИЛЬТРАЦИЯ
   ============================================ */
function initFilters() {
  const container = document.getElementById('filter-buttons');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderCatalog(btn.dataset.category);
  });
}

/* ============================================
   МОДАЛЬНОЕ ОКНО ТОВАРА
   ============================================ */
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === Number(id));
  if (!product) return;

  const modal = document.getElementById('product-modal');
  modal.querySelector('.modal-product-image').src = product.image;
  modal.querySelector('.modal-product-image').alt = product.name;
  modal.querySelector('.modal-product-name').textContent = product.name;
  modal.querySelector('.modal-product-price').textContent = product.price + ' ₽';
  modal.querySelector('.modal-product-sku').textContent = 'Артикул: ' + product.sku;
  modal.querySelector('.modal-product-desc').textContent = product.description;
  modal.querySelector('.modal-add-btn').dataset.id = product.id;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================
   РЕНДЕР КОРЗИНЫ
   ============================================ */
function renderCartModal() {
  const modal = document.getElementById('cart-modal');
  const list = modal.querySelector('.cart-items-list');
  const totalEl = modal.querySelector('.cart-total-price');
  const emptyMsg = modal.querySelector('.cart-empty');

  const ids = Object.keys(cart);

  if (ids.length === 0) {
    list.innerHTML = '';
    emptyMsg.style.display = 'block';
    totalEl.textContent = '0 ₽';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }

  emptyMsg.style.display = 'none';
  list.innerHTML = '';

  ids.forEach(id => {
    const product = PRODUCTS.find(p => p.id === Number(id));
    if (!product) return;
    const qty = cart[id];

    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${product.name}</h4>
        <p class="cart-item-price">${product.price} ₽</p>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" data-action="cart-minus" data-id="${id}">−</button>
        <span class="cart-qty">${qty}</span>
        <button class="cart-qty-btn" data-action="cart-plus" data-id="${id}">+</button>
      </div>
      <button class="cart-remove-btn" data-action="cart-remove" data-id="${id}" title="Удалить">✕</button>
    `;
    list.appendChild(item);
  });

  const { total } = getCartTotal();
  totalEl.textContent = total + ' ₽';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Сброс формы оформления
  const checkoutForm = document.getElementById('checkout-form');
  const checkoutSuccess = document.getElementById('checkout-success');
  const checkoutSection = document.getElementById('cart-checkout');
  if (checkoutForm) checkoutForm.style.display = '';
  if (checkoutSuccess) checkoutSuccess.style.display = 'none';
  if (checkoutSection) checkoutSection.style.display = ids.length > 0 ? 'block' : 'none';
  const tableInput = document.getElementById('table-number');
  if (tableInput) { tableInput.value = ''; tableInput.classList.remove('input-error'); }
  const tableError = document.getElementById('table-error');
  if (tableError) tableError.textContent = '';
}

/* ============================================
   ОБРАБОТКА СОБЫТИЙ КОРЗИНЫ
   ============================================ */
function handleCartAction(action, id) {
  if (action === 'cart-plus' || action === 'card-plus') {
    cart[id] = (cart[id] || 0) + 1;
  } else if (action === 'cart-minus' || action === 'card-minus') {
    if (cart[id] && cart[id] > 1) {
      cart[id]--;
    } else {
      delete cart[id];
    }
  } else if (action === 'cart-remove') {
    delete cart[id];
  }

  saveCart();
  updateCartCount();
  updateCardButton(Number(id));

  // Если модалка корзины открыта — обновить её тоже
  const cartModal = document.getElementById('cart-modal');
  if (cartModal && cartModal.classList.contains('open')) {
    renderCartModal();
  }
}

/* ============================================
   ОФОРМЛЕНИЕ ЗАКАЗА
   ============================================ */
function placeOrder() {
  const tableInput = document.getElementById('table-number');
  const tableError = document.getElementById('table-error');
  const tableNum = tableInput.value.trim();

  tableError.textContent = '';
  tableInput.classList.remove('input-error');

  if (!tableNum || isNaN(tableNum) || Number(tableNum) < 1) {
    tableError.textContent = 'Укажите номер столика';
    tableInput.classList.add('input-error');
    return;
  }

  // Показываем успех
  document.getElementById('checkout-form').style.display = 'none';
  const successEl = document.getElementById('checkout-success');
  successEl.style.display = 'block';
  document.getElementById('success-table-info').textContent = 'Столик №' + tableNum;

  // Очищаем корзину
  const oldIds = Object.keys(cart).map(Number);
  cart = {};
  saveCart();
  updateCartCount();
  oldIds.forEach(id => updateCardButton(id));
}

/* ============================================
   ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
   ============================================ */
function initEventDelegation() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    switch (action) {
      case 'add-to-cart':
        e.preventDefault();
        addToCart(Number(id));
        break;
      case 'open-product':
        openProductModal(id);
        break;
      case 'open-cart':
        e.preventDefault();
        renderCartModal();
        break;
      case 'card-plus':
      case 'card-minus':
      case 'cart-plus':
      case 'cart-minus':
      case 'cart-remove':
        handleCartAction(action, id);
        break;
      case 'close-modal':
        closeModal(target.closest('.modal'));
        break;
      case 'place-order':
        e.preventDefault();
        placeOrder();
        break;
      case 'modal-add-to-cart':
        addToCart(Number(id));
        break;
    }
  });

  // Закрытие модалок по клику на оверлей
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(m => closeModal(m));
    }
  });
}

/* ============================================
   ФОРМА ОТЗЫВА
   ============================================ */
function initReviewForm() {
  const toggleBtn = document.getElementById('review-toggle');
  const formWrapper = document.getElementById('review-form-wrapper');
  const form = document.getElementById('review-form');

  if (!toggleBtn || !form) return;

  // Показать/скрыть форму
  toggleBtn.addEventListener('click', () => {
    const isHidden = formWrapper.style.display === 'none';
    formWrapper.style.display = isHidden ? 'block' : 'none';
    toggleBtn.innerHTML = isHidden
      ? '<i class="fa-solid fa-xmark"></i> Отмена'
      : '<i class="fa-solid fa-pen"></i> Оставить отзыв';
  });

  // Отправка
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('review-name');
    const textInput = document.getElementById('review-text');
    const nameError = document.getElementById('review-name-error');
    const textError = document.getElementById('review-text-error');

    nameError.textContent = '';
    textError.textContent = '';
    nameInput.classList.remove('input-error');
    textInput.classList.remove('input-error');

    let valid = true;
    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name || name.length < 2) {
      nameError.textContent = 'Введите имя (мин. 2 символа)';
      nameInput.classList.add('input-error');
      valid = false;
    }
    if (!text) {
      textError.textContent = 'Напишите отзыв';
      textInput.classList.add('input-error');
      valid = false;
    }

    if (!valid) return;

    // Добавляем карточку отзыва
    const container = document.getElementById('reviews-container');
    const card = document.createElement('article');
    card.className = 'review-card review-card-new';
    card.innerHTML = `
      <blockquote>"${escapeHtmlReview(text)}"</blockquote>
      <cite>— ${escapeHtmlReview(name)}</cite>
    `;
    container.appendChild(card);

    // Сброс формы
    nameInput.value = '';
    textInput.value = '';
    formWrapper.style.display = 'none';
    toggleBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Оставить отзыв';

    // Прокрутка к новому отзыву
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function escapeHtmlReview(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartCount();
  renderCatalog('Все');
  initFilters();
  initEventDelegation();
  initReviewForm();
});
