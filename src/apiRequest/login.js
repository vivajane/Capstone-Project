
import axios from "axios";
export const signInAction = async (data) => {
    try {
      const res = await axios.post(
        "https://agrolink.onrender.com/signin",
        data
      );
      return res
    } catch (error) {
      console.log("test", error);
    }
   
  };