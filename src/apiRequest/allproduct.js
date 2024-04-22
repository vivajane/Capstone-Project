import axios from "axios";

export const allProduct = async () => {
   
        const response = await axios.get("https://agrolink.onrender.com/products")
        return response;

   
}