import React, { useRef, useEffect } from 'react';
import analysis from "../assets/Images/analysis.png";
import translator from "../assets/Images/translator.jpg";
import scalable from "../assets/Images/scalable.png";
import interfaceImage from "../assets/Images/interface.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Typed from 'typed.js';
import homeImage from '../assets/Images/homeImage.png';

const HomePage = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  const buttonBgColor = "bg-teal-700 hover:bg-gray-700";



  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          "Hindi language.",
          "Marathi language.",
          "Gujarati language.",
          "Tamil language.",
          "Kannada language.",
          "Telugu language.",
          "Bengali language.",
          "Malayalam language.",
          "Punjabi language.",
          "Odia language.",
        ],
        typeSpeed: 80, // Adjusted for smoother typing
        backSpeed: 60, // Adjusted for smoother backspacing
        backDelay: 1000, // Delay before starting the backspacing
        loop: true,
        showCursor: true,
        cursorChar: "|", // Ensure cursor is visible and blinking
      });
    }
    

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy(); // Cleanup Typed.js instance
      }
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Top Section */}
      <div className="bg-gray-800 w-full h-[100vh] flex flex-wrap justify-around gap-y-3">
        <div className="md:w-[45%] w-[100%] flex flex-col justify-center items-center pt-3 pb-5">
        <h2 className="font-sans text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[3.0rem] mx-4 md:mx-2 font-[800] md:p-3 p-2 text-gray-300 text-left">
            Here you can translate given English content into{" "}
            <span
              ref={typedElement}
              className="text-teal-300 font-sans text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[3.0rem] font-[800]"
            >
              Loading...
            </span>
        </h2>


          <p className="text-[.95rem] md:text-[1.15rem] md:p-3 mx-3  font-semibold text-gray-400 mt-6 mb-9 md:text-left">
          Break barriers with every word, Connect cultures across the globe, Your language, our  bridge to the world.
          </p>

          {/* Get Started and View Dashboard Buttons */}
          <div className="w-[100%] pl-3">
            <div className="w-[100%] flex flex-wrap md:flex-nowrap justify-start sm:justify-center md:justify-start gap-x-7 px-2">
              <Link to={"/translator"}>
                <button
                  className="bg-teal-700 text-gray-300 hover:bg-gray-700  px-3 py-2 md:py-3 font-[600] md:font-bold rounded-md transition duration-300 w-[100%] mt-5 flex items-center gap-2 hover:scale-105"
                >
                  Get Start
                </button>
              </Link>

              <Link to={"/dashboard"}>
                <button className={`${buttonBgColor} text-gray-300 px-3 py-2 md:py-3 md:font-bold font-[600] rounded-md  transition duration-300 w-[100%] mt-5 flex items-center gap-2 hover:scale-105`}>
                  View Dashboard
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Robot */}
        <div className="md:w-[45%] w-[100%] flex justify-center items-center p-2">
          <img src={homeImage} alt="Home" className="w-[80%]" />
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex w-[100%] justify-center items-center mb-10 gap-x-1">
            <h3 className="md:text-3xl text-2xl font-[700] text-gray-300 mb-3 pl-2">Features</h3>
            <div className="flex space-x-2 justify-center items-center w-[26%] md:w-[15%] lg:w-[10%]">
              <div className="h-4 w-4 md:h-6 md:w-6 bg-gray-text-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-4 w-4 md:h-6 md:w-6 bg-gray-text-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-4 w-4 md:h-6 md:w-6 bg-gray-text-gray-300 rounded-full animate-bounce"></div>
            </div>
          </div>

          <div className="flex justify-around gap-6">
           
            <div className="bg-gray-700 flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-teal-700 transition gap-4 duration-300">
              <img className="w-48 rounded-2xl" src={translator} alt="Real-Time Analysis" />
              <h4 className="text-xl font-bold mb-4 text-gray-300">Quick Translation</h4>
              <p className="font-[500] text-gray-300">
              Allow users to instantly translate text between English and multiple languages with minimal delay. This feature can be particularly valuable for users</p>
            </div>

            <div className="bg-gray-700 flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-teal-700 transition gap-4 duration-300">
              <img className="w-48" src={scalable} alt="Data Scalability" />
              <h4 className="text-xl font-bold mb-4 text-gray-300">Data Scalability</h4>
              <p className="font-[500] text-gray-300">
              LangBridge is built to handle growth. Whether you're translating a single phrase or large volumes of text, our platform scales seamlessly to meet your needs
              </p>
            </div>

            <div className="bg-gray-700 flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-teal-700 transition gap-4 duration-300">
              <img className="w-48" src={interfaceImage} alt="User-Friendly Interfaces" />
              <h4 className="text-xl font-bold mb-4 text-gray-300">Intuitive Interface</h4>
              <p className="font-[500] text-gray-300">
              LangBridge features a simple, easy-to-use interface, making translation effortless for everyone. Navigate with ease and enjoy a smooth experience
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-300">About Lang-Bridge</h3>
          <p className="w-[99%] mx-auto font-semibold text-[.87rem] sm:text-[.95rem] md:text-[1.05rem] text-gray-600">
          LangBridge is a powerful translation platform that connects you with the world by translating English into over 10 languages. We simplify communication, making it easy to break language barriers and foster global connections. With fast and accurate translations, LangBridge ensures you can communicate effortlessly, no matter where you are.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
