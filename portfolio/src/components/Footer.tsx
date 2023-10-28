import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-white flex h-10 justify-center items-center z-10 lg:text-lg text-xs">
      Baked with ❤️ by Avinash Yadav ©️{currentYear}
    </div>
  );
};

export default Footer;
