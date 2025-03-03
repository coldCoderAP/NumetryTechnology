import React from "react";
import Users from "./components/Users";  
import Header from "./components/Header";  
import Footer from "./components/Footer";

 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
// import Products from "./Products";

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<about />} />
            {/* <Route path="/products" element={<Products />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
