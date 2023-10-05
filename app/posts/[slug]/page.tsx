import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import formatDate from "@/components/formatDate";
import Recipe from "@/components/Recipe";
import fs from "fs";

const mdxComponents: MDXComponents = {
  Recipe,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  /*
  console.log("/posts/" + params.slug + ".recipe.ts");

  if (fs.existsSync("@posts/" + params.slug + "recipe.ts")) {
    console.log("recipe.ts exists");
  } else {
    console.log("recipe.ts does not exist");
  }
  */

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {formatDate(post.date)}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
