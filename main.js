/* =====================================================
   LUCIDE
===================================================== */

if (typeof lucide !== "undefined") {
    lucide.createIcons();
}


/* =====================================================
   AOS
===================================================== */

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: "ease-out-cubic"
    });

}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

        const icon = mainNav.classList.contains("active")
            ? "x"
            : "menu";

        menuToggle.innerHTML =
            `<i data-lucide="${icon}"></i>`;

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            if (!link.classList.contains("home-dropdown")) {

                if (mainNav) {
                    mainNav.classList.remove("active");
                }

                if (menuToggle) {

                    menuToggle.innerHTML =
                        `<i data-lucide="menu"></i>`;

                    if (typeof lucide !== "undefined") {
                        lucide.createIcons();
                    }

                }

            }

        }

    });

});


/* =====================================================
   HOME DROPDOWN MOBILE
===================================================== */

const homeDropdown =
    document.querySelector(".home-dropdown");

if (homeDropdown) {

    homeDropdown.addEventListener("click", (event) => {

        if (window.innerWidth <= 768) {

            event.preventDefault();

            const parent =
                homeDropdown.closest(".nav-item");

            if (parent) {
                parent.classList.toggle("open");
            }

        }

    });

}


/* =====================================================
   DARK MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


function updateThemeIcon() {

    if (!themeToggle) return;

    const darkMode =
        document.body.classList.contains("dark-mode");

    themeToggle.innerHTML = darkMode
        ? `<i data-lucide="sun"></i>`
        : `<i data-lucide="moon"></i>`;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

}


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const theme =
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";

        localStorage.setItem(
            "celebrationTheme",
            theme
        );

        updateThemeIcon();

    });

}


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem("celebrationTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}

updateThemeIcon();


/* =====================================================
   RTL
===================================================== */

const rtlToggle =
    document.getElementById("rtlToggle");


function updateRTLIcon() {

    if (!rtlToggle) return;

    const isRTL =
        document.documentElement.dir === "rtl";

    rtlToggle.innerHTML = isRTL
        ? `<i data-lucide="arrow-left-right"></i>`
        : `<i data-lucide="arrow-right-left"></i>`;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

}


if (rtlToggle) {

    rtlToggle.addEventListener("click", () => {

        const currentDirection =
            document.documentElement.dir || "ltr";

        const newDirection =
            currentDirection === "rtl"
                ? "ltr"
                : "rtl";

        document.documentElement.dir =
            newDirection;

        localStorage.setItem(
            "celebrationDirection",
            newDirection
        );

        updateRTLIcon();

    });

}


/* =====================================================
   LOAD SAVED RTL
===================================================== */

const savedDirection =
    localStorage.getItem("celebrationDirection");

if (savedDirection) {

    document.documentElement.dir =
        savedDirection;

}

updateRTLIcon();


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you! Your enquiry has been received."
        );

        contactForm.reset();

    });

}


/* =====================================================
   ENQUIRY FORM
===================================================== */

const enquiryForm =
    document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you! Your enquiry has been submitted."
        );

        enquiryForm.reset();

    });

}


/* =====================================================
   BULK ORDER FORM
===================================================== */

const bulkForm =
    document.getElementById("bulkEnquiryForm");

if (bulkForm) {

    bulkForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you! Your bulk order enquiry has been submitted."
        );

        bulkForm.reset();

    });

}


/* =====================================================
   CUSTOM DESIGN FORM
===================================================== */

const customDesignForm =
    document.getElementById("customDesignForm");

if (customDesignForm) {

    customDesignForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alert(
            "Thank you! Your design request has been submitted."
        );

        customDesignForm.reset();

    });

}
/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".main-nav .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) return;

    const linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


/* HOME DROPDOWN ACTIVE */

if (
    currentPage === "index.html" ||
    currentPage === "home-2.html"
) {
    const homeLink = document.querySelector(".home-dropdown");

    if (homeLink) {
        homeLink.classList.add("active");
    }
}