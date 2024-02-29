<script>
	import { onMount } from 'svelte';

	let currentText = '';
	const texts = ['Web Developer', 'Software Developer', 'Game Developer'];
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
			<span class="greeting">Hello</span>
			<span class="dash">—————</span>
		</h1>
		<h1 class="intro">I'm <span class="name">yui</span></h1>
		<div class="title">
			<span id="third">{currentText}</span>
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
		white-space: nowrap;
		margin: 0 auto;
		font-weight: bolder;
		animation: blink-caret 0.75s step-end infinite;
		text-decoration: underline;
		text-decoration-color: #7f6a93;
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
