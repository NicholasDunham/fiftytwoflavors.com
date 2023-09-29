import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className=" border border-slate-400 p-4 rounded-md shadow-md bg-white">
        <h2 className="font-bold text-slate-600">{props.title}</h2>
        <p className="text-xs text-slate-400 italic">{props.date}</p>
        <p className="mt-2">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
