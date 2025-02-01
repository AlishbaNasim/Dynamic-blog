const contact = () => {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
        <section className="bg-teal-50 py-16 px-4 w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-700">Get in Touch</h2>
            <p className="text-gray-700 mt-4">
              We	&apos;d love to hear from you! Fill out the form below to contact us.
            </p>
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
  
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500 transform hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default contact;
  