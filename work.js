(() => {
	const projects = [
		{
			title: "Tovana’s Restaurant",
			type: "Restaurant Website",
			category: "website",
			description:
				"A custom restaurant concept developed from a long-standing personal idea, combining thoughtful branding, a carefully curated menu, and an inviting digital experience.",
			tags: ["HTML", "CSS", "JavaScript"],
			image: "https://i.postimg.cc/DzNHvdFz/tovanas-restaurant.webp",
			alt: "Tovana's Restaurant website",
			url: "https://tovanas.netlify.app/"
		},

		{
			title: "DnA Financial",
			type: "Bookkeeping Business Website",
			category: "website",
			description:
				"A live bookkeeping business website designed to explain services, pricing, client expectations, and sample monthly deliverables in a clear and trustworthy way.",
			tags: ["HTML", "CSS", "JavaScript"],
			image: "https://i.postimg.cc/G2v0qJXr/dna-financial-portfolio.webp",
			alt: "DnA Financial bookkeeping website",
			url: "https://dnafinancial.org/"
		},

		{
			title: "Forecast",
			type: "Weather Application",
			category: "application",
			description:
				"An interactive weather application that retrieves current conditions and forecast data for searched cities using live API data.",
			tags: ["HTML", "CSS", "JavaScript", "API"],
			image: "https://i.postimg.cc/8CQ2SBBv/Forecast.webp",
			alt: "Forecast weather application",
			url: "https://dm-forecast-app.netlify.app/"
		},

		{
			title: "On Repeat",
			type: "Music Experience",
			category: "website",
			description:
				"A personal music experience built around meaningful songs, different moods, interactive content, and a dark editorial visual direction.",
			tags: ["HTML", "CSS", "JavaScript"],
			image: "https://i.postimg.cc/GpwWCJJY/On-Repeat.webp",
			alt: "On Repeat music experience",
			url: "https://on-repeat.netlify.app/"
		},

		{
			title: "Pet Tribute",
			type: "Tribute Website",
			category: "website",
			description:
				"A single-page tribute that tells the story of a dog's life from the dog's point of view through photographs, memories, and meaningful details.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/XqZYGkZh/Pet-Project.webp",
			alt: "Pet Tribute memorial website",
			url: "https://preeminent-buttercream-5f1d8f.netlify.app/"
		},

		{
			title: "Dream Vacation",
			type: "Travel Website",
			category: "website",
			description:
				"A one-page travel website with smooth-scroll navigation and a JavaScript day-and-night theme toggle.",
			tags: ["HTML", "CSS", "JavaScript"],
			image: "https://i.postimg.cc/MG2CSbby/Dream-Vacation.webp",
			alt: "Dream Vacation travel website",
			url: "https://vocal-centaur-04f237.netlify.app/"
		},

		{
			title: "World Clock",
			type: "World Clock Application",
			category: "application",
			description:
				"An interactive world clock that displays times for multiple cities and allows users to select different locations.",
			tags: ["HTML", "CSS", "JavaScript"],
			image: "https://i.postimg.cc/XJ9MQcs6/world-clock-portfolio.webp",
			alt: "World Clock application",
			url: "https://worldwideclock.netlify.app/"
		},

		{
			title: "AI Poem Generator",
			type: "AI Content Generator",
			category: "application",
			description:
				"A simple AI-powered poem generator created while learning how to work with user input and generated content.",
			tags: ["HTML", "CSS", "JavaScript", "AI"],
			image: "https://i.postimg.cc/yNM4mrXb/ai-poem-generator-portfolio.webp",
			alt: "AI Poem Generator application",
			url: "https://dm-ai-generator.netlify.app/"
		},

		{
			title: "Recipe",
			type: "Recipe Website",
			category: "website",
			description:
				"A colorful recipe-card project designed to feel more like a page from a cookbook than a basic web component.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/PqgsWFQk/recipe-portfolio.webp",
			alt: "Chicken Butter Bites recipe website",
			url: "https://chickenbutterbites.netlify.app/"
		},

		{
			title: "Nectar Life",
			type: "Lifestyle Landing Page",
			category: "website",
			description:
				"A landing-page concept inspired by an in-person Nectar Life experience in Las Vegas, designed around the feeling of the visit rather than recreating the storefront.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/tgKQ3mNX/nectar-life-portfolio-adjusted.webp",
			alt: "Nectar Life landing page",
			url: "https://nectar-life.netlify.app/"
		},

		{
			title: "Travel & Tech",
			type: "Travel & Technology Website",
			category: "website",
			description:
				"An ongoing personal travel and technology site that combines destination stories with the Samsung gear used while traveling.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/jjp0Hk4R/travel-tech-portfolio.webp",
			alt: "Travel and Tech website",
			url: "https://travelntech.netlify.app/"
		},

		{
			title: "Welcome to Vegas",
			type: "Travel Website",
			category: "website",
			description:
				"A travel-focused SheCodes project created to demonstrate embedded maps and social-media content within a website.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/9f65dNYX/welcome-to-vegas-portfolio.webp",
			alt: "Welcome to Vegas travel website",
			url: "https://graceful-duckanoo-ee7a63.netlify.app/"
		},

		{
			title: "New Furniture",
			type: "E-Commerce Interface",
			category: "website",
			description:
				"A static furniture storefront concept featuring product categories, pricing, ratings, promotional content, and shopping-oriented UI.",
			tags: ["HTML", "CSS", "Responsive Design"],
			image: "https://i.postimg.cc/N03q6P73/new-furniture-portfolio.webp",
			alt: "New Furniture storefront website",
			url: "https://new-furniture.netlify.app/"
		}
	];


	const projectsPerPage = 6;

	let currentPage = 1;
	let activeFilter = "all";


	const portfolioGrid =
		document.querySelector("#portfolio-grid");

	const pagination =
		document.querySelector("#portfolio-pagination");

	const filterButtons =
		document.querySelectorAll(".portfolio-filter");

	const categoryLabel =
		document.querySelector(".portfolio-heading .section-eyebrow");


	function createProjectCard(project) {
		return `
			<article class="portfolio-card">

				<div class="portfolio-card__browser">
					<div
						class="portfolio-card__browser-bar"
						aria-hidden="true"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<div class="portfolio-card__image">
						${
							project.image
								? `
									<img
										src="${project.image}"
										alt="${project.alt}"
									>
								`
								: `
									<div
										class="portfolio-card__placeholder"
										aria-label="${project.alt}"
										role="img"
									>
										<span>${project.title}</span>
									</div>
								`
						}
					</div>
				</div>

				<div class="portfolio-card__content">

					<p class="portfolio-card__type">
						${project.type}
					</p>

					<h3>${project.title}</h3>

					<p class="portfolio-card__description">
						${project.description}
					</p>

					<div class="portfolio-card__tags">
						${project.tags
							.map((tag) => `<span>${tag}</span>`)
							.join("")}
					</div>

					<a
						href="${project.url}"
						class="portfolio-card__link"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
						<span aria-hidden="true">→</span>
					</a>

				</div>

			</article>
		`;
	}


	function getFilteredProjects() {
		if (activeFilter === "all") {
			return projects;
		}

		return projects.filter(
			(project) => project.category === activeFilter
		);
	}


	function renderProjects(projectList) {
		portfolioGrid.innerHTML = projectList
			.map(createProjectCard)
			.join("");
	}


	function renderPagination(totalProjects) {
		const totalPages =
			Math.ceil(totalProjects / projectsPerPage);

		if (totalPages <= 1) {
			pagination.innerHTML = "";
			return;
		}

		let paginationHTML = `
			<button
				class="portfolio-pagination__arrow"
				type="button"
				data-page="${currentPage - 1}"
				aria-label="Previous page"
				${currentPage === 1 ? "disabled" : ""}
			>
				←
			</button>
		`;

		for (let page = 1; page <= totalPages; page++) {
			paginationHTML += `
				<button
					class="portfolio-pagination__page ${
						page === currentPage ? "is-active" : ""
					}"
					type="button"
					data-page="${page}"
					${
						page === currentPage
							? 'aria-current="page"'
							: ""
					}
				>
					${page}
				</button>
			`;
		}

		paginationHTML += `
			<button
				class="portfolio-pagination__arrow"
				type="button"
				data-page="${currentPage + 1}"
				aria-label="Next page"
				${currentPage === totalPages ? "disabled" : ""}
			>
				→
			</button>
		`;

		pagination.innerHTML = paginationHTML;
	}


	function renderPortfolio() {
		const filteredProjects =
			getFilteredProjects();

		const totalPages =
			Math.ceil(
				filteredProjects.length / projectsPerPage
			);

		if (currentPage > totalPages && totalPages > 0) {
			currentPage = totalPages;
		}

		const startIndex =
			(currentPage - 1) * projectsPerPage;

		const endIndex =
			startIndex + projectsPerPage;

		const projectsForPage =
			filteredProjects.slice(
				startIndex,
				endIndex
			);

		renderProjects(projectsForPage);

		renderPagination(filteredProjects.length);
	}


	filterButtons.forEach((button) => {
		button.addEventListener("click", () => {
			activeFilter = button.dataset.filter;
			currentPage = 1;

			filterButtons.forEach((filterButton) => {
				filterButton.classList.remove("is-active");
			});

			button.classList.add("is-active");

			if (activeFilter === "website") {
				categoryLabel.textContent = "Websites";
			} else if (activeFilter === "application") {
				categoryLabel.textContent =
					"Web Applications";
			} else {
				categoryLabel.textContent =
					"All Projects";
			}

			renderPortfolio();
		});
	});


	pagination.addEventListener("click", (event) => {
		const button =
			event.target.closest("button");

		if (!button || button.disabled) {
			return;
		}

		currentPage =
			Number(button.dataset.page);

		renderPortfolio();

		document
			.querySelector("#selected-work")
			.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
	});


	/* ========================================
	   CONCEPT DESIGN CAROUSEL
	======================================== */

	const conceptTrack =
		document.querySelector(".concept-carousel__track");

	const conceptCards =
		document.querySelectorAll(".portfolio-concept-card");

	const conceptPrevious =
		document.querySelector(
			".concept-carousel__arrow--previous"
		);

	const conceptNext =
		document.querySelector(
			".concept-carousel__arrow--next"
		);

	const conceptCurrent =
		document.querySelector("#concept-current");

	const conceptTotal =
		document.querySelector("#concept-total");

	let currentConcept = 0;


	function getConceptsVisible() {
		if (window.innerWidth <= 700) {
			return 1;
		}

		if (window.innerWidth <= 1050) {
			return 2;
		}

		return 3;
	}


	function getConceptGap() {
		const styles =
			window.getComputedStyle(conceptTrack);

		return parseFloat(styles.columnGap || styles.gap) || 0;
	}


	function updateConceptCarousel() {
		if (!conceptTrack || conceptCards.length === 0) {
			return;
		}

		const conceptsVisible =
			getConceptsVisible();

		const maxIndex =
			Math.max(
				0,
				conceptCards.length - conceptsVisible
			);

		if (currentConcept > maxIndex) {
			currentConcept = maxIndex;
		}

		const cardWidth =
			conceptCards[0].getBoundingClientRect().width;

		const gap =
			getConceptGap();

		const distance =
			currentConcept * (cardWidth + gap);

		conceptTrack.style.transform =
			`translateX(-${distance}px)`;

		conceptCurrent.textContent =
			String(currentConcept + 1).padStart(2, "0");

		conceptTotal.textContent =
			String(conceptCards.length).padStart(2, "0");

		conceptPrevious.disabled =
			currentConcept === 0;

		conceptNext.disabled =
			currentConcept >= maxIndex;
	}


	conceptPrevious?.addEventListener("click", () => {
		if (currentConcept > 0) {
			currentConcept--;
			updateConceptCarousel();
		}
	});


	conceptNext?.addEventListener("click", () => {
		const conceptsVisible =
			getConceptsVisible();

		const maxIndex =
			Math.max(
				0,
				conceptCards.length - conceptsVisible
			);

		if (currentConcept < maxIndex) {
			currentConcept++;
			updateConceptCarousel();
		}
	});


	window.addEventListener("resize", () => {
		updateConceptCarousel();
	});


	renderPortfolio();
	updateConceptCarousel();
})();