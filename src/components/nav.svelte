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
		background: none; /* Removes any background */
		color: white; /* Adjust color as needed */
	}

	.logo {
		font-size: 2rem; /* Adjust size as needed */
		font-weight: bold; /* Adjust weight as needed */
		color: #a2c5ac;
	}

	.nav-links {
		display: flex;
		gap: 2rem; /* Adjust gap as needed */
	}

	.nav-links a {
		color: #333;
		text-decoration: none;
		transition: color 0.3s;
		padding: 0.5rem 1rem;
		font-weight: bold;
	}

	.nav-links a:hover {
		color: #cccccc; /* Hover color */
		text-decoration: underline;
		text-decoration-color: #cccccc; /* Underline color */
	}

	/* You may need to adjust media queries for responsiveness */
</style>
