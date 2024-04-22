import axios from "axios";

export const getCategory = async() => {
   
        const response = await axios.get("https://agrolink.onrender.com/categories")
        return response

    
}

