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

	const isOpen = (id) => {};

	function toggleMenu() {
		const menu = document.querySelector('.menu-links');
		const icon = document.querySelector('.hamburger-icon');
		menu.classList.toggle('open');
		icon.classList.toggle('open');
	}
</script>

<nav id="desktop-nav">
	<div class="logo">yh.</div>
	<ul class="nav-links">
		<a href="#about">about</a>
		<a href="#skills">skills</a>
		<a href="#projects">projects</a>
		<a href="#contact">contact</a>
	</ul>
</nav>

<nav id="hamburger-nav">
	<div class="logo">yh.</div>
	<div class="hamburger-menu">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="hamburger-icon" on:click={toggleMenu}>
			<span />
			<span />
			<span />
		</div>
		<ul class="menu-links">
			<a href="#about" on:click={toggleMenu}>about</a>
			<a href="#skills" on:click={toggleMenu}>skills</a>
			<a href="#projects" on:click={toggleMenu}>projects</a>
			<a href="#contact" on:click={toggleMenu}>contact</a>
		</ul>
	</div>
</nav>

<style>
	* {
		z-index: 1;
		scroll-behavior: smooth;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: white;
		font-size: 1.4rem;
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

	.menu-links a {
		display: block;
		padding: 10px;
		text-align: center;
		font-size: 20px;
		color: white;
		transition: all 0.3 ease-in-out;
	}

	.menu-links a:hover {
		color: #a2c5ac;
	}

	.nav-links a:hover {
		background-position: left bottom;
		color: #a2c5ac;
	}

	.nav-links a:hover::after {
		right: 0;
	}
</style>
