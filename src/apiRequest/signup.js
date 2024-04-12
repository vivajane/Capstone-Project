// export const Signup = async (data) => {
//     console.log(data);
//     try{
//         const response = await fetch ("https://agrolink.onrender.com/register", {
//             method : "POST",
//             headers: {
//                 'Content-Type': 'application/json,'
//             },
//             body: JSON.stringify(data),
//         });
//         const dataResponse = await response.json();
//         console.log("yyyyyy", dataResponse);
//         return dataResponse;



//     } catch(error){
//         console.log(error);
//     }

// }


import axios from "axios";
// export const signUpAction = async (data) => {
//       return await axios.post(
//         "https://agrolink.onrender.com/register",
//         data
//       );
//   };
export const signUpAction = async (data) => {
  const response = await axios.post(
      "https://agrolink.onrender.com/register",
      data
  );
  return response;
};