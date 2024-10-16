import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import ResourcePage from '../components/resourcePage'

export default function page() {
  return (
    <div>
        <Navbar />
        <ResourcePage />
        <Footer />
    </div>
  )
}
