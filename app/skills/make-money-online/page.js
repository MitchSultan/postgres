import React from 'react'
import Navbar from '../../components/Navbar'
import makeMoney from '../../components/makeMoney'
import Footer from '../../components/footer'

export default function page() {
  return (
    <div>
        <Navbar />
        <makeMoney/>
        <Footer />
    </div>
  )
}
