import Dvider from "../dvider/Dvider.jsx";
import ShareIcons from "./ShartIcons.jsx";
import { useSelector } from "react-redux";
import { firstName } from "../../store/userInformation/userIngormation";
import { useState, useRef } from "react";
import CreatePostModal from "../modals/createPost.jsx";
import { profileStore } from "../../store/userInformation/userIngormation";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
export default function share({ icons }) {
  const firstNameStore = useSelector(firstName);
  const profile = useSelector(profileStore);
  const [postDescription, setPostDescription] = useState("");
  const createPoastModal = useRef();
  async function createPost() {
    createPoastModal.current.showModal();
  }
  return (
    <div className="w-full  rounded-lg shadow-lg bg-white px-3 pt-8 pb-10 text-xs sm:text-base">
      <div className="flex gap-3">
        <input
          type="text"
          className="outline-none focus:outline-none border-none w-full"
          placeholder={`چی تو ذهنته ${firstNameStore} ...`}
          onChange={(e) => {
            setPostDescription(e.target.value);
          }}
        />
        <img
          src={`${baseProfileUrl}${profile}`}
          className="w-10 h-10 rounded-full hidden sm:flex"
        />
      </div>
      <Dvider classes={"bg-gray-400 my-4"} />
      <div className="flex gap-4 items-center justify-center flex-wrap ">
        <ShareIcons icons={icons} />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
          onClick={createPost}
        >
          پست جدید
        </button>
      </div>
      <CreatePostModal ref={createPoastModal} />
    </div>
  );
}
