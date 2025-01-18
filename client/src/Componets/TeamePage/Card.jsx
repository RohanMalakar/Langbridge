import React from 'react';
import styled from 'styled-components';
import { Fa500Px, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Card = ({member}) => {
  console.log(member);
  return (
    <StyledWrapper>
      <div className="e-card playing  hover:shadow-2xl hover:scale-[1.01]  shadow-indigo-500/50 cursor-pointer transition-all">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop flex flex-col items-center justify-between mt-0 h">

          {/* Avatar */}
          <div className='group'>
            <img src={member.profile} alt="" className='w-[90px] h-[90px] rounded-[50%] border-slate-200 border-4 group-hover:border-slate-300' />
          </div>

          {/* Name */}
          <div>
             {member.name}
          </div>

         {/* Profession  */}
         <p className='text-[.95rem] mt'>
         {member.Profession}
          </p> 

          {/* Contact */}
          <div className="flex justify-around gap-2 w-[100%] text-[1.9rem] mt-[1.7rem] px-2">
            {/* LinkdIn */}
           <a 
           onClick={() => {
            window.open(member.LinkedIn, "_blank")
           }}
           className=''
           ><FaLinkedin  className='p-[5px] text-[] bg-slate-300 text-gray-800 rounded-2xl hover:bg-purple-300 hover:scale-[1.1]'/></a>
           {/* GitHub */}
           <a 
           onClick={() => {
            window.open(member.GitHub, "_blank");
           }}
           className=''
           ><FaGithub className='p-[4px] text-[] bg-slate-300 text-gray-800 rounded-2xl hover:bg-purple-300 hover:scale-[1.1]'/></a>
           {/* Twitter */}
           <a href=""
           className=''
           ><RiTwitterXFill className='p-[4px] text-[] bg-slate-300 text-gray-800 rounded-2xl hover:bg-purple-300 hover:scale-[1.1]'/></a>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .e-card {
    margin: 10px auto;
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: 260px;
    height: 330px;
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb);
  }

  .icon {
    width: 3em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 2.3em;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
    height:80%
  }

  .name {
    font-size: 14px;
    font-weight: 100;
    position: relative;
    top: 1em;
    text-transform: lowercase;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 3000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 4000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }
  
  
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Card;
