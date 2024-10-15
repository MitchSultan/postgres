import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import BlogPage from '../components/blogPage'

export default function page() {
  return (
    <div>
        <Navbar />
        <BlogPage />
        <Footer />
    </div>
  )
}
