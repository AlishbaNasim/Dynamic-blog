import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* About Section */}
      <section className="bg-teal-50 py-16 px-4 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-700">About CodeQueen&apos;s Blog Hub</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Welcome to CodeQueen&apos;s Blog Hub – your go-to platform for exploring the latest trends, tools, and insights in the world of technology. Our mission is to empower developers, tech enthusiasts, and learners by providing them with engaging, informative content.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Highlight Cards */}
          <div className="bg-white shadow-md rounded p-6 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-teal-700">Emerging Technologies</h4>
            <p className="text-gray-700 mt-2">
              Explore AI, blockchain, quantum computing, and more cutting-edge advancements.
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-teal-700">Development Tips</h4>
            <p className="text-gray-700 mt-2">
              From mastering Next.js to responsive design, find tips to enhance your skills.
            </p>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center transform hover:scale-105 hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-bold text-teal-700">Career Insights</h4>
            <p className="text-gray-700 mt-2">
              Learn how to build your portfolio, transition into tech, and land top jobs in 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal-700">
            Join Us on the Journey to Tech Excellence
          </h3>
          <p className="text-gray-700 mt-4">
            Stay ahead in the tech world by diving into our blogs filled with innovation and creativity.
          </p>
          <Link href="/blog" className="mt-8 inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-500 transform hover:scale-105 transition duration-300">
            Explore Our Blogs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
