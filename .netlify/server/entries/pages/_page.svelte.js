import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col items-center justify-center text-center h-screen m-5"}"><h1 class="${"text-6xl font-bold tracking-[-5px] mb-5 border-b-2"}">in development</h1>

	<div><a type="${"button"}" class="${"text-white bg-black focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"}" href="${"https://github.com/diosamuel"}">Github</a>
		<a type="${"button"}" class="${"text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"}" href="${"/tools/instagram-tag/"}">Dia nge-tag siapa sih?</a></div></div>`;
});
export {
  Page as default
};
