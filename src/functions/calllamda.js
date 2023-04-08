const api=async (data)=>{
    const response=await fetch('https://qgkcnbpjm4.execute-api.us-east-1.amazonaws.com/todotest/create',{
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