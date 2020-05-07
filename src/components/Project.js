import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import Footer from '../components/Footer'

export default function Project(props){

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };
    const technologies = props.technologies.map((item) =>{
    return (
    <div className="techDiv">
        <h6>
        {item} 
        </h6>
    </div>
    )
    })


    const images = props.images.map((item,i) =>{
        return (
        <div style={{height:'25em'}}>
        <img src={require("../assets/images/Project/" + item)} style={props.ImageStyle}/>
        <p className="legend" >
            {props.legend[i]} 
        </p>
        </div>
        )
        
        })
    return(
        <>
        <Container>

            <Col sm="12" xs="12">
   

            <div className="ProjectTitleDiv">
                <h1> {props.title} </h1>
                <h5> Platform: {props.platform} </h5>
                    <h5> Technologies: </h5>
                    <div className="techGroupDiv">
                    {technologies}
                    </div>

                
                <p>
                {props.description}
                </p>
               
            </div> 

    
            <Carousel    

    
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <IconButton style={{ ...arrowStyles, left: 15 }}>

                    <NavigateBeforeRoundedIcon onClick={onClickHandler} title={label} className="carsolNext"/>

                    </IconButton>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <IconButton style={{ ...arrowStyles, right: 15 }}>

                    <NavigateNextRoundedIcon onClick={onClickHandler} title={label} className="carsolNext"/>

                </IconButton>
       
                )
            }
            
            
            
            >
            {images}
            </Carousel>
            

            </Col>


     

 
        </Container>
        <Footer showLinkedin={true}/>
        </>

    )
}