import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
      <section className="bg-teal-50 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
            Welcome to CodeQueen's Blog Hub
          </h2>
          <p className="text-gray-700 mt-4">
            Dive into dynamic content, tech tips, and innovative ideas.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/blog" className="bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-500 transform hover:scale-105 transition duration-300">
              Explore Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center text-teal-700">
          Why Choose CodeQueen's Blog?
        </h3>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {/* Feature Cards */}
          <div className="bg-teal-700 shadow-md rounded p-6 w-full sm:w-72 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-white">Dynamic Blogs</h4>
            <p className="text-white mt-2">
              Real-time updates with every click.
            </p>
          </div>
          <div className="bg-teal-700 shadow-md rounded p-6 w-full sm:w-72 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-white">Creative Ideas</h4>
            <p className="text-white  mt-2">
              Fresh content to keep you inspired.
            </p>
          </div>
          <div className="bg-teal-700 shadow-md rounded p-6 w-full sm:w-72 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-white">Tech Savvy</h4>
            <p className="text-white mt-2">
              Stay updated with the latest trends.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonial */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-center text-teal-700">
            Testimonial
          </h3>
          <p className="text-black text-lg  italic">
            "CodeQueen's blogs helped me improve my coding journey!"
          </p>
          <p className="mt-4 text-teal-700 font-bold">– A Happy Reader</p>
          <Link href="/contact" className="mt-8 inline-block bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-500">Subscribe Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
