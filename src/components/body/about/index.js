import React from "react";
import './about.css';
import SocialContact from "../../common/social-contact";

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There 👋, I am
                    <span className='info-name'> Shiraz</span>.
                    <br/>
                    <div className='about-subinfo'>
                        I am a software engineer currently based in Washington, USA.
                    </div>

                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} className='picture' alt='guy working on laptop'/>
                </div>
            </div>
            <SocialContact/>
        </div>
    );
}

export default About