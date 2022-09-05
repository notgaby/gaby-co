import React from 'react';
import selfie from '../imgs/me.png';
import pdf from '../imgs/Gabrielle_Co_Resume.pdf';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFontAwesome, faGithub, faEtsy } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//&nbsp;
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
  
const About = () => {
    return(
        <div className='wrapper'>
            <div className='filler' style={{ flex: 100}}>
                <a href={pdf} without rel="noopener noreferrer" target="_blank">
                    <button class="top">Resume</button>
                </a>
            </div>

            <div className='aboutContainer'>
                <div className='leftAbout'>
                    <div className='aboutItem' style={{color: 'green'}}>
                        <h1 className='hello'>  
                                Howdy,
                                <br/>
                                I'm Gaby!
                            </h1>
                            <h1>
                            <div className='icons'>
                                <ShowEmoji symbol="🍮🎨☕️"/>
                                <a href='https://www.linkedin.com/in/gabrielleco/'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faLinkedin} /></a>
                                <a href='https://github.com/notgaby'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faGithub} /></a>
                                <a href='https://www.etsy.com/shop/gabcodesigns'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}} icon= {faEtsy} /></a>
                                <a href='mailto:gabriellejco@gmail.com'><FontAwesomeIcon style={{padding: '2px', fontSize: '40px'}}icon= {faEnvelope} /></a> 
                            </div>
                            
                        </h1>

                        </div>

                        <body >
                            Im an upcoming December 2022 graduate from the University of Houston with a major in Computer Science
                            with minors in math and data and society!
                            <br/> <br/>
                            I have interned with Liberty Mutual Insurance and NerdWallet in the past alongside prep and insight programs
                            from IBM, Meta, Citibank, Blackrock, CodePath, and RewritingtheCode.
                            <br/>
                            <span className='highlight'>
                            <ShowEmoji symbol="✨"/>
                            I am currently looking for full-time software engineering opportunities 
                            starting 2023<ShowEmoji symbol="✨"/></span>
                        </body>


                </div>
                <div className='rightAbout'>
                    <div className='aboutItem' style={{color: 'red'}}>
                        <img title="me" src={selfie} width= {620} height = {687} alt="drawing of me" />
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default About;