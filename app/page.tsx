import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => {
    return (
      <li key="{post.slug}">
        <h2>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>
      </li>
    );
  });

  return (
    <>
      <h1>My Blog</h1>
      <ul>{postPreviews}</ul>
    </>
  );
};

export default HomePage;
