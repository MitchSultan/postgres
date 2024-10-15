import React from 'react'

export default function Partners() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900">Partnered with the best.</h2>
          </div>

          <div className="grid items-center grid-cols-2 gap-10 mt-12 md:grid-cols-4 sm:gap-y-16">
            <div>
              <a href="https://www.hostpinnacle.co.ke/clients/aff.php?aff=1314" target="_blank" rel="noopener noreferrer">
                <img className="object-contain w-auto mx-auto h-14" src="https://www.hostpinnacle.co.ke/wp-content/uploads/2018/10/logo21.png" alt="" />
              </a>
            </div>

            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png" alt="" />
            </div>

            <div>
              <img className="object-contain w-auto h-10 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png" alt="" />
            </div>

            <div>
              <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
