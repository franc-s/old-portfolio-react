import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';



export default function Footer(props){

    return(
        <footer>

        {props.showLinkedin &&
        <div className="showLinkedin">
          <h6> Lets work together! </h6>
        

          <IconButton aria-label="https://www.linkedin.com/in/francis-de-lima/" onClick={() => window.open("https://www.linkedin.com/in/francis-de-lima/")}>
            <LinkedInIcon className="footerIcon" />
          </IconButton>

          <IconButton onClick={()=> window.location.href = "mailto:francis.delima01@gmail.com?subject=Lets Work Togehter"}>
          <EmailIcon className="footerIcon"   />
          </IconButton>
          </div>

  
        }

            <Copyright/>
        </footer>
    )
}



function Copyright() {
    return (
      <div className="copyRight">
        <p>
        {'© Copyright  '}
        {new Date().getFullYear()}
        {' '}
          Francis de Lima
          {'.'}
        </p>
      </div>
    );
  }