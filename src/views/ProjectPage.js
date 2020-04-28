import React,{useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import {
    NavLink,
  } from "react-router-dom";
  import { HashLink  } from 'react-router-hash-link';





export default function ProjectPage(){

    const [hovered, setHovered] = useState(null);

    return(
        <>
        <Container>

        <Row>
            <Col sm="6" xs="12">
            <div className="projectIntroText">
            <p>
            Here is a collection of some of the projects I have worked on recently. <br/>
            My highest priority is <b> Fast Load</b> times and lag free interaction.
             My layouts will be <b>Responsive</b>, so they will be accessible on any device big or small.
            I strive for an easy to use and <b> Intuitive UX. </b>. I enjoy making my web apps <b>Dynamic</b> by
              making them come to life. <br/> Unless explicity stated otherwise, all of their back-end and front-end parts were completely done by be.
       
             </p>
             <HashLink to="/about#contactMe">
            Want to see more?
            </HashLink>
            </div>
 
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

            <Col sm="6" xs="12">
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
                <h1 className="ProjectImageText">  {props.ProjectSummary} </h1>
                }
            </div>
            
            <h3
            className={props.hovered=== props.projectID ? "projectTitleActive" : "projectTitle" }
            > {props.ProjectTitle} </h3>
                
    </div>
    </NavLink>
    )
}





