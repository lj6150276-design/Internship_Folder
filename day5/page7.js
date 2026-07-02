// ==========================
// PRAVAH 2027 - script.js
// ==========================

// Select Elements
const memberSelect = document.getElementById("members");
const memberFields = document.getElementById("memberFields");
const form = document.getElementById("registrationForm");

// Generate Member Fields
memberSelect.addEventListener("change", function () {

    memberFields.innerHTML = "";

    let totalMembers = parseInt(this.value);

    for (let i = 1; i <= totalMembers; i++) {

        let label = document.createElement("label");
        label.innerHTML = "Member " + i + " Name";

        let input = document.createElement("input");

        input.type = "text";
        input.className = "form-control";
        input.placeholder = "Enter Member " + i + " Name";
        input.required = true;

        memberFields.appendChild(label);
        memberFields.appendChild(input);

    }

});

// Default Member Field
window.onload = function () {

    memberSelect.dispatchEvent(new Event("change"));

};

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🎉 Registration Successful!\n\nWelcome to PRAVAH 2027.");

    form.reset();

    memberFields.innerHTML = "";

    memberSelect.dispatchEvent(new Event("change"));

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Navbar Active Link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Hero Image Animation
const heroImage = document.querySelector(".hero-img");

setInterval(() => {

    heroImage.style.transform = "scale(1.03)";

    setTimeout(() => {

        heroImage.style.transform = "scale(1)";

    }, 500);

}, 1500);