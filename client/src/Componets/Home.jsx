import React from 'react';
import analysis from "../assets/Images/analysis.png";
import scalable from "../assets/Images/scalable.png";
import interfaceImage from "../assets/Images/interface.png";
import { Link, Navigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import homeImage from '../assets/Images/homeImage.png'


const HomePage = () => {

  return (
    <div className="bg-gray-50">        
      {/* Top Section */}
      <div className="bg-gray-800  w-full flex flex-wrap justify-around gap-y-3">

        <div className="md:w-[45%] w-[100%] flex flex-col justify-center items-center pt-3 pb-5">

          <h2 className="font-sans text-[1.2rem] sm:text-[1.4rem]  md:text-[1.5rem] lg:text-[1.7rem]  mx-4 md:mx-2 font-[800] md:p-3 p-2 text-indigo-600 text-left">
          Your Partner in <span className='text-indigo-300 font-sans text-[1.2rem] sm:text-[1.4rem]  md:text-[1.5rem] lg:text-[1.7rem] font-[800]'>AI-Driven Analysis and Performance Amplification  Unlock Analysis</span> and Performance Amplification  Unlock
          </h2>

          <p className="text-[.95rem] md:text-[1.15rem] md:p-3 pl-6 font-semibold text-gray-400 mb-6 md:text-left ">
            Real-time social media analytics made simple with LangFlow and DataStax
          </p>

          {/* get started btn */}
          <div className='w-[100%] pl-3'>
          <div className='w-[100%] flex flex-wrap md:flex-nowrap justify-start sm:justify-center md:justify-start gap-x-7 px-2'>
          <Link to={"/chat"}> 
          <button
            className="bg-indigo-600 text-white px-3 py-2 md:py-3 font-[600]  md:font-bold rounded-md hover:bg-indigo-700 transition duration-300  w-[100%] mt-5 flex items-center gap-2 hover:scale-105" >
              Get Start
          </button>
            </Link>
          
          <Link to={"/dashboard"}>
          <button
            className="bg-indigo-600 text-white px-3 py-2 md:py-3 md:font-bold font-[600] rounded-md hover:bg-indigo-700 transition duration-300  w-[100%] mt-5 flex items-center gap-2 hover:scale-105" >
              View Deshboard
          </button>
            </Link>
          </div>
          </div>

        </div>

        {/* Image robot */}
        <div className='md:w-[45%] w-[100%] flex justify-center items-center p-2'>
          <img src={homeImage} alt="" className='w-[80%]' />
        </div>

      </div>

      {/* Features Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 text-center  z-[0]">
          {/* Features */}
          <div className='flex w-[100%] justify-center  items-center  mb-10 md:gap-x-1 z-[1]'>
          <h3 className="md:text-3xl text-2xl font-[700]  text-indigo-600 mb-3 pl-2">Features</h3>

          {/* Dots */}
          <div class='flex space-x-2 justify-center items-center container w-[26%] md:w-[15%] lg:w-[10%]'>
            <span class='sr-only'>Loading...</span>
            <div class='h-4 w-4 md:h-6 md:w-6 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div class='h-4 w-4 md:h-6 md:w-6 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div class='h-4 w-4 md:h-6 md:w-6 bg-indigo-600 rounded-full animate-bounce'></div>
          </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-indigo-200 transition gap-4 duration-300">
              <img className='w-48' src={analysis} alt="analisis" />
              <h4 className="text-xl font-bold mb-4 text-indigo-600">Real-Time Analysis</h4>
              <p className='font-[500] text-gray-700'>
                Gain instant insights on social media performance with LangFlow-powered workflows.
              </p>
            </div >

            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-indigo-200 transition gap-4 duration-300">
              <img className='w-48' src={scalable} alt="scalable" />
              <h4 className="text-xl font-bold mb-4 text-indigo-600">Data Scalability</h4>
              <p className='font-[500] text-gray-700'>
                Handle growing datasets seamlessly with the power of DataStax Astra DB.
              </p>
            </div>
            <div className="bg-white flex flex-col items-center justify-center shadow-md p-6 rounded-md hover:shadow-2xl hover:scale-105 hover:bg-indigo-200 duration-300">
              <img className='w-48' src={interfaceImage} alt="interface" />
              <h4 className="text-xl font-bold mb-4 text-indigo-600">Intuitive Interface</h4>
              <p className='font-[500] text-gray-700'>
                Analyze and compare social media metrics with ease using our user-friendly design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-indigo-100 py-16">
        <div className="container mx-auto px-2 md:px-4 text-center">
          <h3 
          className="text-2xl font-bold  mb-6 text-indigo-600">
          {/* //  className="text-2xl font-bold text-center z-0 text-indigo-600"> */}
            {/* <SplitText
            
              text="About Insightify"
              className="text-2xl font-bold text-center z-0"
              delay={50}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}   
              rootMargin="-50px"
            /> */}
            About Insightify
          </h3>
          <p className="w-[99%] mx-auto font-semibold text-[.87rem] sm:text-[.95rem] md:text-[1.05rem] text-gray-600">
            Insightify is a MERN-based analytics module that empowers users to unlock the full
            potential of their social media data. With robust backend integration, real-time
            insights, and an intuitive frontend, gh transforms raw data into actionable
            results.
          </p>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

