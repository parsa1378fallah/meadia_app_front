import axios from "./axios";

export async function userFetch() {
  try {
    let res = await axios.get("/user");
    console.log(res, "this is a message");
  } catch (error) {
    console.log("this is a error");
    return error.response.status;
  }
}

export async function userProfileFetch({ userName }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.get(`user/${userName}`, {
      headers: {
        "x-auth-token": token,
        "content-type": "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function followUserFetch({ userId }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.post(
      "/user/follow",
      { userId },
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function unFollowUserFetch({ userId }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.post(
      "/user/unfollow",
      { userId },
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadProfileImageFetch({formData}){
  const token = localStorage.getItem("social_medai_key");
  try{
    const response = await axios.post(
      "http://localhost:3000/api/user/upload-profile-image",
      formData,
      {
        headers: {
          "x-auth-token": token,
          "content-type": "multipart/form-data",
        },
      }
    );
    return response.data.data
  }catch(error){
    console.log(error)
  }
}