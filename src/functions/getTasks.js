import api_url from '../constants';

const getTasks= async (req, res) => {
    const response=await fetch(api_url+'/get',{
        method:'GET',
        headers:{
            'Accept':'application/json',
        }
    })
    console.log(response);
    return await response.json();
}


export default getTasks;