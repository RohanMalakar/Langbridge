import React, { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

import Loader from "../Loader";
import ChatContainer from "./ChatContainer";

// import '../styleComp/Scrollbar.js'

const ChatBox = ({ hideChatBot, setHideChatBot }) => {
 
  //  ------------   DATA FETCHIING  AND DATA FROMATING  ------------
  const [inputMessage, setInputMessage] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);


  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const formatResponse = (responseText) => {
    const cleanedResponse = responseText.replace(/###/g, "").replace(/\*\*/g, "").trim();

    const lines = cleanedResponse.split("\n");

    const formattedResponse = lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (/^\d+\./.test(trimmedLine) === false && trimmedLine.endsWith(":")) {
        return (
          <h2 key={index} className="text-[1rem] font-[700] w-full  rounded-md p-1 text-gray-900  mt-2">
            {trimmedLine}
          </h2>
        );
      }

      if (/^\d+\./.test(trimmedLine)) {
        return (
          <h3 key={index} className="font-[700] text-gray-800 text-[.99rem] mt-2">
            {trimmedLine}
          </h3>
        );
      }

      if (/^[-•]/.test(trimmedLine)) {
        return (
          <p key={index} className="ml-4 text-gray-800 text-[.90rem] font-[500]">
            {trimmedLine}
          </p>
        );
      }

      if (trimmedLine) {
        return (
          <p key={index} className="text-[.92rem] text-gray-900 font-[700] mt-2">
            {trimmedLine}
          </p>
        );
      }

      return null;
    });

    return formattedResponse;
  };

  const handleSendMessage = async () => {
    if (!inputMessage) return;
    setLoading(true);
    try {
      const res = await fetch("https://insightify2-1.onrender.com/api/v1/langflow/run-flow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputValue: inputMessage,
          inputType: "chat",
          outputType: "chat",
          stream: false,
        }),
      });
      const data = await res.json();
      if (data.output) {
        setInputMessage("");
        const newHistory = {
          que: inputMessage,
          response: "",
        };
        newHistory.response = data.output;
        setHistory([...history, newHistory]);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to get a response from the server.");
    } finally {
      setLoading(false);
    }
  };

  //  ------------   DATA FETCHIING  AND DATA FROMATING  ENDING.......  ------------

  const handleChatBotHide = () => {
    setHideChatBot(() => !hideChatBot);
  }

  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 70 });
  const [currentMousePosition, setCurrentMousePosition] = useState({ x: 0, y: 0 });

  // Function to reset position on mobile screen sizes
  const resetPositionOnMobile = () => {
    if (window.innerWidth < 768) {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    // Reset position when the window is resized
    window.addEventListener("resize", resetPositionOnMobile);

    // Initial check in case the component mounts on a small screen
    resetPositionOnMobile();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", resetPositionOnMobile);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setCurrentMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - currentMousePosition.x;
    const dy = e.clientY - currentMousePosition.y;

    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));
    setCurrentMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  return (
    <div
      id="chatbox"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`${!hideChatBot ? 'top-[18vh] lg:top-[9vh] sm:justify-end xl:top-[12vh] lg:pr-[1vw] xl:pr-[8vw]' : 'top-[78vh] lg:top-[80vh] xl:top-[85vh] xl:pr-9 lg:pr-7 md:pr-5 sm:pr-4 pr-2'} w-full fixed  right-0 flex flex-col items-end justify-center z-[20]`}
    >

      {/* --------------- Chatbot Popup --------------- */}
      <div
        className={`${hideChatBot ? 'hidden' : null} bg-white px-3 rounded-lg border border-gray-200 sm:w-[27%]  md:w-[%] lg:w-[36%] xl:w-[26%] shadow-sm z-[10]`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseDown={handleMouseDown}
      >
        
        {/* Heading */}
        <div className="flex flex-col space-y-1.5 pb-2 md:pb-6 cursor-move w-[100%]">
          <div className="flex justify-between pt-2">
          <h2 className="font-[700] text-lg tracking-tight">Chatbot</h2>
          <p
          onClick={handleChatBotHide}
          className="cursor-pointer">
          {/* -----------    chat close btn ---------- */}
          <RxCross2 className=" text-[1.3rem] font-[800] hover:bg-indigo-100 rounded-[5px]" />
        </p>
          </div>
          <p className="text-sm font-[600] text-gray-500">Powered by Mendable and Vercel</p>
        </div>

        {/* ------------ Chat Container -------------- */}
        <ChatContainer history={history} historyRef={historyRef} formatResponse={formatResponse}/>
        {/* Input Box */}
        <div className="flex items-center pt-0 mb-5">
          <form className="flex items-center w-full space-x-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900"
              placeholder="Ask your query here..."
              value={inputMessage}
              onChange={handleInputChange}
            />
            {loading?
            <Loader />
            :<button
            onClick={handleSendMessage}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-50 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 hover:bg-indigo-700 h-10 px-4"
          >
            Send
          </button>
          }
          </form>
        </div>
      </div>

      {/* --------------  Chatbot Button open -----------  */}
      <button
        onClick={handleChatBotHide}
        className={`${!hideChatBot ? 'hidden' : null} inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full md:w-16 md:h-16 h-10 w-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer border-gray-200 p-0 normal-case leading-5`}
        type="button"
        style={{ zIndex: '10' }}
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <a href="#chatbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white border-gray-200 w-[20px] h-[30px] md:w-[30px] md:h-[40px] "
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
        </a>
      </button>

    </div>
  );
};

export default ChatBox;
