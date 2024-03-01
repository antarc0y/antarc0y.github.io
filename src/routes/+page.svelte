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

		<div id="contact">
			<Contact />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		padding-top: 40px;
	}

	.section {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}

	#home {
		flex-basis: 30%;
		background-color: #878e99;
	}

	#content-right {
		flex-basis: 65%;
		background-color: #7f6a93;
		padding-left: 2%;
	}

	#about,
	#skills {
		/* Styling for about and skills sections, if needed */
	}

	#contact {
		/* Styling for contact section */
	}
</style>
