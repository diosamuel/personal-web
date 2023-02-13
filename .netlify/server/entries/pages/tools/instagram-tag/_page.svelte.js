import { c as create_ssr_component, e as escape, d as add_attribute, f as each } from "../../../../chunks/index.js";
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<nav class="${"bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200"}"><div class="${"container flex flex-wrap items-center justify-between mx-auto"}"><a href="${"/"}" class="${"flex items-center"}"><span class="${"self-center text-xl font-semibold whitespace-nowrap"}"><svg width="${"18"}" height="${"18"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}"><rect width="${"24"}" height="${"24"}" stroke="${"none"}" fill="${"#000000"}" opacity="${"0"}"></rect><g transform="${"matrix(0.91 0 0 0.91 12 12)"}"><path style="${"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"}" transform="${" translate(-15.01, -15)"}" d="${"M 19.980469 3.9902344 C 19.72067037618049 3.997975535874743 19.474090604386607 4.1065547057164276 19.292969 4.2929688 L 9.2929688 14.292969 C 8.902600737853088 14.683498808445279 8.902600737853088 15.316501191554721 9.2929688 15.707031 L 19.292969 25.707031 C 19.54378557313715 25.968271794792877 19.916235992218144 26.07350663500295 20.26667805152247 25.982149810984033 C 20.617120110826793 25.89079298696512 20.89079298696512 25.617120110826793 20.982149810984033 25.26667805152247 C 21.07350663500295 24.916235992218144 20.968271794792877 24.54378557313715 20.707031 24.292969 L 11.414062 15 L 20.707031 5.7070312 C 21.00279138203425 5.419539844341691 21.091719755203744 4.97996529943312 20.930965587636003 4.60011851351951 C 20.770211420068257 4.220271727605899 20.392752465942692 3.9780759926381157 19.980469 3.9902344 z"}" stroke-linecap="${"round"}"></path></g></svg></span>
    Home
  </a>
  <div class="${"flex md:order-2"}"><a type="${"button"}" class="${"text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"}" href="${"/tools/instagram-tag/about"}">Ini apa?</a></div></div></nav>

<div class="${"flex flex-col items-center justify-center text-center"}"><h1 class="${"lg:text-4xl text-3xl tracking-[-2px] mb-2 mt-[6em] font-bold"}"><b>Dia nge-tag siapa sih??</b></h1>
  <form method="${"POST"}" class="${"mt-5 w-full"}"><div class="${"flex flex-row items-center justify-center"}"><input type="${"url"}" class="${"border-2 rounded-full p-3 w-[20em]"}" placeholder="${"Link story nya..."}" name="${"story"}" required>
    <button class="${"bg-indigo-700 text-center p-2 text-white shadow-md rounded-full absolute translate-x-[8.5em]"}" type="${"submit"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg></button></div></form>
  
  <div class="${"mt-16"}">
    ${form?.success ? `<h1 class="${"text-1xl"}">storynya <b>@${escape(form.username)}</b> nge-tag <span class="${"font-bold"}">${escape(form.users.length)} orang</span> tuh</h1>
    <div class="${"flex border-2 m-2 bg-indigo-500 text-white p-3 rounded-lg shadow-sm mb-4"}"><img${add_attribute("src", form.pic, 0)} class="${"rounded-lg w-[5em] h-[5em]"}">
      <h1 class="${"text-2xl text-right flex-1"}"><span class="${"font-bold"}"><a${add_attribute("href", "https://instagram.com/" + form.username, 0)} target="${"__blank"}">@${escape(form.username)}</a>
        </span><br>
        <span class="${"text-lg"}">${escape(form.fullname)}</span>
        <div class="${"text-lg"}"><h1><b>${escape(form.follower || "privat")}</b> Follower</h1>
          <h1><b>${escape(form.following || "privat")}</b> Following</h1></div></h1></div>

      ${each(form.users, (user) => {
    return `<div class="${"flex border-2 m-2 p-3 rounded-lg shadow-sm mb-4 hover:border-indigo-700"}"><img${add_attribute("src", user.pic || "../default.jpg", 0)} class="${"rounded-lg w-[5em] h-[5em]"}">
        <h1 class="${"text-2xl pl-2 text-right flex-1"}"><span class="${"font-bold"}"><a${add_attribute("href", "https://instagram.com/" + user.username, 0)} target="${"__blank"}">@${escape(user.username)}</a></span><br>
          <span class="${"text-lg"}">${escape(user.fullname)}</span>
          <div class="${"text-lg"}"><h1><b>${escape(user.follower || "privat")}</b> Follower</h1>
            <h1><b>${escape(user.following || "privat")}</b> Following</h1>
          </div></h1>
      </div>`;
  })}` : `<div>${form?.msg ? `<h1 class="${"text-xl border-red-200 border-2 rounded-lg bg-red-100 p-2 text-red-700 font-medium"}">${escape(form.msg)}</h1>` : ``}</div>`}</div></div>`;
});
export {
  Page as default
};
