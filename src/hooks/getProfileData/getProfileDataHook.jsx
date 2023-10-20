import { useEffect } from "react";
import { userProfileFetch } from "../../services/user";
import { useDispatch } from "react-redux";
import { setUserProfileInformation } from "../../store/profileUserInformation";
import { useParams } from "react-router-dom";
function GetProfileUserInformation() {
  const dispatch = useDispatch();
  const {userName} = useParams() ; 
  
  async function GetProfile() {
    const user = await userProfileFetch({userName});
    if (user) {
        dispatch(setUserProfileInformation(user))
    }
  }
  useEffect(() => {
    GetProfile();
  }, [userName]);
  return GetProfile;
}

export default GetProfileUserInformation;
