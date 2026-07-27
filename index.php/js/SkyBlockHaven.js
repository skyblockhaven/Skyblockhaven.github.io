

const typing1 = document.getElementById("typing1");

const texts1 = [
    "Welcome to SkyBlockHaven",
    "The Ultimate Minecraft Network",
    "SkyBlock • Survival • Events"
];

let textIndex1 = 0;
let charIndex1 = 0;
let deleting1 = false;

function typeEffect1() {
    if (!typing1) return;

    const current = texts1[textIndex1];

    typing1.textContent = deleting1
        ? current.substring(0, --charIndex1)
        : current.substring(0, ++charIndex1);

    let speed = deleting1 ? 40 : 80;

    if (!deleting1 && charIndex1 === current.length) {
        deleting1 = true;
        speed = 1500;
    } else if (deleting1 && charIndex1 === 0) {
        deleting1 = false;
        textIndex1 = (textIndex1 + 1) % texts1.length;
    }

    setTimeout(typeEffect1, speed);
}

typeEffect1();

const typing2 = document.getElementById("typing2");

const texts2 = [
    "Join the Community",
    "Play with Friends",
    "Start Your Adventure Today"
];

let textIndex2 = 0;
let charIndex2 = 0;
let deleting2 = false;

function typeEffect2() {
    if (!typing2) return;

    const current = texts2[textIndex2];

    typing2.textContent = deleting2
        ? current.substring(0, --charIndex2)
        : current.substring(0, ++charIndex2);

    let speed = deleting2 ? 40 : 80;

    if (!deleting2 && charIndex2 === current.length) {
        deleting2 = true;
        speed = 1500;
    } else if (deleting2 && charIndex2 === 0) {
        deleting2 = false;
        textIndex2 = (textIndex2 + 1) % texts2.length;
    }

    setTimeout(typeEffect2, speed);
}

typeEffect2();

