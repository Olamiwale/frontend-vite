import React from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Smart Watch", price: 149.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Gaming Mouse", price: 39.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Mechanical Keyboard", price: 89.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "4K Monitor", price: 299.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "USB-C Hub", price: 24.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Portable SSD", price: 129.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Noise Cancelling Earbuds", price: 79.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Fitness Tracker", price: 59.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Smartphone Stand", price: 14.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Wireless Charger", price: 34.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Action Camera", price: 199.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "VR Headset", price: 249.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Drone", price: 399.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Smart Light Bulb", price: 19.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Robot Vacuum", price: 299.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Streaming Stick", price: 49.99, image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Laptop Sleeve", price: 25.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Tablet", price: 229.99, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
];

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="mb-2 w-32 h-32 object-cover" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
 