import { useState } from "react";
import Icons from "../../components/icons/Icons";
import { setUserPrfile } from "../../store/userInformation/userIngormation";
import { uploadProfileImageFetch } from "../../services/user";
import { useDispatch } from "react-redux";
function Dashboard() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const submitProfileImage = async (e) => {
    e.preventDefault();
    const formData = { image };
    const data = await uploadProfileImageFetch({ formData });
    if (data) {
      dispatch(setUserPrfile(data));
    }
  };
  return (
    <div className="w-full col-span-9  grid grid-cols-12 p-4">
      <div className="col-span-4 flex flex-col gap-4">
        <p>عکس پروفایل خود را بارگذاری کنید</p>
        <div className="w-40 h-40 relative bg-transparent  border-dotted border-4">
          <input
            type="file"
            accept="image/*"
            className="opacity-0 w-full h-full"
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(image);
            }}
          />
          <div className="absolute w-full h-full top-0 left-0 -z-10 flex flex-col">
            {image ? <img src={URL.createObjectURL(image)} className="w-full h-full"/> : null}
          </div>
        </div>

        <button
          className="w-16 h-8 flex justify-center items-center bg-green-500 rounded-lg"
          onClick={submitProfileImage}
        >
          آپلود
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
