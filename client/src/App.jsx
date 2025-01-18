import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Componets/Header.jsx";
import Footer from "./Componets/Footer.jsx";
import ChatBox from "./Componets/ChatBotComp/ChatBox.jsx";
import '../src/App.css'




function App() {
    let [hideChatBot,setHideChatBot] = useState(true)

    return (
        <>
            <Header  />
            {/* ChatBox */}
            <Outlet  />
            <Footer />
        </>
    );
}

export default App;

