import React, { useState } from "react";
import { IoMenu, IoHome } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsChatRightDots } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Images/logo.gif";


function Header({hideChatBot,setHideChatBot}) {
  const [menuOpen, setMenuOpen] = useState(false);

  //setHideChatBot
  const handleChatBotHide =  ()=>{
    setHideChatBot(()=>!hideChatBot);
  }
  return (
    <header className="sticky top-0 w-full text-white bg-gray-900 z-50 shadow-md border-b-1">

      {/* Main header container */}
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-4 py-3">
          <Link to="/" className="font-serif text-[1.3rem] font-[900] text-indigo-500 hover:text-indigo-600">
          Insightify
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[1.7rem] text-indigo-500 focus:outline-none"
          >
            {menuOpen ? <ImCross className="text-[.8rem] mb-[2px] mr-2"/> : <IoMenu />}
          </button>
        </div>

        {/* Navigation menu for desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link className="flex items-center gap-2 group" to="/">
              <IoHome className="text-[1.5rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Home</span>
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-2 group flex justify-center items-center cursor-pointer"
             onClick={handleChatBotHide}>
              <BsChatRightDots className="text-[1.3rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Chat</span>
            </div>
          </li>
          <li>
            <Link className="flex items-center gap-2 group group" to="/ourteam">
              <RiTeamFill className="text-[1.5rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Our Team</span>
            </Link>
          </li>
          <li
            onClick={() => {
              window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
            }}
          >
            <Link className="flex items-center gap-2 group">
              <FaGithub className="text-[1.5rem] text-indigo-500 group-hover:indigo-500" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Github</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 shadow-md py-4 border-b-2 border-indigo-600">
          <ul className="space-y-2 px-3">
            <li className="hover:bg-gray-600 rounded p-2 pl-3 mt-0">
              <Link
                className="flex items-center gap-2"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
               <IoHome className="text-[1.5rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Home</span>
           </Link>
            </li>

            <li className="hover:bg-gray-600 rounded p-2 pl-3"
             onClick={handleChatBotHide}>
              <div
                className="flex items-center gap-2"
                to="/chat"
                onClick={() =>{setMenuOpen(false)}}
              >
                 <BsChatRightDots className="text-[1.5rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Chat</span>
         
              </div>
            </li>
            <li className="hover:bg-gray-600 rounded p-2 pl-3">
              <Link
                className="flex items-center gap-2"
                to="/ourteam"
                onClick={() => setMenuOpen(false)}
              >
                <RiTeamFill className="text-[1.5rem] text-indigo-500 group-hover:text-indigo-300" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Our team</span>
         
              </Link>
            </li>
            <li
            className="hover:bg-gray-600 rounded p-2 pl-3"
              onClick={() => {
                window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
                setMenuOpen(false);
              }}
            >
              <Link className="flex items-center gap-2">
              <FaGithub className="text-[1.5rem] text-indigo-500 group-hover:indigo-500" />
              <span className="text-medium font-semibold group-hover:text-indigo-300">Github</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
