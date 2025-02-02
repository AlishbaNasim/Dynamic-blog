import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

interface PostParams {
  slug: string;
}

const PostPage = async ({ params: { slug } }: { params: PostParams }) => {
  const query = `*[_type=='post' && slug.current == "${slug}"]{
    summary, title, image, content,
    author->{bio, name, image}
  }[0]`;
  const post = await client.fetch(query);

  return (
    <article className="mt-12 mb-24 px-4 lg:px-20 flex flex-col gap-y-12">
      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl text-center lg:text-6xl font-bold text-gray-800 leading-snug">
        {post.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(post.image)}
        width={1000}
        height={600}
        alt={post.title || "Blog Post"}
        className="rounded-lg text-center shadow-lg"
      />

      {/* Blog Summary Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 uppercase tracking-wide">
          Summary
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-600">
          {post.summary}
        </p>
      </section>

      {/* Author Section */}
      <section className="flex gap-6 items-center">
        <Image
          src={urlForImage(post.author.image)}
          width={100}
          height={100}
          alt={post.author.name}
          className="rounded-full border-2 border-gray-300 shadow-md"
        />
        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800">
            {post.author.name}
          </h3>
          <p className="italic text-sm md:text-base text-gray-500">
            {post.author.bio}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="prose lg:prose-xl max-w-none leading-loose text-gray-800">
        <PortableText value={post.content} />
      </section>
    </article>
  );
};

export default PostPage;
