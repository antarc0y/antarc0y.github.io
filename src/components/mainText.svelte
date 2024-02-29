<main>
	<div class="main-content">
		<h1 class="greeting-line">
			<span class="greeting">Hello</span>
			<span class="dash">—————</span>
		</h1>
		<h1 class="intro">I'm <span class="name">yui</span></h1>
		<div class="title"><span id="third" /></div>
	</div>
</main>

<style>
	.main-content {
		text-align: left;
		width: 100%;
		padding-left: 5%; /* Adjust the padding as needed */
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
		animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
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
			border-color: #7f6a93;
		}
	}

	#third::after {
		content: '';
		animation: third 6s linear infinite;
	}
	@keyframes third {
		0%,
		100% {
			content: 'Web Developer';
		}
		33% {
			content: 'Software Developer';
		}
		67% {
			content: 'Game Developer';
		}
	}
</style>
