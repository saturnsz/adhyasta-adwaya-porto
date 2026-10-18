// =============================================
// macOS Portfolio — main.js
// =============================================

// ── DATA ──────────────────────────────────────
const DATA = {
  name: 'Adhyasta Adwaya Al Karim',
  shortName: 'Adhyasta',
  title: 'Machine Learning · Computer Vision · AI',
  university: 'Universitas Teknologi Yogyakarta',
  bio: 'Computer Science student with end-to-end experience in Machine Learning, Deep Learning, and AI deployment from data labeling to intelligent application integration.',

  social: {
    github:   'https://github.com/saturnsz',
    linkedin: 'https://www.linkedin.com/in/adhyasta-adwaya-al-karim/',
    email:    'mailto:adhyastawaya4@gmail.com',
    spotify:  'https://open.spotify.com/playlist/6ZoCDAvQedZWIUV8cPZO7z',
    streamlit:'https://share.streamlit.io/user/saturnsz',
    cv:       'https://drive.google.com/file/d/1x4vTiaind01HicdHdRgDZPOl_5cIesuj/view?usp=sharing',
  },

  projects: [
    {
      id: 1,
      title: 'Intelligent Urgent Order Classification System',
      short: 'Automates priority order handling with XGBoost + REST API.',
      desc: 'To address manual bottlenecks in logistics, I built an intelligent classification system that automates priority handling by analyzing the economic context of an order (Shipping Cost Ratio) using an XGBoost Classifier. Decoupled architecture: Python REST API on PythonAnywhere, Vanilla JS frontend on Vercel, and SQLite.',
      tags: ['ml', 'web'],
      tagsLabel: ['Machine Learning', 'Python', 'REST API'],
      thumb: 'project/gambar 6.png',
      link: 'https://project-ln-t-camp-global-superstore.vercel.app/',
    },
    {
      id: 2,
      title: 'TaksirRumah Machine Learning Deployment',
      short: 'Supervised ML system for house risk & price prediction.',
      desc: 'Web design incorporating the deployment of a supervised machine learning system, combining web design and intelligent system features for determining house risk and price.',
      tags: ['ml', 'web'],
      tagsLabel: ['Machine Learning', 'Python', 'Data Science'],
      thumb: 'project/gambar 1.png',
      link: 'https://taksir-rumah.vercel.app/',
    },
    {
      id: 3,
      title: 'Sistem Deteksi Kerusakan Bodi Mobil (CNN + CBAM)',
      short: 'Auto-detects car body damage via hybrid CNN + CBAM.',
      desc: 'An intelligent system based on deep learning and computer vision that automatically detects damage to cars using CNN architecture with CBAM attention mechanism for insurance and inspection automation.',
      tags: ['cv'],
      tagsLabel: ['Computer Vision', 'Deep Learning', 'Python'],
      thumb: 'project/gambar 2.png',
      link: 'https://damagecardetection-bgbmywze2q72kca7q4jtya.streamlit.app/',
    },
    {
      id: 4,
      title: 'Sistem Prediksi Tingkat Resiko Membeli Rumah',
      short: 'Home-buying risk prediction via Random Forest.',
      desc: 'Developing a home-buying risk level prediction system using a Random Forest machine learning model. The system helps users assess the risk associated with purchasing a property through mortgage financing.',
      tags: ['ml'],
      tagsLabel: ['Machine Learning', 'Python', 'Data Science'],
      thumb: 'project/gambar 3.png',
      link: 'https://taksirrumah-sistemprediksiresiko.streamlit.app/',
    },
    {
      id: 5,
      title: 'Sistem Prediksi Nilai Harga Rumah Jogja',
      short: 'House price prediction using historical property data.',
      desc: 'Developing a house price prediction system in Yogyakarta using a machine learning model. The system leverages historical property data to provide accurate price estimations for residential properties.',
      tags: ['ml'],
      tagsLabel: ['Machine Learning', 'Python', 'Data Science'],
      thumb: 'project/gambar 4.png',
      link: 'https://sistem-prediksi-harga-rumah-jogja.streamlit.app/',
    },
    {
      id: 6,
      title: 'Web Analisis Sentimen Public X',
      short: 'NLP sentiment analysis of Twitter/X public opinion.',
      desc: 'Developing a natural language processing system for sentiment analysis by scraping data from Twitter (X) and analyzing it through comprehensive data visualization. The system provides insights into public opinion trends.',
      tags: ['nlp'],
      tagsLabel: ['Machine Learning', 'Python', 'LLM'],
      thumb: 'project/gambar 5.png',
      link: 'https://sentimen-public-kasus-nakes-2026.vercel.app/',
    },
  ],

  experience: [
    {
      id: 'exp1',
      period: 'Achievement',
      title: 'Winner 1st Best Project Computer Vision',
      org: 'Computer Vision Bootcamp HIMATIKA × CODING COLLECTIVE',
      img: 'experience/gambar 6.png',
      points: [
        'Awarded 1st Place for developing an automated AI-powered school safety and bullying detection system via CCTV.',
        'Engineered a hybrid Computer Vision architecture combining YOLO for real-time action detection and CNN for deep classification of aggressive behavior patterns.',
        'Designed the end-to-end pipeline to enable early intervention and automated incident alert capability for educational environments.',
      ],
    },
    {
      id: 'exp2',
      period: 'September 2025 sampai Januari 2026',
      title: 'Community Service Officer',
      org: 'JOGJA CODING HOUSE',
      img: 'experience/gambar 7.png',
      points: [
        'Coordinated and facilitated interactive webinars and training sessions to boost community engagement.',
        'Managed the end-to-end execution of community events, ensuring seamless logistics and successful delivery.',
        'Collaborated closely with team members to strategize, plan event proceedings, and ensure organizational goals were met.',
      ],
    },
    {
      id: 'exp3',
      period: 'Hackathon 2026',
      title: 'Hackaton Refactory × UGM 2026',
      org: 'Large Language Model',
      img: 'sertifikat/foto 17.jpg',
      points: [
        'Developed and integrated an LLM-based chatbot utilizing the Gemini API to deliver smart conversational features.',
        'Curated and preprocessed datasets to ensure optimal model readiness and performance.',
        'Designed an intuitive UI and managed end-to-end deployment of the application.',
      ],
    },
    {
      id: 'exp4',
      period: '2024 sampai 2026',
      title: 'Program Kreativitas Mahasiswa PKM-KC',
      org: 'Computer Vision BASys-School',
      img: 'gambar pkm.jpg',
      points: [
        'Developed an intelligent Computer Vision model utilizing YOLO to automatically detect bullying behaviors in school environments (BASys-School).',
        'Designed the operational workflow and system architecture, integrating real-time video streaming into a web-based monitoring platform.',
        'Collected, annotated, and pre-processed raw video footage to establish the primary dataset for training the Deep Learning model.',
      ],
    },
  ],

  certificates: [
    { id: 'c10', src: 'sertifikat/foto 10.jpg', label: 'Microsoft Learning', cat: 'kursus' },
    { id: 'c11', src: 'sertifikat/foto 11.jpg', label: 'Winner 1st Computer Vision Bootcamp', cat: 'lomba' },
    { id: 'c12', src: 'sertifikat/foto 12.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c13', src: 'sertifikat/foto 13.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c14', src: 'sertifikat/foto 14.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c15', src: 'sertifikat/foto 15.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c16', src: 'sertifikat/foto 17.jpg', label: 'Hackathon Refactory × UGM 2026', cat: 'lomba' },
    { id: 'c17', src: 'sertifikat/foto 17.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c18', src: 'sertifikat/foto 18.png', label: 'Certificate', cat: 'kursus' },
    { id: 'c19', src: 'sertifikat/foto 19.png', label: 'Certificate', cat: 'kursus' },
    { id: 'c20', src: 'sertifikat/foto 20.jpg', label: 'Certificate', cat: 'kursus' },
    { id: 'c21', src: 'sertifikat/foto 21.png', label: 'Certificate', cat: 'organisasi' },
  ],
};

// ── 1. CLOCK ──────────────────────────────────
function initClock() {
  const clock = document.getElementById('menubarClock');
  if (!clock) return;
  const DAYS   = ['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
  const MONTHS = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agt','Sep','Okt','Nov','Des'];
  function tick() {
    const d = new Date();
    const day   = DAYS[d.getDay()];
    const date  = d.getDate();
    const month = MONTHS[d.getMonth()];
    const hh = String(d.getHours()).padStart(2,'0');
    const mm = String(d.getMinutes()).padStart(2,'0');
    if (window.innerWidth <= 640) {
      clock.textContent = `${hh}.${mm}`;
    } else {
      clock.textContent = `${day} ${date} ${month}  ${hh}.${mm}`;
    }
  }
  tick();
  setInterval(tick, 1000);
}

// ── 2. THEME ──────────────────────────────────
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  let dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);

  function applyTheme() {
    root.setAttribute('data-theme', dark ? 'dark' : '');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  applyTheme();

  if (btn) {
    btn.addEventListener('click', () => {
      dark = !dark;
      applyTheme();
    });
  }
}

// ── 3. WINDOWS ────────────────────────────────
let zCounter = 10;

function updateDiStatus(label) {
  const statusText = document.getElementById('diStatusText');
  if (!statusText) return;
  if (label) {
    statusText.textContent = label;
    return;
  }
  const openWins = [...document.querySelectorAll('.window')].filter(w => w.style.display !== 'none' && w.style.display !== '');
  if (openWins.length > 0) {
    const topWin = openWins.sort((a, b) => (parseInt(b.style.zIndex) || 0) - (parseInt(a.style.zIndex) || 0))[0];
    const activeItem = document.querySelector(`.dock-item[data-window="${topWin.id}"]`);
    statusText.textContent = activeItem?.dataset.label || 'Active';
  } else {
    statusText.textContent = 'Adhyasta OS';
  }
}

function bringToFront(win) {
  zCounter++;
  win.style.zIndex = zCounter;
  document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
  win.classList.add('focused');
  const dockItem = document.querySelector(`.dock-item[data-window="${win.id}"]`);
  if (dockItem?.dataset.label) {
    updateDiStatus(dockItem.dataset.label);
  }
}

function initWindows() {
  const windows = document.querySelectorAll('.window');

  windows.forEach(win => {
    win.addEventListener('pointerdown', () => bringToFront(win), { passive: true });

    const titlebar = win.querySelector('.window-titlebar');
    const closeId  = titlebar?.querySelector('.wc-close')?.id;
    const minId    = titlebar?.querySelector('.wc-min')?.id;
    const maxId    = titlebar?.querySelector('.wc-max')?.id;

    // Close
    const closeBtn = win.querySelector('.wc-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        win.style.display = 'none';
        win.classList.remove('open-mobile', 'focused');
        // remove open & active dot from dock
        const dockItem = document.querySelector(`.dock-item[data-window="${win.id}"]`);
        if (dockItem) {
          dockItem.classList.remove('open');
          dockItem.classList.remove('active');
        }
        updateDiStatus();
      });
    }

    // Minimize
    const minBtn = win.querySelector('.wc-min');
    if (minBtn) {
      minBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        win.classList.add('minimized');
        setTimeout(() => {
          win.style.display = 'none';
          win.classList.remove('minimized', 'open-mobile', 'focused');
          const dockItem = document.querySelector(`.dock-item[data-window="${win.id}"]`);
          if (dockItem) {
            dockItem.classList.remove('open');
            dockItem.classList.remove('active');
          }
          updateDiStatus();
        }, 500);
      });
    }

    // Maximize / Restore
    let prevStyle = {};
    const maxBtn = win.querySelector('.wc-max');
    if (maxBtn) {
      maxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (win.classList.contains('maximized')) {
          win.classList.remove('maximized');
          win.style.top    = prevStyle.top;
          win.style.left   = prevStyle.left;
          win.style.width  = prevStyle.width;
          win.style.height = prevStyle.height;
        } else {
          prevStyle = { top: win.style.top, left: win.style.left, width: win.style.width, height: win.style.height };
          win.classList.add('maximized');
          bringToFront(win);
        }
      });
    }

    // Drag via titlebar
    if (titlebar) {
      let dragging = false, ox = 0, oy = 0;

      titlebar.addEventListener('pointerdown', (e) => {
        if (window.innerWidth <= 768) return; // Disable window dragging on mobile
        if (e.target.closest('.wc-btn')) return;
        bringToFront(win);
        dragging = true;
        ox = e.clientX - win.offsetLeft;
        oy = e.clientY - win.offsetTop;
        titlebar.setPointerCapture(e.pointerId);
        e.preventDefault();
      });

      titlebar.addEventListener('pointermove', (e) => {
        if (!dragging || win.classList.contains('maximized') || window.innerWidth <= 768) return;
        const x = Math.max(0, Math.min(window.innerWidth - win.offsetWidth, e.clientX - ox));
        const y = Math.max(0, Math.min(window.innerHeight - win.offsetHeight, e.clientY - oy));
        win.style.left = x + 'px';
        win.style.top  = y + 'px';
      });

      titlebar.addEventListener('pointerup', () => { dragging = false; });
      titlebar.addEventListener('pointercancel', () => { dragging = false; });
    }
  });

  // Sync initial responsive state
  handleWindowResize();
  window.addEventListener('resize', handleWindowResize);
}

function handleWindowResize() {
  const isMobile = window.innerWidth <= 768;
  document.querySelectorAll('.window').forEach(win => {
    const isWinOpen = win.style.display !== 'none' && (win.style.display === 'flex' || win.id === 'win-hero');
    if (isWinOpen && isMobile) {
      win.classList.add('open-mobile');
    } else if (!isMobile) {
      win.classList.remove('open-mobile');
    }
  });
}

// ── 4. DOCK ───────────────────────────────────
function initDock() {
  const dockItems = document.querySelectorAll('.dock-item');
  const dockEl = document.getElementById('dock');
  if (!dockItems.length) return;

  // Magnification (desktop only)
  dockItems.forEach((item, idx) => {
    item.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 768) return;
      dockItems.forEach((it, i) => {
        it.classList.remove('mag-1', 'mag-2');
        const d = Math.abs(i - idx);
        if (d === 1) it.classList.add('mag-1');
        if (d === 2) it.classList.add('mag-2');
      });
      if (dockEl) dockEl.classList.add('island-expanded');
    });

    item.addEventListener('mouseleave', () => {
      if (dockEl) dockEl.classList.remove('island-expanded');
    });
  });

  dockEl?.addEventListener('mouseleave', () => {
    dockItems.forEach(it => it.classList.remove('mag-1', 'mag-2'));
    dockEl.classList.remove('island-expanded');
  });

  // Click / Touch actions
  dockItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Dynamic Island pulse animation
      if (dockEl) {
        dockEl.classList.remove('di-pulse');
        void dockEl.offsetWidth;
        dockEl.classList.add('di-pulse');
        dockEl.classList.add('island-expanded');
        setTimeout(() => dockEl.classList.remove('island-expanded'), 600);
      }

      // Bounce icon
      item.classList.remove('bounce');
      void item.offsetWidth;
      item.classList.add('bounce');
      item.addEventListener('animationend', () => item.classList.remove('bounce'), { once: true });

      // Dynamic Island Popup Animation (runs on EVERY click / tap)
      const popup = item.querySelector('.di-popup');
      if (popup) {
        popup.classList.remove('show-popup');
        void popup.offsetWidth; // force reflow
        popup.classList.add('show-popup');
        clearTimeout(item._popupTimer);
        item._popupTimer = setTimeout(() => {
          popup.classList.remove('show-popup');
        }, 1200);
      }

      // External link?
      const href = item.dataset.href;
      if (href) {
        window.open(href, '_blank', 'noopener');
        return;
      }

      // Window toggle
      const winId = item.dataset.window;
      if (!winId) return;
      const win = document.getElementById(winId);
      if (!win) return;

      const isMobile = window.innerWidth <= 768;

      // Determine visibility
      const isVisible = isMobile
        ? (win.classList.contains('open-mobile') && win.style.display !== 'none')
        : (win.style.display !== 'none' && (win.style.display === 'flex' || (win.id === 'win-hero' && win.style.display !== 'none')));

      if (isVisible) {
        // Toggle OFF (close)
        win.style.display = 'none';
        win.classList.remove('open-mobile', 'focused');
        item.classList.remove('open', 'active');
        updateDiStatus();
      } else {
        // If mobile, close any other windows first to keep screen clean
        if (isMobile) {
          document.querySelectorAll('.window').forEach(w => {
            if (w !== win) {
              w.style.display = 'none';
              w.classList.remove('open-mobile', 'focused');
              const otherDock = document.querySelector(`.dock-item[data-window="${w.id}"]`);
              if (otherDock) otherDock.classList.remove('open', 'active');
            }
          });
        }

        // Open window
        win.style.display = 'flex';
        win.style.flexDirection = 'column';
        if (isMobile) {
          win.classList.add('open-mobile');
        } else {
          win.style.animation = 'windowAppear 450ms cubic-bezier(0.32,0.72,0,1) both';
        }
        item.classList.add('open', 'active');
        bringToFront(win);
      }
    });

    // Keyboard accessibility
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

// ── 5. PORTFOLIO RENDER ───────────────────────
function initPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const sidebar = document.querySelector('.finder-sidebar');
  if (!grid) return;

  let activeFilter = 'all';

  function renderProjects(filter) {
    const filtered = filter === 'all' ? DATA.projects : DATA.projects.filter(p => p.tags.includes(filter));
    grid.innerHTML = filtered.map(p => `
      <div class="project-card" data-id="${p.id}" role="button" tabindex="0" aria-label="${p.title}">
        <div class="project-card-thumb">
          <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="project-card-body">
          <div class="project-card-tags">
            ${p.tagsLabel.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <div class="project-card-title">${p.title}</div>
          <div class="project-card-desc">${p.short}</div>
        </div>
      </div>
    `).join('');

    // Attach click for modal
    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.id);
        openProjectModal(DATA.projects.find(p => p.id === id));
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') card.click();
      });
    });
  }

  renderProjects('all');

  // Sidebar filter
  if (sidebar) {
    sidebar.querySelectorAll('.finder-sidebar-item').forEach(item => {
      item.addEventListener('click', () => {
        sidebar.querySelectorAll('.finder-sidebar-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        activeFilter = item.dataset.filter;
        renderProjects(activeFilter);
      });
    });
  }
}

// ── 6. PROJECT MODAL ──────────────────────────
function openProjectModal(project) {
  const modal  = document.getElementById('projectModal');
  if (!modal || !project) return;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-desc').textContent  = project.desc;
  document.getElementById('modal-img').src           = project.thumb;
  document.getElementById('modal-img').alt           = project.title;
  document.getElementById('modal-link').href         = project.link;
  document.getElementById('modal-tags').innerHTML    = project.tagsLabel.map(t => `<span class="project-tag">${t}</span>`).join('');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initProjectModal() {
  const closeBtn  = document.getElementById('projectModalClose');
  const backdrop  = document.getElementById('projectModalBackdrop');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (backdrop) backdrop.addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProjectModal(); });
}

// ── 7. EXPERIENCE RENDER ─────────────────────
function initExperience() {
  const list   = document.querySelector('.notes-list');
  const detail = document.getElementById('exp-detail');
  if (!list || !detail) return;

  function renderDetail(exp) {
    detail.innerHTML = `
      <div class="exp-detail-period">${exp.period}</div>
      <div class="exp-detail-title">${exp.title}</div>
      <div class="exp-detail-org">${exp.org}</div>
      <div class="exp-detail-img">
        <img src="${exp.img}" alt="${exp.title}" loading="lazy" />
      </div>
      <div class="exp-detail-points">
        ${exp.points.map(pt => `<div class="exp-detail-point">${pt}</div>`).join('')}
      </div>
    `;
  }

  // Build list
  list.innerHTML += DATA.experience.map((exp, idx) => `
    <div class="notes-item ${idx === 0 ? 'active' : ''}" data-id="${exp.id}" role="button" tabindex="0" aria-label="${exp.title}">
      <div class="notes-item-title">${exp.title}</div>
      <div class="notes-item-sub">${exp.period}</div>
    </div>
  `).join('');

  renderDetail(DATA.experience[0]);

  list.querySelectorAll('.notes-item').forEach(item => {
    item.addEventListener('click', () => {
      list.querySelectorAll('.notes-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const exp = DATA.experience.find(e => e.id === item.dataset.id);
      if (exp) renderDetail(exp);
    });
    item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
  });
}

// ── 8. CERTIFICATE RENDER ────────────────────
function initCertificate() {
  const grid = document.getElementById('cert-grid');
  const filters = document.querySelectorAll('.photos-filter');
  if (!grid) return;

  let allCerts = DATA.certificates;
  let currentIdx = 0;
  let visibleCerts = [...allCerts];

  function renderCerts(certs) {
    visibleCerts = certs;
    grid.innerHTML = certs.map((c, idx) => `
      <div class="cert-item" data-idx="${idx}" data-src="${c.src}" role="button" tabindex="0" aria-label="${c.label}">
        <img src="${c.src}" alt="${c.label}" loading="lazy" />
        <div class="cert-item-label">${c.label}</div>
      </div>
    `).join('');

    grid.querySelectorAll('.cert-item').forEach(item => {
      item.addEventListener('click', () => {
        currentIdx = parseInt(item.dataset.idx);
        openLightbox(currentIdx);
      });
      item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
    });
  }

  renderCerts(allCerts);

  // Filter buttons
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.certFilter;
      renderCerts(f === 'all' ? allCerts : allCerts.filter(c => c.cat === f));
    });
  });

  // Lightbox
  function openLightbox(idx) {
    const lightbox = document.getElementById('lightbox');
    const img      = document.getElementById('lightboxImg');
    if (!lightbox || !img) return;
    currentIdx = idx;
    img.src = visibleCerts[idx].src;
    img.alt = visibleCerts[idx].label;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextCert(dir) {
    currentIdx = (currentIdx + dir + visibleCerts.length) % visibleCerts.length;
    const img = document.getElementById('lightboxImg');
    if (img) { img.src = visibleCerts[currentIdx].src; img.alt = visibleCerts[currentIdx].label; }
  }

  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');
  const lightbox      = document.getElementById('lightbox');

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', () => nextCert(-1));
  if (lightboxNext)  lightboxNext.addEventListener('click', () => nextCert(1));
  if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') nextCert(-1);
    if (e.key === 'ArrowRight') nextCert(1);
  });
}

// ── 9. PAGE TRANSITION (subpages) ───────────
function initPageTransition() {
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', e => {
      const fade = document.getElementById('pageFade');
      if (!fade) return;
      e.preventDefault();
      const href = link.href;
      fade.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 250);
    });
  });
}

// ── 10. REVEAL (subpages) ──────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => observer.observe(el));
}

// ── 11. SUBPAGE ACTIVE NAV ─────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href')?.split('#')[0];
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── 12. SUBPAGE LIGHTBOX (certificate.html) ─
function initSubpageLightbox() {
  const lightbox  = document.getElementById('lightbox');
  const img       = document.getElementById('lightboxImg');
  const closeBtn  = document.getElementById('lightboxClose');
  const prevBtn   = document.getElementById('lightboxPrev');
  const nextBtn   = document.getElementById('lightboxNext');
  if (!lightbox) return;

  let currentIdx = 0;
  let items = [];

  function buildItems() {
    items = [...document.querySelectorAll('[data-lightbox]')].map(el => ({
      src: el.dataset.lightbox,
      label: el.dataset.label || '',
    }));
  }

  function open(idx) {
    buildItems();
    currentIdx = idx;
    img.src = items[idx].src;
    img.alt = items[idx].label;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + items.length) % items.length;
    img.src = items[currentIdx].src;
    img.alt = items[currentIdx].label;
  }

  document.querySelectorAll('[data-lightbox]').forEach((el, idx) => {
    el.addEventListener('click', () => open(idx));
    el.addEventListener('keydown', e => { if (e.key === 'Enter') open(idx); });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn)  prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn)  nextBtn.addEventListener('click', () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   navigate(-1);
    if (e.key === 'ArrowRight')  navigate(1);
  });
}

// ── 13. THREE.JS (3D decoration) ─────────────
function initThree() {
  // Only on index page with desktop
  const desktop = document.getElementById('desktop');
  if (!desktop || typeof THREE === 'undefined') return;

  const container = document.createElement('div');
  container.id = 'three-canvas-wrap';
  container.style.cssText = 'position:absolute;bottom:100px;right:30px;width:200px;height:200px;pointer-events:none;z-index:5;opacity:0.7;';
  document.getElementById('desktopArea')?.appendChild(container);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(200, 200);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dirLight = new THREE.DirectionalLight(0x0a84ff, 1.2);
  dirLight.position.set(3, 3, 5);
  scene.add(dirLight);
  const dirLight2 = new THREE.DirectionalLight(0x30d158, 0.8);
  dirLight2.position.set(-3, -2, 2);
  scene.add(dirLight2);

  // Geometry fallback (torus knot)
  let mesh;
  const geo = new THREE.TorusKnotGeometry(1, 0.32, 100, 16);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x0a84ff,
    metalness: 0.7,
    roughness: 0.2,
    transparent: true,
    opacity: 0.85,
  });
  mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // OrbitControls
  if (typeof THREE.OrbitControls !== 'undefined') {
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enableDamping = true;
    container.style.pointerEvents = 'all';
  }

  let animId;
  function animate() {
    animId = requestAnimationFrame(animate);
    if (mesh) { mesh.rotation.x += 0.005; mesh.rotation.y += 0.008; }
    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    renderer.setSize(200, 200);
  });
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initTheme();

  const isDesktop = !!document.getElementById('desktop');

  if (isDesktop) {
    initWindows();
    initDock();
    initPortfolio();
    initExperience();
    initCertificate();
    initProjectModal();
    initThree();
    updateDiStatus();
  } else {
    // Subpages
    initReveal();
    setActiveNav();
    initSubpageLightbox();
  }
});
