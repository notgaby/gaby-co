import React from 'react';
import selfie from '../imgs/me.png';
import pdf from '../imgs/Gabrielle_Co_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faEtsy } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';

const ShowEmoji = (props) => (
     <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
)

const Bio = () => (
    <body>
        Im an upcoming <span className='underline'>December 2022 graduate</span> from the University of Houston Honors College with a major in Computer Science
        with minors in Math and Data within Society!
        <br/> <br/>
        I have interned with <span className='underline'>NerdWallet</span> and <span className='underline'>Liberty Mutual Insurance</span> in the past alongside prep and insight programs
        from IBM, Meta, Citibank, Blackrock, CodePath, and RewritingtheCode.
        <br/>
        <span className='highlight'>
        <ShowEmoji symbol="✨"/>
        I am currently looking for full-time software engineering opportunities 
        starting 2023<ShowEmoji symbol="✨"/></span>
        <br/>
        <p>
            Outside of University, I spend time exploring coffee shops <ShowEmoji symbol="☕️"/>, 
            designing for my Etsy shop <ShowEmoji symbol="🎨"/>, and making flan <ShowEmoji symbol="🍮"/> :)
        </p>
    </body>
)

const TypewriterText = () => (
    <Typewriter 
    options={{autoStart: true, loop: true}}
    onInit={(typewriter) => {
        typewriter.typeString("Howdy, \n\nI'm Gaby!")
        .start()
        .pauseFor(2000);       
    }}/>
)

const Icons = () => (
    <div className='icons'>
        <a href='https://www.linkedin.com/in/gabrielleco/'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faLinkedin} /></a>
        <a href='https://github.com/notgaby'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faGithub} /></a>
        <a href='https://www.etsy.com/shop/gabcodesigns'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faEtsy} /></a>
        <a href='mailto:gabriellejco@gmail.com'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}}icon= {faEnvelope} /></a> 
    </div>
)
  
const About = () => {
    return(
        <div className='wrapper'>
            <div className='buttons'>
                <a href={pdf} without rel="noopener noreferrer" target="_blank">
                    <button class="top">Resume</button>
                </a>
            </div>

            <div className='aboutContainer'>
                <div className='leftAbout'>
                    <div className='aboutItem'>
                        <img id='responsive' title="me" src={selfie} alt="drawing of me" />
                    </div>
                </div>

                <div className='rightAbout'>
                    <div className='aboutItem'>
                        <h1 className='hello'>  
                            <TypewriterText className= 'hello'/>
                        </h1>
                        <h1>
                            <Icons />
                        </h1>
                    </div>
                    <Bio />
                </div>
            </div>

            <div className='footer'>
                <small> Made with <ShowEmoji symbol="❤️"/> using React + CSS</small>
            </div>


        </div>
    )
}

export default About;