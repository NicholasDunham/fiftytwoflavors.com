"use client";
import formatDate from "./formatDate";
import type { Post } from "contentlayer/generated";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <article className="w-full xl:w-1/2">
      <div>
        <Link href={post.url} prefetch>
          <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            {post.title}
          </h3>
          <p className="text-base font-medium leading-6 text-teal-500">
            {formatDate(post.date)}
          </p>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">
            {post.abstract}
          </p>
        </Link>
      </div>
    </article>
  );
}
