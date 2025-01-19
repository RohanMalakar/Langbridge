import React, { useState } from "react";
import { IoMenu, IoHome } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsChatRightDots } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/Images/logo-anime.gif"; // Import the logo

function Header({ hideChatBot, setHideChatBot }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChatBotHide = () => {
    setHideChatBot((prev) => !prev);
  };

  return (
    <header className="sticky top-0 w-full text-white bg-black z-50 shadow-md border-b-1">
      {/* Main header container */}
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-4 py-3">
          <Link to="/">
            <img
              src={logo} // Use the imported logo
              alt="logo"
              className="h-8 m-0 p-0 md:h-12 w-auto" // Ensure appropriate size
            />
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[1.7rem] text-teal-600 focus:outline-none"
          >
            {menuOpen ? <ImCross className="text-[.8rem] mb-[2px] mr-2" /> : <IoMenu />}
          </button>
        </div>

        {/* Navigation menu for desktop */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link className="flex items-center gap-2 group" to="/">
              <IoHome className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
              <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </span>
            </Link>
          </li>
          <li>
            <div
              className="flex items-center gap-2 group cursor-pointer"
              onClick={handleChatBotHide}
            >
              <BsChatRightDots className="text-[1.3rem] text-teal-600 group-hover:text-teal-300" />
              <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                Chat
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </span>
            </div>
          </li>
          <li>
            <Link className="flex items-center gap-2 group" to="/ourteam">
              <RiTeamFill className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
              <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                Our Team
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </span>
            </Link>
          </li>
          <li
            onClick={() => {
              window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
            }}
          >
            <Link className="flex items-center gap-2 group">
              <FaGithub className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
              <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                Github
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 shadow-md py-4 border-b-2 border-teal-300">
          <ul className="space-y-2 px-3">
            <li className="hover:bg-gray-600 rounded p-2 pl-3 mt-0">
              <Link
                className="flex items-center gap-2 group"
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                <IoHome className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
                <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </span>
              </Link>
            </li>
            <li
              className="hover:bg-gray-600 rounded p-2 pl-3"
              onClick={handleChatBotHide}
            >
              <div className="flex items-center gap-2 group">
                <BsChatRightDots className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
                <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                  Chat
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </span>
              </div>
            </li>
            <li className="hover:bg-gray-600 rounded p-2 pl-3">
              <Link
                className="flex items-center gap-2 group"
                to="/ourteam"
                onClick={() => setMenuOpen(false)}
              >
                <RiTeamFill className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
                <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                  Our Team
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </span>
              </Link>
            </li>
            <li
              className="hover:bg-gray-600 rounded p-2 pl-3"
              onClick={() => {
                window.open("https://github.com/RohanMalakar/Insightify2", "_blank");
                setMenuOpen(false);
              }}
            >
              <div className="flex items-center gap-2 group">
                <FaGithub className="text-[1.5rem] text-teal-600 group-hover:text-teal-300" />
                <span className="text-medium font-semibold group-hover:text-teal-300 relative overflow-hidden">
                  Github
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-300 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
