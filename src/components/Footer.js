import React from 'react';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



export default function Footer(){

    return(
        <div >
        <Typography variant="body2" color="textSecondary" align="center">
            <h3> Lets work together </h3>
            <h3> Insert Linkedin, Email  </h3>
            </Typography>
            <Copyright/>
        </div>
    )
}



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="">
          HarvestMate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }