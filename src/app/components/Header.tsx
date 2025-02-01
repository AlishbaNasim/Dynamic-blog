import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold text-teal-600">CodeQueen	&apos;s Hub</h1>
    <nav className="space-x-4 font-semibold hidden md:flex">
      <Link href="/" className="text-gray-600 hover:text-teal-600 transition duration-300">
        Home
      </Link>
      <Link href="/blog" className="text-gray-600 hover:text-teal-600 transition duration-300">
        Blog
      </Link>
      <Link href="/about" className="text-gray-600 hover:text-teal-600 transition duration-300">
        About
      </Link>
      <Link href="/contact" className="text-gray-600 hover:text-teal-600 transition duration-300">
        Contact
      </Link>
    </nav>
    <Link href="/blog" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transform hover:scale-105 transition duration-300">
       Get Started
    </Link>
  </div>
  )
}

export default Header