import React from "react";

// Mock data array
const mockBlogPosts = [
  {
    id: 1,
    title: "How to build wealth in your 20s",
    date: "March 21, 2024",
    excerpt: "Learn the essential steps to start building wealth early in life and set yourself up for financial success.",
    imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg",
  },
  {
    id: 2,
    title: "5 Side Hustles You Can Start Today",
    date: "March 18, 2024",
    excerpt: "Discover five lucrative side hustles that you can start immediately to boost your income.",
    imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg",
  },
  {
    id: 3,
    title: "Crypto 101: What You Need to Know",
    date: "March 15, 2024",
    excerpt: "A beginner's guide to understanding cryptocurrency and how it's shaping the future of finance.",
    imageUrl: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest Blog Posts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Stay updated with our latest insights and stories
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
            {mockBlogPosts.map((post) => (
              <div key={post.id} className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                  <div className="relative">
                    <a href="#" className="block aspect-w-4 aspect-h-3">
                      <img
                        className="object-cover w-full h-full"
                        src={post.imageUrl}
                        alt={`${post.title} image`}
                      />
                    </a>
                  </div>
                  <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {post.date}
                  </span>
                  <p className="mt-5 text-2xl font-semibold">
                    <a href="#" className="text-black hover:text-blue-600">
                      {post.title}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600"
                  >
                    Read More
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
