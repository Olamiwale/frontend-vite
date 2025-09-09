import React from "react";

export default function Users() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">User Login</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Username</label>
            <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Enter your username" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Enter your password" />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
}