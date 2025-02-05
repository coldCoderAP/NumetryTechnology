import { useState, useEffect } from "react";

const CountdownTimer = ({ initialMinutes = 10 }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(initialMinutes * 60);
    }
    
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, initialMinutes]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-64 bg-white hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-bold">Sale Ends In:</h2>
      <p className="text-2xl font-mono mt-2 text-red-600 font-bold">{formatTime(timeLeft)}</p>
    </div>
  );
};


const product = {
    name: "Cool Sneakers",
    description: "Limited edition sneakers with ultimate comfort.",
    price: 99.99,
    image:require("../images/book.jpeg"),
  };

const ProductCard = ({ product }) => {
  return (
    <div className="relative group w-72 bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold text-red-600 mt-2">${product.price}</p>
        <button className="w-full mt-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { CountdownTimer, ProductCard };
