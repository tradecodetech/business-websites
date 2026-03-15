document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------------------
       SCROLL FADE ANIMATION
    -------------------------------------------------- */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade").forEach(el => observer.observe(el));

    /* --------------------------------------------------
       MOBILE NAV TOGGLE
    -------------------------------------------------- */
    const menuBtn = document.getElementById("menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileNav.style.display === "flex";
            mobileNav.style.display = isOpen ? "none" : "flex";
            menuBtn.textContent = isOpen ? "☰" : "✕";
        });
    }

    /* --------------------------------------------------
       ACTIVE NAV LINK — highlight current page
    -------------------------------------------------- */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a, .mobile-nav a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

});
