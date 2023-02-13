const actions = {
  default: async ({ cookie, request }) => {
    const data = await request.formData();
    let story = data.get("story");
    try {
      let _fetching = await fetch("https://chatdosen.my.id/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ story })
      });
      let result = await _fetching.json();
      return result;
    } catch (err) {
      console.log(err);
      return { msg: "Something went error" };
    }
  }
};
export {
  actions
};
