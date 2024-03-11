<script>
	import Profile from '../../components/profile.svelte';
	import Contact from '../../components/contact.svelte';
	// @ts-ignore
	import Footer from '../../components/footer.svelte';
</script>

<div class="container">
	<div class="section" id="about">
		<Profile />
	</div>
	<div class="section">
		<Contact />
		<Footer />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 70px;
	}

	.section {
		width: 100%;
		margin-bottom: 7rem;
	}
</style>
