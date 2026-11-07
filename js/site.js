/* ==========================================================================
   Mill Pond Dental Care — shared site script (every page)
   Each block runs only when its elements are on the page.
   In Webflow: paste into Site settings > Custom code > Footer, or a
   site-wide embed. Navbar dropdowns/drawer can be replaced by Webflow's
   native Navbar + Dropdown elements.
   ========================================================================== */
(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  /* Hours: today's row and open/closed pill ------------------------------ */
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' }));
  const day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
  const openDay = day >= 1 && day <= 4;               // Mon–Thu
  const isOpen = openDay && mins >= 480 && mins < 1050; // 8:00–17:30
  $$(`.hours_table tr[data-days~="${day}"], .hours_table tr[data-day="${day}"]`).forEach(tr => tr.classList.add('is-today'));
  $$('[data-hours-status]').forEach(pill => {
    pill.hidden = false;
    pill.textContent = isOpen ? 'Open now' : 'Closed now';
    pill.classList.toggle('is-closed', !isOpen);
  });

  /* Desktop dropdowns: keyboard + click support ------------------------- */
  $$('.navbar_dropdown').forEach(dd => {
    const btn = $('.navbar_dropdown-toggle', dd);
    if (!btn) return;
    btn.addEventListener('click', () => { const open = dd.classList.toggle('is-open'); btn.setAttribute('aria-expanded', open); });
    dd.addEventListener('focusout', e => { if (!dd.contains(e.relatedTarget)) { dd.classList.remove('is-open'); btn.setAttribute('aria-expanded', false); } });
  });

  /* Mobile drawer -------------------------------------------------------- */
  const menuBtn = $('.navbar_menu-button'), drawer = document.getElementById('drawer');
  if (menuBtn && drawer) {
    const setMenu = open => {
      drawer.classList.toggle('is-open', open); document.body.classList.toggle('is-menu-open', open);
      menuBtn.setAttribute('aria-expanded', open); menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      $('use', menuBtn)?.setAttribute('href', open ? '#i-close' : '#i-menu');
    };
    menuBtn.addEventListener('click', () => setMenu(!drawer.classList.contains('is-open')));
    $$('a', drawer).forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });
  }

  /* Simple demo form (browser validation only; nothing is sent) --------- */
  $$('[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const ok = $('[data-form-success]', form); if (ok) ok.hidden = false;
  }));

  /* Contact form: accessible inline validation (nothing is sent) -------- */
  $$('[data-contact-form]').forEach(form => {
    const summary = $('[data-form-errors]', form), success = $('[data-form-success]', form);
    const honeypot = $('[data-honeypot]', form);
    const fields = $$('input[required], input[type="email"], select[required], textarea[required]', form).filter(f => f !== honeypot);
    const messageFor = f => {
      const v = f.validity, name = $(`label[for="${f.id}"]`, form)?.textContent.replace('*', '').trim() || 'This field';
      if (f.type === 'checkbox') return v.valueMissing ? 'Please agree to be contacted so we can reply.' : '';
      if (v.valueMissing) return `Please enter your ${name.toLowerCase()}.`;
      if (v.typeMismatch) return 'Please enter a valid email address, like name@example.com.';
      if (v.patternMismatch) return 'Please enter a phone number with area code, like 519-555-0123.';
      return '';
    };
    const check = f => {
      const msg = messageFor(f), err = $(`[data-error-for="${f.id}"]`, form);
      f.setAttribute('aria-invalid', msg ? 'true' : 'false');
      f.closest('.form_field-wrapper, .is-full')?.classList.toggle('is-error', !!msg);
      if (err) { err.textContent = msg; err.hidden = !msg; }
      return !msg;
    };
    fields.forEach(f => {
      f.addEventListener('blur', () => { if (f.hasAttribute('aria-invalid')) check(f); });
      f.addEventListener(f.type === 'checkbox' ? 'change' : 'input', () => { if (f.getAttribute('aria-invalid') === 'true') check(f); });
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (success) success.hidden = true;
      const invalid = fields.filter(f => !check(f));
      if (invalid.length) {
        if (summary) {
          summary.textContent = invalid.length === 1 ? 'Please fix 1 field below.' : `Please fix ${invalid.length} fields below.`;
          summary.hidden = false;
        }
        invalid[0].focus();
        return;
      }
      if (summary) summary.hidden = true;
      if (honeypot && honeypot.value) return; /* bot: silently ignore */
      if (success) { success.hidden = false; success.focus(); }
    });
  });

  /* Tabs (team page): ARIA tabs with arrow keys; #panel-id opens that tab */
  $$('[data-tabs]').forEach(box => {
    const tabs = $$('[role="tab"]', box);
    const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
    const select = (i, focus) => {
      tabs.forEach((t, n) => {
        const on = n === i;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        panels[n].hidden = !on;
      });
      if (focus) tabs[i].focus();
      $$('.reveal', panels[i]).forEach(el => el.classList.add('is-visible'));
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        const last = tabs.length - 1;
        const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
        if (next === undefined) return;
        e.preventDefault(); select(next, true);
      });
    });
    const fromHash = () => panels.findIndex(p => p && '#' + p.id === location.hash);
    const start = fromHash();
    select(start >= 0 ? start : 0);
    if (start >= 0) {
      const jump = () => box.scrollIntoView({ behavior: 'instant' });
      if (document.readyState === 'complete') jump(); else window.addEventListener('load', jump, { once: true });
    }
    window.addEventListener('hashchange', () => { const i = fromHash(); if (i >= 0) { select(i); box.scrollIntoView(); } });
  });

  /* Reveal on scroll ----------------------------------------------------- */
  const reveals = $$('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('is-visible'));
})();
