<script>
	import SchoolIcon from '../icons/school.svelte';
	import LocationIcon from '../icons/location.svelte';
	import CatIcon from '../icons/cat.svelte';
</script>

<main>
	<div class="content">
		<div class="icon-container">
			<div class="icon-circle">
				<span class="icon"><SchoolIcon /></span>
			</div>
			<div class="text-container">
				<h2>Education</h2>
				<h3 class="subtitle">University of Alberta</h3>
				<p>Bachelor of Science with Specialization in Computing Science</p>
				<p>
					Bachelor of Science with Specialization in Ecology, Evolution, and Environmental Biology
				</p>
			</div>
		</div>
		<div class="icon-container">
			<div class="icon-circle">
				<span class="icon"><LocationIcon /></span>
			</div>
			<div class="text-container">
				<h2>Location</h2>
				<p>Currently based in Edmonton, Canada</p>
			</div>
		</div>
		<div class="icon-container">
			<div class="icon-circle">
				<span class="icon"><CatIcon /></span>
			</div>
			<div class="text-container">
				<h2>Interests</h2>
				<p>I love cats</p>
			</div>
		</div>
	</div>
</main>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding: 20px; /* Adjust the padding as needed */
		border-radius: 8px; /* Optional: if you want rounded corners */
		margin: 20px; /* Adjust the margin as needed */
		max-width: 1200px; /* Adjust the width as needed */
		margin-left: auto;
		margin-right: auto;
	}

	.icon-container {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #878e99;
	}

	.icon-circle {
		width: 100px;
		height: 100px;
		background-color: #d3d5d4;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}

	.icon {
		font-size: 4rem;
		color: #7f6a93;
	}

	.text-container h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
		text-decoration: underline;
		text-decoration-color: #7f6a93;
		text-decoration-thickness: 4px;
		padding-bottom: 0.5rem;
		font-family: Arial, Helvetica, sans-serif;
	}

	.text-container .subtitle {
		font-size: 1rem;
		color: #333;
		margin: 0;
		padding-bottom: 2px;
	}

	.text-container p {
		margin: 0;
		font-size: 14px;
		color: #ffffff;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
