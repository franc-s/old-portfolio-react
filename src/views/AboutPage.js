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
                    <b> 1) Key Selling Point 1 e.g. Experience in designing mobile Apps</b>
                    <p >
                    I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.

                    </p>

                    <b> 2) Key Selling Point 2 e.g. Experience in creating end to end machine learning projects</b>
                    <p >
                    Most of my recent work has been focused around tools for creatives. I am currently working on Framer Web, a collaborative design prototyping tool. In the past I have worked on professional video production tools for streamers. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints.

                    </p>

                    <b> 3) Key Selling Point 3 e.g. Commericka/Business Acumen degrees etc</b>
                    <p >
                    I am also qualified in programming; having received my Front End Developer Nanodegree from Udacity in 2018. I am capable of creating prototypes with web based technologies such as HTML, CSS, and Javascript; in fact, I designed and codedLink Icon this portfolio myself! My knowledge of technical limitations and possibilities also lead to strong designer-developer relationships.
                    </p>
                </div>
                </Col>
            </Row>
        
            <Row>
                <Col>
                <div id="contactMe" className="contactDiv">
                    <h1> Contact</h1>

                    <p> Feel free to contact me for any inquiries about my portfolio and work opportunities!</p>
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