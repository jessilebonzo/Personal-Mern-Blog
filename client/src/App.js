import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogsList from './pages/BlogsList';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import NotFound from './pages/NotFound';


// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs-list" element={<BlogsList />} />
          <Route path="/blog/:name" element={<Blogs />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
