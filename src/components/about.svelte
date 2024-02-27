<main>
	<div class="container">
		<h1 class="first"><i class="word">Meet</i><br />the Dev behind the</h1>
		<h1 class="second">Code</h1>
	</div>
</main>
<div class="info">
	<div class="stickynotes">
		<ul>
			<li>
				<h2>Who am I?</h2>
				<p>
					I am a full-stack developer currently completing my undergraduate Bachelor's degree in
					Computer Science at the University of Alberta in Edmonton, Canada.
				</p>
			</li>
			<li>
				<h2>What am I passionate about?</h2>
				<p>
					I am passionate about using technology to solve real-world problems and improve people's
					lives.
				</p>
			</li>
			<li>
				<h2>Hobbies?</h2>
				<p>
					When I'm not working, you can usually find me reading books, playing guitar, or practicing
					taekwondo. I also enjoy meeting new people and learning about their experiences and
					perspectives.
				</p>
			</li>
			<li>
				<h2>Summer Plans?</h2>
				<p>
					I am an avid fan of motorsports and have recently started karting as a hobby. I love
					following Formula 1 races and am looking forward to attending the Canadian Grand Prix in
					Montreal this summer.
				</p>
			</li>
		</ul>
	</div>
</div>

<style>
	.stickynotes {
		padding: 0;
		margin: 5vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}

	h2 {
		font-weight: bold;
		font-size: 2vh;
	}

	p {
		font-size: 2vh;
	}

	ul,
	li {
		list-style: none;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	ul li {
		text-decoration: none;
		color: #000;
		background: #ffc;
		display: block;
		height: 30vh;
		width: 30vh;
		padding: 1em;
		box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
		transform: rotate(-6deg);
		transition: transform 0.15s linear;
	}

	ul li:nth-child(even) {
		transform: rotate(4deg);
		position: relative;
		top: 5px;
		background: #cfc;
	}

	ul li:nth-child(3n) {
		transform: rotate(-3deg);
		position: relative;
		top: -5px;
		background: #ccf;
	}

	ul li:nth-child(5n) {
		transform: rotate(5deg);
		position: relative;
		top: -10px;
	}

	ul li {
		margin: 1em;
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
