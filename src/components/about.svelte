<script>
	import Me from '../icons/me.png';
	import ResumeIcon from '../icons/resume.svelte';
	import ContactIcon from '../icons/contact.svelte';
</script>

<main>
	<div class="content">
		<div class="about-section">
			<div class="profile-container">
				<img src={Me} alt="Me" class="profile-image" />
			</div>
			<div class="text-container">
				<h2 class="about-me">about me.</h2>
				<p class="subtitle">
					I'm a new developer with experience in mobile software, web applications, and games. I'm
					passionate about creating effective solutions that suit clients' needs.
				</p>
				<p class="subtitle">
					My collaborative approach and commitment to constant learning ensure that I'm always ready
					to tackle the next challenge and contribute meaningfully to any project.
				</p>
			</div>
		</div>
		<div class="button-container">
			<a
				href="https://drive.google.com/file/d/1enE-Z6jrNTi2t5eM7T39uuva71xa2366/view?usp=sharing"
				target="_blank"
				class="portfolio-link"
			>
				<button class="portfolio-button">
					<ResumeIcon />
					view resume
				</button>
			</a>

			<button class="portfolio-button"> <ContactIcon /> contact me </button>
		</div>
	</div>
</main>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding-left: 10%;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
	}

	.about-section {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 20px;
	}

	.profile-container {
		flex: 0 0 auto;
	}

	.profile-image {
		width: 150px;
		height: auto;
		border-radius: 50%;
	}

	.text-container {
		flex: 1;
		padding: 0 20px;
	}

	.text-container h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
		padding-bottom: 0.5rem;
		font-family: Arial, Helvetica, sans-serif;
		padding-left: 10px;
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
		justify-content: flex-start;
	}

	.text-container .subtitle {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		padding-left: 10px;
		max-width: 70%;
		color: #d3d5d4;
		font-weight: bold;
		word-wrap: break-word;
		text-align: left;
	}

	.button-container {
		display: flex;
		justify-content: flex-start;
		margin-top: 20px;
		width: auto;
		padding-left: 10px;
		gap: 40px;
	}

	.portfolio-button {
		background-color: #a2c5ac;
		border: 2px solid #a2c5ac;
		color: white;
		padding: 10px 15px;
		text-align: center;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		border-radius: 12px;
		transition-duration: 0.4s;
		font-size: medium;
	}
	.portfolio-button:hover {
		background-color: white;
		color: #a2c5ac;
	}

	@media (max-width: 768px) {
		.about-section {
			flex-direction: column;
			align-items: left;
		}

		.profile-container {
			margin-bottom: 20px;
			justify-content: flex-start;
		}

		.text-container,
		.text-container h2,
		.text-container .subtitle {
			text-align: left;
			padding-left: 0;
		}

		.button-container {
			width: 100%;
			padding-left: 0;
			justify-content: flex-start;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
	}
</style>
