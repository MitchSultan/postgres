// This is a placeholder function. In a real application, you'd fetch data from an API or database.
export async function getPostBySlug(slug) {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 100))
  
    // This is mock data. Replace with actual data fetching logic.
    const posts = {
      'my-first-post': {
        title: 'My First Post',
        content: '<p>This is the content of my first post.</p>'
      },
      'another-post': {
        title: 'Another Post',
        content: '<p>This is another post.</p>'
      }
    }
  
    return posts[slug] || null
  }