import api_url from '../constants';

const api=async (data)=>{


    console.log("form data from the form: "+data)
    const response=await fetch(api_url+'/create',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    console.log(response);
    return await response.json();
}

export default api;