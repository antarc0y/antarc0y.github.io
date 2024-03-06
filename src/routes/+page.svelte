<script>
	import MainText from '../components/mainText.svelte';
	import About from '../components/about.svelte';
	import Skills from '../components/skills.svelte';
	import ProjectHeader from '../components/projectHeader.svelte';
</script>

<div class="container">
	<div class="section" id="home">
		<MainText />
		<About />
	</div>
	<div class="section" id="projectHeader">
		<ProjectHeader />
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
		margin-bottom: 1rem;
	}

	.section + .section {
		padding-top: 0;
	}
</style>
