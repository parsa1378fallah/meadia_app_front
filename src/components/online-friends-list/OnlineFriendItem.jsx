export default function onlineFriendItem({ item }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      <div className="relative">
        <img src={item.imageUrl} className="w-10 h-10 rounded-full" />
        <div className="absolute top-0 -right-2 w-3 h-3 rounded-full bg-green-400 outline  outline-neutral-200 outline-3"></div>
      </div>
      <p>{item.name}</p>
    </div>
  );
}
