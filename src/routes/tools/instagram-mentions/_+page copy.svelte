<script type="text/javascript">
import { browser } from '$app/environment'
  /** @type {import('./$types').PageData} */
  export let data;
  /** @type {import('./$types').ActionData} */
  export let form;

function salinHasil() {

  if(form.success){
    let text = ""
    form.users.forEach(user=>{
      let { username, full_name, pk } = user
      console.log(user)
      text+=`@${username} - ${full_name?full_name:''}\n`
    })
    console.log(text)
    navigator.clipboard.writeText(text);
    alert("Copied the text:");
  }

  // Alert the copied text
}
</script>

<nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="/" class="flex items-center">
    <img src="../long-logo.png" width="150">
  </a>
  </div>
</nav>

<div class="flex flex-col items-center justify-center text-center">

  <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 pb-10 w-full">
    <h1 class="lg:text-4xl text-xl md:mb-[1em] mb-[2em] mt-[4em] font-bold text-white">Find Hidden Tags - Instagram <u>Story</u> & <u>Highlights</u></h1>
    <form method="POST" class="mt-5 w-full">
      <div class="flex flex-row items-center justify-center">
      <input type="url" class="bg-gray-100 rounded-full p-3 w-[20em] md:w-[30em]" placeholder="Story or Highlight link..." name="story" required>
      <button class="bg-red-500 text-center p-2 text-white shadow-md rounded-full absolute translate-x-[8.5em] md:translate-x-[13.5em]" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
    </form>
  </div>

  
  <div class="mt-16 m-2" id="result">
    {#if form?.success}
    <h1 class="text-2xl font-bold mb-5">{form.users.length} people tagged!</h1>
    <button class="bg-fuchsia-700 text-white p-2 pr-4 pl-4 rounded-lg" on:click={salinHasil}>Copy</button>
    <div class="flex flex-col lg:flex-row gap-2 flex-wrap">
      {#each form.users as user}
      <div class="rounded flex flex-row items-center justify-center p-5 mb-2 shadow-md hover:bg-gradient-to-r from-violet-100 to-fuchsia-100">
        <!-- <img src={user.profile_pic_base64 || '../default.png'} width="100" class="rounded-lg"> -->
        <div class="">
          <a href={"https://instagram.com/"+user.username} target="__blank" class="text-xl font-bold break-all text-purple-600">@{user.username}</a>
          <h1 class="font-medium break-all text-gray-600">{user.full_name || ""}</h1>
          <div class="text-lg mt-2 text-gray-600">
            <h1><b>{user.follower || 'privat'}</b> Follower</h1>
            <h1><b>{user.following || 'privat'}</b> Following</h1>
          </div>
        </div>
      </div>
      {/each}
    </div>
    {:else}
      {#if form?.msg}
      <div class="p-10 bg-fuchsia-100 border-2 border-fuchsia-400 text-left">
        <h1 class="text-xl font-bold">Error: Please Try Again</h1>
        <hr class="border-dotted border-black" />
        <p class="mt-5 font-bold">Kindly review the following:</p>
        <ul class="text-gray-800 list-disc">
            <li class="p-1 font-bold">Ensure the account is not set to private.</li>
            <li class="p-1">Confirm that the link starts with <u>https://instagram.com</u>.</li>
            <li class="p-1">Verify that the Story or Highlight has not been deleted.</li>
            <li class="p-1">Lastly, be aware that there is an issue with our server.</li>
        </ul>
      </div>
      {/if}
    {/if}
  </div>
</div>

<div class="text-center bg-fuchsia-100">
<h1 class="text-xl p-5 font-bold mt-5 mb-5"></h1>

<div class="flex flex-col lg:flex-row items-center justify-center text-center">
  <div class="p-4 m-2">
    <img src="../option.jpg" class="w-[15em] md:w-56 h-[100%] rounded-lg border-2 border-fuchsia-400" />
    <p class="break-all pl-2 text-lg mt-2 font-semibold">Pilih ikon titik 3</p>
  </div>
  <div class="p-4 m-2">
    <img src="../option2.jpg" class="w-[15em]  md:w-56 h-[100%] rounded-lg border-2 border-fuchsia-400" />
    <p class="break-all pl-2 text-lg mt-2 font-semibold">Klik kalimat berwarna <span class="text-blue-600">biru</span></p>
  </div>
  <div class="p-4 m-2">
    <img src="../option3.jpg" class="w-[15em]  md:w-56 h-[100%] rounded-lg border-2 border-fuchsia-400" />
    <p class="break-all pl-2 text-lg mt-2 font-semibold">Klik copy/salin link</p>
  </div>
  <div class="p-4 m-2">
    <p class="font-semibold">Terakhir, paste/tempel ke <a href="#" class="p-2 bg-fuchsia-300">input</a> diatas</p>
  </div>

</div>

<div class="p-5 bg-fuchsia-400">
    <p class="font-bold text-white">Made with 😂 <a href="https://diosamuel.netlify.app" class="underline">diosamuel</a></p>
</div>

</div>
