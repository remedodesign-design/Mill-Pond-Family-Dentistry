/* Mill Pond Dental Care: shared wireframe chrome (top bar, header, footer, mobile bar).
   Not part of the production build. Pages mark slots with data-wf="header|footer|sticky". */
(function () {
  var pages = [
    ['wireframe-home.html', 'Home'],
    ['wireframe-about.html', 'About'],
    ['wireframe-team.html', 'Team'],
    ['wireframe-services.html', 'Services'],
    ['wireframe-service-detail.html', 'Service detail'],
    ['wireframe-contact.html', 'Contact']
  ];
  var here = location.pathname.split('/').pop();
  var title = document.body.getAttribute('data-title') || document.title;

  var bar = document.createElement('div');
  bar.className = 'bar';
  bar.innerHTML =
    '<strong>Mill Pond Dental Care · ' + title + ' (layout only)</strong>' +
    '<nav aria-label="Wireframes">' + pages.map(function (p) {
      return '<a href="' + p[0] + '"' + (p[0] === here ? ' aria-current="page"' : '') + '>' + p[1] + '</a>';
    }).join('') + '</nav>' +
    '<div class="row"><button id="bd" aria-pressed="true">Desktop 1280</button><button id="bm" aria-pressed="false">Mobile 390</button></div>';
  var old = document.querySelector('.bar');
  if (old) old.replaceWith(bar); else document.body.prepend(bar);

  var chrome = {
    header:
      '<span class="tag">Header (global)</span>' +
      '<div class="nav" style="margin-top:.75rem">' +
      '<div class="box" style="width:180px;height:44px">LOGO lockup</div>' +
      '<div class="links"><span>Services ▾</span><span>New Patients</span><span>About ▾</span><span>Blog</span><span>Contact</span></div>' +
      '<div class="row"><span class="phone lbl" style="margin:0">☎ 519-268-3351</span><span class="btn solid book">Book an Appointment</span></div>' +
      '<div class="box burger">☰</div></div>',
    footer:
      '<span class="tag">Footer (global)</span>' +
      '<div class="row" style="justify-content:space-between;margin-top:1rem;padding-bottom:1.5rem;border-bottom:1px solid #888">' +
      '<div style="flex:1;min-width:220px"><div class="h w60" style="height:22px"></div><div class="t w40"></div></div>' +
      '<div class="row"><span class="btn solid">Book an Appointment</span><span class="btn">Call us</span></div></div>' +
      '<div class="grid g4" style="margin-top:1.5rem">' +
      '<div><div class="box" style="height:40px;width:150px">LOGO</div><div class="t"></div><div class="t w80"></div><div class="lbl" style="color:#ccc">NAP + socials</div></div>' +
      '<div><div class="h w40"></div><div class="lbl" style="color:#ccc">Services links</div></div>' +
      '<div><div class="h w40"></div><div class="lbl" style="color:#ccc">Patients: New Patients, CDCP, Emergencies, Blog</div></div>' +
      '<div><div class="h w40"></div><div class="lbl" style="color:#ccc">Hours</div></div></div>' +
      '<div class="lbl" style="color:#ccc;margin-top:1.5rem">© 2026 Mill Pond Dental Care · Privacy · Accessibility</div>',
    sticky: '<span class="btn solid">Book</span><span class="btn">Call</span>'
  };
  document.querySelectorAll('[data-wf]').forEach(function (el) {
    var k = el.getAttribute('data-wf');
    if (chrome[k]) el.innerHTML = chrome[k];
  });

  var bd = document.getElementById('bd'), bm = document.getElementById('bm');
  function set(m) {
    document.body.classList.toggle('mobile', m);
    bd.setAttribute('aria-pressed', String(!m));
    bm.setAttribute('aria-pressed', String(m));
    try { localStorage.setItem('wf-mobile', m ? '1' : '0'); } catch (e) {}
  }
  bd.onclick = function () { set(false); };
  bm.onclick = function () { set(true); };
  var saved = false;
  try { saved = localStorage.getItem('wf-mobile') === '1'; } catch (e) {}
  set(saved);
})();
