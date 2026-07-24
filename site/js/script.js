(function () {
  'use strict';

  /* -------------------- i18n (RU / EN) -------------------- */
  var translations = {
    'nav.home': { ru: 'Главная', en: 'Home' },
    'nav.about': { ru: 'О нас', en: 'About' },
    'nav.rooms': { ru: 'Номера', en: 'Rooms' },
    'nav.amenities': { ru: 'Удобства', en: 'Amenities' },
    'nav.map': { ru: 'Карта', en: 'Map' },
    'nav.contacts': { ru: 'Контакты', en: 'Contacts' },
    'nav.gallery': { ru: 'Галерея', en: 'Gallery' },
    'nav.reviews': { ru: 'Отзывы', en: 'Reviews' },
    'nav.cta': { ru: 'Забронировать', en: 'Book now' },

    'hero.eyebrow': { ru: 'Гостиница в Алматы · ул. Керуентау, 2/1', en: 'Hotel in Almaty · Keruentau St, 2/1' },
    'hero.subtitle': { ru: 'IZI HOTEL-Уютные номера от 6000тг😍', en: 'IZI HOTEL — Cozy rooms from 6,000 KZT😍' },
    'hero.whatsapp': { ru: 'Написать в WhatsApp', en: 'Message on WhatsApp' },
    'hero.stat.rooms': { ru: 'номеров', en: 'rooms' },
    'hero.stat.desk': { ru: 'стойка регистрации', en: 'front desk' },

    'map.eyebrow': { ru: 'Как нас найти', en: 'How to find us' },
    'map.district': { ru: 'Ауэзовский район, 050052', en: 'Auezov district, 050052' },
    'map.open2gis': { ru: 'Открыть в 2ГИС', en: 'Open in 2GIS' },

    'contacts.eyebrow': { ru: 'Свяжитесь с нами', en: 'Get in touch' },
    'contacts.title': { ru: 'Контакты', en: 'Contacts' },
    'contacts.address': { ru: 'Адрес', en: 'Address' },
    'contacts.phone': { ru: 'Телефон', en: 'Phone' },
    'contacts.whatsapp': { ru: 'Написать нам', en: 'Message us' },
    'contacts.bookonline': { ru: 'Забронировать онлайн', en: 'Book online' },

    'about.eyebrow': { ru: 'О гостинице', en: 'About the hotel' },
    'about.title': { ru: 'Комфорт, который всегда рядом', en: 'Comfort that is always close by' },
    'about.text': {
      ru: 'IZI Hotel — современная гостиница в Ауэзовском районе Алматы, на улице Керуентау, 2/1. Мы создали пространство, где чистота, тишина и продуманные детали делают отдых по-настоящему приятным — будь то короткая передышка на пару часов, деловая поездка или отдых на несколько суток. Стойка регистрации работает круглосуточно, а гибкие тарифы позволяют выбрать именно то, что нужно вам.',
      en: 'IZI Hotel is a modern hotel in the Auezov district of Almaty, at 2/1 Keruentau Street. We created a space where cleanliness, quiet and thoughtful details make your stay truly pleasant — whether it\'s a short break of a few hours, a business trip, or a stay of several days. The front desk works around the clock, and flexible rates let you choose exactly what you need.'
    },
    'about.point1': { ru: 'Круглосуточное заселение и выезд', en: '24/7 check-in and check-out' },
    'about.point2': { ru: 'Чистые и уютные номера с продуманным дизайном', en: 'Clean, cozy rooms with thoughtful design' },
    'about.point3': { ru: 'Гибкие тарифы — от 2 часов до нескольких суток', en: 'Flexible rates — from 2 hours to several days' },
    'about.point4': { ru: 'Бесплатный Wi-Fi и парковка для гостей', en: 'Free Wi-Fi and parking for guests' },
    'about.point5': { ru: 'Удобное расположение в Алматы', en: 'Convenient location in Almaty' },
    'about.viewrooms': { ru: 'Смотреть номера', en: 'View rooms' },
    'about.callus': { ru: 'Позвонить нам', en: 'Call us' },

    'rooms.eyebrow': { ru: 'Размещение', en: 'Accommodation' },
    'rooms.title': { ru: 'Наши номера', en: 'Our rooms' },
    'rooms.subtitle': {
      ru: 'Гибкие тарифы для любых целей — краткая остановка, рабочая поездка или отдых на несколько суток. Точную стоимость и наличие уточняйте при бронировании.',
      en: 'Flexible rates for any purpose — a short stop, a business trip, or a stay of several days. Please confirm exact prices and availability when booking.'
    },
    'rooms.popular': { ru: 'Популярный', en: 'Popular' },
    'rooms.standard.name': { ru: 'Стандарт', en: 'Standard' },
    'rooms.standard.desc': {
      ru: 'Уютный номер с двуспальной кроватью, кондиционером, телевизором и всем необходимым для комфортного отдыха.',
      en: 'A cozy room with a double bed, air conditioning, TV, and everything you need for a comfortable stay.'
    },
    'rooms.price.2h': { ru: '2 часа', en: '2 hours' },
    'rooms.price.12h': { ru: 'Пол суток (12 ч)', en: 'Half day (12 h)' },
    'rooms.price.24h': { ru: 'Сутки (24 ч)', en: 'Full day (24 h)' },
    'rooms.book': { ru: 'Забронировать', en: 'Book now' },
    'rooms.note': {
      ru: '* Тарифы указаны для номеров категории «Стандарт» на дату публикации сайта и могут быть изменены. Актуальную стоимость и свободные номера уточняйте по телефону или в WhatsApp.',
      en: '* Rates shown are for "Standard" category rooms as of the site publication date and are subject to change. Please confirm current prices and availability by phone or WhatsApp.'
    },

    'amenities.eyebrow': { ru: 'Для вашего комфорта', en: 'For your comfort' },
    'amenities.title': { ru: 'Удобства гостиницы', en: 'Hotel amenities' },
    'amenities.wifi.title': { ru: 'Бесплатный Wi-Fi', en: 'Free Wi-Fi' },
    'amenities.wifi.desc': { ru: 'Быстрый интернет на всей территории гостиницы', en: 'Fast internet throughout the hotel' },
    'amenities.parking.title': { ru: 'Парковка', en: 'Parking' },
    'amenities.parking.desc': { ru: 'Удобная парковка для гостей отеля', en: 'Convenient parking for hotel guests' },
    'amenities.ac.title': { ru: 'Кондиционер', en: 'Air conditioning' },
    'amenities.ac.desc': { ru: 'Индивидуальный климат-контроль в номере', en: 'Individual climate control in every room' },
    'amenities.tv.title': { ru: 'Телевизор', en: 'TV' },
    'amenities.tv.desc': { ru: 'Смарт-ТВ с широким выбором каналов', en: 'Smart TV with a wide range of channels' },
    'amenities.shower.title': { ru: 'Душ', en: 'Shower' },
    'amenities.shower.desc': { ru: 'Собственная ванная комната в номере', en: 'Private bathroom in every room' },
    'amenities.family.title': { ru: 'Семейные номера', en: 'Family rooms' },
    'amenities.family.desc': { ru: 'Просторные варианты размещения для всей семьи', en: 'Spacious accommodation options for the whole family' },
    'amenities.desk.title': { ru: 'Круглосуточная стойка', en: '24/7 front desk' },
    'amenities.desk.desc': { ru: 'Заселение и поддержка в любое время суток', en: 'Check-in and support at any time' },
    'amenities.laundry.title': { ru: 'Глажка и прачечная', en: 'Ironing and laundry' },
    'amenities.laundry.desc': { ru: 'Услуги для аккуратного и свежего внешнего вида', en: 'Services to keep you neat and fresh' },

    'gallery.eyebrow': { ru: 'Атмосфера', en: 'Atmosphere' },
    'gallery.title': { ru: 'Галерея', en: 'Gallery' },

    'reviews.eyebrow': { ru: 'Отзывы гостей', en: 'Guest reviews' },
    'reviews.title': { ru: 'Нам доверяют', en: 'Trusted by our guests' },
    'reviews.rating': { ru: '4.7 из 5 · 55 отзывов на 2ГИС', en: '4.7 out of 5 · 55 reviews on 2GIS' },
    'reviews.1.text': {
      ru: '«Заселились поздно вечером — никаких проблем, встретили быстро. Номер чистый, тихо, кондиционер работает отлично. За свои деньги — отличный вариант.»',
      en: '"We checked in late in the evening — no problems, greeted quickly. The room was clean, quiet, and the AC worked great. Great value for the money."'
    },
    'reviews.1.source': { ru: 'Гость 2ГИС', en: '2GIS guest' },
    'reviews.2.text': {
      ru: '«Останавливались на пол суток по пути в командировку. Всё аккуратно и по-домашнему: свежее бельё, приятный ремонт, удобная парковка рядом.»',
      en: '"We stayed for half a day on a business trip. Everything was neat and homely: fresh linens, nice interior, convenient parking nearby."'
    },
    'reviews.2.source': { ru: 'Гость Booking.com', en: 'Booking.com guest' },
    'reviews.3.text': {
      ru: '«Хороший Wi-Fi, тепло и уютно. Стойка регистрации работает круглосуточно — заселились без проблем, хотя приехали за полночь.»',
      en: '"Good Wi-Fi, warm and cozy. The front desk works around the clock — we checked in with no issues even though we arrived after midnight."'
    },
    'reviews.3.source': { ru: 'Гость 2ГИС', en: '2GIS guest' },
    'reviews.4.text': {
      ru: '«Бронировали номер № 27 — очень понравился: светлый, тихий, с удобной рабочей зоной. Обязательно вернёмся ещё.»',
      en: '"We booked room #27 — loved it: bright, quiet, with a comfortable work area. Will definitely come back again."'
    },
    'reviews.4.source': { ru: 'Гость Booking.com', en: 'Booking.com guest' },

    'footer.tagline': { ru: 'Современная гостиница в Алматы с уютными номерами, гибкими тарифами и круглосуточным сервисом.', en: 'A modern hotel in Almaty with cozy rooms, flexible rates and round-the-clock service.' },
    'footer.nav.title': { ru: 'Навигация', en: 'Navigation' },
    'footer.contacts.title': { ru: 'Контакты', en: 'Contacts' },
    'footer.booking.title': { ru: 'Бронирование', en: 'Booking' },
    'footer.booking.note': { ru: 'Забронируйте номер онлайн или свяжитесь с нами напрямую — ответим быстро в любое время суток.', en: 'Book a room online or contact us directly — we respond quickly at any time.' },
    'footer.booking.cta': { ru: 'Забронировать номер', en: 'Book a room' },
    'footer.rights': { ru: 'IZI Hotel. Все права защищены.', en: 'IZI Hotel. All rights reserved.' },
    'footer.madewith': { ru: 'Сделано с ♥ для гостей Алматы', en: 'Made with ♥ for guests of Almaty' }
  };

  var LANG_KEY = 'izihotel_lang';

  function applyLanguage(lang) {
    lang = lang === 'en' ? 'en' : 'ru';
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = translations[el.getAttribute('data-i18n')];
      if (entry && entry[lang] != null) el.textContent = entry[lang];
    });

    document.querySelectorAll('[data-href-ru]').forEach(function (el) {
      var href = lang === 'en' ? el.getAttribute('data-href-en') : el.getAttribute('data-href-ru');
      if (href) el.setAttribute('href', href);
    });

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  var storedLang = 'ru';
  try { storedLang = localStorage.getItem(LANG_KEY) || 'ru'; } catch (e) {}
  applyLanguage(storedLang);

  /* -------------------- Preloader -------------------- */
  window.addEventListener('load', function () {
    var pre = document.getElementById('preloader');
    if (pre) {
      setTimeout(function () { pre.classList.add('is-hidden'); }, 350);
    }
  });

  /* -------------------- Sticky header -------------------- */
  var header = document.getElementById('header');
  function onScrollHeader() {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  document.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* -------------------- Mobile menu -------------------- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function toggleMenu() {
    var isOpen = mobileMenu.classList.toggle('is-open');
    burger.classList.toggle('is-active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
  burger.addEventListener('click', toggleMenu);
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* -------------------- Smooth anchor scroll (with header offset) -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = window.innerWidth < 920 ? 70 : 90;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* -------------------- Scroll reveal -------------------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add('is-visible');
          }, (i % 4) * 90);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* -------------------- Back to top -------------------- */
  var backToTop = document.getElementById('backToTop');
  document.addEventListener('scroll', function () {
    backToTop.classList.toggle('is-visible', window.scrollY > 600);
  }, { passive: true });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* -------------------- Reviews slider -------------------- */
  var track = document.getElementById('reviewsTrack');
  var dotsWrap = document.getElementById('reviewDots');
  var prevBtn = document.getElementById('reviewPrev');
  var nextBtn = document.getElementById('reviewNext');
  if (track) {
    var slides = Array.prototype.slice.call(track.children);
    var current = 0;
    var autoTimer;

    slides.forEach(function (_, i) {
      var dot = document.createElement('span');
      if (i === 0) dot.classList.add('is-active');
      dot.addEventListener('click', function () { goTo(i); resetAuto(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(next, 6000);
    }
    nextBtn.addEventListener('click', function () { next(); resetAuto(); });
    prevBtn.addEventListener('click', function () { prev(); resetAuto(); });
    resetAuto();

    // swipe support
    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) { diff < 0 ? next() : prev(); resetAuto(); }
    }, { passive: true });
  }

  /* -------------------- Gallery lightbox -------------------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll('.gallery__item'));
  var lightbox = document.getElementById('lightbox');
  var stage = document.getElementById('lightboxStage');
  var caption = document.getElementById('lightboxCaption');
  var closeBtn = document.getElementById('lightboxClose');
  var prevLbBtn = document.getElementById('lightboxPrev');
  var nextLbBtn = document.getElementById('lightboxNext');
  var lbIndex = 0;

  function renderLightbox(index) {
    lbIndex = (index + galleryItems.length) % galleryItems.length;
    var item = galleryItems[lbIndex];
    stage.innerHTML = '';
    if (item.dataset.video) {
      var video = document.createElement('video');
      video.src = item.dataset.video;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      stage.appendChild(video);
    } else {
      var img = document.createElement('img');
      img.src = item.dataset.full;
      img.alt = item.dataset.caption || '';
      stage.appendChild(img);
    }
    caption.textContent = item.dataset.caption || '';
  }

  function openLightbox(index) {
    renderLightbox(index);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('is-open');
    stage.innerHTML = '';
    document.body.style.overflow = '';
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
  });
  closeBtn.addEventListener('click', closeLightbox);
  nextLbBtn.addEventListener('click', function () { renderLightbox(lbIndex + 1); });
  prevLbBtn.addEventListener('click', function () { renderLightbox(lbIndex - 1); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') renderLightbox(lbIndex + 1);
    if (e.key === 'ArrowLeft') renderLightbox(lbIndex - 1);
  });

  /* -------------------- Gallery video preview autoplay on hover -------------------- */
  document.querySelectorAll('.gallery__item--video video').forEach(function (video) {
    var wrap = video.closest('.gallery__item');
    wrap.addEventListener('mouseenter', function () { video.play().catch(function () {}); });
    wrap.addEventListener('mouseleave', function () { video.pause(); video.currentTime = 0; });
  });

  /* -------------------- Footer year -------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
