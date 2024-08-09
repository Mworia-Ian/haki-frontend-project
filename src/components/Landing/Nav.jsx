import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#091A7A] w-screen">
      <h1 className="w-full text-3xl font-bold text-[#91F2D9] pl-7"><a href="#">Haki</a></h1>
      <ul className="flex text-[#CBD4F4] pr-7">
        <li className="p-4"><a href="#">About</a></li>
        <li className="p-4"><a href="#">Services</a></li>
        <li className="p-4"><a href="#">Subscribe</a></li>
        <li className="p-4"><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Nav;
