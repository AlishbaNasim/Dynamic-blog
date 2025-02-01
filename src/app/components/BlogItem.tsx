import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";

type Post = {
  title: string,
  summary: string,
  image: any,
  slug: string,
};

export default function BlogItem({ post }: { post: Post }) {
  return (
    <div className="max-w-md mx-auto my-5 ">
      <section className="flex flex-col justify-between h-[500px] rounded-xl bg-white dark:bg-dark shadow-lg hover:shadow-xl group hover:scale-105 transition-transform ease-out duration-500">
        {/* Image Section */}
        <div className="relative flex-1">
          <Image
            src={urlForImage(post.image)}
            alt={post.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between flex-1 p-6">
          <h2 className="text-xl font-semibold text-teal-700 dark:text-teal-300 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 line-clamp-3">
            {post.summary}
          </p>

          {/* Read More Button */}
          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-block px-6 py-2 text-center bg-teal-600 text-white font-medium rounded hover:bg-teal-500 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </section>
    </div>
  );
}
