<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
/>

<main>
	<div class="techStack">
		<div class="languages">
			<h3 class="lheading">Languages</h3>
			<i class="devicon-python-plain-wordmark" />
			<i class="devicon-javascript-plain" />
			<i class="devicon-java-plain-wordmark" />
			<i class="devicon-c-plain-wordmark" />
			<i class="devicon-go-original-wordmark" />
		</div>
		<div class="frontend">
			<h3 class="fheading">Frontend</h3>
			<i class="devicon-react-original-wordmark" />
			<i class="devicon-svelte-plain-wordmark" />
			<i class="devicon-html5-plain-wordmark" />
			<i class="devicon-css3-plain-wordmark" />
		</div>
		<div class="backend">
			<h3 class="bheading">Backend</h3>
			<i class="devicon-django-plain-wordmark" />
			<i class="devicon-flask-original-wordmark" />
			<i class="devicon-firebase-plain-wordmark" />
			<i class="devicon-mongodb-plain-wordmark" />
			<i class="devicon-nginx-original-wordmark" />
		</div>
		<div class="mobile">
			<h3 class="mheading">Mobile</h3>
			<i class="devicon-androidstudio-plain-wordmark" />
			<i class="devicon-flutter-plain" />
		</div>
		<div class="tools">
			<h3 class="theading">Tools & Others</h3>
			<i class="devicon-tensorflow-original" />
			<i class="devicon-git-plain-wordmark" />
			<i class="devicon-github-original-wordmark" />
			<i class="devicon-docker-plain-wordmark" />
		</div>
	</div>
</main>

<style>
	.techStack {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		display: flex;
		flex-direction: row;
		color: black;
		flex-wrap: wrap;
		font-size: 10vh;
		justify-content: center;
	}

	.languages {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10vh;
		margin-top: 0%;
		margin-bottom: 0%;
		padding: 2%;
	}
	.lheading {
		font-size: 5vh;
	}

	.frontend {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10vh;
		margin-top: 0%;
		margin-bottom: 0%;
		padding: 2%;
	}
	.fheading {
		font-size: 5vh;
	}

	.backend {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10vh;
		margin-top: 0%;
		margin-bottom: 0%;
		padding: 2%;
	}
	.bheading {
		font-size: 5vh;
	}

	.mobile {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10vh;
		margin-top: 0%;
		margin-bottom: 0%;
		padding: 2%;
	}
	.mheading {
		font-size: 5vh;
	}

	.tools {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 10vh;
		margin-top: 0%;
		margin-bottom: 0%;
		padding: 2%;
	}
	.theading {
		font-size: 5vh;
	}

	.container {
		width: 100%;
		color: black;
		text-align: center;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
	.word {
		font-style: normal;
		color: blue;
		font-size: 10vh;
	}

	.first {
		text-align: center;
		font-size: 5vh;
		margin-bottom: 0%;
		margin-top: 0%;
	}
	.second {
		text-align: center;
		display: inline;
		margin: 0 auto;
		overflow: hidden;
		color: orange;
		font-size: 12vh;
		letter-spacing: 0;
		border-right: 0.1em solid orange;
		animation: typing 3s steps(30, end), blink-caret 0.75s step-start infinite;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
</style>
