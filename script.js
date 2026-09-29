document.addEventListener('DOMContentLoaded', () => {
  const $ = (s) => document.querySelector(s);

  /* =========================================
     1. DATA
     ========================================= */
  const skillsData = [
    { category: "Languages & Core Java", items: [
      { name: "Java (OOP, Collections, JDBC)", pct: 90 },
      { name: "C / C++", pct: 70 },
      { name: "Embedded C", pct: 65 }
    ]},
    { category: "Backend & Frameworks", items: [
      { name: "Spring Boot", pct: 85 },
      { name: "Spring MVC / Spring Security", pct: 75 },
      { name: "REST APIs", pct: 85 }
    ]},
    { category: "Frontend", items: [
      { name: "HTML5 / CSS3", pct: 90 },
      { name: "JavaScript", pct: 85 },
      { name: "React", pct: 75 }
    ]},
    { category: "Database & Tools", items: [
      { name: "MySQL / SQL", pct: 85 },
      { name: "Firebase Realtime Database", pct: 70 },
      { name: "Git, GitHub & Postman", pct: 80 }
    ]}
  ];

  const GH_PROFILE = 'https://github.com/Dharshini2k5';
  const projectsData = [
    {
      id: 'vehicular-trust-system',
      title: 'Vehicular Trust System',
      desc: 'A vehicle tracking and monitoring system combining AI-driven analysis with a Java backend to flag trust and anomaly signals in real time.',
      tech: ['HTML', 'CSS', 'JavaScript', 'AI', 'Java'],
      category: 'AI/ML',
      image: 'assets/projects/vehicular_trust_system.jpg',
      repo: 'https://github.com/Dharshini2k5/mini-projects',
      featured: true
    },
    {
      id: 'ai-video-conferencing',
      title: 'AI Video Web Conferencing',
      desc: 'A browser-based video conferencing platform with AI-assisted features — meeting quality scoring, participation fairness, and speaker influence analytics.',
      tech: ['WebRTC', 'JavaScript', 'AI'],
      category: 'AI/ML',
      image: 'assets/projects/ai_video_conferencing.png',
      repo: 'https://github.com/Dharshini2k5/AI-Web-Conferencing-System'
    },
    {
      id: 'job-application-tracker',
      title: 'Job Application Tracker',
      desc: 'A cross-platform app to track job applications, interview stages, and notes — with a dashboard for totals, applied, interviews, offers, and rejections.',
      tech: ['Flutter', 'PHP'],
      category: 'Mobile',
      image: 'assets/projects/job_application_tracker.png',
      repo: 'https://github.com/Dharshini2k5/Job_Application_Tracker_App'
    },
    {
      id: 'crafted-with-code',
      title: 'Crafted with Code (CodeAlpha Internship)',
      desc: 'Four front-end builds completed during the CodeAlpha internship, each tackling a different UI challenge — organized as one repo, one task per folder.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web',
      image: 'assets/projects/crafted_with_code.jpg',
      repo: 'https://github.com/Dharshini2k5/CodeAlpha_ProjectName',
      tasks: ['Task 1 — Gorgeous Gallery', 'Task 2 — Neon Calculator', 'Task 3 — Portfolio', 'Task 4 — Music Playlist']
    },
    {
      id: 'level-based-programs',
      title: 'Level Based Programs',
      desc: 'A growing collection of Java programs — pattern-printing exercises alongside file handling and networking concepts, organized by difficulty level.',
      tech: ['Java', 'Pattern Programs', 'File Handling', 'Networking'],
      category: 'Java',
      image: 'assets/projects/level_based_programs.jpg',
      repo: 'https://github.com/Dharshini2k5/level-based-programs'
    },
    {
      id: 'restapi-demos',
      title: 'REST API Demos',
      desc: 'Three REST API projects, each in its own repo — Bank management, a Swiggy-style food ordering API, and a Bookstore — all built with Java and Spring Boot.',
      tech: ['Java', 'Spring Boot', 'REST API'],
      category: 'API',
      image: 'assets/projects/restapi_demos.svg',
      repo: 'https://github.com/Dharshini2k5/demowithbank',
      tasks: [
        { name: 'Demo with Bank', repo: 'https://github.com/Dharshini2k5/demowithbank' },
        { name: 'Demo with Swiggy', repo: 'https://github.com/Dharshini2k5/demowithswiggy' },
        { name: 'Bookstore', repo: 'https://github.com/Dharshini2k5/demobookstore' }
      ]
    },
    {
      id: 'approval-report-system',
      title: 'Approval Report System',
      desc: 'Generate professional approval reports, upload drawings, manage projects, and monitor approvals in one place.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      category: 'Web',
      image: 'assets/projects/approval_report_system.png',
      repo: GH_PROFILE, status: 'linkPending'
    },
    {
      id: 'food-delivery',
      title: 'Food Delivery',
      desc: 'Full-stack responsive food ordering website with menu, cart, and MySQL backend.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      category: 'Web',
      image: 'assets/projects/food_order.jpg',
      repo: 'https://github.com/Dharshini2k5/food-ordering'
    },
    {
      id: 'study-planner',
      title: 'Smart Study Planner',
      desc: 'Productivity web app with year/month/week calendar views and Personal/Professional task tagging, using LocalStorage for session tracking.',
      tech: ['JavaScript', 'LocalStorage', 'CSS'],
      category: 'Web',
      image: 'assets/projects/study_planner.jpg',
      repo: 'https://github.com/Dharshini2k5/study-planner'
    },
    {
      id: 'traffic-light',
      title: 'Traffic Light Control System',
      desc: 'IoT solution using Arduino and IR sensors for smart traffic management.',
      tech: ['Arduino', 'Embedded C', 'IoT'],
      category: 'IoT',
      image: 'assets/projects/traffic_light.jpg',
      repo: 'https://github.com/Dharshini2k5/traffic-light'
    }
  ];


  const experienceData = [
    { role: "Java Full Stack Intern", company: "BDreamz Global Solutions", date: "June 2026 – Present", desc: "Developing Java Spring Boot web applications with HTML, CSS, JavaScript, and MySQL. Building RESTful APIs using Spring Boot and Core Java, applying OOP principles and integrating MySQL for data management. Performing API testing with Postman and managing workflows with Git and GitHub." },
    { role: "Web Development Intern", company: "CodeAlpha", date: "Dec 2025", desc: "Developed responsive and interactive web interfaces using HTML, CSS, and JavaScript, implementing structured layouts and dynamic frontend functionality." },
    { role: "Frontend Developer Intern", company: "IBM Edunet Foundation", date: "Oct 2025", desc: "Worked on cloud integrated web applications, focusing on user interface design, secure coding and seamless deployment." },
    { role: "Embedded Systems Intern", company: "CodeBind Technologies", date: "July 2025", desc: "Developed IoT modules and optimized hardware-software integration." },
    { role: "Internet of Things Intern", company: "Internship Studio", date: "Aug 2024", desc: "Secured IoT devices and networks, implemented ethical hacking techniques and monitored real-time sensor data." }
  ];

  const educationData = [
    { school: "Dhanalakshmi Srinivasan Engineering College", degree: "B.E. Computer Science and Engineering", meta: "CGPA: 8.43 • Graduated Year: May 2026" },
    { school: "Sri Ramakrishna Girls Matric Hr. Sec. School", degree: "Higher Secondary Education (Class 12)", meta: "Percentage: 88.89% • Year: 2022" },
    { school: "Annai Paruvathamma Matriculation School", degree: "Secondary Education (Class 10)", meta: "Percentage: 94.2% • Year: 2020" }
  ];

  const certsData = [
    "Frontend Web Development – IBM Edunet, Aug 2025",
    "Web Development Fundamentals - IBM SkillBuild, Aug 2025",
    "Introduction to Machine Learning – NPTEL (IIT Madras), 2025",
    "Python Programming – GeeksforGeeks, 2025",
    "Cybersecurity Foundation – DIYA Academy, 2025",
    "UI/UX Course - Livewire, May 2024",
    "Web Technologies – SWAYAM (Uttarakhand Open University), May 2024",
    "IoT Using Arduino – Livewire, 2023",
    "Data Analysis Bootcamp - Revamp Academy, Mar 2025",
    "Python, C, C++, Java Quiz - DSEC, Mar 2024",
    "UI/UX Design Workshop - Livewire, 2023",
    "Authentication System in Web Designing Workshop - Livewire, 2023",
    "AI Revolution in Cyber Security Summit - DSEC, Nov 2023",
    "Python Programming Workshop - Top Engineers @ IIT Madras, Oct 2023"
  ];

  /* =========================================
     2. NAVBAR: scroll shadow + mobile menu
     ========================================= */
  const navbar = $('#navbar');
  const menuBtn = $('#menuBtn');
  const navLinksMobile = $('#navLinksMobile');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  menuBtn?.addEventListener('click', () => navLinksMobile.classList.toggle('open'));
  document.querySelectorAll('.nav-links-mobile .nav-link').forEach(l => {
    l.addEventListener('click', () => navLinksMobile.classList.remove('open'));
  });

  /* =========================================
     3. TERMINAL TYPING (signature hero element)
     ========================================= */
  const termBody = $('#terminalBody');
  if (termBody) {
    const lines = [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'Dharshini T — CSE Student, Class of 2026' },
      { type: 'cmd', text: 'skills --top 4' },
      { type: 'out', text: "['Java', 'Spring Boot', 'React', 'MySQL']" },
      { type: 'cmd', text: 'status' },
      { type: 'out', text: 'Open to software developer roles ✓' }
    ];
    let li = 0, ci = 0;
    function typeTerminal() {
      if (li >= lines.length) {
        termBody.innerHTML += '<span class="terminal-cursor"></span>';
        return;
      }
      const line = lines[li];
      if (ci <= line.text.length) {
        renderTerminal(li, ci);
        ci++;
        setTimeout(typeTerminal, line.type === 'cmd' ? 45 : 12);
      } else {
        ci = 0; li++;
        setTimeout(typeTerminal, 260);
      }
    }
    function renderTerminal(upToLine, charIdx) {
      let html = '';
      for (let i = 0; i < upToLine; i++) {
        const l = lines[i];
        const cls = l.type === 'cmd' ? 'cmd' : 'out';
        const prefix = l.type === 'cmd' ? '$ ' : '';
        html += `<span class="${cls}">${prefix}${l.text}</span>\n`;
      }
      const cur = lines[upToLine];
      const cls = cur.type === 'cmd' ? 'cmd' : 'out';
      const prefix = cur.type === 'cmd' ? '$ ' : '';
      html += `<span class="${cls}">${prefix}${cur.text.substring(0, charIdx)}</span>`;
      termBody.innerHTML = html;
    }
    setTimeout(typeTerminal, 500);
  }

  /* =========================================
     4. TYPEWRITER ROLE LINE
     ========================================= */
  const phrases = ["Full Stack Java Developer", "Software Developer", "Spring Boot Developer"];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;
  const typingEl = $('#typing');
  function typeWriter() {
    if (!typingEl) return;
    const currentPhrase = phrases[phraseIdx];
    typingEl.textContent = currentPhrase.substring(0, charIdx + (isDeleting ? -1 : 1));
    charIdx += isDeleting ? -1 : 1;
    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIdx === currentPhrase.length) { isDeleting = true; speed = 2000; }
    else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; speed = 500; }
    setTimeout(typeWriter, speed);
  }
  typeWriter();

  /* =========================================
     5. RENDER: SKILLS
     ========================================= */
  const skillsGrid = $('#skillsGrid');
  if (skillsGrid) {
    skillsData.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'card glass';
      card.innerHTML = `<h4>${cat.category}</h4>`;
      cat.items.forEach(skill => {
        card.innerHTML += `
          <div style="margin-top:12px">
            <div style="display:flex; justify-content:space-between; font-size:13.5px">
              <span>${skill.name}</span><span class="muted">${skill.pct}%</span>
            </div>
            <div class="skill-bar"><div class="skill-fill" data-pct="${skill.pct}"></div></div>
          </div>`;
      });
      skillsGrid.appendChild(card);
    });
  }
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.width = entry.target.getAttribute('data-pct') + '%'; });
  }, { threshold: 0.5 });
  setTimeout(() => document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el)), 100);

  /* =========================================
     6. RENDER: PROJECTS (bento grid + filters)
     ========================================= */
  const projectsGrid = $('#projectsGrid');
  const filterBar = $('#projectFilters');

  function renderProjectCard(p) {
    const card = document.createElement('div');
    card.className = 'project-card card glass' + (p.status === 'upcoming' ? ' is-upcoming' : '') + (p.featured ? ' featured' : '');
    const img = p.image || 'assets/profile-placeholder.jpeg';
    let badge = '';
    if (p.status === 'upcoming') badge = `<span class="project-badge upcoming"><i class="fas fa-hourglass-half"></i> Coming Soon</span>`;
    else if (p.status === 'linkPending') badge = `<span class="project-badge pending"><i class="fas fa-link"></i> Repo Coming Soon</span>`;
    const star = p.featured ? `<span class="project-badge star"><i class="fas fa-star"></i> Featured</span>` : '';
    const tasksLinked = p.tasks && typeof p.tasks[0] === 'object';
    const folderNote = p.tasks ? `<div class="muted" style="font-size:11.5px; margin-top:6px"><i class="fas fa-folder-open"></i> ${p.tasks.length} ${tasksLinked ? 'separate repos' : 'folders in this repo'}</div>` : '';
    card.innerHTML = `
      <div class="project-thumb">
        <img src="${img}" alt="${p.title}" onerror="this.src='assets/profile-placeholder.jpeg'">
        ${star}${badge}
      </div>
      <div class="project-body">
        <span class="project-category">${p.category}</span>
        <h4>${p.title}</h4>
        <p class="muted small" style="font-size:13px">${p.desc}</p>
        <div class="project-tags">${p.tech.join(' • ')}</div>
        ${folderNote}
      </div>`;
    if (p.status !== 'upcoming') card.addEventListener('click', () => openProjectModal(p));
    return card;
  }

  function renderProjects(filter) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    const list = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);
    list.forEach(p => projectsGrid.appendChild(renderProjectCard(p)));
  }

  if (filterBar) {
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    categories.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(cat);
      });
      filterBar.appendChild(btn);
    });
  }
  renderProjects('All');

  /* =========================================
     7. RENDER: HERO STATS (animated counters)
     ========================================= */
  const statsRow = $('#statsRow');
  if (statsRow) {
    const stats = [
      { label: 'Projects', value: projectsData.filter(p => p.status !== 'upcoming').length },
      { label: 'Certifications', value: certsData.length },
      { label: 'Internships', value: experienceData.length }
    ];
    stats.forEach(s => {
      const el = document.createElement('div');
      el.className = 'stat-box';
      el.innerHTML = `<span class="stat-num" data-target="${s.value}">0</span><span class="stat-label">${s.label}</span>`;
      statsRow.appendChild(el);
    });
    const counters = statsRow.querySelectorAll('.stat-num');
    const countUp = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(tick);
      };
      tick();
    };
    const statsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => { if (entry.isIntersecting) { counters.forEach(countUp); obs.disconnect(); } });
    }, { threshold: 0.4 });
    statsObserver.observe(statsRow);
  }

  /* =========================================
     8. RENDER: EXPERIENCE / EDUCATION / CERTS
     ========================================= */
  const expList = $('#experienceList');
  if (expList) {
    experienceData.forEach(exp => {
      const item = document.createElement('div');
      item.className = 'timeline-item card glass';
      item.style.padding = '16px';
      item.innerHTML = `<div class="timeline-date">${exp.date}</div><h4>${exp.role}</h4><div class="muted small">${exp.company}</div><p style="margin-top:8px; font-size:14px">${exp.desc}</p>`;
      expList.appendChild(item);
    });
  }

  const eduList = $('#educationList');
  if (eduList) {
    educationData.forEach(edu => {
      const card = document.createElement('div');
      card.className = 'card glass';
      card.innerHTML = `<h4><i class="fas fa-university accent"></i> ${edu.school}</h4><p class="accent">${edu.degree}</p><p class="muted small">${edu.meta}</p>`;
      eduList.appendChild(card);
    });
  }

  const certsList = $('#certsList');
  if (certsList) {
    certsData.forEach(c => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.innerHTML = `<i class="fas fa-certificate"></i><span class="muted">${c}</span>`;
      certsList.appendChild(card);
    });
  }

  /* =========================================
     9. THEME TOGGLE
     ========================================= */
  const themeBtn = $('#themeToggle');
  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  const applyTheme = (t) => { document.body.className = t; themeBtn.textContent = t === 'light' ? '🌞' : '🌓'; };
  applyTheme(savedTheme);
  themeBtn?.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    applyTheme(newTheme); localStorage.setItem('portfolio_theme', newTheme);
  });

  /* =========================================
     10. MODALS & TOAST
     ========================================= */
  const pModal = $('#projectModal');
  const rModal = $('#resumeModal');
  window.openProjectModal = (p) => {
    const repoBtn = p.status === 'linkPending'
      ? `<a href="${p.repo}" target="_blank" rel="noopener" class="btn ghost"><i class="fab fa-github"></i> Repo Coming Soon</a>`
      : `<a href="${p.repo}" target="_blank" rel="noopener" class="btn primary"><i class="fab fa-github"></i> View Code</a>`;
    const tasksAreLinked = p.tasks && typeof p.tasks[0] === 'object';
    const tasksList = p.tasks ? `
      <div style="margin-top:16px">
        <div class="muted" style="font-size:11.5px; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:8px">
          <i class="fas fa-folder-open"></i> ${tasksAreLinked ? 'Separate repos' : 'Folders in this repo'}
        </div>
        <ul class="compact-list muted" style="font-size:14px">
          ${p.tasks.map(t => tasksAreLinked
            ? `<li><a href="${t.repo}" target="_blank" rel="noopener" style="color:var(--accent)">${t.name}</a></li>`
            : `<li>${t}</li>`
          ).join('')}
        </ul>
      </div>` : '';
    $('#projectContent').innerHTML = `
      <img src="${p.image}" style="width:100%; border-radius:8px; margin-bottom:15px" onerror="this.style.display='none'">
      <span class="project-category">${p.category}</span>
      <h3>${p.title}</h3><p class="muted">${p.desc}</p>
      <div class="project-tags" style="margin:10px 0">${p.tech.join(' • ')}</div>
      ${tasksList}
      <div style="margin-top:20px; display:flex; gap:10px; flex-wrap:wrap">
        ${repoBtn}
        ${p.demo && p.demo !== '#' ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn ghost">Live Demo</a>` : ''}
      </div>`;
    pModal.classList.add('open');
  };
  $('#openResume')?.addEventListener('click', (e) => { e.preventDefault(); rModal.classList.add('open'); });
  const closeModals = () => document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', closeModals));
  document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', (e) => { if (e.target === m) closeModals(); }));
  $('#copyEmailBtn')?.addEventListener('click', () => {
    navigator.clipboard.writeText($('#emailText').innerText).then(() => {
      $('#toast').classList.add('show'); setTimeout(() => $('#toast').classList.remove('show'), 3000);
    });
  });

  if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });

  /* =========================================
     11. SCROLL PROGRESS
     ========================================= */
  const progressBar = $('#scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  /* =========================================
     12. SCROLL-SPY NAV
     ========================================= */
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = Array.from(new Set(Array.from(navLinks).map(l => l.getAttribute('href'))))
    .map(href => document.querySelector(href)).filter(Boolean);
  if (sections.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(sec => spyObserver.observe(sec));
  }

  /* =========================================
     13. AI CHATBOT
     ========================================= */
  const chatToggle = $('#chatbot-toggle');
  const chatContainer = $('#chatbot-container');
  const closeChat = $('#close-chat');
  const chatInput = $('#chat-input');
  const chatSend = $('#chat-send');
  const chatMessages = $('#chatbot-messages');

  const botReply = (text) => {
    const msg = document.createElement('div');
    msg.className = 'bot-msg';
    msg.innerHTML = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const processUserMessage = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) {
      botReply("Hello! I'm Dharshini's AI assistant. How can I help you?");
    } else if (lower.includes('project')) {
      botReply("Dharshini has worked on projects spanning web, AI, and databases — including <b>SkillGap</b>, <b>DevTrack</b>, a <b>Banking Management System</b>, and IoT work like <b>Traffic Light Control</b>. Check out the <a href='#projects' style='color:var(--accent-2)'>Projects section</a> and use the filters to browse by category!");
    } else if (lower.includes('skill') || lower.includes('stack')) {
      botReply("She is proficient in <b>Java (Spring Boot, Spring Security)</b>, <b>Web Development (HTML/CSS/JS, React)</b>, and <b>MySQL</b>.");
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
      botReply("You can reach her at <b>dharshini30042005@gmail.com</b> or via LinkedIn!");
    } else if (lower.includes('resume') || lower.includes('cv')) {
      botReply("You can view or download her resume using the Resume button in the top nav.");
    } else {
      botReply("I'm not sure about that, but feel free to explore the portfolio sections!");
    }
  };

  chatToggle?.addEventListener('click', () => {
    chatContainer.classList.add('active');
    if (chatMessages.children.length === 0) botReply("Hi there! Ask me about Dharshini's skills, projects, or experience.");
  });
  closeChat?.addEventListener('click', () => chatContainer.classList.remove('active'));

  const handleSend = () => {
    const txt = chatInput.value.trim();
    if (!txt) return;
    const uMsg = document.createElement('div');
    uMsg.className = 'user-msg';
    uMsg.innerText = txt;
    chatMessages.appendChild(uMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
    setTimeout(() => processUserMessage(txt), 600);
  };
  chatSend?.addEventListener('click', handleSend);
  chatInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
});
