import Home from "./components/Home";
import ArticleContent from "./components/ArticleContent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/:id" element={<ArticleContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
