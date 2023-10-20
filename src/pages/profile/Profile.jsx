import Feed from "../../components/feed/Feed.jsx";
import GetProfileDataHook from "../../hooks/getProfileData/getProfileDataHook.jsx";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { useDispatch } from "react-redux";
import {
  firstNameProfileStore,
  lastNameProfileStore,
  profilePhotoStore,
  userIdProfileStore,
  isFollowingProfileStore,
  setUserProfileFollow,
  setUserProfileUnfollow,
} from "../../store/profileUserInformation/index.js";
import { userIdStore } from "../../store/userInformation/userIngormation.js";
import { followUserFetch, unFollowUserFetch } from "../../services/user.js";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
function Profile() {
  const dispatch = useDispatch();
  const firstNameProfile = useSelector(firstNameProfileStore);
  const lastNameProfile = useSelector(lastNameProfileStore);
  const profilePhoto = useSelector(profilePhotoStore);
  const isFollowingProfile = useSelector(isFollowingProfileStore);
  const userIdProfile = useSelector(userIdProfileStore);
  const userId = useSelector(userIdStore);
  GetProfileDataHook();

  const followUser = async () => {
    const data = await followUserFetch({ userId: userIdProfile });
    if (data) {
      dispatch(setUserProfileFollow());
    }
  };
  const unFollowUser = async () => {
    const data = await unFollowUserFetch({ userId: userIdProfile });
    if (data) {
      dispatch(setUserProfileUnfollow());
    }
  };
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="w-full h-80 relative">
          <img
            src="/assets/post/3.jpeg"
            className="absolute w-full h-full top-0 left-0 "
          />
          <img
            src={`${baseProfileUrl}${profilePhoto}`}
            className="absolute w-40 h-40 rounded-full top-full left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-4 outline-white"
          />
        </div>
        <div className="grid grid-cols-9 mt-20">
          <Feed classes={"col-span-6"} />
          <div className="col-span-3 userInfomation flex flex-col gap-4 p-4 text-xs sm:text-base">
            <p>
              نام : {firstNameProfile} {lastNameProfile}
            </p>
            <p>شهر : ساری</p>
            <p>تحصیلات : لیسانس مهندسی برق</p>
            <p>وضعیت رابطه : سینگل</p>
            <p>شغل : کار در مکدونالد</p>
            {userId !== userIdProfile ? (
              isFollowingProfile ? (
                <button
                  className="px-2 py-3 bg-red-500 rounded-lg text-white"
                  onClick={unFollowUser}
                >
                  آنفالو
                </button>
              ) : (
                <button
                  className="px-2 py-3 bg-green-500 rounded-lg text-white"
                  onClick={followUser}
                >
                  دنبال کردن
                </button>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
