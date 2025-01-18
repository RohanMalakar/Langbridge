
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Card from './Card';

export default function CardSlider({team}) {
   

  let settings = {
    dots: true,
    infinite: true ,
    speed: 600,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1100,
    easing:"ease-in-out",
  }
  
  return (
    <div className='w-[100%] m-auto pt-5 bg-slate-200 rounded mb-2'>
      <Slider {...settings} className='w-[90%] m-auto pb-3'>
      {team.map(member =>{
        return < Card key={member} member={member}/>
      })}
     </Slider>

    </div>
  )
}
