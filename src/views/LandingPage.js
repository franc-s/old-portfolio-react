import React from "react";
import {
    Link,
  } from "react-router-dom";


import TypeWriter from '../components/TypeWriter.js'
import Footer from '../components/Footer'

export default function LandingPage(props){



    return(
        <>
        <div className="LandingContainerFullWidth">

            <div className="LandingTextContainer">
                <div className="LandingTitleContainer">
                  <h1 >FULL </h1>
                  <h1 >STACK</h1>
                  <h1>DEVELOPER</h1>
                </div>
       
                <div className="subTitleContainer">
                  <h6 className="LandingSubTitle">
                  I make web and mobile software. 
                  {TypeWriter(" Need help transforming your ideas into successful digital products?")}
                  </h6>
                </div>
          
                <div className="ButtonContainer">

                  <Link onClick={props.onClick()} to="/projects" className="landingButton" style={{ textDecoration: 'none',color:'black' }}>
                    <a>
                    Learn More
                    </a>
                  </Link>

                  </div>
       
            </div>
 
        </div>
        <Footer/> 
        </>      
    )
}




