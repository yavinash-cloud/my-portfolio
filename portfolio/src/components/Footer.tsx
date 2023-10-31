import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full mx-auto py-4 flex justify-center items-center bg-gray-900 text-white md:text-lg text-sm font-bold h-10 bottom-0">
      Baked with ❤️ by Avinash Yadav ©️{currentYear}
    </div>
  );
};

export default React.memo(Footer);
