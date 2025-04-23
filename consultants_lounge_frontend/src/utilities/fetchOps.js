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
        return response.data; // Directly return the standardized API response {success, message, [content]}
    } 
    catch (error) {
        console.log("error: ", error);
        // Check if there's a response with data
        if (error.response && error.response.data) {
            return error.response.data;
        }
        // If no response data, return a standardized error object
        return {
            success: false,
            message: error.message || "An error occurred while processing your request"
        };
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



