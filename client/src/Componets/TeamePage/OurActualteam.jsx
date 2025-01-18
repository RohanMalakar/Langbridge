import React, { useEffect, useState } from 'react'
import { AiOutlineTeam } from "react-icons/ai";
import Card from './Card';
import CardSlider from './CardSlider';
import BrajrajMishra from '../../assets/Images/Brajraj-Mishra.jpg'
import RohanMalakar from '../../assets/Images/Rohan-malakar.jpg';
import TanujJain from '../../assets/Images/Tanuj-jain.jpg';
import PradhyumGarashya from '../../assets/Images/Pradhyum.jpg';


export default function OurActualteam() {

  //-------------- SLider sizing  ----------
  let [slidesToShow, setSlidesToShow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 700) {
        setSlidesToShow(()=>false);
      }else{
        setSlidesToShow(()=>true);
      }
    };
    // Run on initial render
    handleResize();

    // Add and clean up the resize event listener
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Data 
  let team = [
    {
      name: 'Rohan Malakar',
      Profession: 'FullStack Web developer',
      LinkedIn : 'https://www.linkedin.com/in/rohanmalakar/',
      GitHub : 'https://github.com/RohanMalakar/',
      profile:RohanMalakar
    },
    {
      name: 'Brajraj Mishra',
      Profession : 'FullStack Web developer',
      LinkedIn : 'https://www.linkedin.com/in/brajraj-mishra-aa4095256/',
      GitHub : 'https://github.com/Brajraz1git',
      profile:BrajrajMishra
    },
    {
      name: 'Pradhyum Garashya',
      Profession : 'FullStack Web developer',
      LinkedIn : 'https://www.linkedin.com/in/pradhyum-garashya/',
      GitHub : '4',
      profile:PradhyumGarashya
    },
    {
      name: 'Tanuj Jain',
      Profession : 'Python developer',
      LinkedIn : 'https://www.linkedin.com/in/rohanmalakar/',
      GitHub : 'https://github.com/TANUJ0751',
      profile:TanujJain
    }
  ]

  return (
    <div className='w-full pt-24 h-[] border-3 border-gray-800 p-2 flex flex-col bg-indigo-200 py-10 gap-y-6'>
      {/*  ----------- First section ----------- */}
      <div className='w-100% flex flex-col gap-4'>
        {/* Image */}
        <div className='w-[100%] flex justify-center'>
          <AiOutlineTeam className='text-[5rem]  rounded-[50%] p-1 text-white bg-indigo-600 z-10 shadow-2xl shadow-indigo-500 ' />
        </div>
        {/* Heading */}
        <div className='w-[100%] flex flex-col items-center gap-2'>
          <h1 className='text-[1.9rem] md:text-[2.5rem] font-bold text-indigo-600 text-center '>Meet Our Team</h1>
          <p className='text-[.9rem] md:text-[1.09rem] font-[500] text-indigo-500 text-center lg:w-[60%] md:w-[80%] m-auto w-[97%]'>At Insightify, we’re a passionate and dynamic group of developers, innovators, and problem-solvers dedicated to crafting cutting-edge solutions. Our team thrives on collaboration, creativity, and a shared vision to empower individuals and businesses with data-driven insights.</p>
        </div>
      </div>

      {/* --------- Second Section ---------- */}
      {!slidesToShow?
        // SLider 
        <CardSlider team={team} /> :  
        //Manualy card
        <div className='w-[100%] flex justify-around flex-wrap gap-x-2'>
          {team.map(member => {
            return <Card key={member.name} member={member} />
          })}
        </div>
      }

    </div>
  )
}
