import React from "react";
import './body.css';
import About from "./about";
import Work from "./work";
import Projects from "./projects";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";

function Body() {
    return <div className="body">
        <section id='about'>
            <About/>
        </section>

        <section id='work'>
            <Work/>
        </section>

        <section id='projects'>
            <Projects/>
        </section>

        <section id='skills'>
            <Skills/>
        </section>

        <section id='education'>
            <Education/>
        </section>

        <section id='contact'>
            <Contact/>
        </section>
    </div>
}

export default Body