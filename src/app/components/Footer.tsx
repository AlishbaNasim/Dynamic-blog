import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
      <footer className="bg-teal-700 text-white py-8">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} CodeQueen	&apos;s Hub. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link href="/blog" className="hover:underline transition duration-300">
              Blog
            </Link>
            <Link href="/about" className="hover:underline transition duration-300">
              About
            </Link>
            <Link href="/contact" className="hover:underline transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer