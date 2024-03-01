<script>
	// @ts-nocheck

	function scrollToSection(sectionId) {
		if (typeof sectionId === 'string') {
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<main>
	<nav>
		<div class="logo">yh.</div>
		<div class="nav-links">
			<a href="javascript:void(0)" on:click={() => scrollToSection('home')}>home</a>

			<a href="javascript:void(0)" on:click={() => scrollToSection('skills')}>skills</a>
			<a href="javascript:void(0)" on:click={() => scrollToSection('contact')}>contact</a>
		</div>
	</nav>
</main>

<style>
	* {
		z-index: 1;
		scroll-behavior: smooth;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: white;
		font-size: 1.4rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}
	nav {
		width: 100%;
		position: fixed;
		display: flex;
		padding: 1rem 3rem;
		justify-content: space-between;
		align-items: center;
		backdrop-filter: blur(10px);
		background: none;
		color: white;
	}

	.logo {
		font-size: 2rem;
		font-weight: bold;
		color: #a2c5ac;
	}

	.nav-links a {
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-weight: bold;
		position: relative;
		overflow: hidden;
		background: linear-gradient(to right, #a2c5ac 50%, #333 50%);
		background-size: 200% 100%;
		background-position: right bottom;
		transition: background-position 0.5s ease-out, color 0.5s ease-out;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.nav-links a:hover {
		background-position: left bottom;
		color: #a2c5ac;
	}

	.nav-links a:hover::after {
		right: 0;
	}
</style>
