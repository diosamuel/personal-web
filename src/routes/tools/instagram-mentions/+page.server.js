/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookie, request}) => {
    const data = await request.formData();
    let reels = data.get("story")
    try{
    let _fetching = await fetch('https://chatdosen.my.id/',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({reels})
    })

    let result = await _fetching.json()
    console.log(result)
    return result
    
  }catch(err){

    console.log(err)
    return {success:false,msg:'Server error!'}
  }

  }
};