import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<nav class="${"bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200"}"><div class="${"container flex flex-wrap items-center justify-between mx-auto"}"><a href="${"/"}" class="${"flex items-center"}"><img src="${"../long-logo.png"}" width="${"150"}"></a></div></nav>

<div class="${"flex flex-col items-center justify-center text-center"}"><div class="${"bg-gradient-to-r from-violet-500 to-fuchsia-500 p-5 pb-10 w-full"}"><h1 class="${"lg:text-4xl text-xl md:mb-[1em] mb-[2em] mt-[4em] font-bold text-white"}">Lihat Tag Tersembunyi di Instagram <u>Story</u> &amp; <u>Highlights</u></h1>
    <form method="${"POST"}" class="${"mt-5 w-full"}"><div class="${"flex flex-row items-center justify-center"}"><input type="${"url"}" class="${"bg-gray-100 rounded-full p-3 w-[20em] md:w-[30em]"}" placeholder="${"Link story/highlight.."}" name="${"story"}" required>
      <button class="${"bg-red-500 text-center p-2 text-white shadow-md rounded-full absolute translate-x-[8.5em] md:translate-x-[13.5em]"}" type="${"submit"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg></button></div></form></div>

  
  <div class="${"mt-16 m-2"}">${form?.success ? `<h1 class="${"text-2xl font-bold mb-5"}">${escape(form.users.length)} orang ditag!</h1>

      ${each(form.users, (user) => {
    return `<div class="${"rounded flex flex-row items-center justify-center p-5 mb-2 shadow-md hover:bg-gradient-to-r from-violet-100 to-fuchsia-100"}">
        <div class="${""}"><a${add_attribute("href", "https://instagram.com/" + user.username, 0)} target="${"__blank"}" class="${"text-xl font-bold break-all text-purple-600"}">@${escape(user.username)}</a>
          <h1 class="${"font-medium break-all text-gray-600"}">${escape(user.full_name || "")}</h1>
          <div class="${"text-lg mt-2 text-gray-600"}"><h1><b>${escape(user.follower || "privat")}</b> Follower</h1>
            <h1><b>${escape(user.following || "privat")}</b> Following</h1>
          </div></div>
      </div>`;
  })}` : `${form?.msg ? `<div class="${"p-10 bg-fuchsia-100 border-2 border-fuchsia-400 text-left"}"><h1 class="${"text-xl font-bold"}">Eh? ${escape(form.msg)}</h1>
        <hr class="${"border-dotted border-black"}">
        <button class="${"mt-2 bg-indigo-600 text-white p-2 rounded border border-indigo-800"}">Coba lagi</button>
        <p class="${"mt-5 font-bold"}">Tetap error?, coba perhatikan ini</p>
        <ul class="${"text-gray-800 list-disc"}"><li class="${"p-1 font-bold"}">Pastikan akun tidak privat</li>
          <li class="${"p-1"}">Link harus diawali dengan <u>https://instagram.com</u></li>
          <li class="${"p-1"}">Pastikan story/highlight tidak dihapus</li></ul></div>` : ``}`}</div></div>`;
});
export {
  Page as default
};
