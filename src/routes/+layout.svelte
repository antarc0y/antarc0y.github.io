<script>
	import Nav from '../components/nav.svelte';
	import Background from '../components/background.svelte';
	import './styles.css';
	import './mediaqueries.css';
</script>

<Nav />
<div class="background">
	<Background />
</div>

<slot />

<style>
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
