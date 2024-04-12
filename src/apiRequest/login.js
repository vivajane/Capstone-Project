
import axios from "axios";
export const signInAction = async (data) => {
  // const userfarmer = localStorage.getItem("userType");
  // console.log(data);
  
 

    try {
      const res = await axios.post(
        "https://agrolink.onrender.com/signin",
        data
      );
      return res
      // console.log(res?.data?.message[0]?.id, "this is it");
      // const customerId = res?.data?.message[0]?.id;
      // localStorage.setItem("customers_id", customerId);
    } catch (error) {
      console.log("test", error);
    }
   
  };