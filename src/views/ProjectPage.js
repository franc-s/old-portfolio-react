import React,{useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import {
    NavLink,
  } from "react-router-dom";





export default function ProjectPage(){

    const [hovered, setHovered] = useState(null);

    return(
        <>
        <Container>

        <Row>
            <Col sm="6" xs="12">
            <p>
            Here is a collection of some of the projects I have worked on recently.
            Want to see more?(contact me link)
            </p>

            <b> ADD LOGOS Of core things 
                e.g. Fast, Responsive, Intuitive, Dynamic 
            </b>

            <Project
                projectID="1"
                href=""
                image={require("../assets/images/testimage.jpeg")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("1")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="How might we integrate deep learning into our site?"
                ProjectTitle="HarvestMate: Apple Prediction"
                ProjectLink="harvestmate"
                />
  
            </Col>

            <Col sm="6" xs="12">
            <Project
                projectID="4"
                image={require("../assets/images/testimage.jpeg")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("4")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="TODO Machine learning Project"
                ProjectTitle="TODO Machine learning Project"
                ProjectLink="project4"
                />    
            </Col>
        </Row>



        <Row>
            <Col sm="6" xs="12">
            <Project
                projectID="3"
                image={require("../assets/images/testimage.jpeg")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("3")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="TODO most in demand python libaries"
                ProjectTitle="TODO most in demand python libaries"
                ProjectLink="project3"
                />  
            </Col>

            <Col sm="6" xs="12">
            <Project
                projectID="2"
                image={require("../assets/images/testimage.jpeg")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("2")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="How might we create an android/ios App?"
                ProjectTitle="SeekDo: Dating for Activities"
                ProjectLink="seekdo"
                />  
            </Col>
        </Row>


    </Container>

        </>
    )
}












function Project(props){

    return(
        <NavLink to={props.ProjectLink}>
        <div className="mainProjectImageContainer"
        onMouseOver={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        >
            <div className="ProjectIMGContainer">

            {props.hovered === props.projectID &&
            <div className="overtint"></div>
            }
                <img 
                src={props.image}
                alt={props.alt}
             
                className="ProjectImage"
            
                /> 

                {props.hovered === props.projectID  &&
                <h1 className="ProjectImageText"> Project {props.ProjectSummary} </h1>
                }
            </div>
            
            <h3
            className={props.hovered=== props.projectID ? "projectTitleActive" : "projectTitle" }
            > {props.ProjectTitle} </h3>
                
    </div>
    </NavLink>
    )
}





