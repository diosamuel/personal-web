<div class="flex flex-row h-screen bg-black text-white">
	<div class="w-8/12 md:p-5 md:pt-20 pt-[50%] pl-5">
		<h1 class="md:text-[5em] text-4xl font-extrabold tracking-[-3px] leading-tight">Hello!, I'm Virdio Samuel</h1>
		<div class="flex flex-col">
			<a href="#portfolio" class="bg-orange-500 text-black font-bold p-2 hover:bg-orange-600"><button class="mt-5">Portfolio</button></a>
			<a href="#contact" class="bg-blue-700 text-white font-bold p-2 hover:bg-blue-800"><button class="mt-5">Contact</button></a>
		</div>
	</div>
	<div class="w-6/12">
		<img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=410&q=80" class="w-full h-screen object-cover saturate-0">
	</div>
</div>



<div class="flex flex-col h-screen" id="portfolio">
	<h1 class="text-2xl font-bold tracking-[-1px] text-black-500 bg-orange-500">
		<marquee>
		{#each [1,2,3,4,5,6,7,8,9,0] as item}
			<span>{@html {}}*Portfolio*</span>
		{/each}
		</marquee>
	</h1>

	<div class="m-10 flex flex-row">
		{#each portfolio as port}
		<div class="pt-4">
			<a href="/tools/instagram-mentions" class="text-3xl tracking-[-2px] font-medium underline">{port.name}</a>
		</div>
		{/each}
	</div>
</div>

<div class="flex flex-col h-screen items-center justify-center bg-black text-white" id="contact">
	<img src="https://www.icegif.com/wp-content/uploads/2022/09/icegif-843.gif" width="300">
	<div class="mt-5">
		<p><a href="https://github.com/diosamuel" class="underline">github</a></p>
	</div>
</div>

<script>
	let portfolio = [
		{
			name:"Instagram Story & Highlight Mentions",
			desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua."
		},
	]
</script>