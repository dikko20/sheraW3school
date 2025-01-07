// script.js

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Hana reload na shafin

    // Karɓar ƙimar fom
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message) {
        alert("Da fatan za a cika dukkan filayen fom ɗin!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Da fatan za a shigar da ingantaccen adireshin imel!");
        return;
    }

    // Aika saƙon zuwa console (Za a iya musanya da aikin API)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Feedback ga mai amfani
    alert("Mun karɓi saƙonka! Za mu tuntube ka nan bada jimawa ba.");
    document.getElementById("contactForm").reset(); // Share fom
});

// Email Validation Helper Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth Scroll for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});