import React from "react";
import {
    Link,
  } from "react-router-dom";

import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap';
import TypeWriter from '../components/TypeWriter.js'

export default function LandingPage(props){

    
    const BootstrapButton = withStyles({

        
        root: {

            
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: '2vw',
            lineHeight: 1.5,
            backgroundColor: 'white',
            borderColor: 'black',
            borderBottom:'1px solid',
            fontWeight:600,
            fontFamily: [
                'Montserrat',
              'sans-serif',
    
            ].join(','),
            '&:hover': {
              borderBottom:'',
            },
            '&:active': {
              borderBottom:'',

            },
           
        },
      })(Button);

    return(
        <>
        <div className="LandingContainerFullWidth">

            <div className="LandingTextContainer">
                <div className="LandingTitleContainer">
                  <h2 className="LandingTitle1">FULL </h2>
                  <h2 className="LandingTitle2">STACK</h2>
                  <h2 className="LandingTitle3">DEVELOPER</h2>
                </div>


                <div className="subTitleButtonContainer">
                  <h4 className="LandingSubTitle">
                  I make web and mobile software. 
                  {TypeWriter(" Need help transforming your ideas into successful digital products?")}
                  </h4>
          
                </div>
                <div className="ButtonContainer">
                  <BootstrapButton  component={Link} to="/projects"  onClick={props.onClick()} > Learn More</BootstrapButton>
                  </div>
            </div>

        </div> 
        </>      
    )
}




