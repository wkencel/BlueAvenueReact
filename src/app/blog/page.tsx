import type { Metadata } from 'next'
import Link from 'next/link'
import '@/assets/css/blogList.css'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Wedding planning tips, music guides, and insights from Blue Avenue Groove - NYC premier wedding band.',
  alternates: {
    canonical: 'https://www.blueavemusic.io/blog/',
  },
}

const blogPosts = [
  {
    title: 'The Ultimate Wedding Band Guide',
    excerpt:
      'Planning your wedding day includes creating a magical musical atmosphere. Our Ultimate Wedding Band Guide is here to help you navigate through options, ensuring your musical backdrop is as perfect as your love story.',
    imageUrl: '/images/blogImages/weddingbandAI_img1.webp',
    blogUrl: '/the-ultimate-wedding-band-guide',
  },
  {
    title: 'next post coming soon',
    excerpt: 'Stay tuned for our next blog post...',
  },
]

export default function BlogPage() {
  return (
    <div id="wrapper" className="page">
      <div>
        <h1 style={{ textAlign: 'center' }}>Check out our blog</h1>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <div>
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="blog-image"
                  />
                ) : null}
              </div>
              <div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                {post.blogUrl ? (
                  <Link href={post.blogUrl} className="blog-link">
                    Read More
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
