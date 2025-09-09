import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-50">
     
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 flex flex-col items-center text-white mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Welcome to ShopEase</h1>
        <p className="text-lg md:text-xl mb-6 text-center max-w-2xl">Discover the best deals on electronics, fashion, and more. Shop with confidence and enjoy fast delivery!</p>
        <Link to="/products" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Shop Now</Link>
      </div>

    
      <div className="justify-center flex w-full px-4">
       
        
         
           
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt='background image' className="w-[600px] h-100 object-cover rounded mb-4" />
         
        

       

      </div>

      {/* Call to Action */}
      <div className="w-full bg-white py-12 mt-16 flex flex-col items-center border-t">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Sign up for exclusive offers!</h3>
        <p className="mb-4 text-gray-600">Get the latest updates and deals straight to your inbox.</p>
        <form className="flex flex-col md:flex-row gap-2">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 border rounded focus:outline-none" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
