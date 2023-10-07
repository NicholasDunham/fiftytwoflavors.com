import { allPosts } from "contentlayer/generated";
import PostCard from "@/app/components/PostCard";

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <h2 className="text-xl mb-4">Recent posts</h2>
      <div className=" flex flex-wrap ">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
