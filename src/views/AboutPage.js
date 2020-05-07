import React from "react";
import { Container, Row,Col} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {  withStyles } from '@material-ui/core/styles';

import Footer from '../components/Footer'


export default function AboutPage(){

    const CVButtom = withStyles({
        root: {
        
          boxShadow: 'none',
          textTransform: 'none',
          fontSize: 'inherit',
          padding: '6px 12px',
          border: '1px solid',
          lineHeight: 1.5,
          fontWeight:600,
          color:'#5c97bf',
          backgroundColor: 'transparent',
          borderColor:  '#5c97bf',
          borderRadius:'25px',
          border:'3px solid',
          fontFamily: [
            'Montserrat',
            'sans-serif',
  
          ].join(','),
          '&:hover': {
            backgroundColor: '#5c97bf',
            boxShadow: 'none',
            color:'white'
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#5c97bf',

          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
        },
      })(Button);

    return(
        <>
            <Container>

            <Row>
            <Col sm="6" xs="12">
            <div className="aboutProfileImageContainer">
                    <img 
                        alt="Francis De Lima" 
                        src={require("../assets/images/francis.png")}
                        />

            </div>

            </Col>


            <Col sm="6" xs="12">
            <div className="bioContainer">
            <p >
                "Hi my name is Francis, I am a software engineer with experience across a range of industries. 
                I engage with C-Levels to achieve business objectives. In the past I have worked with Darktrace,
                 a world leader in AI Cyber Security, and Bank of America" 
                </p>
            </div>

                
            </Col>
            </Row>

            <Row>
                <Col>
                <div className="sellingPoints">
                    <b> Experience In Creating Mobile Apps</b>
                    <p >
                    I create Mobile Apps from scratch, I design the UX and build
                     and implement the back-end from the ground up. Through this experience, I have gained expertise in 
                     transforming early stage ideas into production grade applications. These projects are cross-platform and work on
                      a variety of platforms including IOS, Android and the Web.
                    </p>

                    <b> Experience In Creating End To End Deep Learning Apps</b>
                    <p >
                    I am familiar with a selection of Python's Deep Learning and Machine learning libaries, recently I used
                    fast.ai to create PyTorch models which I integrated with a ReactJS front-end.
                    Through this process, I have gained a good understanding of what its like to work with the data pipeline across
                     the front and back-end.
                    </p>

                    <b> Commercial Awareness</b>
                    <p >
                    My First-Class Honours in Economics and time working in Finance/Business development has given me a well-rounded view of all stake holders involved in IT projects.
                    I have managed multiple cybersecurity projects simultaneously to deliver value proposition and ROI to executive leadership for purchasing Darktrace. 
                    Through this experience I furthered my communication  skills − Maintaining strong relationships between clients, partners, and the software engineering and operations teams to ensure the best
                    outcome for the customer and business.
                    </p>
                </div>
                </Col>
            </Row>
        
            <Row>
                <Col>
                <div id="contactMe" className="contactDiv">
                    <h1> Contact</h1>

                    <p> Feel free to reach out for any inquiries about my portfolio and work opportunities!</p>
                    <b>
                    Please click the button below for more information
                    </b>

                    <div className="cvButtonDiv">
                    <CVButtom href="mailto:francis.delima01@gmail.com?subject=Information Request&body=I would like to find out more about your services?">
                        Get in Touch
                    </CVButtom>
                    </div>                
               
                </div>
                </Col>
            </Row>
        </Container>

        <Footer
        showLinkedin={true}
        />
        </>
    )
}