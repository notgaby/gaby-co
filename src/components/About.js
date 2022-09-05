import React from 'react';
import selfie from '../imgs/me.png';

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
            <div>
                <div className='aboutBlock'>
                    <div className='aboutBio'>
                        <header>

                        <h1 className='hello'>  
                            Howdy,
                            <br/>
                            I'm Gaby!
                        </h1>
                        <h1>
                            <ShowEmoji symbol="🧸🍮🎨☕️🛼🎮"/>
                        </h1>

                        </header>
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


                    <div className='aboutPic'>
                    <img title="me" src={selfie} width= {620} height = {687} alt="drawing of me" />
                    </div>
                </div>
            </div>


        </div>
    )

}

export default About;