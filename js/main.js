(function () {
  'use strict';

  /* ============================================================
     Configuration à personnaliser par FH Héritage
     ============================================================ */
  var CONTACT = {
    email: 'contact@fhheritage.ma', // TODO: remplacer par l'adresse email officielle
    whatsappNumber: '212600000000',  // TODO: remplacer par le numéro WhatsApp officiel (format international sans "+")
    phoneDisplay: '+212 6XX XX XX XX' // TODO: remplacer par le numéro de téléphone officiel
  };

  /* ============================================================
     En-tête : fond au scroll + menu mobile
     ============================================================ */
  var header = document.getElementById('siteHeader');
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeNav() {
    mainNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* ============================================================
     Apparition douce des sections au scroll
     ============================================================ */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ============================================================
     Simulateur de rentabilité
     ============================================================ */
  var simPrix = document.getElementById('sim-prix');
  var simNuits = document.getElementById('sim-nuits');

  var resBrut = document.getElementById('res-brut');
  var resCommission = document.getElementById('res-commission');
  var resNet = document.getElementById('res-net');

  var COMMISSION_RATE = 0.20;

  var madFormatter = new Intl.NumberFormat('fr-MA', {
    maximumFractionDigits: 0
  });

  function formatMAD(value) {
    if (!isFinite(value)) value = 0;
    return madFormatter.format(Math.max(0, Math.round(value))) + ' MAD';
  }

  function computeSimulation() {
    var prix = parseFloat(simPrix.value) || 0;
    var nuits = parseFloat(simNuits.value) || 0;

    var caBrut = prix * nuits;
    var commission = caBrut * COMMISSION_RATE;
    var revenuNet = caBrut - commission;

    resBrut.textContent = formatMAD(caBrut);
    resCommission.textContent = formatMAD(commission);
    resNet.textContent = formatMAD(revenuNet);
  }

  [simPrix, simNuits].forEach(function (el) {
    if (!el) return;
    el.addEventListener('input', computeSimulation);
    el.addEventListener('change', computeSimulation);
  });
  computeSimulation();

  /* ============================================================
     Formulaire de contact
     Prêt à être connecté à un service d'envoi d'email,
     un CRM ou une API WhatsApp Business.
     ============================================================ */
  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {
        nom: document.getElementById('c-nom').value.trim(),
        prenom: document.getElementById('c-prenom').value.trim(),
        telephone: document.getElementById('c-telephone').value.trim(),
        email: document.getElementById('c-email').value.trim(),
        ville: document.getElementById('c-ville').value,
        type: document.getElementById('c-type').value,
        chambres: document.getElementById('c-chambres').value,
        message: document.getElementById('c-message').value.trim()
      };

      if (!data.nom || !data.prenom || !data.telephone || !data.email) {
        showFormStatus('Merci de renseigner votre nom, prénom, téléphone et email.', true);
        return;
      }

      // TODO : remplacer ce bloc par un appel réel (API email, CRM, WhatsApp Business...)
      // Exemple : fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) })
      console.log('Nouvelle demande FH Héritage :', data);

      showFormStatus('Merci ' + data.prenom + ', votre demande a bien été enregistrée. Notre équipe vous recontacte sous 24h.', false);
      contactForm.reset();
    });
  }

  function showFormStatus(message, isError) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.classList.add('is-visible');
    formStatus.classList.toggle('is-error', !!isError);
  }

  /* ============================================================
     Liens WhatsApp & contact
     ============================================================ */
  var waMessage = encodeURIComponent("Bonjour FH Héritage, je souhaite obtenir une estimation pour mon bien.");
  var waLink = 'https://wa.me/' + CONTACT.whatsappNumber + '?text=' + waMessage;

  var whatsappLink = document.getElementById('whatsappLink');
  var contactEmail = document.getElementById('contactEmail');
  var contactPhone = document.getElementById('contactPhone');

  if (whatsappLink) whatsappLink.href = waLink;
  if (contactEmail) contactEmail.textContent = CONTACT.email;
  if (contactPhone) contactPhone.textContent = CONTACT.phoneDisplay;

  /* ============================================================
     Année du pied de page
     ============================================================ */
  var footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

})();
