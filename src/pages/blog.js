import React from "react";
import Layout from "../components/layout"; // Assuming you have a Layout component
import { Link } from "gatsby";
import "../assets/css/blogList.css"; // Assuming you are using separate CSS file for styling

const blogPosts = [
  {
    title: "The Ultimate Wedding Band Guide",
    excerpt:
      "Planning your wedding day includes creating a magical musical atmosphere. Our Ultimate Wedding Band Guide is here to help you navigate through options, ensuring your musical backdrop is as perfect as your love story.",
    imageUrl: "/path-to-your-image-1.jpg",
    blogUrl: "/the-ultimate-wedding-band-guide",
  },
  {
    title: "Post Title 2",
    excerpt: "This is a short description of the second blog post...",
    imageUrl: "/path-to-your-image-2.jpg",
    blogUrl: "/blog/post-2",
  },
  // Add more blog posts here...
];

const BlogList = () => {
  return (
    <Layout>
      <h1>Check out our blog</h1>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-item">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={post.blogUrl} className="blog-link">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogList;
