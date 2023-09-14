import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto flex flex-row">
        <div className="flex justify-start  max-w-xs ">
          <a href="/">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Monogram-AKY-Logo-Design-Graphics-3386280-1.jpg"
              alt="Home"
            />
          </a>
        </div>
        <div className="flex justify-around">
          <a href="/about">about</a>
          <a href="/contact">contact</a>
          <a href="/projects">projects</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
