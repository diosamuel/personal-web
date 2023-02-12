/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookie, request}) => {
    const data = await request.formData();
    let story = data.get("story")
    try{
    let _fetching = await fetch('https://chatdosen.my.id/api/story',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({story})
    })

    // console.log(re)
    let result = await _fetching.json()
    console.log(result)
    return result
  }catch(err){
    console.log(err)
  }
  }
};