<script>
	import { onMount } from 'svelte';
	import Me from '../icons/me.png';

	/**
	 * @param {string | URL | undefined} url
	 */
	function openLink(url) {
		window.open(url, '_blank');
	}

	let label = 'web developer';

	onMount(() => {
		const titles = ['web developer', 'software developer'];
		let index = 0;

		const interval = setInterval(() => {
			index = (index + 1) % titles.length;
			label = titles[index];
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});

	/**
	 * @param {string} sectionId
	 */
	function scrollToSection(sectionId) {
		if (typeof sectionId === 'string') {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<section id="profile">
	<div class="section__pic-container">
		<img src={Me} alt="Me" class="profile-image" />
	</div>
	<div class="section__text">
		<p class="section__text__p1">hello. I'm</p>
		<h2 class="title">yui han</h2>
		<div class="label-container">
			<p class="section__text__p2">{label}</p>
		</div>
		<div class="btn-container">
			<a
				href="https://drive.google.com/file/d/1enE-Z6jrNTi2t5eM7T39uuva71xa2366/view?usp=sharing"
				target="_blank"
				class="portfolio-link"
			>
				<button class="btn btn-color-2"> view resume </button>
			</a>

			<button class="btn btn-color-1" on:click={() => scrollToSection('contact')}>contact</button>
		</div>

		<div id="socials-container">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src="src/icons/github.png"
				alt="My Github profile"
				class="icon"
				on:click={() => openLink('https://github.com/antarc0y')}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				src="src/icons/linkedin.png"
				alt="My LinkedIn profile"
				class="icon"
				on:click={() => openLink('https://www.linkedin.com/in/yuihan/')}
			/>
		</div>
	</div>
</section>

<style>
	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}
	.label-container {
		min-width: 276px;
	}
	@keyframes label {
		0% {
			content: 'web developer';
		}
		20% {
			content: 'software developer';
		}
	}
</style>
