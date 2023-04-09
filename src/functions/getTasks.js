const getTasks= async (req, res) => {
    const response=await fetch('https://qgkcnbpjm4.execute-api.us-east-1.amazonaws.com/todotest/get',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    console.log(response);
    return await response.json();
}


export default getTasks;