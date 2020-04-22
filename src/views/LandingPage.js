import React from "react";
import Button from '@material-ui/core/Button';
import  {Link} from "react-router-dom";
import { withStyles} from '@material-ui/core/styles';

export default function LandingPage(){
    
    const BootstrapButton = withStyles({

        
        root: {

            
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#0063cc',
            borderColor: '#0063cc',
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
        <div className="LandingContainer2">


            <div className="LandingTextContainer">
            <h2 className="LandingTitle">Full-Stack Developer</h2>

            <h4 className="LandingSubTitle">
                "Changing the world, one line at a time"
                </h4>
            <BootstrapButton variant="contained" component={Link } to="/projects"> VIEW MY WORK</BootstrapButton>

            </div>

        </div>

        </>
    )
}