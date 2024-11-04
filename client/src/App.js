import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import ArticlesList from "./pages/Article";
import Article from "./pages/Article";

// Components
import Navbar from './components/Navbar';
import BlogsList from "./pages/BlogsList";
function App() {
  return (
    <Router>
      <Navbar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs-list" element={<BlogsList />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
