import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-green-500 min-h-[5vh] flex flex-col justify-center items-center ">
      <div className="font-bold">
        <span>&lt;</span>
        <span className="text-white">Hush</span>
        <span>Key</span>
        <span>&#47; &gt;</span>
      </div>
      <div className="text-white flex justify-center items-center ">
        <span>Created with</span>
        <span>
          <lord-icon
            src="https://cdn.lordicon.com/gbkitytd.json"
            trigger="hover"
            colors="primary:#e83a30"
          ></lord-icon>
        </span>
        <span>By Suryansh</span>
      </div>
    </div>
  );
};

export default Footer;
