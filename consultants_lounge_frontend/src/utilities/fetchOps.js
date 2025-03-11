import axios from 'axios';

export const putData = async (url, payload) => {
  try 
  {
    axios.defaults.withCredentials = true;
    const response = await axios.put(url, payload? payload : {}, { withCredentials: true })
    console.log(response)
    return {data: response.data}
  } 
  catch (error) 
  {
    console.log(error)
    const message = error.response.data.error
    return {submissionError: message }
  }
}

export const deleteData = async (url)=>{
  try{
    axios.defaults.withCredentials = true;
    const response = await axios.delete(url, {withCredentials: true})
    console.log(response)
    return {data: response.data}
  }
  catch(error){
    console.log(error)
    const message = error.response.data.error
    return {submissionError: message }
  }
}

export const postData = async (url, payload) => {
  try {
    axios.defaults.withCredentials = true;
    const response = await axios.post(url, payload || {}, { withCredentials: true });

    console.log("response: \n", response);
    return response.data; // Directly return the standardized API response
  } 
  catch (error) {
    console.log("error: ", error);
    return error.response?.data || { success: false, message: "Unknown error occurred" };
  }
};


export const getData = async (url)=>{
  
  try{
    axios.defaults.withCredentials = true;
    const response = await axios.get(url, {withCredentials: true})
    console.log(response)
    return {data: response.data}
  }
  catch(error){
    console.log(error)
    const message = error.response.data.error
    return {submissionError: message }
  }
}



