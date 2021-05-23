<script>
	import ToDo from "./ToDo.svelte";
	export let name;
	export let version;
</script>

<main>
	<div class="app">
		<h1>{name}
			<span>{version}</span>
		</h1>
	<ToDo/>
	</div>
</main>

<style lang="scss" global>
	main{
		display: flex;
		width: 100%;
		height: 100vh;
		justify-content: center;
		align-items: center;
		background-image: url(../img/bgc1.jpg);
		background-position: center;
		background-size: cover;
		color: #f0f0f0;
		.app{
			background-color: #f0f0f0bb;
			color: #252525;
			min-width: 420px;
			padding: 1.5rem;
			border-radius: .3rem;
			display: flex;
			flex-direction: column;
			transform: translateY(-7rem);
			h1{
				text-align: center;
				font-weight: 700;
				span{
					color: #252525;
					transition: 700ms ease;
					display: inline-block;
					transform: translate(-.5rem,-1rem);
					font-size: 1rem;
					font-weight: 100;
				}
			}
		}
	}
</style>