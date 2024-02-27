<script>
	import MainText from '../components/mainText.svelte';
	import Contact from '../components/contact.svelte';
	import About from '../components/about.svelte';
	import Skills from '../components/skills.svelte';
</script>

<div id="home">
	<MainText />
</div>

<div id="skills">
	<Skills />
</div>

<div id="about">
	<About />
</div>

<div id="contact">
	<Contact />
</div>

<style>
	#home {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}
	#about {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}
	#contact {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}
	#skills {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}
	#projects {
		padding-top: 12vh;
		padding-bottom: 12vh;
	}
</style>
