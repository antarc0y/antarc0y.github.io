<script>
	import About from '../components/about.svelte';
	import Skills from '../components/skills.svelte';
	import Projects from '../components/projects.svelte';
	import Contact from '../components/contact.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="src/routes/styles.css" />
</svelte:head>

<div class="container">
	<div class="section" id="home">
		<!-- <MainText /> -->
		<About />
	</div>

	<div class="section" id="skills">
		<Skills />
	</div>
	<div class="section" id="projects">
		<!-- <ProjectHeader /> -->
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

	.logo {
		font-size: 2rem;
		font-weight: bold;
		color: #a2c5ac;
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
</style>
