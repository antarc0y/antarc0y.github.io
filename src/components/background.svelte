<div class="area">
	<ul class="circles">
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
	</ul>
</div>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}

	.area {
		background-size: 15px;

		width: 100%;
		height: 100vh;
		background: #7f6a93;
	}

	.circles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.circles li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(149, 232, 159, 0.3);
		animation: animate 25s linear infinite;
		bottom: -200px;
	}

	.circles li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.circles li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.circles li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.circles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.circles li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.circles li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.circles li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.circles li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.circles li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.circles li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	.circles li:nth-child(11) {
		left: 30%;
		width: 40px;
		height: 40px;
		background: none;
		border: 2px solid rgba(149, 149, 232, 0.3);
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		animation-delay: 5s;
	}

	.circles li:nth-child(12) {
		left: 55%;
		width: 30px;
		height: 30px;
		background: none;
		border: 2px solid rgba(149, 149, 232, 0.3);
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
		animation-delay: 7s;
	}

	.circles li:nth-child(13) {
		left: 80%;
		width: 50px;
		height: 50px;
		background: none;
		border: 2px solid rgba(149, 149, 232, 0.3);
		clip-path: polygon(
			50% 0%,
			61% 35%,
			98% 35%,
			68% 57%,
			79% 91%,
			50% 70%,
			21% 91%,
			32% 57%,
			2% 35%,
			39% 35%
		);
		animation-delay: 9s;
	}

	@keyframes animate {
		0% {
			transform: translateY(-1000px) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(0px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
