import Feed from "../../components/feed/Feed.jsx";
import RightBar from "../../components/rightbar/RightBar.jsx";
function Home() {
  return (
    <div className="flex flex-row">
      <Feed classes={"basis-3/4"} />
      <RightBar classes={"basis-1/4"} />
    </div>
  );
}

export default Home;
