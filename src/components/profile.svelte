<section id="about">
	<p class="section__text__p1">get to know more</p>
	<h1 class="title">📝 about me</h1>
	<div class="section-container">
		<div class="section__pic-container">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src="/src/icons/about-pic.JPG" alt="Profile picture" class="about-pic" />
		</div>
		<div class="about-details-container">
			<div class="about-containers">
				<div class="details-container">
					<img src="/src/icons/experience.png" alt="Experience icon" class="icon" />
					<h3>location</h3>
					<p>
						based in <br /> <strong>Edmonton AB, Canada</strong>
					</p>
				</div>
				<div class="details-container">
					<img src="/src/icons/education.png" alt="Education icon" class="icon" />
					<h3>university of alberta</h3>
					<p>B.Sc. Computing Science<br />B.Sc. Ecology and Environmental Biology</p>
				</div>
			</div>

			<p class="section__text__p1">
				I'm a new developer that has dabbled in a variety of projects including web applications,
				mobile software, and games. I'm passionate about creating effective solutions that suits the
				clients' needs. My collaborative approach and commitment to constant learning ensures that
				I'm always ready to tackle the next challenge and contribute meaningfully to a team.
			</p>
		</div>
	</div>
</section>

<style>
	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}

	@media screen and (max-width: 1400px) {
		.details-container {
			max-width: 100%;
			margin-top: 2rem;
			justify-content: center;
		}
	}

	@media screen and (min-width: 1201px) and (max-width: 1399px) {
		.about-containers {
			align-items: center;
			justify-content: center;
		}

		.details-container {
			max-width: 100%;
			margin-bottom: 1rem;
			align-items: center;
			justify-content: center;
		}
	}
	@media screen and (max-width: 1200px) {
		.about-containers {
			margin-top: 0;
			justify-content: center;
		}
		.about-details-container {
			justify-content: center;
		}
	}
</style>
