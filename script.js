// MODAL FIX
function openModal(id) {
    document.querySelectorAll('.modal').forEach(m => {
        m.style.display = "none";
    });

    document.getElementById(id).style.display = "flex";
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(m => {
        m.style.display = "none";
    });
}

// CLICK OUTSIDE CLOSE
window.onclick = function(e) {
    document.querySelectorAll('.modal').forEach(m => {
        if (e.target === m) {
            m.style.display = "none";
        }
    });
}

// CALL BUTTON
function callMe() {
    window.location.href = "tel:+919938455077";
}

// TYPING EFFECT
const text = ["Cybersecurity Enthusiast", "Ethical Hacker", "Web Security Learner"];
let i = 0, j = 0;
let currentText = "", isDeleting = false;

function type() {
    const el = document.querySelector(".typing");

    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        el.innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
            if (i == text.length) i = 0;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// PARTICLES
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#00ff00" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 5 },
        move: { enable: true, speed: 2 }
    }
});