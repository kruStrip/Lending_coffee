'use strict';

/* ============================================
   ДАННЫЕ СТАТЕЙ
   ============================================ */
const ARTICLES = [
  {
    id: 1,
    title: 'Как приготовить идеальный эспрессо дома',
    category: 'Рецепты',
    tags: ['Рецепты', 'Кофе'],
    excerpt: 'Пошаговая инструкция по приготовлению настоящего итальянского эспрессо в домашних условиях.',
    content: `
      <p>Эспрессо — основа большинства кофейных напитков. Чтобы приготовить идеальную чашку, вам понадобится свежемолотый кофе, правильная температура воды и немного терпения.</p>
      <h3>Что вам понадобится</h3>
      <ul>
        <li>Кофемолка (желательно жерновая)</li>
        <li>Кофемашина или гейзерная кофеварка</li>
        <li>Свежеобжаренные зёрна (не старше 2 недель)</li>
        <li>Фильтрованная вода</li>
      </ul>
      <h3>Шаг 1: Помол</h3>
      <p>Помол для эспрессо должен быть мелким, как мелкая соль. Слишком крупный помол даст водянистый напиток, слишком мелкий — горький и пережжённый.</p>
      <h3>Шаг 2: Дозировка</h3>
      <p>На одну порцию эспрессо (30 мл) используйте 18-20 граммов молотого кофе. Точность здесь имеет значение — используйте весы.</p>
      <h3>Шаг 3: Темперовка</h3>
      <p>Равномерно утрамбуйте кофе в портафильтре с усилием около 15 кг. Поверхность должна быть ровной и гладкой.</p>
      <h3>Шаг 4: Экстракция</h3>
      <p>Идеальная экстракция длится 25-30 секунд. Если кофе льётся слишком быстро — помол крупноват. Слишком медленно — помол слишком мелкий.</p>
      <p>Результат: густой, ароматный напиток с золотистой пенкой крема. Наслаждайтесь!</p>
    `,
    date: '2026-03-15',
    image: 'images/espresso_new.jpg'
  },
  {
    id: 2,
    title: 'Секреты обжарки: от зелёного зерна до идеальной чашки',
    category: 'Обжарка',
    tags: ['Обжарка', 'Зёрна'],
    excerpt: 'Рассказываем, как процесс обжарки влияет на вкус кофе и почему мы обжариваем зёрна сами.',
    content: `
      <p>Обжарка — это искусство превращения невзрачных зелёных зёрен в ароматный кофе. В «Арома Кафе» мы обжариваем зёрна сами и хотим рассказать, почему это важно.</p>
      <h3>Три степени обжарки</h3>
      <p><strong>Светлая обжарка (Light Roast)</strong> — зёрна обжариваются до первого «крека» (треска). Вкус яркий, кислотный, с фруктовыми нотами. Идеально для фильтр-кофе.</p>
      <p><strong>Средняя обжарка (Medium Roast)</strong> — баланс между кислотностью и горечью. Появляются карамельные и ореховые ноты. Это наша любимая обжарка для капучино.</p>
      <p><strong>Тёмная обжарка (Dark Roast)</strong> — зёрна обжариваются до второго «крека». Вкус насыщенный, горький, с нотами шоколада и дыма. Классический выбор для эспрессо.</p>
      <h3>Почему свежая обжарка так важна</h3>
      <p>Кофе начинает терять аромат уже через 2 недели после обжарки. Молотый кофе «выдыхается» за считаные часы. Именно поэтому мы обжариваем зёрна маленькими партиями каждые 3 дня.</p>
      <p>Приходите к нам — мы покажем весь процесс обжарки и дадим попробовать разницу!</p>
    `,
    date: '2026-03-10',
    image: 'images/coffee_roasting.png'
  },
  {
    id: 3,
    title: 'Кофейная культура Италии: почему итальянцы пьют эспрессо стоя',
    category: 'Культура',
    tags: ['Культура', 'Италия'],
    excerpt: 'Погружаемся в итальянские кофейные традиции и узнаём, что нельзя делать в итальянской кофейне.',
    content: `
      <p>Италия — родина эспрессо и капучино, но кофейная культура этой страны полна неожиданных правил.</p>
      <h3>Правило №1: Капучино только утром</h3>
      <p>Итальянцы никогда не пьют капучино после 11 утра. Молочные напитки считаются слишком тяжёлыми для послеобеденного времени. Если вы закажете капучино после обеда — вас сразу опознают как туриста.</p>
      <h3>Правило №2: Кофе у барной стойки</h3>
      <p>В Италии кофе пьют стоя у стойки бара. Это быстро, дёшево и очень по-итальянски. За столик в кафе придётся доплатить — иногда цена вырастает вдвое.</p>
      <h3>Правило №3: Никакого «большого кофе»</h3>
      <p>Итальянский эспрессо — это 25-30 мл напитка. Американо или «кофе в большом стакане» — это не по-итальянски. Если хотите чуть больше — закажите «лунго» (длинный эспрессо).</p>
      <h3>Интересный факт</h3>
      <p>В Неаполе существует традиция «подвешенного кофе» (caffè sospeso): вы платите за два кофе, один пьёте сами, а второй остаётся в заведении для того, кто не может себе позволить.</p>
      <p>Мы в «Арома Кафе» тоже поддерживаем эту традицию — спросите бариста!</p>
    `,
    date: '2026-03-05',
    image: 'images/italian_coffee.png'
  },
  {
    id: 4,
    title: 'Рецепт: Раф кофе с лавандой',
    category: 'Рецепты',
    tags: ['Рецепты', 'Раф'],
    excerpt: 'Готовим модный лавандовый раф — нежный сливочный кофе с цветочным ароматом.',
    content: `
      <p>Раф кофе — уникальный российский кофейный напиток, придуманный в московской кофейне в 1996 году для постоянного гостя Рафаэля. А мы его готовим с лавандой!</p>
      <h3>Ингредиенты</h3>
      <ul>
        <li>Эспрессо — 50 мл</li>
        <li>Сливки 10% — 100 мл</li>
        <li>Ванильный сахар — 1 ч.л.</li>
        <li>Сушёная лаванда — 0.5 ч.л.</li>
      </ul>
      <h3>Приготовление</h3>
      <p>1. Заварите лаванду в небольшом количестве горячей воды (30 мл) на 3 минуты. Процедите.</p>
      <p>2. Сварите эспрессо.</p>
      <p>3. Смешайте в питчере эспрессо, сливки, лавандовый настой и ванильный сахар.</p>
      <p>4. Взбейте паровой трубкой до образования пышной пены.</p>
      <p>5. Перелейте в подогретую чашку. Украсьте веточкой лаванды.</p>
      <p>Получается невероятно нежный, сливочный напиток с тонким цветочным ароматом. Попробуйте!</p>
    `,
    date: '2026-03-01',
    image: 'images/lavender_raf.png'
  },
  {
    id: 5,
    title: 'Арабика vs Робуста: в чём разница',
    category: 'Обжарка',
    tags: ['Обжарка', 'Зёрна', 'Культура'],
    excerpt: 'Разбираемся в двух главных видах кофейных зёрен: вкус, содержание кофеина, цена.',
    content: `
      <p>В мире существует более 120 видов кофейных деревьев, но коммерчески используются только два: арабика и робуста.</p>
      <h3>Арабика (Coffea arabica)</h3>
      <p>На арабику приходится около 60% мирового производства кофе. Зёрна имеют сложный, богатый вкусовой профиль с выраженной кислотностью, фруктовыми и цветочными нотами.</p>
      <p>Арабика растёт на высоте 900-2000 метров, требует особого климата и ухода. Содержание кофеина: 1-1.5%.</p>
      <h3>Робуста (Coffea canephora)</h3>
      <p>Робуста проще в выращивании, устойчива к болезням и насекомым. Вкус более горький и землистый, с ореховыми нотами. Содержание кофеина почти вдвое выше: 2-2.7%.</p>
      <p>Робусту часто используют в эспрессо-блендах для плотной крема-пенки и дополнительной крепости.</p>
      <h3>Что мы используем</h3>
      <p>В «Арома Кафе» мы работаем преимущественно с арабикой класса Specialty из Эфиопии, Колумбии и Бразилии. Для эспрессо-бленда добавляем немного качественной робусты — это даёт ту самую плотную крему.</p>
    `,
    date: '2026-02-25',
    image: 'images/arabica_robusta.png'
  },
  {
    id: 6,
    title: 'Кофейные традиции разных стран мира',
    category: 'Культура',
    tags: ['Культура'],
    excerpt: 'От турецкого кофе до вьетнамского — как пьют кофе в разных уголках планеты.',
    content: `
      <p>Кофе объединяет людей по всему миру, но каждая страна привносит свой уникальный подход.</p>
      <h3>🇹🇷 Турция: кофе на песке</h3>
      <p>Турецкий кофе варится в джезве (турке) на горячем песке. Кофе не фильтруют — гущу оставляют в чашке. По ней потом гадают на судьбу! Подаётся с кусочком рахат-лукума.</p>
      <h3>🇻🇳 Вьетнам: кофе со сгущёнкой</h3>
      <p>Вьетнамский кофе (cà phê sữa đá) готовится через маленький металлический фильтр прямо в стакан со сгущённым молоком и льдом. Невероятно сладкий и крепкий!</p>
      <h3>🇪🇹 Эфиопия: кофейная церемония</h3>
      <p>В Эфиопии — родине кофе — кофейная церемония длится 2-3 часа. Зёрна обжариваются, перемалываются и варятся прямо при гостях. Это целый ритуал с ароматными травами и попкорном.</p>
      <h3>🇸🇪 Швеция: фика</h3>
      <p>Шведский «фика» — это не просто кофе-брейк, а важная часть культуры. Это время для общения с друзьями или коллегами за чашкой кофе с булочкой (обычно с корицей).</p>
      <p>В «Арома Кафе» мы объединяем лучшие традиции — приходите на свою «фику»!</p>
    `,
    date: '2026-02-20',
    image: 'images/world_coffee.png'
  }
];

/* ============================================
   КОММЕНТАРИИ (хранятся в памяти)
   ============================================ */
const comments = {};

/* ============================================
   РЕНДЕР КАРТОЧЕК СТАТЕЙ
   ============================================ */
function renderPosts(filter) {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;

  const filtered = filter && filter !== 'Все'
    ? ARTICLES.filter(a => a.category === filter || a.tags.includes(filter))
    : ARTICLES;

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">Статей по данному фильтру не найдено.</p>';
    return;
  }

  filtered.forEach(article => {
    const card = document.createElement('article');
    card.className = 'post-card';
    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="post-card-img">
      <div class="post-card-body">
        <span class="post-category">${article.category}</span>
        <h3 class="post-card-title" data-action="open-article" data-id="${article.id}">${article.title}</h3>
        <p class="post-card-excerpt">${article.excerpt}</p>
        <div class="post-card-footer">
          <span class="post-date">${formatDate(article.date)}</span>
          <button class="btn btn-small" data-action="open-article" data-id="${article.id}">Читать →</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

/* ============================================
   ПОКАЗ СТАТЬИ
   ============================================ */
function showArticle(id) {
  const article = ARTICLES.find(a => a.id === Number(id));
  if (!article) return;

  document.getElementById('posts-section').style.display = 'none';
  const view = document.getElementById('article-view');
  view.style.display = 'block';

  document.getElementById('article-img').src = article.image;
  document.getElementById('article-img').alt = article.title;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-meta').innerHTML =
    `<span class="post-category">${article.category}</span> · <span class="post-date">${formatDate(article.date)}</span>`;
  document.getElementById('article-body').innerHTML = article.content;

  // Инициализируем комментарии для статьи
  if (!comments[id]) {
    comments[id] = [];
  }
  renderComments(id);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Сохраняем текущую статью для комментариев
  view.dataset.articleId = id;
}

function showPostsList() {
  document.getElementById('article-view').style.display = 'none';
  document.getElementById('posts-section').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================
   ФИЛЬТРАЦИЯ
   ============================================ */
function initBlogFilters() {
  const container = document.getElementById('blog-filters');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderPosts(btn.dataset.category);
  });
}

/* ============================================
   КОММЕНТАРИИ
   ============================================ */
function renderComments(articleId) {
  const list = document.getElementById('comments-list');
  if (!list) return;

  const articleComments = comments[articleId] || [];
  list.innerHTML = '';

  if (articleComments.length === 0) {
    list.innerHTML = '<p class="no-comments">Пока нет комментариев. Будьте первым!</p>';
    return;
  }

  // Рендерим комментарии верхнего уровня
  const topLevel = articleComments.filter(c => !c.parentId);
  topLevel.forEach(comment => {
    list.appendChild(createCommentElement(comment, articleId, articleComments));
  });
}

function createCommentElement(comment, articleId, allComments) {
  const el = document.createElement('div');
  el.className = 'comment';
  el.dataset.commentId = comment.id;

  el.innerHTML = `
    <div class="comment-header">
      <strong class="comment-author">${escapeHtml(comment.name)}</strong>
      <span class="comment-date">${comment.date}</span>
    </div>
    <p class="comment-text">${escapeHtml(comment.text)}</p>
    <div class="comment-actions">
      <button class="comment-action-btn" data-action="reply-comment" data-id="${comment.id}" data-name="${escapeHtml(comment.name)}">💬 Ответить</button>
      <button class="comment-action-btn like-btn" data-action="like-comment" data-id="${comment.id}">
        ❤️ <span class="like-count">${comment.likes || 0}</span>
      </button>
    </div>
    <div class="comment-replies"></div>
  `;

  // Рекурсивно рендерим ответы
  const replies = allComments.filter(c => c.parentId === comment.id);
  if (replies.length > 0) {
    const repliesContainer = el.querySelector('.comment-replies');
    replies.forEach(reply => {
      repliesContainer.appendChild(createCommentElement(reply, articleId, allComments));
    });
  }

  return el;
}

function addComment(articleId, name, text, parentId) {
  if (!comments[articleId]) {
    comments[articleId] = [];
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  const comment = {
    id: Date.now(),
    name: name,
    text: text,
    date: dateStr,
    likes: 0,
    parentId: parentId || null
  };

  comments[articleId].push(comment);
  renderComments(articleId);
}

function likeComment(articleId, commentId) {
  const articleComments = comments[articleId] || [];
  const comment = articleComments.find(c => c.id === Number(commentId));
  if (comment) {
    comment.likes = (comment.likes || 0) + 1;
    renderComments(articleId);
  }
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================
   ВАЛИДАЦИЯ ФОРМЫ КОММЕНТАРИЯ
   ============================================ */
function initCommentForm() {
  const form = document.getElementById('comment-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    const replyTo = document.getElementById('reply-to');
    const nameError = document.getElementById('name-error');
    const textError = document.getElementById('text-error');

    // Сброс ошибок
    nameError.textContent = '';
    textError.textContent = '';
    nameInput.classList.remove('input-error');
    textInput.classList.remove('input-error');

    let valid = true;
    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    if (!name) {
      nameError.textContent = 'Введите имя';
      nameInput.classList.add('input-error');
      valid = false;
    } else if (name.length < 2) {
      nameError.textContent = 'Имя должно быть не короче 2 символов';
      nameInput.classList.add('input-error');
      valid = false;
    }

    if (!text) {
      textError.textContent = 'Введите комментарий';
      textInput.classList.add('input-error');
      valid = false;
    }

    if (!valid) return;

    const articleId = document.getElementById('article-view').dataset.articleId;
    const parentId = replyTo.value ? Number(replyTo.value) : null;

    addComment(articleId, name, text, parentId);

    // Сброс формы
    nameInput.value = '';
    textInput.value = '';
    replyTo.value = '';
    document.getElementById('reply-indicator').style.display = 'none';
  });

  // Отмена ответа
  const cancelReply = document.getElementById('cancel-reply');
  if (cancelReply) {
    cancelReply.addEventListener('click', () => {
      document.getElementById('reply-to').value = '';
      document.getElementById('reply-indicator').style.display = 'none';
    });
  }
}

/* ============================================
   ПРОГРЕСС ЧТЕНИЯ
   ============================================ */
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const articleView = document.getElementById('article-view');
    if (!articleView || articleView.style.display === 'none') {
      bar.style.width = '0%';
      return;
    }

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  });
}

/* ============================================
   КНОПКА «НАВЕРХ»
   ============================================ */
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
   ============================================ */
function initBlogEvents() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    const articleId = document.getElementById('article-view')?.dataset.articleId;

    switch (action) {
      case 'open-article':
        e.preventDefault();
        showArticle(id);
        break;
      case 'reply-comment':
        e.preventDefault();
        document.getElementById('reply-to').value = id;
        document.getElementById('reply-to-name').textContent = target.dataset.name;
        document.getElementById('reply-indicator').style.display = 'block';
        document.getElementById('comment-name').focus();
        break;
      case 'like-comment':
        e.preventDefault();
        if (articleId) {
          likeComment(articleId, id);
        }
        break;
    }
  });

  // Кнопка «Назад к статьям»
  const backBtn = document.getElementById('back-to-posts');
  if (backBtn) {
    backBtn.addEventListener('click', showPostsList);
  }
}

/* ============================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderPosts('Все');
  initBlogFilters();
  initBlogEvents();
  initCommentForm();
  initReadingProgress();
  initScrollTop();
});
