document.addEventListener("DOMContentLoaded", () => {

    /* FADE-IN SCROLL ANIMATION */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade").forEach(el => observer.observe(el));

    /* DARK MODE TOGGLE */
    const toggle = document.createElement("div");
    toggle.className = "toggle";
    toggle.innerText = "Dark Mode";
    toggle.onclick = () => document.body.classList.toggle("dark");
    document.body.appendChild(toggle);

    /* MOBILE NAVIGATION */
    const menuBtn = document.getElementById("menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            mobileNav.style.display =
                mobileNav.style.display === "flex" ? "none" : "flex";
        });
    }
});
