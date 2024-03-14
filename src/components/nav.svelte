<script>
	import { page } from '$app/stores';

	$: routeId = $page.url.pathname;
	function toggleMenu() {
		const menu = document.querySelector('.menu-links');
		const icon = document.querySelector('.hamburger-icon');
		// @ts-ignore
		menu.classList.toggle('open');
		// @ts-ignore
		icon.classList.toggle('open');
	}
</script>

<nav id="desktop-nav">
	<div class="logo">yh.</div>
	<ul class="nav-links">
		<a href="/" class:active={routeId === '/'}>home</a>
		<a href="/about" class:active={routeId === '/about/'}>about</a>
		<a href="/projects" class:active={routeId === '/projects/'}>projects</a>
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
			<a href="/" class:active={routeId === '/'} on:click={toggleMenu}>home</a>
			<a href="/about" class:active={routeId === '/about/'} on:click={toggleMenu}>about</a>
			<a href="/projects" class:active={routeId === '/projects/'} on:click={toggleMenu}>projects</a>
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
		padding: 0.5rem 3rem;
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

	.nav-links a,
	.menu-links a {
		color: #333;
		text-decoration: none;
		padding: 0.5rem 1rem;
		font-weight: bold;
		position: relative;
		overflow: hidden;
		background: none;
		transition: color 0.5s ease-out;
	}

	.nav-links a:hover,
	.menu-links a:hover {
		color: #a2c5ac;
	}

	.nav-links a.active,
	.menu-links a.active {
		color: #a2c5ac;
	}

	@media (max-width: 600px) {
		nav {
			padding: 0.5rem 1.5rem;
		}
	}
</style>
