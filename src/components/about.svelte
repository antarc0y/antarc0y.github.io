<script>
	import Me from '../icons/me.png';

	/**
	 * @param {string | URL | undefined} url
	 */
	function openLink(url) {
		window.open(url, '_blank');
	}
</script>

<section id="profile">
	<div class="section__pic-container">
		<img src={Me} alt="Me" class="profile-image" />
	</div>
	<div class="section__text">
		<p class="section__text__p1">hello. I'm</p>
		<h2 class="title">yui han</h2>
		<p class="ssection__text__p2">frontend developer</p>
		<div class="btn-container">
			<a
				href="https://drive.google.com/file/d/1enE-Z6jrNTi2t5eM7T39uuva71xa2366/view?usp=sharing"
				target="_blank"
				class="portfolio-link"
			>
				<button class="btn btn-color-2"> view resume </button>
			</a>

			<button class="btn btn-color-1"> contact </button>
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
	section {
		padding-top: 4vh;
		height: 96vh;
		margin: 0 10rem;
		box-sizing: border-box;
		min-height: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.profile-container {
		display: flex;
		height: 400px;
		width: 400px;
		margin: auto 0;
	}

	.profile-image {
		width: 500px;
		height: auto;
		border-radius: 50%;
	}

	.text-container {
		align-self: center;
		text-align: center;
	}

	.text-container p {
		font-weight: 600;
	}
	.about-me {
		text-align: center;
	}

	.text-container h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
		padding-bottom: 0.5rem;
		font-family: Arial, Helvetica, sans-serif;
		padding-left: 10px;
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
		justify-content: flex-start;
	}

	.text-container .subtitle {
		font-size: 1.75rem;
		margin-bottom: 1rem;
	}

	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}

	.button-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.portfolio-button {
		background-color: #a2c5ac;
		border: 2px solid #a2c5ac;
		color: white;
		padding: 10px 15px;
		text-align: center;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		border-radius: 12px;
		transition-duration: 0.4s;
		font-size: medium;
	}
	.portfolio-button:hover {
		background-color: white;
		color: #a2c5ac;
	}
</style>
