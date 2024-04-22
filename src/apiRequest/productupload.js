import axios from "axios";

export const uploadProduct = async () => {
   
    const response = await axios.post("https://agrolink.onrender.com/productUpload")
    return response;


}