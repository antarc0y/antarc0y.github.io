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
	<div class="section" id="projects">
		<!-- <ProjectHeader /> -->
		<Projects />
	</div>

	<div class="section" id="contact">
		<Contact />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 70px;
	}

	.section {
		width: 100%;
		margin-bottom: 4rem;
	}

	.section + .section {
		padding-top: 0;
	}
</style>
