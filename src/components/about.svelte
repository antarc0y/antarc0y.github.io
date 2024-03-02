<script>
	import Me from '../icons/me.png';
</script>

<main>
	<div class="content">
		<div class="about-section">
			<div class="left">
				<img src={Me} alt="Me" class="profile-image" />
			</div>
			<div class="right">
				<div class="text-container">
					<h2 class="about-me">about me.</h2>
					<p class="subtitle">
						I'm a new developer with experience in mobile software, web applications, and games. I'm
						passionate about creating effective solutions that suit clients' needs.
					</p>
					<p class="subtitle">
						My collaborative approach and commitment to constant learning ensure that I'm always
						ready to tackle the next challenge and contribute meaningfully to any project.
					</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding: 20px;
		border-radius: 8px;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.about-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about-me {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
		text-decoration-thickness: 3px;
		text-decoration-style: solid;
	}

	.left {
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}

	.right {
		flex-basis: 70%;
	}

	.profile-image {
		width: 100%;
		height: auto;
		border-radius: 50%;
		align-items: flex-start;
		justify-content: start;
	}

	.text-container h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
		padding-bottom: 0.5rem;
		font-family: Arial, Helvetica, sans-serif;
		padding-left: 10px;
	}

	.text-container .subtitle {
		font-size: 1rem;
		margin-bottom: 0.5rem;
		padding-left: 10px;
		color: #d3d5d4;
		font-weight: bold;
	}

	.text-container p {
		font-size: 14px;
		color: #ffffff;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	@media (min-width: 768px) {
		.content {
			flex-direction: row;
		}

		.about-section {
			flex-direction: row;
		}

		.left {
			margin-left: -20px;
			margin-bottom: 0;
		}

		.right {
			flex-basis: 70%;
		}
	}
</style>
