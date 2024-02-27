<main>
	<div class="laptop">
		<div class="screen">
			<div class="content">
				<h1 class="first"><i class="word">Hey</i>, I'm</h1>
				<h1 class="second">Yui<span class="blinker">|</span></h1>
				<h1><span id="third" /></h1>
			</div>
		</div>
		<div class="base" />
	</div>
</main>

<style>
	html,
	body {
		height: 100%;
		margin: 0;
		background-color: #a2c5ac;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.laptop {
		width: 100vh;
		height: 70vh;
		background-color: #878e99;
		border-radius: 5px;
		position: relative;
		margin: auto;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.screen {
		width: 90%;
		height: 90%;
		background-color: #ecf0f1;
		border-radius: 3px;
		position: absolute;
		top: 5%;
		left: 5%;
		overflow: hidden;
	}

	.base {
		width: 70%;
		height: 5px;
		background-color: #878e99;
		position: absolute;
		bottom: -10px;
		left: 15%;
		border-radius: 5px;
	}

	.content {
		padding: 20px;
		color: black;
		text-align: center;
		font-family: 'Courier New', Courier, monospace;
	}

	.word {
		font-style: normal;
		color: blue;
	}

	.first {
		text-align: center;
		font-size: 10vh;
		margin-bottom: 0%;
		margin-top: 0%;
	}

	.second {
		text-align: center;
		display: inline;
		margin: 0 auto;
		overflow: hidden;
		color: orange;
		font-size: 9vh;
		letter-spacing: 0;
	}

	.blinker {
		display: inline-block;
		width: 0;
		color: transparent;
		border-bottom: 0.1em solid orange;
		animation: blink-caret 0.75s step-start infinite;
	}

	#third {
		text-align: center;
		font-size: 5vh;
		margin: auto;
		margin-bottom: 2%;
		color: black;
	}

	#third::after {
		content: '';
		animation: third 6s linear infinite;
	}

	@keyframes third {
		0% {
			content: 'Full-Stack Developer';
		}
		20% {
			content: 'Web Developer';
		}
		40% {
			content: 'Entrepreneur';
		}
		60% {
			content: 'Innovator';
		}
		80% {
			content: 'Android Developer';
		}
		100% {
			content: 'Full-Stack Developer';
		}
	}

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
