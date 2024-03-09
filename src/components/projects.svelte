<script>
	/**
	 * @param {string | URL | undefined} url
	 */
	function openLink(url) {
		window.open(url, '_blank');
	}
</script>

<section id="projects">
	<p class="section__text__p1">browse my</p>
	<h1 class="title">projects</h1>
	<div class="experience-details-container">
		<div class="about-containers">
			<div class="details-container color-container">
				<div class="article-container">
					<img src="src/icons/toneteller.png" alt="ToneTeller" class="project-img" />
				</div>
				<h2 class="experience-sub-title project-title">Tone Teller</h2>
				<p class="section__text__p3">
					A web application and chrome extension that uses a machine learning model to perform
					sentiment analysis on input text. This project won <strong>2nd place</strong> in
					<strong>HackED 2023.</strong>
				</p>
				<div class="btn-container">
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => openLink('https://github.com/Hackathon-Hacked2023/DivineInspiration')}
						>Github</button
					>
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => openLink('https://hackathon-hacked2023.github.io/DivineInspiration/')}
						>View Project</button
					>
				</div>
			</div>
			<div class="details-container color-container">
				<div class="article-container">
					<img src="src/icons/aquatic.png" alt="AR-Biosphere" class="project-img" />
				</div>
				<h2 class="experience-sub-title project-title">AR-Biosphere</h2>
				<p class="section__text__p3">
					This mobile app is the first MVP of an augmented reality project for the <strong
						>Aquatic Biosphere Society.</strong
					>
					This prototype lays the foundation for the next phases of this exciting project. AR-Biosphere
					was also part of the
					<strong>University of Alberta Community Service Learning</strong> program.
				</p>

				<div class="btn-container">
					<button
						class="btn btn-color-2 project-btn"
						on:click={() => openLink('https://github.com/UAlberta-CMPUT401/ar-biosphere')}
						>Github</button
					>
					<button
						class="btn btn-color-2 project-btn"
						on:click={() =>
							openLink('https://www.aquaticbiosphere.ca/post/the-biosphere-in-augmented-reality')}
						>Learn More</button
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.section__text__p1 {
		text-align: center;
		color: white;
		font-size: medium;
		padding: 1rem;
	}

	.section__text__p3 {
		text-align: center;
		color: grey;
		font-size: medium;
		padding: 1rem;
	}

	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}
	.project-info {
		position: relative;
		z-index: 1; /* Ensures text content is on top of the overlay */
	}

	.project-card:hover .project-image {
		opacity: 0.5; /* Dim the image */
	}

	.image-container {
		width: 250px;
		height: 150px;
		flex: none;
		padding-right: 1rem;
	}

	.project-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0;
	}

	.project-info {
		flex-grow: 1;
		padding: 0 20px;
		max-width: 50%;
	}

	.project-title {
		font-size: 1.5rem;
		color: #333;
		margin: 0 0;
		text-decoration-color: #a2c5ac;
	}

	.project-description {
		font-size: 1rem;
		color: #d3d5d4;
		margin: 0;
		word-wrap: break-word;
	}

	.project-description :hover {
		color: 'pink';
	}

	@media (max-width: 768px) {
		.project-card {
			flex-direction: column;
			align-items: center;
		}

		.image-container {
			width: 80%;
			height: auto;
			margin: 0 auto;
		}

		.project-info {
			max-width: 100%;
			padding: 10px 0;
		}
	}
</style>
