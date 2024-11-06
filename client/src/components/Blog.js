import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blogs }) => {
  return (
  <>
    {blogs.map((blog, index) => (
      <div key={index} className="p-4 w-full">
        <div className="h-full bg-gray-800 p-8 rounded-md">
        <Link key={index} to={`/blog/${blog.name}`}>
        <h3 className="text-lg font-medium text-white mb-3">{blog.title}</h3>
        </Link>
          <p className="leading-relaxed text-gray-300 mb-3">
            {blog.content[0].substring(0, 110)}...
          </p>
          <div className="text-gray-500 text-sm">
            <span>Published Date: {blog.date}</span>
            <div className="flex item-center flex-wrap">
              <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/blog/${blog.name}`}>View More</Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
  );
};

export default Blog;
