import { useEffect } from "react";
import { getSavedPostsFetch } from "../../services/posts";
import { useDispatch } from "react-redux";
import { setSavedPosts } from "../../store/userInformation/userIngormation";

function getSavedPostsDataHook() {
  const dispatch = useDispatch();
  async function getSavedPosts() {
    const posts = await getSavedPostsFetch();
    if (posts) {
       console.log(posts.posts)
      dispatch(setSavedPosts({ posts }));
    }
  }
  useEffect(() => {
    getSavedPosts();
  }, []);
  return getSavedPosts;
}

export default getSavedPostsDataHook;
