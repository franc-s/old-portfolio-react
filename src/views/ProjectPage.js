import React,{useState} from "react";
import { Container, Row, Col } from 'reactstrap';
import {
    NavLink,
  } from "react-router-dom";
  import { HashLink  } from 'react-router-hash-link';
import Footer from '../components/Footer'
import SpeedIcon from '@material-ui/icons/Speed';
import DevicesIcon from '@material-ui/icons/Devices';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WavesIcon from '@material-ui/icons/Waves';




export default function ProjectPage(){

    const [hovered, setHovered] = useState(null);

    return(
        <>
        <Container>
        <div className="mainProjectContainer">

        <Row>
            <Col sm="12" md="6" xs="12">
            <div className="projectIntroText">

            <h3> I strive for: </h3>
            <ul>
            <li> <SpeedIcon className="projectIntroIcons"/> Fast Loading</li>
            <li> <DevicesIcon className="projectIntroIcons"/> Screen Responsive</li>
            <li> <WbIncandescentIcon className="projectIntroIcons"/> Intuitive Design</li>
            <li> <WavesIcon className="projectIntroIcons"/> Dynamic Features</li>
            </ul>
       
       
             <HashLink to="/about#contactMe">
            Want to see more?
            </HashLink>
            </div>
 
     

                <ProjectHover
                projectID="1"
                href=""
                image={require("../assets/images/testimage.jpeg")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("1")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="How might we integrate deep learning into our Web Apps?"
                ProjectTitle="HarvestMate: Apple Prediction"
                ProjectLink="harvestmate"
                />

            </Col>

            <Col sm="12" md="6" xs="12">
     
            <ProjectHover
                projectID="2"
                image={require("../assets/images/Project/1Splash.png")}
                alt={""}
                hovered={hovered}
                onMouseEnter={()=>setHovered("2")}
                onMouseLeave={()=>setHovered(null)}
                ProjectSummary="How might we create a cross-platform Mobile App?"
                ProjectTitle="SeekDo: Dating for Activities"
                ProjectLink="seekdo"
                />  

                
     
            </Col>



        </Row>




        </div>
    </Container>

    <Footer
    showLinkedin={true}
    />
        </>
    )
}












function ProjectHover(props){

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
                         
                /> 

                {props.hovered === props.projectID  &&
                <h3 className="ProjectImageText">  {props.ProjectSummary} </h3>
                }
            </div>
            
            <h4
            className={props.hovered=== props.projectID ? "projectTitleActive" : "projectTitle" }
            > {props.ProjectTitle} </h4>
                
    </div>
    </NavLink>
    )
}





