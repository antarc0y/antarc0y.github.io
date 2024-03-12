<section id="contact">
	<p class="section__text__p1">get in touch</p>
	<h1 class="title">📞 contact me</h1>
	<div class="contact-info-upper-container">
		<div class="contact-info-container">
			<img src="src/icons/email.png" alt="Email icon" class="icon contact-icon email-icon" />
			<p><a href="mailto:yuihan980@gmail.com">email</a></p>
		</div>
		<div class="contact-info-container">
			<img src="src/icons/linkedin.png" alt="LinkedIn icon" class="icon contact-icon" />
			<p><a href="https://www.linkedin.com/in/yuihan/">LinkedIn</a></p>
		</div>
	</div>
</section>

<style>
	.title {
		text-decoration: underline;
		text-decoration-color: #a2c5ac;
	}

	@media screen and (max-width: 600px) {
		.contact-info-container {
			flex-direction: column;
			align-items: center;
			text-align: center;
			justify-content: start;
		}

		.contact-info-upper-container {
			flex-direction: column;
			justify-content: start;
			margin-bottom: 5rem;
			gap: 1rem;
		}
	}
</style>
