import Icons from "../icons/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  deletePostFetch,
  likePostFetch,
  savePostFetch,
  newCommentFetch,
} from "../../services/posts";
import { deletePostStore } from "../../store/posts/posts";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../../plugins/toast//toast.js";
import { userIdStore } from "../../store/userInformation/userIngormation";
import {
  deleteUserProfilePostsWhenUserIsINProfilePage,
  addCommentToPtofilePosts,
} from "../../store/profileUserInformation";
import { addCommentToCurrentPost } from "../../store/posts/posts";
import { useEffect } from "react";
import FormTextArea from "../forms/FormTeaxArea.jsx";
import { motion, AnimatePresence } from "framer-motion";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
export default function post({
  classes,
  title,
  description,
  author,
  postId,
  likes,
  comments,
}) {
  const dispatch = useDispatch();
  const userId = useSelector(userIdStore);
  const [showMoreVert, setShowMoreVert] = useState(false);
  const [postLikes, setPostLikes] = useState([]);
  const [isCommentsOpen, setIsCommetsopen] = useState(false);
  const [commentBody, setCommentBody] = useState();
  const combinedClass = `flex flex-col my-4 shadow-lg p-4 ${classes}`;
  const toggleShowMoreVert = () => {
    setShowMoreVert((current) => !current);
  };
  const deletePost = () => {
    const data = deletePostFetch({ postId });
    if (data) {
      dispatch(deletePostStore({ postId }));
      dispatch(deleteUserProfilePostsWhenUserIsINProfilePage({ postId }));
      notify("پست با موفقیت حذف شد", "warning");
    }
  };
  const likePost = async () => {
    const isUserLikedPost = postLikes.includes(userId);
    if (isUserLikedPost)
      return notify("شما قبلا این پست را لایک کرده اید", "warning");

    const data = await likePostFetch({ postId });
    if (data) {
      setPostLikes((current) => [userId, ...current]);
      console.log(postLikes);
    }
  };
  const savePost = async () => {
    const data = await savePostFetch({ postId });
    if (data) {
    }
  };

  const newComment = async () => {
    const data = await newCommentFetch({ postId, commentBody });
    if (data) {
      dispatch(addCommentToCurrentPost({ postId, comment: data }));
      dispatch(addCommentToPtofilePosts({ postId, comment: data }));
    }
  };
  const refuseComment = () => {
    setCommentBody("");
    setIsCommetsopen(false);
  };
  useEffect(() => {
    setPostLikes(likes);
  }, []);
  return (
    <div className={combinedClass}>
      <div className="flex flex-col justify-between gap-5 text-xs sm:text-base">
        <div className="flex justify-between">
          <div className="flex sm:flex-row flex-col items-start sm:items-center gap-3">
            <Link to={`/profile/${author.userName}`}>
              <img
                src={`${baseProfileUrl}${author.profile}`}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>
            <p className=" text-sm  sm:text-lg">{`${author.firstName} ${author.lastName}`}</p>
            <p className="text-xs">5 دقیقه قبل</p>
          </div>
          <div className="relative">
            <div
              onClick={toggleShowMoreVert}
              className="hover:bg-gray-100 p-1 rounded-full duration-150"
            >
              <Icons iconName="MoreVert" />
            </div>
            {showMoreVert ? (
              <div
                className="flex flex-col absolute w-32 bg-white top-full translate-x-1/2 rounded-lg shadow-xl overflow-hidden"
                onClick={toggleShowMoreVert}
              >
                {userId !== author._id ? (
                  <div
                    className="postItem p-4 text-xs hover:bg-slate-100 duration-200"
                    onClick={savePost}
                  >
                    ذخیره کردن{" "}
                  </div>
                ) : null}
                {userId !== author._id ? (
                  <div className="postItem p-4 text-xs hover:bg-slate-100 duration-200">
                    آنفالو
                  </div>
                ) : null}
                {userId === author._id ? (
                  <div className="postItem p-4 text-xs hover:bg-slate-100 duration-200">
                    ویرایش
                  </div>
                ) : null}
                {userId === author._id ? (
                  <div
                    className="postItem p-4 text-xs hover:bg-slate-100 duration-200"
                    onClick={deletePost}
                  >
                    حذف
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="postText">
          <p className="text-md sm:text-lg ">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div className="postImage rounded-md overflow-hidden">
          <img src="/assets/post/1.jpeg" />
        </div>
        <div className="flex flex-col  sm:flex-row justify-between items-center">
          <div className="flex flex-col  sm:flex-row items-center gap-3">
            <img
              className="w-10 h-10 cursor-pointer"
              src="/assets/like.png"
              onClick={likePost}
            />
            <img className="w-10 h-10 cursor-pointer" src="/assets/heart.png" />
            <p className="text-xs">
              {postLikes.length} نفر این پست را لایک کردند
            </p>
          </div>
          <motion.div
            className="text-sm cursor-pointer"
            onClick={() => {
              setIsCommetsopen(!isCommentsOpen);
            }}
            whileHover={{ color: "#123456" }}
          >
            {comments.length} کامنت
          </motion.div>
        </div>
        <AnimatePresence>
        {isCommentsOpen && (
          <motion.div className="flex flex-col gap-3 overflow-hidden origin-top" initial={{height : 0}} animate={{height : isCommentsOpen ? "auto" : 0 }} exit={{height : 0}}>
            <div className="flex flex-col gap-3">
              <FormTextArea
                title="کامنت بگذارید"
                id="comment"
                formValue={commentBody}
                updateFormValue={setCommentBody}
              />
              <div className="flex gap-2 mr-auto">
                <button
                  className="px-3 py-2 bg-green-600 text-white rounded-lg"
                  onClick={newComment}
                >
                  ثبت نظر
                </button>
                <button
                  className="px-3 py-2 bg-red-600 text-white rounded-lg"
                  onClick={refuseComment}
                >
                  انصراف
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2  p-5">
              {comments.map((comment, index) => (
                <div
                  className="w-full p-3 bg-gray-200 rounded-lg flex flex-col gap-3"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full"
                        src={`${baseProfileUrl}${comment.profile}`}
                      />
                    </div>
                    <p>
                      {comment.firstName} {comment.lastName}
                    </p>
                  </div>
                  <div className="p-2 bg-white rounded-md">
                    <p>{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
}
