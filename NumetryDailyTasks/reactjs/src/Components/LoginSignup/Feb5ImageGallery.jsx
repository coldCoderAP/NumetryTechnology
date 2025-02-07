import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import "../Css/Feb5ImageGallery.css"

const images = [
  { id: 1, src: require("../images/Nature1.jpeg"), category: "Nature" },
  { id: 2, src:  require("../images/Nature2.jpeg"), category: "Nature" },
  { id: 3, src:  require("../images/Tech2.avif"), category: "Technology" },
  { id: 4, src:  require("../images/Art1.jpeg"), category: "Technology" },
  { id: 5, src: require("../images/Art2.jpg"), category: "Art" },
  { id: 6, src: require("../images/Tech1.avif"), category: "Art" },
];

export default function ProductShowcase() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1-hour countdown
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-6 grid gap-8">
      {/* Product Card */}
{/* 
      <div class="cards" style={{ display: "flex", flexDirection: "column" }}
      >

     
      <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
        <motion.img
          src={require("../images/book.jpeg")}
          alt="Product"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          />
        <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
          <h3 className="text-lg font-bold">Amazing Product</h3>
          <p>$29.99</p>
          <motion.button
            className="mt-2 bg-blue-500 px-4 py-2 rounded text-white"
            whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}
            >
            Buy Now
          </motion.button>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
        <motion.img
          src={require("../images/book3.jpeg")}
          alt="Product"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          />
        <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
          <h3 className="text-lg font-bold">Amazing Product</h3>
          <p>$29.99</p>
          <motion.button
            className="mt-2 bg-blue-500 px-4 py-2 rounded text-white"
            whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}
            >
            Buy Now
          </motion.button>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
        <motion.img
          src={require("../images/book2.jpeg")}
          alt="Product"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          />
        <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
          <h3 className="text-lg font-bold">Amazing Product</h3>
          <p>$29.99</p>
          <motion.button
            className="mt-2 bg-blue-500 px-4 py-2 rounded text-white"
            whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}
            >
            Buy Now
          </motion.button>
        </CardContent>
      </Card>
       </div> */}

<div className="cards" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
 
  
  
  <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
    <motion.img src={require("../images/book.jpeg")} alt="Product" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} />
    <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
      <h3 className="text-lg font-bold">Amazing Product</h3>
      <p>$29.99</p>
      <motion.button className="mt-2 bg-blue-500 px-4 py-2 rounded text-white" whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}>Buy Now</motion.button>
    </CardContent>
  </Card>
  

  <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
    <motion.img src={require("../images/book3.jpeg")} alt="Product" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} />
    <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
      <h3 className="text-lg font-bold">Amazing Product</h3>
      <p>$29.99</p>
      <motion.button className="mt-2 bg-blue-500 px-4 py-2 rounded text-white" whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}>Buy Now</motion.button>
    </CardContent>
  </Card>
 
 

  <Card className="relative overflow-hidden w-64 h-80 shadow-lg">
    <motion.img src={require("../images/book2.jpeg")} alt="Product" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} />
    <CardContent className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-4">
      <h3 className="text-lg font-bold">Amazing Product</h3>
      <p>$29.99</p>
      <motion.button className="mt-2 bg-blue-500 px-4 py-2 rounded text-white" whileHover={{ backgroundColor: "#2563eb", scale: 1.1 }}>Buy Now</motion.button>
    </CardContent>
  </Card>
 
</div>


      {/* Countdown Timer */}
      <div className="text-center p-4 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Sale Ends In:</h3>
        <p className="text-2xl font-bold">{formatTime(timeLeft)}</p>
      </div>


      {/* Image Gallery with Filters */}
    
      <div>
        <h1>Image Gallery</h1>
        <div className="flex gap-4 mb-4">
          {["All", "Nature", "Technology", "Art"].map((category) => (
            <Button key={category} onClick={() => setFilter(category)}>
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {images
            .filter((img) => filter === "All" || img.category === filter)
            .map((img) => (
              <motion.img
                key={img.id}
                src={img.src}
                alt={img.category}
                className="w-full h-32 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
