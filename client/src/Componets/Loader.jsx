
import React from 'react'

function Loader() {
  return (
     <button disabled type="button" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px- py-2.5 text-center me-2 inline-flex justify-center items-center">
      
      <div class='flex space-x-2 justify-center items-center container pt-1 pr-1'>
        <span class='sr-only'>Loading...</span>
        <div class=' h-3 w-[5px] bg-white rounded-full animate-bounce [animation-delay:-0.6s]'></div>
        <div class=' h-[18px] w-[5px] bg-white rounded-full animate-bounce [animation-delay:-0.10s]'></div>
        <div class=' h-3 w-[6px] bg-white rounded-full animate-bounce'></div>
      </div>
    </button>
  )
}

export default Loader