import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project(props){


    const technologies = props.technologies.map((item) =>{
    return (
    <div className="techDiv">
        <h4>
        {item} 
        </h4>
    </div>
    )
    })


    const images = props.images.map((item) =>{
        return (
        <div>
        <img src={require("../assets/images/" + item)}/>
        <p className="legend">Legend 1</p>
    </div>
        )
        
        })
    return(
        <>
        <Container>

        <Row>
            <Col sm="6" xs="12">
   

            <div className="ProjectTitleDiv">
                <h1> {props.title} </h1>
                <h3> Platform: {props.platform} </h3>
                    <h3> Technologies: </h3>
                    <div className="techGroupDiv">
                    {technologies}
                    </div>

                
                <p>
                {props.description}
                </p>
               
            </div> 


            </Col>


            <Col sm="6" xs="12">

            <Carousel>
            {images}
            </Carousel>
            </Col>
        </Row>

 
        </Container>
        </>

    )
}