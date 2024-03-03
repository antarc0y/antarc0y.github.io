<script>
	import MainText from '../components/mainText.svelte';
	import ProjectHeader from '../components/projectHeader.svelte';
	import About from '../components/about.svelte';
	import Skills from '../components/skills.svelte';
</script>

<div class="container">
	<div class="row" id="home">
		<div class="left">
			<MainText />
		</div>
		<div class="right">
			<About />
		</div>
	</div>
	<div class="row" id="skills">
		<div class="left">
			<ProjectHeader />
		</div>
		<div class="right" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 70px;
	}

	.row {
		display: flex;
		width: 100%;
		margin-bottom: 1rem;
	}

	.left {
		flex-basis: 30%;
		display: flex;
		align-items: start;
		justify-content: flex-start;
		padding-right: 1%;
	}

	.right {
		flex-basis: 60%;
		padding-left: 2%;
	}
	.row + .row {
		padding-top: 0;
	}
</style>
