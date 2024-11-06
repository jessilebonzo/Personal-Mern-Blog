import React from 'react'

const BlogsList = () => {
  return (
    <div>
      <h1 className="sm:text-3xl text-2xl font-bold my-3 text-gray-500">
        Learnings
      </h1>
      {/* <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogContent.map((blog, index) => ( 
          <div key={index} className="p-4 md:w-1/1">
            <div className="h-full border-2 bg-gray-800 border-opacity-60 rounded-lg
             overflow-hidden">
              <div className="p-5">
              <Link key={index} to={`/blog/${blog.name}`}><h3 className="text-lg font-medium text-white mb-3">{blog.title}</h3>
              </Link>
              <p className="leading-relaxed mb-3 text-white">{blog.content[0].substring(0, 100)}... </p>
              <div className="text-gray-500 text-sm">
              <span>Published Date: {blog.date}</span></div>
              <div className="flex item-center flex-wrap">
                <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/blog/${blog.name}`}>View More</Link>
              </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default BlogsList
