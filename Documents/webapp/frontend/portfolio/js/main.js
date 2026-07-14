/*=========================
LOADER
=========================*/

const loader = document.querySelector(".loader");

function hideLoader() {
    if (loader) loader.classList.add("hide");
}

window.addEventListener("load", hideLoader);
setTimeout(hideLoader, 800);

/*=========================
TYPING EFFECT
=========================*/

const words = [
    "AI Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex >= words.length) wordIndex = 0;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/*=========================
HEADER
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.2)";
    } else {
        header.style.background = "rgba(5,8,22,.75)";
        header.style.boxShadow = "none";
    }
});

/*=========================
SCROLL REVEAL
=========================*/

const revealItems = document.querySelectorAll(
    ".section-heading, .about-wrapper, .skills-grid, .services-grid, #projectsContainer, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.1 }
);

revealItems.forEach((item) => {
    item.classList.add("hidden");
    observer.observe(item);
});

/*=========================
ACTIVE NAV
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 150;
        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*=========================
PROJECTS
=========================*/

const projectsContainer = document.getElementById("projectsContainer");

if (projectsContainer) {
    projectsContainer.innerHTML = "";

    projects.forEach((project) => {
        projectsContainer.innerHTML += `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="overlay">
                    <a href="${project.github}" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.demo}" target="_blank">
                        <i class="fas fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </div>
            <div class="project-body">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
                </div>
            </div>
        </div>
        `;
    });
}

/*=========================
COUNTER
=========================*/

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
    counters.forEach((counter) => {
        const target = +counter.dataset.target;
        let current = 0;
        const increment = target / 60;

        const update = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target + "+";
            }
        };

        update();
    });
};

const about = document.querySelector("#about");

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounter();
                counterObserver.disconnect();
            }
        });
    }
);

counterObserver.observe(about);

/*====================================
SCROLL PROGRESS
====================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + "%";
});

/*====================================
BACK TO TOP
====================================*/

const topBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/*=========================
MOBILE MENU
=========================*/

const menuBtn=document.getElementById("menuBtn");

const nav=document.getElementById("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});