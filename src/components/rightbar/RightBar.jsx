import OnlineFriendsItems from "../online-friends-list/OnlineFriendsItems";

export default function rightbar({ classes }) {
  const combinedClass = `flex flex-col gap-4 text-xs sm:text-base px-3 ${classes}`;
  const onlineFriendItems = [
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
    { imageUrl: "/assets/person/2.jpeg", name: "رسول سلیمی" },
  ];
  return (
    <div className={combinedClass}>
      <div className="flex flex-col sm:flex-row gap-2 w-full mt-4">
        <img src="/assets/gift.png" className="w-10 h-10" />
        <div className="w-full">
          <p>سامان فدایی و 4 نفر دیگر امروز تولدشان است.</p>
        </div>
      </div>
      <div className="imageRightbar p-2 rounded-lg relative">
        <img src="/assets/ad.png" className="rounded-lg" />
      </div>
      <OnlineFriendsItems items={onlineFriendItems} />
    </div>
  );
}
