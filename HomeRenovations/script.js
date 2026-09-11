// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a navigation link

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =========================
// PROJECT FILTERS
// =========================

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        // Update active button

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter cards

        projectCards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {
                card.classList.remove("hidden");
            }

            else {
                card.classList.add("hidden");
            }

        });


        // Return gallery to beginning

        const projectsGrid =
            document.getElementById("projectsGrid");

        projectsGrid.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    });

});


// =========================
// PROJECT CAROUSEL
// =========================

const projectsGrid =
    document.getElementById("projectsGrid");

const galleryPrev =
    document.getElementById("galleryPrev");

const galleryNext =
    document.getElementById("galleryNext");


function getScrollAmount() {

    if (!projectsGrid) {
        return 0;
    }

    const firstVisibleCard =
        projectsGrid.querySelector(
            ".project-card:not(.hidden)"
        );

    if (!firstVisibleCard) {
        return projectsGrid.clientWidth;
    }

    const cardWidth =
        firstVisibleCard.getBoundingClientRect().width;

    return cardWidth + 16;
}


if (
    projectsGrid &&
    galleryPrev &&
    galleryNext
) {

    galleryNext.addEventListener(
        "click",
        () => {

            projectsGrid.scrollBy({
                left: getScrollAmount(),
                behavior: "smooth"
            });

        }
    );


    galleryPrev.addEventListener(
        "click",
        () => {

            projectsGrid.scrollBy({
                left: -getScrollAmount(),
                behavior: "smooth"
            });

        }
    );

}


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const pageSections =
    document.querySelectorAll(
        "section[id], header[id]"
    );

const navigationLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNavigation() {

    let currentSection = "home";

    pageSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


// =========================
// SUBTLE REVEAL EFFECT
// =========================

const revealElements =
    document.querySelectorAll(
        `
        .value-item,
        .process-card,
        .blog-card,
        .project-card
        `
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-item"
    );

    revealObserver.observe(element);

});



/* =========================
   SCROLL REVEAL
========================= */

.reveal-item {
    opacity: 0;
    transform: translateY(20px);

    transition:
        opacity 0.65s ease,
        transform 0.65s ease;
}

.reveal-item.revealed {
    opacity: 1;
    transform: translateY(0);
}