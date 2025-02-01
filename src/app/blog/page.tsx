import { client } from '@/sanity/lib/client'
import BlogItem from '@/app/components/BlogItem'
import Link from 'next/link'
type Post = {
  title: string,
  summary: string,
  image: any,
  slug: string
}
async function page() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  summary,title,image,
    "slug":slug.current
}`

  const posts: Post[] = await client.fetch(query)
  // console.log(posts)
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-teal-50 py-12">
        <h1 className="mt-5 text-3xl font-extrabold text-teal-700 dark:text-teal-300 uppercase text-center sm:text-2xl lg:text-5xl tracking-wide">
          Welcome to Our Blog
        </h1>
        <p className="mt-6 text-lg text-center text-gray-700 dark:text-gray-400 sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
        Master the art of coding with us—exploring one language, one innovation at a time    
           </p>
        <div className="mt-8 flex justify-center">
           <Link href="/about">
           <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded shadow-md hover:bg-teal-500 hover:shadow-lg transition duration-300">
           Explore Now
          </button>
          </Link>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-9 my-12">
        {
          posts.map((post: Post) => (
            <BlogItem post={post} key={post.slug} />
          ))
        }
      </section>
    </main>

  )
}

export default page