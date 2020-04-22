import React from "react";
import { Container, Row,Col,Form, FormGroup, Input} from 'reactstrap';
import Button from '@material-ui/core/Button';

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
                Hi my name is Francis, I am a software developer with experience across a range of industries, 
                I am used to engaging with C-Levels on a daily basis in order to achieve business objectives. In 
                the past I have worked for Bank of America and most recently Darktrace, a world leader in AI Cyber Security. 
                </p>

                <b> 1) Key Selling Point 1 e.g. Experience in designing mobile Apps</b>
                <p className="foundedBio">
                Talk about your experience and it will help their company 
                </p>

                <b> 2) Key Selling Point 2 e.g. Experience in creating end to end machine learning projects</b>
                <p className="foundedBio">
                Talk about your experience and it will help their company 
                </p>

                <b> 3) Key Selling Point 3 e.g. Commericka/Business Acumen degrees etc</b>
                <p className="foundedBio">
                Talk about your experience and it will help their company. e.g. managing projects,
                etc etc.
                </p>


                
                <h1> Contact(Link this Div ID to the other contact section) </h1>
                <b>
                Please click the link below to request the latest copy of my CV
                </b>                
                <Button variant="contained">
                    Request CV
                </Button>
                <b>
                Here include the buttons for Linkedn and Email 
                </b>    


            </Container>

        </div>
        </>
    )
}