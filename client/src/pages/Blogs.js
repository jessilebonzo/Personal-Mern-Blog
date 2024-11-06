import React from 'react'
import { useParams } from "react-router-dom";
import blogContent from './blog-content';

import Blog from "../components/Blog";

const Blogs = () => {
  const { name } = useParams();
  const blog = blogContent.find((blog) => blog.name === name);

  if(!blog) return <h1>Article does not exists</h1>;
  const otherArticles = blogContent.filter(blog => blog.name !== name);
  return (
      <>
      <h1 className="sm:text-2xl text-2xl font-bold my-6 text-gray-900">
        {blog.title}
      </h1>
      {blog.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-1xl text-xl font-bold my-4 text-gray-900">
        Explore More
      </h1>
      <div className="flex flex-wrap -m-4">
        <Blog blogs={otherArticles} />
      </div>
    </>
  )
}

export default Blogs
