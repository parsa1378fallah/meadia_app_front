import axios from "./axios";

export async function createPostFetch({
  description = "",
  title = "",
  userId = "",
}) {
  try {
    const token = localStorage.getItem("social_medai_key");
    const response = await axios.post(
      "/posts",
      {
        title,
        description,
        userId,
      },
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    return response.data.data.post;
  } catch (error) {
    console.log(error);
  }
}

export async function getPostsFetch() {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.get("/posts", {
      headers: {
        "x-auth-token": token,
        "content-type": "application/json",
      },
    });
    return response.data.data.posts;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePostFetch({ postId }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.delete(`/posts/${postId}`, {
      headers: {
        "x-auth-token": token,
        "content-type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function likePostFetch({ postId }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.post(
      `/posts/like`,
      { postId },
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function savePostFetch({ postId }) {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.post(
      `/posts/save`,
      { postId },
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSavedPostsFetch() {
  const token = localStorage.getItem("social_medai_key");
  try {
    const response = await axios.get(
      `/user/posts/saved`,
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.data.posts;
  } catch (error) {
    console.log(error);
  }
}

export async function newCommentFetch({postId , commentBody}) {
  const token = localStorage.getItem("social_medai_key");
  console.log(commentBody)
  try {
    const response = await axios.post(
      `/posts/comment`,
      {postId , commentBody},
      {
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    console.log(response.data.data.comment  ,"fuck");
    return response.data.data.comment;
  } catch (error) {
    console.log(error, "comment error");
  }
}

