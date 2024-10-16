'use client'
import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSkillsDropdownOpen, setIsSkillsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSkillsDropdown = () => {
    setIsSkillsDropdownOpen(!isSkillsDropdownOpen);
    setIsResourcesDropdownOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsSkillsDropdownOpen(false);
  };

  return (
    <div>
        <header>
    
    <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between h-16 lg:h-20">
                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                    <a href="/" title="" className="text-base font-medium text-black"> Home </a>

                    <div className="relative">
                      <button onClick={toggleSkillsDropdown} className="text-base font-medium text-black focus:outline-none">
                        Skills
                      </button>
                      {isSkillsDropdownOpen && (
                        <div className="absolute z-10 w-96 py-2 mt-2 bg-white rounded-md shadow-xl">
                          <a href="/skills/make-money-online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Make Money Online</a>
                          <a href="/skills/crypto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cryptocurrencies</a>
                          <a href="/skills/stocks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investing</a>
                          <a href="/skills/content" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blogging</a>
                          <a href="/skills/gold" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Precious Metals</a>
                          <a href="/skills/sales" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Funnel</a>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button onClick={toggleResourcesDropdown} className="text-base font-medium text-black focus:outline-none">
                        Resources
                      </button>
                      {isResourcesDropdownOpen && (
                        <div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                          <a href="/resources/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tutorials</a>
                          <a href="/resources/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Courses</a>
                          <a href="/resources/ebooks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">E-books</a>
                          <a href="/resources/tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tools</a>
                        </div>
                      )}
                    </div>

                    <a href="/blog" title="" className="text-base font-medium text-black"> Blog </a>
                </div>

                <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                    <div className="flex-shrink-0">
                        <a href="/" title="" className="flex">
                            <img className="w-48 h-8 my-auto scale-100 lg:h-24" src="/images/logo.svg" alt="" />
                        </a>
                    </div>
                </div>

                <button type="button" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>

                <button
                  type="button"
                  className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:space-x-10">
                    <a href="https://1050cf.myshopify.com/" title="" className="text-base font-medium text-black"> Shop </a>

                    <a href="/subscribe" title="" className="text-base font-medium text-black"> Subscribe </a>

                    <a href="/cart" title="" className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    </div>

    {isMenuOpen && (
      <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <div className="flex flex-col space-y-2">
              <a href="/" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Home </a>

              <button onClick={toggleSkillsDropdown} className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 text-left">
                Skills
              </button>
              {isSkillsDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <a href="/skills/make-money-online" className="block py-2 text-sm text-gray-700">Make Money Online</a>
                  <a href="/skills/crypto" className="block py-2 text-sm text-gray-700">Cryptocurrencies</a>
                  <a href="/skills/stocks" className="block py-2 text-sm text-gray-700">Investing</a>
                  <a href="/skills/content" className="block py-2 text-sm text-gray-700">Blogging</a>
                  <a href="/skills/gold" className="block py-2 text-sm text-gray-700">Precious Metals</a>
                  <a href="/skills/sales" className="block py-2 text-sm text-gray-700">Sales Funnel</a>
                </div>
              )}

              <button onClick={toggleResourcesDropdown} className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600 text-left">
                Resources
              </button>
              {isResourcesDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <a href="/resources/tutorials" className="block py-2 text-sm text-gray-700">Tutorials</a>
                  <a href="/resources/courses" className="block py-2 text-sm text-gray-700">Courses</a>
                  <a href="/resources/ebooks" className="block py-2 text-sm text-gray-700">E-books</a>
                  <a href="/resources/tools" className="block py-2 text-sm text-gray-700">Tools</a>
                   
                </div>
              )}

              <a href="/blog" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Blog </a>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex flex-col space-y-2">
                    <a href="/shop" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Shop </a>

                    <a href="/subscribe" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Subscribe </a>
            </div>
          </div>
        </div>
      </nav>
    )}
</header>

    </div>
  )
}
