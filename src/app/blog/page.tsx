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
    title: 'How to Choose a Wedding Band in NYC',
    excerpt:
      'New York has more wedding bands than any city in the country. Here\'s what actually matters when you\'re making this decision — from reading demos to asking the right questions to knowing what to budget.',
    imageUrl: '/images/blogImages/weddingbandAI_img1.webp',
    blogUrl: '/how-to-choose-a-wedding-band-nyc',
  },
  {
    title: 'The Ultimate Wedding Band Guide',
    excerpt:
      'Most couples spend hours on flowers and 15 minutes on music, but music is what people actually remember. Our guide covers everything from live band vs. DJ to how the night should flow.',
    imageUrl: '/images/blogImages/the-ultimate-wedding-band-guide_img1.webp',
    blogUrl: '/the-ultimate-wedding-band-guide',
  },
]

export default function BlogPage() {
  return (
    <div id="wrapper" className="page">
      <div className="page-panel">
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
                    loading="lazy"
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
