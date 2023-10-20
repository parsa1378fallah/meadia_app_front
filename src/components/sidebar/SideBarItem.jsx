import Icons from "../icons/Icons";
import { useNavigate } from "react-router-dom";
export default function sidebarItem({value , icon , path}) {
  const navigate = useNavigate()
  return (
  <div className="flex gap-4 px-3 py-4 border-b hover:shadow-xl duration-150 cursor-pointer" onClick={()=>{navigate(`${path}`)}}>
    <Icons iconName={icon} />
    {value}
  </div>
  );
}
