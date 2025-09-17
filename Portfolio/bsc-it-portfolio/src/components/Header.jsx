import React from "react";


const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
