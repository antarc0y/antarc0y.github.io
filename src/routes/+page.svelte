<script>
	import Skills from '../components/skills.svelte';
	import Contact from '../components/contact.svelte';
	import About from '../components/about.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="../styles.css" />
	<link rel="stylesheet" href="../mediaqueries.css" />
</svelte:head>

<div class="container">
	<div class="section" id="home">
		<About />
		<Skills />
		<Contact />
		<Footer />
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
</style>
