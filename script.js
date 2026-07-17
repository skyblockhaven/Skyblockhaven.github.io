

// ===============================
// SkyBlockHaven JavaScript
// ===============================

// Dynamic page title
const titles = [
    "⛏️ SkyBlockHaven",
    "🌿 Best SkyBlock Experience",
    "⚔️ Join the Adventure",
    "💎 Play SkyBlock Today"
];

let titleIndex = 0;

setInterval(() => {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}, 2500);

// Typing effect
const typingElement = document.querySelector(".hero h1");

if (typingElement) {
    const text = "Welcome to SkyBlockHaven";
    let i = 0;

    typingElement.textContent = "";

    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }

    typeWriter();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to SkyBlockHaven!");
});