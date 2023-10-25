import Share from "../share/Share.jsx";
import Post from "../post/post.jsx";
import { useSelector } from "react-redux";
import { postsStore } from "../../store/posts/posts.js";
import { useParams } from "react-router-dom";
import {
  postsProfileStore,
  firstNameProfileStore,
  lastNameProfileStore,
  profilePhotoStore,
  userNameProfileStore,
  userIdProfileStore,
} from "../../store/profileUserInformation/index.js";
import { AnimatePresence, motion } from "framer-motion";
export default function feed({ classes }) {
  const posts = useSelector(postsStore);

  const postsOfPerofile = useSelector(postsProfileStore);
  const firstNameProfile = useSelector(firstNameProfileStore);
  const lastNameProfile = useSelector(lastNameProfileStore);
  const profilePhoto = useSelector(profilePhotoStore);
  const userNameProfile = useSelector(userNameProfileStore);
  const userIdProfile = useSelector(userIdProfileStore);
  const authorForProfile = {
    firstName: firstNameProfile,
    lastName: lastNameProfile,
    profile: profilePhoto,
    userName: userNameProfile,
    _id: userIdProfile,
  };

  const { userName } = useParams();
  const shareIcons = [
    { icon: "PermMedia", value: "خوراکی" },
    { icon: "Label", value: "گفتگو ها" },
    { icon: "Room", value: "ویدئو ها" },
    { icon: "EmojiEmotions", value: "گروه ها" },
  ];

  return (
    <div className={`p-4 z-10 ${classes}`}>
      <Share icons={shareIcons} />
      <AnimatePresence>
        {userName
          ? postsOfPerofile.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Post
                  postId={item._id}
                  title={item.title}
                  description={item.description}
                  author={authorForProfile}
                  likes={item.likedBy}
                  comments={item.comments}
                />
              </motion.div>
            ))
          : posts.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, type: "easeInOut" }}
                exit={{ opacity: 0 }}
              >
                <Post
                  postId={item._id}
                  title={item.title}
                  description={item.description}
                  author={item.author}
                  likes={item.likedBy}
                  comments={item.comments}
                />
              </motion.div>
            ))}
      </AnimatePresence>
    </div>
  );
}
