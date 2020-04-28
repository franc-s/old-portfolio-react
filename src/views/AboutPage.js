import React from "react";
import { Container, Row,Col,Form, FormGroup, Input} from 'reactstrap';
import Button from '@material-ui/core/Button';

export default function AboutPage(){

    return(
        <>
            <Container>

            <Row>
            <Col sm="6" xs="12">
            <div className="aboutProfileImageContainer">
                    <img 
                        alt="..." 
                        src={require("../assets/images/francis.png")}
                        className="ProfileImage"
                        />

            </div>

            </Col>


            <Col sm="6" xs="12">
            <div className="bioContainer">
            <p className="foundedBio">
                "Hi my name is Francis, I am a software developer with experience across a range of industries, 
                I am used to engaging with C-Levels on a daily basis in order to achieve business objectives. In 
                the past I have worked for Darktrace, a world leader in AI Cyber Security, and Bank of America" 
                </p>
            </div>

                
            </Col>
            </Row>

            <Row>
                <Col>
                <div className="sellingPoints">
                    <b> Experience in Creating Mobile Apps</b>
                    <p >
                    I have experience designing Mobile Apps from scratch, this includes designing the UX and then building
                     and implementing the back-end from the ground up. Through this experience, I have gained expertise in 
                     transforming early stage ideasinto production ready applications. Using React Native, these projects work on
                      a variety of platforms including IOS, Android and the Web.
                    </p>

                    <b> Experience in creating end to end Deep Learning Apps</b>
                    <p >
                    If are you looking to integrate Python's Machine learning libaries into your apps then I can help.
                    I have had experience integrating creating fast.ai Pytorch models and then integrating with a 
                    React front-end. Through this process, I have gained a good understanding of what its like to 
                    work with the data pipe line across XXXXX.
                    </p>

                    <b> Commercial and Business Acumen</b>
                    <p >
                    My 1:1 degree in Economics from University of Manchester and time working in Finance/Business development
                    has given me a well-rounded view of XXXX. In my most recent role, I managed multiple cybersecurity projects
                    simultaenously to deliver value proposition and ROI to executive leadership for purchasing Darktrace. 
                    This includes communicating effectively with procurement, legal and financial teams to ensure smooth operations.
                    Through this experience I furthered my communcation skills − Maintaining strong relationships between clients,
                     partners, and the software engineering and operations teams. Bringing together various teams to ensure the best outcome for the customer and business.
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
                    Please click the link below to request the latest copy of my CV
                    </b>

                    <div>
                    <Button variant="contained">
                        Request CV
                    </Button>
                    </div>                
                
                    <b>
                    Here include the buttons for Linkedn and Email 
                    </b>    
                </div>
                </Col>
            </Row>
        </Container>

        </>
    )
}