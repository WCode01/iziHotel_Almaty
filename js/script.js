(function () {
  'use strict';

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
