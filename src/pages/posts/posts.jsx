import GetSavedPostsHook from "../../hooks/getSavedPosts/GetSavedPostsHook.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { useDispatch } from "react-redux";
import { savedPostsStore } from "../../store/userInformation/userIngormation.js";
import Post from "../../components/post/post.jsx";
import {
  userIdStore,
  profileStore,
} from "../../store/userInformation/userIngormation.js";
import { followUserFetch, unFollowUserFetch } from "../../services/user.js";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
function Posts() {
  const dispatch = useDispatch();
  const profile = useSelector(profileStore);
  const savedPosts = useSelector(savedPostsStore);
  GetSavedPostsHook();

  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col">
        <div className="w-full h-80 relative">
          <img
            src="/assets/post/3.jpeg"
            className="absolute w-full h-full top-0 left-0 "
          />
          <img
            src={`${baseProfileUrl}${profile}`}
            className="absolute w-40 h-40 rounded-full top-full left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-4 outline-white"
          />
        </div>
        <div className="p-5 rounded-3xl overflow-hidden">
          {savedPosts.map((item, index) => (
            <div key={index}>
              <Post
                postId={item._id}
                title={item.title}
                description={item.description}
                author={item.author}
                likes={item.likedBy}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
