const projects = [
    {
        id: "tovanas",
        type: "Restaurant Website",
        title: "Tovana’s Restaurant",
        description:
            "A warm, inviting restaurant website designed to make menu details, hours, location information, and contact options easy to find.",
        features: [
            "Responsive Design",
            "Online Menu",
            "Location & Hours",
            "Gallery",
            "Contact Form"
        ],
        image: "images/TovanasDiner.png",
        alt: "Tovana's Restaurant website",
        url: "#"
    },
    {
        id: "pet-tribute",
        type: "Tribute Website",
        title: "Pet Tribute",
        description:
            "A heartfelt memorial website designed to celebrate a beloved pet through photographs, stories, and meaningful details.",
        features: [
            "Emotional Storytelling",
            "Photo Gallery",
            "Responsive Layout",
            "Gentle Visual Design",
            "Accessible Structure"
        ],
        image: "images/PetProject.png",
        alt: "Pet Tribute memorial website",
        url: "https://preeminent-buttercream-5f1d8f.netlify.app/"
    },
    {
        id: "dream-vacation",
        type: "Travel Landing Page",
        title: "Dream Vacation",
        description:
            "An immersive travel landing page created to inspire visitors, highlight destinations, and lead them toward a clear call to action.",
        features: [
            "Modern Animation",
            "Responsive Design",
            "CTA Focused",
            "Smooth Scrolling",
            "Image Optimization"
        ],
        image: "images/dream-vacation.webp",
        alt: "Dream Vacation travel landing page",
        url: "https://vocal-centaur-04f237.netlify.app/"
    },
    {
        id: "forecast",
        type: "Weather Application",
        title: "Forecast",
        description:
            "A clean weather application that presents real-time conditions and forecast data in a polished, easy-to-scan interface.",
        features: [
            "API Integration",
            "Real-Time Data",
            "Responsive UI",
            "Search Functionality",
            "Clean Design"
        ],
        image: "images/forecast.webp",
        alt: "Forecast weather application",
        url: "https://dm-forecast-app.netlify.app/"
    },
    {
        id: "on-repeat",
        type: "Music Experience",
        title: "On Repeat",
        description:
            "A personal music experience with a dark editorial direction, interactive chapters, and a strong visual atmosphere.",
        features: [
            "Custom UI",
            "Interactive Chapters",
            "Music Integration",
            "Responsive Design",
            "Smooth Transitions"
        ],
        image: "images/on-repeat.webp",
        alt: "On Repeat music experience",
        url: "https://on-repeat.netlify.app/"
    }
];

const workShowcase = document.querySelector(".work-showcase");
const workTabs = [...document.querySelectorAll(".work-tab")];
const previousButton = document.querySelector(".work-arrow--previous");
const nextButton = document.querySelector(".work-arrow--next");

const workImage = document.querySelector("#work-image");
const workType = document.querySelector("#work-type");
const workTitle = document.querySelector("#work-title");
const workDescription = document.querySelector("#work-description");
const workFeatures = document.querySelector("#work-features");
const workLink = document.querySelector("#work-link");

let activeProjectIndex = 0;

function renderProject(index) {
    const project = projects[index];

    workShowcase.classList.add("is-changing");

    window.setTimeout(() => {
        workImage.src = project.image;
        workImage.alt = project.alt;
        workType.textContent = project.type;
        workTitle.textContent = project.title;
        workDescription.textContent = project.description;
        workLink.href = project.url;

        workFeatures.innerHTML = project.features
            .map((feature) => `<li>${feature}</li>`)
            .join("");

        workTabs.forEach((tab) => {
            const isActive = tab.dataset.project === project.id;

            tab.classList.toggle("is-active", isActive);
            tab.setAttribute("aria-selected", String(isActive));
        });

        activeProjectIndex = index;
        workShowcase.classList.remove("is-changing");
    }, 180);
}

workTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const selectedIndex = projects.findIndex(
            (project) => project.id === tab.dataset.project
        );

        if (selectedIndex !== -1 && selectedIndex !== activeProjectIndex) {
            renderProject(selectedIndex);
        }
    });
});

previousButton?.addEventListener("click", () => {
    const previousIndex =
        (activeProjectIndex - 1 + projects.length) % projects.length;

    renderProject(previousIndex);
});

nextButton?.addEventListener("click", () => {
    const nextIndex = (activeProjectIndex + 1) % projects.length;
    renderProject(nextIndex);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
    });
});