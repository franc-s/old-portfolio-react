import React,{useEffect} from "react";
import {
    Link,
  } from "react-router-dom";

import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from 'reactstrap';


export default function LandingPage(props){

    
    const BootstrapButton = withStyles({

        
        root: {

            
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: 'white',
            borderColor: 'black',
            padding:'2%',
            fontWeight:600,
            fontFamily: [
                'Montserrat',
              'sans-serif',
    
            ].join(','),
            '&:hover': {
              backgroundColor: '#0069d9',
              borderColor: '#0062cc',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#0062cc',
              borderColor: '#005cbf',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
              },
        },
      })(Button);

    return(
        <>
        <div className="LandingContainerFullWidth">

            <div className="LandingTextContainer">
                <h2 className="LandingTitle">Full-Stack Developer</h2>

                <h4 className="LandingSubTitle">
                    "Changing the world, one line at a time"
                    </h4>
                
                <div className="ButtonContainer">
                <BootstrapButton variant="contained" component={Link} to="/projects"  onClick={props.onClick()} > VIEW MY WORK</BootstrapButton>
                </div>

            </div>

        </div> 
        </>      
    )
}