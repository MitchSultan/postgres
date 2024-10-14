import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Front from './components/front'
import Skills from './components/skills'
import About from './components/about'
import Partners from './components/partners'
import CTA from './components/cta'
import Footer from './components/footer'

export default function home() {
  return (
    <div>
      <Navbar />
      <Front />
      <Skills />
      <About />
      <Partners />
      <Hero />
      <CTA />
      <Footer />
    </div>
  )
}
