import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'

// Add this import for fetching data
import { getPostBySlug } from '../../../lib/api'

// Change this to an async function
export default async function BlogPost({ params }) {
  // Fetch the post data using the slug
  const post = await getPostBySlug(params.slug)

  // If the post doesn't exist, you might want to handle that case
  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <Navbar />
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Footer />
    </div>
  )
}
