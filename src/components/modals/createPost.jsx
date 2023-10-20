import FormInput from "../forms/FormInput";
import FormTextArea from "../forms/FormTeaxArea";
import { useImperativeHandle, useState } from "react";
import { forwardRef } from "react";
import { createPostFetch } from "../../services/posts";
import { notify } from "../../plugins/toast/toast";
import { useSelector, useDispatch } from "react-redux";
import { userIdStore } from "../../store/userInformation/userIngormation";
import { setNewPost } from "../../store/posts/posts.js";
import { setUserProfilePostsWhenUserIsINProfilePage } from "../../store/profileUserInformation";
import { motion, AnimatePresence } from "framer-motion";
const Modal = forwardRef(function Modal(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      showModal,
    };
  });
  const dispatch = useDispatch();
  const userId = useSelector(userIdStore);
  const [modalSituation, setModalSituation] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createNewPost = async () => {
    const post = await createPostFetch({ title, description, userId });
    if (post) {
      dispatch(setNewPost({ post }));
      dispatch(setUserProfilePostsWhenUserIsINProfilePage({ post }));
      notify("پست با موفقیت ساخته شد", "success");
    }
    setTitle("");
    setDescription("");
    setModalSituation(false);
  };
  const refuseCreateNewPost = () => {
    setTitle("");
    setDescription("");
    setModalSituation(false);
  };
  const showModal = () => {
    setModalSituation(true);
  };
  return (
    <div>
      <AnimatePresence>
        {modalSituation ? (
          <motion.div
            className=" fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="overlay fixed top-0 left-0 w-full h-full bg-slate-500 opacity-80"
              onClick={refuseCreateNewPost}
            ></div>
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              transition={{
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 500,
              }}
              exit={{ y: "100vh"}}
              className="w-1/2 p-10 bg-white rounded-lg flex flex-col gap-4"
            >
              <h1 className=" text-lg">پست جدید</h1>
              <FormInput
                title="تایتل پست"
                id="titlePost"
                formValue={title}
                updateFormValue={setTitle}
              />
              <FormTextArea
                title="متن پست"
                id="descriptionPost"
                formValue={description}
                updateFormValue={setDescription}
              />
              <div className="buttons flex gap-4">
                <button
                  className="bg-green-500 py-2 px-4 rounded-lg"
                  onClick={createNewPost}
                >
                  ارسال
                </button>
                <button
                  className="bg-red-500  py-2 px-4 rounded-lg"
                  onClick={refuseCreateNewPost}
                >
                  انصراف
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
});

export default Modal;
