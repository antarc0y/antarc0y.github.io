<script>
	import { onMount } from 'svelte';

	let currentText = '';
	const texts = ['web developer', 'software developer', 'game developer'];
	let textIndex = 0;
	let charIndex = 0;
	let typing = true;

	onMount(() => {
		const type = () => {
			if (typing) {
				if (charIndex < texts[textIndex].length) {
					currentText += texts[textIndex].charAt(charIndex);
					charIndex++;
				} else {
					typing = false;
				}
			} else {
				if (charIndex > 0) {
					currentText = currentText.slice(0, -1);
					charIndex--;
				} else {
					typing = true;
					textIndex = (textIndex + 1) % texts.length;
				}
			}

			setTimeout(type, typing ? 300 : 100);
		};

		type();
	});
</script>

<main>
	<div class="main-content">
		<h1 class="greeting-line">
			<span class="greeting">hello</span>
			<span class="dash">—————</span>
		</h1>
		<h1 class="intro">I'm <span class="name">yui</span></h1>
		<div class="title">
			<span id="third">{currentText}</span>
		</div>
		<div class="button-container">
			<a
				href="https://drive.google.com/file/d/1uzgLLMx8jUhonkg08EfLedXyiHs_ySLz/view?usp=sharing"
				target="_blank"
				class="portfolio-link"
			>
				<button class="portfolio-button">view resume</button>
			</a>
		</div>
	</div>
</main>

<style>
	.main-content {
		text-align: left;
		width: 100%;
		padding-left: 10%;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.greeting-line {
		display: flex;
		justify-content: left;
		align-items: left;
		font-size: 4vw;
		font-weight: bold;
		margin: 0;
		color: #333;
	}
	.greeting {
		margin-right: 1vw;
	}
	.intro {
		font-size: 6vw;
		margin: 0;
	}
	.name {
		color: #333;
	}
	.title {
		font-size: 3ch;
		margin-top: 1vw;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	#third {
		display: inline-block;
		overflow: hidden;
		border-right: 0.15em solid orange;
		white-space: pre-line;
		margin: 0 auto;
		font-weight: bolder;
		animation: blink-caret 0.75s step-end infinite;
		text-decoration: underline;
		text-decoration-color: #7f6a93;
		font-size: large;
	}
	.button-container {
		text-align: start;
		margin-top: 2vw;
	}

	.portfolio-button {
		background-color: #a2c5ac;
		border: 2px solid #a2c5ac;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 12px;
		transition-duration: 0.4s;
	}

	.portfolio-button:hover {
		background-color: white;
		color: #a2c5ac;
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #7f6a93;
		}
	}
</style>
