import axios from "axios";

export const getData = async () => {
  try {
    const URL = 'https://picsum.photos/v2/list?page=2&limit=100'
    const { data } = await axios.get(URL);
    return data
    
  } catch (error) {
    console.log(error);
    
  }
}