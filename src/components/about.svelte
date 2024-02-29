<script>
	import SchoolIcon from '../icons/school.svelte';
	import LocationIcon from '../icons/location.svelte';
	import CatIcon from '../icons/cat.svelte';
</script>

<main>
	<div class="icon-container">
		<div class="icon-circle">
			<span class="large-icon">
				<SchoolIcon />
			</span>
		</div>
		<div class="icon-circle">
			<span class="large-icon">
				<LocationIcon />
			</span>
		</div>
		<div class="icon-circle">
			<span class="large-icon">
				<CatIcon />
			</span>
		</div>
	</div>
</main>

<style>
	.icon-container {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50vh;
	}

	.icon-circle {
		width: 160px;
		height: 160px;
		background-color: #d3d5d4;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		position: relative; /* Needed for absolute positioning of the icon */
	}

	.large-icon {
		text-align: center;
		justify-content: center;
		transform: scale(6);
		/* position: absolute; */
	}

	.iconify {
		font-size: 5em; /* Sets the iconify icons size */
		color: #7f6a93; /* Sets the iconify icons color */
	}
</style>
