import axios from "./axios";

export async function searchbarFetch({ key }) {
    const token = localStorage.getItem("social_medai_key");
    try {
      const response = await axios.get(`search/${key}`,{
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      });
      return response.data.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  