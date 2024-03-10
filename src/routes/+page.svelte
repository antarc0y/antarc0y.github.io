<script>
	import Skills from '../components/skills.svelte';
	import Projects from '../components/projects.svelte';
	import Contact from '../components/contact.svelte';
	import About from '../components/about.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="src/routes/styles.css" />
</svelte:head>

<div class="container">
	<div class="section" id="home">
		<About />
	</div>

	<div class="section" id="about">
		<section id="about">
			<p class="section__text__p1">get to know more</p>
			<h1 class="title">about me</h1>
			<div class="section-container">
				<div class="section__pic-container">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="src/icons/about-pic.JPG" alt="Profile picture" class="about-pic" />
				</div>
				<div class="about-details-container">
					<div class="about-containers">
						<div class="details-container">
							<img src="src/icons/experience.png" alt="Experience icon" class="icon" />
							<h3>location</h3>
							<p>
								based in <br /> <strong>Edmonton AB, Canada</strong>
							</p>
						</div>
						<div class="details-container">
							<img src="src/icons/education.png" alt="Education icon" class="icon" />
							<h3>university of alberta</h3>
							<p>B.Sc. Computing Science<br />B.Sc. Ecology and Environmental Biology</p>
						</div>
					</div>

					<p class="section__text__p1">
						I'm a new developer that has dabbled in a variety of projects including web
						applications, mobile software, and games. I'm passionate about creating effective
						solutions that suits the clients' needs. My collaborative approach and commitment to
						constant learning ensures that I'm always ready to tackle the next challenge and
						contribute meaningfully to a team.
					</p>
				</div>
			</div>
		</section>
	</div>

	<div class="section" id="skills">
		<Skills />
	</div>
	<div class="section" id="projects">
		<Projects />
	</div>

	<div class="section" id="contact">
		<Contact />
	</div>
	<div class="section">
		<footer>
			<div class="logo">yh.</div>
			<nav>
				<div class="nav-links-container">
					<ul class="nav-links">
						<li><a href="#about">about</a></li>
						<li><a href="#experience">skills</a></li>
						<li><a href="#projects">projects</a></li>
					</ul>
				</div>
			</nav>
			<!-- svelte-ignore a11y-img-redundant-alt -->

			<p>created by yui han 2024</p>
		</footer>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 70px;
	}
	.section__text__p1 {
		font-size: medium;
	}

	.logo {
		font-size: 2rem;
		font-weight: bold;
		color: #a2c5ac;
	}
	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}

	.section {
		width: 100%;
		margin-bottom: 4rem;
	}

	.section + .section {
		padding-top: 0;
	}

	footer {
		text-align: center;
	}

	@media screen and (max-width: 1400px) {
		.details-container {
			max-width: 100%;
			margin-top: 2rem;
		}
	}
	@media screen and (max-width: 1200px) {
		.about-containers {
			margin-top: 0;
		}
	}
</style>
