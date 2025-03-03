function Home() {
    return (
      <div className="home">
        <div className="banner">
          <h1>Welcome to Flipkart</h1>
          <p>Best deals, top brands, and amazing discounts!</p>
        </div>
  
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <p>Product 1</p>
            <button>Buy Now</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <p>Product 2</p>
            <button>Buy Now</button>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <p>Product 3</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  