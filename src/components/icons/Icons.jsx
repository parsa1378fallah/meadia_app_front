import {
  Search,
  Person,
  Notifications,
  Chat,
  RssFeed,
  PlayCircleFilled,
  Groups,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  PermMedia , 
  Label , 
  Room ,
  EmojiEmotions,
  MoreVert , 
  Upload , 
  PostAdd , 
  Menu , 
  Close
} from "@mui/icons-material";
export default function ({ iconName, iconClass, badgeText }) {
  if (iconName === "Person")
    return (
      <div className="relative">
        <Person className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Search")
    return (
      <div className="relative">
        <Search className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Notifications")
    return (
      <div className="relative">
        <Notifications className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Chat")
    return (
      <div className="relative">
        <Chat className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "RssFeed")
    return (
      <div className="relative">
        <RssFeed className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "PlayCircleFilled")
    return (
      <div className="relative">
        <PlayCircleFilled className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Groups")
    return (
      <div className="relative">
        <Groups className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Bookmarks")
    return (
      <div className="relative">
        <Bookmarks className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "HelpOutline")
    return (
      <div className="relative">
        <HelpOutline className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "WorkOutline")
    return (
      <div className="relative">
        <WorkOutline className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "Event")
    return (
      <div className="relative">
        <Event className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
  else if (iconName === "School")
    return (
      <div className="relative">
        <School className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "PermMedia")
    return (
      <div className="relative">
        <PermMedia className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "Label")
    return (
      <div className="relative">
        <Label className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "Room")
    return (
      <div className="relative">
        <Room className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "EmojiEmotions")
    return (
      <div className="relative">
        <EmojiEmotions className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "MoreVert")
    return (
      <div className="relative">
        <MoreVert className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "Upload")
    return (
      <div className="relative">
        <Upload className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "PostAdd")
    return (
      <div className="relative">
        <PostAdd className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "Menu")
    return (
      <div className="relative">
        <Menu className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
    else if (iconName === "Close")
    return (
      <div className="relative">
        <Close className={iconClass} />
        {badgeText ? <div className="absolute w-5 h-5 rounded-full bg-red-600 text-white flex justify-center items-center -top-2 -right-2 text-sm">
          {badgeText}
        </div> : null}
      </div>
    );
}
