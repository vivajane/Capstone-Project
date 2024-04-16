
import axios from "axios";
export const signUpAction = async (data) => {
  const response = await axios.post(
      "https://agrolink.onrender.com/register",
      data
  );
  return response;
};