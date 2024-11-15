import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className='sm:text-1xl text-xl font-bold my-6 text-gray-600 '>
        Comments:
      </h3>
      {comments.map((comment, index) => (
        <div key={index} className='mb-6'>
          <h4 className='text-md font-bold text-gray-700'>{comment.username}</h4>
          <p className='mt-1 mb-4 text-gray-600'>{comment.text}</p>
        </div>
      ))}
    </>
  );
};

export default CommentsList;
