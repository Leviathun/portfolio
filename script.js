// ===== Configuration =====
const GITHUB_USERNAME = 'Leviathun';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;

// Repos to exclude (profile config, forks that are just labs, etc.)
const EXCLUDE_REPOS = ['Leviathun'];

// Category mapping for projects
const CATEGORY_MAP = {
    'Spooky_Housemaid_Game': 'game',
    'Frist-appium-project': 'mobile',
    'Backend-Medal-Olympic-Project': 'backend',
    'Compo-Lab07-11-backend': 'backend',
    'Frontend-Medal-Olympic-Project': 'web',
    'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'web',
    'Component-Passender-of-airline-Project': 'web',
    'Component-Lab01-Intro-to-vue': 'web',
    'Ned-Compo-fontend': 'web',
    'vue3-realworld-example-app': 'web',
    'Calamity_book_clone': 'web',
    'DatabaseJason': 'backend',
    'Lab07': 'web',
    'Lab3-repo': 'web',
    'Lab3-repo-3.3': 'web',
    'se234-lab12-automate-test-frontend': 'other',
    'Katalon-Sample-Test': 'other',
    'Lab10-2-katalon': 'other',
    'Lab4-repo': 'other',
    'Lab2-repo1': 'other',
    'Lab2-repo2': 'other',
};

// Friendly names for projects
const FRIENDLY_NAMES = {
    'Spooky_Housemaid_Game': 'Spooky Housemaid Game 👻',
    'Backend-Medal-Olympic-Project': 'Olympic Medal Tracker (Backend)',
    'Frontend-Medal-Olympic-Project': 'Olympic Medal Tracker (Frontend)',
    'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'Vue + Vite + TypeScript App',
    'Component-Passender-of-airline-Project': 'Airline Passenger System',
    'Compo-Lab07-11-backend': 'Component Lab Backend API',
    'Calamity_book_clone': 'Calamity Book Clone',
    'Frist-appium-project': 'Appium Mobile Testing',
    'DatabaseJason': 'Database JSON Project',
    'vue3-realworld-example-app': 'Vue 3 RealWorld App',
};

// Language colors
const LANG_COLORS = {
    'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Java': '#b07219',
    'Vue': '#41b883', 'HTML': '#e34c26', 'CSS': '#563d7c',
    'EJS': '#a91e50', 'Python': '#3572A5',
};

// Language icons
const LANG_ICONS = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'EJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
};

// ===== Particles Background =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const count = window.innerWidth < 768 ? 30 : 60;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(124, 92, 252, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < count; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 92, 252, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== Typing Effect =====
function initTypingEffect() {
    const titles = ['Web Developer', 'Game Developer', 'Mobile Developer', 'Full-Stack Developer'];
    const el = document.getElementById('typed-text');
    let titleIdx = 0, charIdx = 0, deleting = false;

    function type() {
        const current = titles[titleIdx];
        el.textContent = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);

        if (!deleting && charIdx > current.length) {
            setTimeout(() => { deleting = true; type(); }, 2000);
            return;
        }
        if (deleting && charIdx < 0) {
            deleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
            setTimeout(type, 500);
            return;
        }
        setTimeout(type, deleting ? 40 : 80);
    }
    type();
}

// ===== Navbar =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Active section tracking
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    });
}

// ===== Counter Animation =====
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observed = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !observed.has(entry.target)) {
                observed.add(entry.target);
                const target = parseInt(entry.target.dataset.target);
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) { current = target; clearInterval(timer); }
                    entry.target.textContent = Math.floor(current) + (target >= 500 ? '+' : '');
                }, 20);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const elements = document.querySelectorAll('.about-card, .skill-category, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Projects =====
function getCategory(name) {
    return CATEGORY_MAP[name] || 'other';
}

function getDescription(repo) {
    if (repo.description) return repo.description;
    const cat = getCategory(repo.name);
    const descs = {
        'Spooky_Housemaid_Game': 'A spooky horror game built with JavaScript — navigate the haunted house!',
        'Backend-Medal-Olympic-Project': 'Backend API for tracking Olympic medals, built with Java & Spring Boot.',
        'Frontend-Medal-Olympic-Project': 'Vue.js frontend for the Olympic Medal tracking system.',
        'Component-Lab2-6-Vue-dev-with-Vite-and-TypeScript': 'Vue 3 component development with Vite and TypeScript.',
        'Component-Passender-of-airline-Project': 'Airline passenger management system built with Vue.js.',
        'Compo-Lab07-11-backend': 'Java backend API for component-based architecture labs.',
        'Calamity_book_clone': 'Book management web app clone using EJS and Node.js.',
        'Frist-appium-project': 'Mobile testing automation with Appium framework.',
        'DatabaseJason': 'Database project with JSON data management.',
        'vue3-realworld-example-app': 'Real-world app implementation using Vue 3 Composition API.',
    };
    return descs[repo.name] || `A ${cat} project built with ${repo.language || 'various technologies'}.`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function createProjectCard(repo, index) {
    const cat = getCategory(repo.name);
    const name = FRIENDLY_NAMES[repo.name] || repo.name.replace(/[-_]/g, ' ');
    const desc = getDescription(repo);
    const lang = repo.language || 'Unknown';
    const langColor = LANG_COLORS[lang] || '#6b6b80';
    const langIcon = LANG_ICONS[lang] || LANG_ICONS['JavaScript'];
    const hasHomepage = repo.homepage && repo.homepage.length > 0;

    const card = document.createElement('div');
    card.className = `project-card`;
    card.dataset.category = cat;
    card.style.animationDelay = `${index * 0.08}s`;

    card.innerHTML = `
        <div class="project-card-header gradient-${cat}">
            <div class="project-card-bg">${cat === 'game' ? '🎮' : cat === 'mobile' ? '📱' : cat === 'web' ? '🌐' : cat === 'backend' ? '⚙️' : '🔧'}</div>
            <div class="project-lang-icon"><img src="${langIcon}" alt="${lang}"></div>
            <span class="project-badge badge-${cat}">${cat}</span>
        </div>
        <div class="project-card-body">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="project-meta">
                <div class="project-meta-item">
                    <span class="project-lang-dot" style="background:${langColor}"></span>
                    <span>${lang}</span>
                </div>
                <div class="project-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span>${repo.stargazers_count}</span>
                </div>
                <div class="project-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
                    <span>${repo.forks_count}</span>
                </div>
                <div class="project-meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>${formatDate(repo.updated_at)}</span>
                </div>
            </div>
            <div class="project-card-footer">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link${hasHomepage ? '' : ' primary'}">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Code
                </a>
                ${hasHomepage ? `
                <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="project-link primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                </a>` : ''}
            </div>
        </div>
    `;
    return card;
}

async function loadProjects() {
    const grid = document.getElementById('projects-grid');
    const loading = document.getElementById('projects-loading');

    try {
        const res = await fetch(GITHUB_API);
        const repos = await res.json();

        // Filter: public, not fork (except selected), not excluded
        const filtered = repos.filter(r =>
            !r.private &&
            !EXCLUDE_REPOS.includes(r.name) &&
            (!r.fork || CATEGORY_MAP[r.name]) // include forks only if explicitly categorized
        );

        // Sort: starred first, then by date
        filtered.sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at));

        loading.style.display = 'none';

        filtered.forEach((repo, i) => {
            grid.appendChild(createProjectCard(repo, i));
        });

        initProjectFilters();
    } catch (err) {
        loading.innerHTML = `<p style="color:#ff6b6b">Failed to load projects. Please refresh the page.</p>`;
        console.error('Error loading repos:', err);
    }
}

function initProjectFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            let delay = 0;

            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                if (match) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, delay);
                    delay += 60;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== Smooth Scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Init Everything =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initTypingEffect();
    initNavbar();
    initCounters();
    initScrollAnimations();
    loadProjects();
});
