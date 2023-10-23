import { useState, useEffect } from "react";
import { searchbarFetch } from "../../services/search";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const baseProfileUrl = import.meta.env.VITE_Image_Base_URL;
export default function Searchbar({ classes }) {
  const navigate = useNavigate();
  const [searchbar, setSearchbar] = useState("");
  const [searchbarItems, setSearchbarItems] = useState([]);
  const [focus, setFocus] = useState(false);
  const searchbarElement = useRef(null);
  const updateSearchBar = async () => {
    if (!searchbar) {
      setSearchbarItems([]);

      return;
    }
    const data = await searchbarFetch({ key: searchbar });
    setSearchbarItems(data);
  };
  const handleSearchbarItems = (userName) => {
    navigate(`/profile/${userName}`);
  };
  useEffect(() => {
    function calback(e) {
      if (e.target === searchbarElement.current) setFocus(true);
      else setFocus(false);
    }
    document.addEventListener("click", calback);
  }, []);
  useEffect(() => {
    updateSearchBar();
  }, [searchbar]);
  return (
    <div className={`w-full relative searchbar ${classes}`}>
      <input
        className="searchbar w-full  pl-5 pr-9 py-2 rounded-2xl border outline-none focus:outline-none text-sm"
        type="text"
        placeholder="جستجو در دوستان و پست ها و ویدئو ها ..."
        value={searchbar}
        ref={searchbarElement}
        onChange={(e) => {
          setSearchbar(e.target.value);
        }}
      />
      {searchbarItems && focus ? (
        <div className="absolute top-full w-full bg-white z-50 ">
          {searchbarItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-10 flex items-center px-4 py-3 border gap-4 cursor-pointer"
              onClick={() => {
                handleSearchbarItems(item.userName);
              }}
            >
              <div>
                <img
                  src={`${baseProfileUrl}${item.profile}`}
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="flex gap-1">
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
