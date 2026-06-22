// ===== Smooth Scroll Active Links =====

const navLinks = document.querySelectorAll('.links a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        target?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===== Reveal On Scroll =====

const revealElements = document.querySelectorAll(
    'section, .project, .skill'
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

// ===== Navbar Background =====

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.85)';
        nav.style.borderColor = 'rgba(255, 0, 0, 0.25)';
    } else {
        nav.style.background = 'rgba(15, 15, 15, 0.65)';
        nav.style.borderColor = 'rgba(255, 0, 0, 0.15)';
    }
});

// ===== Parallax Background =====

const glow = document.querySelector('.bg-glow');

window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    glow.style.transform = `translate(${x}px, ${y}px)`;
});

// ===== Button Glow Effect =====

const button = document.querySelector('.btn');

button?.addEventListener('mouseenter', () => {
    button.style.boxShadow = '0 0 40px rgba(255, 0, 0, 0.5)';
});

button?.addEventListener('mouseleave', () => {
    button.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.25)';
});

// ===== Current Section Highlight =====

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const roveryProject = document.getElementById('rovery-project');

const downloadButton = document.createElement('a');

downloadButton.href = 'Files\RoveryNetworker.rbxm';
downloadButton.download = '';
downloadButton.className = 'download-btn';
downloadButton.textContent = 'Download Package';

roveryProject.appendChild(downloadButton);