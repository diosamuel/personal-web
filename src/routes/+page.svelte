<div class="flex flex-col items-center justify-center text-center h-screen bg-black">
	<img src="https://avatars.githubusercontent.com/u/42204593?v=4">
</div>
<div class="flex flex-col h-screen">
	<h1 class="text-2xl font-bold tracking-[-2px] text-orange-500 bg-black">
		<marquee>
		{#each [1,2,3,4,5,6,7,8,9,0] as item}
			<span>{@html {}}*Portfolio*</span>
		{/each}
		</marquee>
	</h1>

	<div class="m-10 flex flex-row">
		{#each portfolio as port}
		<div class="pt-4">
			<a href="/tools/instagram-mentions" class="text-3xl tracking-[-2px] font-medium underline">{port.name} -></a>
		</div>
		{/each}
	</div>
</div>
<div class="flex flex-col h-screen  items-center justify-center bg-black">
	<img src="https://www.icegif.com/wp-content/uploads/2022/09/icegif-843.gif" width="500">
</div>

<script>
	let portfolio = [
		{
			name:"Instagram Story & Highlight Mentions",
			desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua."
		},
	]
</script>