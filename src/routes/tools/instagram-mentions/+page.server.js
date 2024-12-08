/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ cookie, request}) => {
    const data = await request.formData();
    let reels = data.get("story")
    try{
    let _fetching = await fetch('http://localhost:3000/',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({reels})
    })

    let result = await _fetching.json()
    return result
    
  }catch(err){

    console.log(err)
    return {success:false,msg:'Server error!'}
  }

  }
};