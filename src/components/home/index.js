import React from "react";
import './home.css';
import Header from "../header/index";
import Body from "../body/index";
import Footer from "../footer/index";

function Home() {
    return (
        <div className='home'>
            <div>
                <Header/>
            </div>

            <div>
                <Body/>
            </div>

            <Footer/>
        </div>
    )
}

export default Home