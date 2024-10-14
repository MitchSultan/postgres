import React from "react";

export default function about() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Start your Own Passive Income Generating Machine... So you will
              Never Have To Worry About Losing your 9-5 "Security" Again.{" "}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="/images/sales.jpeg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Then it hit me: <br />
                  <br />
                  
                  I'd allowed myself to become complacent, which put me in a bad
                  position, but the good news?<br /> I'd developed 8 years of
                  marketing experience and made a ton of money... For other
                  companies and entrepreneurs.
                </p>

                <p>
                  I resolved right then and there to strike out on my own and
                  start a blog that explored my passions that would also build a
                  recurring passive income machine for myself via affiliate
                  marketing and infoproduct sales, and that's exactly what I
                  did. I distilled all my years of content marketing experience,
                  launched this site, and haven't looked back... and it's been a
                  crazy ride. I want to help you do exactly the same thing, and
                  while it won't be easy - it wasn't for me - the opportunity is
                  massive:{" "}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
