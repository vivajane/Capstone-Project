
import axios from "axios";
export const signInAction = async (data) => {
  const userfarmer = localStorage.getItem("userType");
  console.log(data);
 

    try {
      const res = await axios.post(
        "https://agrolink.onrender.com/signin",
        data
      );
      console.log(res);
    } catch (error) {
      console.log("test", error);
    }
   
  };