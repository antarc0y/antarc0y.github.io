<script>
	import Projects from '../../components/projects.svelte';
</script>

<div class="container">
	<div class="section" id="projects">
		<Projects />
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
