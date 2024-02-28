<script>
	import MainText from '../components/mainText.svelte';
	import Contact from '../components/contact.svelte';
	import About from '../components/about.svelte';
	import Skills from '../components/skills.svelte';
</script>

<div class="container">
	<div id="home" class="section">
		<MainText />
	</div>

	<div id="content-right" class="section">
		<div id="about">
			<About />
		</div>

		<div id="skills">
			<Skills />
		</div>

		<!-- Add other sections here if needed -->
	</div>
</div>

<div id="contact">
	<Contact />
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.section {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}

	#home {
		flex-basis: 30%; /* Adjust this value as needed */
		background-color: #878e99; /* Your grey color */
	}

	#content-right {
		flex-basis: 70%; /* Adjust this value as needed */
		background-color: #7f6a93; /* Your purple color */
		padding-left: 2%; /* Adjust as needed for spacing from the main text */
	}

	#about,
	#skills {
		/* Styling for about and skills sections, if needed */
	}

	#contact {
		/* Styling for contact section */
	}
</style>
