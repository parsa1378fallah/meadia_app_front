import Feed from "../../components/feed/Feed.jsx";
import RightBar from "../../components/rightbar/RightBar.jsx";
function Home() {
  return (
    <div className="flex flex-row ">
      <Feed classes={"basis-full sm:basis-3/4"} />
      <RightBar classes={"hidden sm:flex sm:basis-1/4"} />
    </div>
  );
}

export default Home;
