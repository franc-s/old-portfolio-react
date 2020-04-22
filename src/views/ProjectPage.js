import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default function ProjectPage(){

    return(
        <>
        <div >
        <Container>
      <Row>
        <Col xs="6">
        <div style={{padding:'3%'}}>

        <Intro/>
        <Project1/>
        <Project1/>

        </div>

        </Col>

        <Col xs="6">
        <div style={{padding:'3%'}}>

        <Project1/>
        <Project1/>

        </div>
        </Col>

      </Row>
    </Container>

        </div>
        </>
    )
}

function Intro(){

    return(
        <>
        <p>
        A software developer with experience across a range of industries,
         who is used to engaging with C-Levels on a daily basis in order to achieve business objectives.
          I am looking for a role where I will learn more about the technologies shaping the future and help
           to drive change / add value to our clients by offering solutions where technology can be used to 
           enhance business performance. In my most recent role, I have developed my project management skills,
            managing multiple projects with different clients simultaneously ensuring everything runs smoothly to meet
             required deadlines.

        </p>

        </>
    )
}

function Project1(){
    return(
        <div >
            <h3> Example Project</h3>
            <img 
                alt="..." 
                src={require("../assets/images/testimage.jpeg")}
                className="testImage"
                />
        <Intro/>

        </div>
    )
}