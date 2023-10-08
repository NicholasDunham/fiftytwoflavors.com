"use client";
import formatDate from "./formatDate";
import type { Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <div className="w-full xl:w-1/2">
      <article className="border-2 rounded-md m-2 p-1 shadow-sm">
        <Link href={post.url} prefetch>
          <h3 className="text-xl leading-8 text-gray-900 dark:text-gray-200">
            {post.title}
          </h3>
          <p className="text-sm italic leading-6 text-gray-500">
            {formatDate(post.date)}
          </p>
          <p className="prose max-w-none text-gray-600 dark:text-gray-300">
            {post.abstract}
          </p>
        </Link>
      </article>
    </div>
  );
}
