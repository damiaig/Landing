
const h1Text = "Bad rental history?";
const pText = `We help when the banks say no. Whether you’ve been rejected for a mortgage, missed past payments, or struggled with rental issues, we provide alternative pathways to get you approved. Our team understands that life happens — and we're here to help you move forward with confidence and peace of mind.`;

const h1Elem = document.getElementById("type-h1");
const pElem = document.getElementById("type-p");
const btn = document.getElementById("learn-more-btn");

let h1Index = 0;
let pIndex = 0;

function typeH1() {
  if (h1Index < h1Text.length) {
    h1Elem.textContent += h1Text.charAt(h1Index);
    h1Index++;
    setTimeout(typeH1, 60);
  } else {
    h1Elem.classList.add("finished"); // Stop blinking cursor
    setTimeout(typeP, 400);
  }
}

function typeP() {
  if (pIndex < pText.length) {
    pElem.textContent += pText.charAt(pIndex);
    pIndex++;
    setTimeout(typeP, 20);
  } else {
    btn.style.opacity = "1";
  }
}

document.addEventListener("DOMContentLoaded", typeH1);

const menuToggle = document.getElementById("menuToggle");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    fullscreenMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });

  // Close menu when any nav link is clicked
  fullscreenMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      fullscreenMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });

  const aboutBox = document.querySelector(".about-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutBox.classList.add("fade-in");
      observer.unobserve(aboutBox);
    }
  });
}, {
  threshold: 0.4
});

observer.observe(aboutBox);
const allMissionBoxes = document.querySelectorAll('.mission-box');

const boxObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-zoom');
      observer.unobserve(entry.target); // Run animation only once
    }
  });
}, {
  threshold: 0.3
});

allMissionBoxes.forEach(box => boxObserver.observe(box));



document.getElementById("learn-more-btn").addEventListener("click", function () {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
});


document.querySelector(".refresh-button span").addEventListener("click", () => {
  location.reload();
});

       