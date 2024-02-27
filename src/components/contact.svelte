<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<main>
	<div class="container">
		<h1 class="first"><i class="word">Get</i> in</h1>
		<h1 class="second">Touch</h1>
	</div>
</main>
<div class="contactMethod">
	<h4 class="email">
		<i class="word2">Shoot</i> me an email <br /><a class="link" href="mailto:ianiket23@gmail.com"
			><i class="fa fa-envelope" /></a
		>
	</h4>
	<h4 class="linkedin">
		<i class="word2">Reach</i> out to me on LinkedIn <br /><a
			class="link"
			href="https://www.linkedin.com/in/ianiket23"
		>
			<i class="devicon-linkedin-plain" />
		</a>
	</h4>
</div>

<style>
	.contactMethod {
		margin-left: 10%;
		margin-right: 10%;
		text-align: center;
		font-size: 4vh;
	}
	.word2 {
		font-style: normal;
		color: orange;
		font-size: 4vh;
	}

	.link {
		text-decoration: none;
		font-size: 8vh;
		color: black;
	}
	.link:hover {
		color: orange;
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
		font-size: 6vh;
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
