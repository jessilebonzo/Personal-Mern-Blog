import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import articleContent from './article-content';
// Pages
import NotFound from "./NotFound";
// Components
import Articles from "../components/Articles";
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentFrom';

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`)
      const body = await result.json()
      setArticleInfo(body)
      console.log(body)
    }
    fetchData();
  }, [name]
);
  
  if(!article) return <NotFound />;
  const otherArticles = articleContent.filter(article => article.name !== name);
  return (
      <>
      <h1 className="sm:text-2xl text-2xl font-bold my-3 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-3" key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className="sm:text-xl text-xl font-bold my-3 text-gray-500">
        Explore More
      </h1>
      <div className="flex items-center flex-wrap">
        <Articles articles={otherArticles} />
      </div>
    </>
  )
}

export default Article
