import React from 'react'
import "../globals.css"

export default function front() {
  return (
    <div className="relative overflow-hidden h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-gradient-xy"></div>
        <div className="absolute inset-0 cursor-ripple"></div>
        <section className="relative pt-10 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Real skills are here to help you build your future.</h2>
                    <p className="mt-6 text-lg text-gray-100">Investing, Crypto, Retirement, Side Hustles, Make Money Online (and so much more!)</p>
                    <a href="/contact" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-blue-600 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:bg-gray-100" role="button">
                        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Want to learn?
                    </a>
                </div>
            </div>

            {/* <div className="container mx-auto 2xl:px-12">
                <img className="w-full mt-6" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" alt="" />
            </div> */}
        </section>
    </div>
  )
}
