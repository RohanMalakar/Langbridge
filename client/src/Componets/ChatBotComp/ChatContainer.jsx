import React from 'react'
import AiSvg from "./AiSvg";
import UserSvg from "./UserSvg";

export default function ChatContainer({history,historyRef,formatResponse}) {
  return (
    <div
      ref={historyRef}
       style={{ scrollBehavior: "smooth" }}
         className="custom-scrollbar h-[300px] md:h-[350px] lg:h-[400] flex flex-col gap-4 border-2 py-2 pl-2 pr-1 mb-4 rounded overflow-y-scroll gap-y-4 scrollbar-thin overflow-auto max-h-screen">
          {history &&
            history.map((item, index) => (
              <div 
              key={index} 
              className="flex flex-col  text-gray-600 text-sm w-full gap-y-4 py-4"
              >
        
            {/* ----------- Question ------------ */}
                <div>
                  <p className="flex items-center gap-x-3 shrink-0 rounded-full w-8 h-8 bg-gray-100 p-1">
                  <span>  <UserSvg/> </span>  <h2 className="font-[700] text-lg tracking-tight text-indigo-700">You</h2>
                     </p>
                  <p className="text-[1rem] font-[700] w-full  rounded-md p-1 text-gray-900 pl-5">
                    {item.que}
                  </p>
                </div>

                {/*  --------------- AI Chat Message ------------ */}
                <div>
                <p className="flex items-center gap-x-3 shrink-0 rounded-full w-8 h-8 bg-gray-100 p-1">
                  <span>  <AiSvg /> </span>  <h2 className="font-[700] text-lg text-indigo-700 tracking-tight"> Chatbot</h2>
                     </p> 
                  <p className="text-sm w-full rounded-md text-gray-800 font pl-5">
                    
                    {formatResponse(item.response)}
                  </p>
                </div>

              </div>
            ))}
        </div>
  )
}
