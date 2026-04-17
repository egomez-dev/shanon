/* ═══════════════════════════════════════════════════
   SHANON GÓMEZ — JAVASCRIPT PRINCIPAL
   ═══════════════════════════════════════════════════ */

const WA_NUMBER = '573242762563';

const WA_MESSAGES = {
  es: 'Hola Shanon, vi tu página y quiero información sobre tu acompañamiento para adultos mayores o recién nacidos.',
  en: 'Hello Shanon, I saw your website and would like information about your support for older adults or newborns.'
};

const SEO = {
  es: {
    title: 'Shanon | Acompañamiento profesional y humano para familias que cuidan',
    description: 'Orientación profesional para familias cuidadoras de adultos mayores y padres de recién nacidos. Enfermera Jefe bilingüe con posgrado en Cuidado Crítico. Contacto por WhatsApp.'
  },
  en: {
    title: 'Shanon | Professional and human support for families who care',
    description: 'Professional guidance for caregiving families of older adults and parents of newborns. Bilingual Registered Nurse with postgraduate training in Critical Care. Contact via WhatsApp.'
  }
};

let currentLang = 'es';

/* ─── Construir URL de WhatsApp ─── */
function buildWaUrl(lang) {
  const msg = encodeURIComponent(WA_MESSAGES[lang] || WA_MESSAGES.es);
  return 'https://wa.me/' + WA_NUMBER + '?text=' + msg;
}

/* ─── Cambiar idioma ─── */
function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') return;
  currentLang = lang;

  // Actualizar atributo lang del documento
  document.documentElement.lang = lang;

  // Actualizar todos los elementos con data-es / data-en
  document.querySelectorAll('[data-es]').forEach(function(el) {
    var text = el.getAttribute('data-' + lang);
    if (text !== null) el.textContent = text;
  });

  // Actualizar todos los enlaces de WhatsApp
  var waUrl = buildWaUrl(lang);
  document.querySelectorAll('.wa-link, .wa-float').forEach(function(el) {
    el.href = waUrl;
  });

  // Actualizar botones de idioma
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // Actualizar SEO meta
  document.title = SEO[lang].title;
  var metaDesc = document.getElementById('meta-description');
  if (metaDesc) metaDesc.setAttribute('content', SEO[lang].description);

  // Guardar preferencia
  try { localStorage.setItem('shanon_lang', lang); } catch(e) {}
}

/* ─── FAQ acordeón ─── */
function toggleFaq(btn) {
  var item = btn.parentElement;
  var isOpen = item.classList.contains('open');

  // Cerrar todos
  document.querySelectorAll('.faq-item.open').forEach(function(i) {
    i.classList.remove('open');
  });

  // Abrir si estaba cerrado
  if (!isOpen) item.classList.add('open');
}

/* ─── Header sticky ─── */
function onScroll() {
  var header = document.getElementById('header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 20);
}

/* ─── Menú mobile ─── */
function initMobileMenu() {
  var toggle = document.getElementById('menu-toggle');
  var nav    = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function() {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Cerrar al hacer click en un link
  nav.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─── Scroll suave para anclas ─── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href   = this.getAttribute('href');
      var target = document.querySelector(href);
      if (!target) return;
      // No interceptar si es solo "#"
      if (href === '#') return;
      e.preventDefault();
      var offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h'), 10) || 72;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}

/* ─── Animaciones de entrada ─── */
function initAnimations() {
  var elements = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar todo
    elements.forEach(function(el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function(el) { observer.observe(el); });
}

/* ─── Inicialización ─── */
document.addEventListener('DOMContentLoaded', function() {
  // Leer idioma guardado o usar español por defecto
  var savedLang = 'es';
  try { savedLang = localStorage.getItem('shanon_lang') || 'es'; } catch(e) {}
  setLanguage(savedLang);

  initMobileMenu();
  initSmoothScroll();
  initAnimations();

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // ejecutar una vez al cargar
});
