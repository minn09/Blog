import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/pages/Header";
import { Footer } from "@/pages/Footer";
import { Home } from "@/Home";
import { Posts } from "@/pages/Posts";
import { About } from "@/pages/About";
import { BlogAdmin } from "@/pages/BlogAdmin";

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<BlogAdmin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
