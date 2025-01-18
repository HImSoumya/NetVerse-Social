import Post from "../postcard/Post";
import Share from "../shared/Share";

export default function Feed() {
  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="flex-[5.5]"
    >
      <div className="p-6">
        <Share />
        <Post/>
        <Post/> 
      </div>
    </div>
  );
}
