import React from "react";
import { Container, Row,Col,Form, FormGroup, Input} from 'reactstrap';

export default function AboutPage(){

    return(
        <>
        <div>
            <Container>
                <div className="aboutProfileImageContainer">
                    <img 
                        alt="..." 
                        src={require("../assets/images/francis.png")}
                        className="ProfileImage"
                        />

                </div>
        

                <p className="foundedBio">
                Hi my name is 
                </p>

            </Container>

        </div>
        </>
    )
}