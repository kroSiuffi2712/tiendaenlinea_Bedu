import React from 'react';

const Header = () => {
  return <header className="border-b border-gray-300 py-6 bg-white">
    <div className="container mx-auto max-w-screen-lg">
      <div className="flex justify-between align-center">
        <p className="font-semibold text-lg text-center">Bedu SWAG</p>
        <div>
          <ul className="flex">
            <li className="mr-2">
              <a href="/signup" className="text-sm px-4 py-2 rounded bg-purple-600 text-white">Sign Up</a>
            </li>
            <li className="mr-2">
              <a href="/login" className="text-sm px-4 py-2 rounded bg-white hover:bg-gray-300 text-black border border-gray-400">Login</a>
            </li>
            <li className="mr-2">
              <a href="/products" className="text-sm px-4 py-2 rounded bg-white hover:bg-gray-300 text-black border border-gray-400">Products</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>;
}

export default Header;
