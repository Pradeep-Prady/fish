import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto bg py-40 text-center ">
      <a href="#home" className="text-xl text-white py-5">
        Explore Fish Haven
      </a>
      <h3 className="text-sm text-white pt-5">
        &copy; 2023 Fish Haven. All rights reserved.
      </h3>
      <div className="pt-5 text-white ">
        <i className="text-2xl hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-100 px-5 fa-brands fa-instagram " />
        <i className="text-2xl hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-100 px-5 fa-brands fa-facebook " />
        <i className="text-2xl hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-100 px-5 fa-brands fa-twitter " />
        <i className="text-2xl hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-100 px-5 fa-brands fa-whatsapp " />
      </div>
    </div>
  );
}
