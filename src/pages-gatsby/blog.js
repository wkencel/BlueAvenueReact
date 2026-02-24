import React from "react";
import Layout from "../components/layout"; // Assuming you have a Layout component
import { Link } from "gatsby";
import "../assets/css/blogList.css"; // Assuming you are using separate CSS file for styling
import AIWeddingImage from "../assets/images/blogImages/weddingbandAI_img1.webp";

const blogPosts = [
  {
    title: "The Ultimate Wedding Band Guide",
    excerpt:
      "Planning your wedding day includes creating a magical musical atmosphere. Our Ultimate Wedding Band Guide is here to help you navigate through options, ensuring your musical backdrop is as perfect as your love story.",
    imageUrl: AIWeddingImage,
    blogUrl: "/the-ultimate-wedding-band-guide",
  },
  {
    title: "next post coming soon",
    excerpt: "Stay tuned for our next blog post...",
  },
];

const BlogList = () => {
  return (
    <Layout>
      <h1 style={{ "text-align": "center" }}>Check out our blog</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <>
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
                  <Link to={post.blogUrl} className="blog-link">
                    Read More
                  </Link>
                ) : null}
              </div>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default BlogList;
