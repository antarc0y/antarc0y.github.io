<section id="contact">
	<p class="section__text__p1">Get in Touch</p>
	<h1 class="title">contact me</h1>
	<div class="contact-info-upper-container">
		<div class="contact-info-container">
			<img src="src/icons/email.png" alt="Email icon" class="icon contact-icon email-icon" />
			<p><a href="mailto:yuihan980@gmail.com">email</a></p>
		</div>
		<div class="contact-info-container">
			<img src="src/icons/linkedin.png" alt="LinkedIn icon" class="icon contact-icon" />
			<p><a href="https://www.linkedin.com/in/yuihan/">LinkedIn</a></p>
		</div>
	</div>
</section>

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

	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
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
