import axios from "axios"
export const farmerResponse = async (data) => {
    console.log("this is it")
    try{

        const response = await axios.post("https://agrolink.onrender.com/farmData/",
        data,
    );
        console.log(response, "here its is")
       

    }catch(error){
        console.log("this is the error")

    }

}