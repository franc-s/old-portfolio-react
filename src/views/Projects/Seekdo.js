import React from 'react';
import Project from '../../components/Project'

export default function Seekdo(){

    let list = [
    "Built in React Native",
    "Integrated with Firebase API for Phone Auth",
    "Multi-step Forms",
    "Images uploaded in Async Storage and Firestore",
    "Users pulled from Firestore API",
    "Google Places Location API",
    "Create Unique Events",
    "Private Messaging",
    "Edit your Profile"


]

    return(
        <div>

            <Project
            title="SeekDo"
            platform="Mobile App"
            technologies={["React Native","NodeJS","Context","Async Data","Firebase","Cloud Functions","FireStore DB","Cloud Storage"]}
            images={["1Splash.png","2PhoneAuth.png","3Form.png","4Form.png","5Find.png","6LocationAPI.png","7Create.png","8message.png","9Profile.png"]}
            legend={list}
            description={["SeekDo is a cross-platform mobile app that works on both iOS and Android, developed using React Native. SeekDo allows users to meet people to do the activities they love with the ease of use that existing dating apps offer.",<br/>,<br/>,"I took advantage of a number of features Google offers to enhance the functionality, these include Firebase Phone Authentication, Firestore DB, Firebase Storage and Google Cloud functions and Google Places API."]}
            ImageStyle={{width:'auto',height:'100%'}}

        
            />
        </div>
    )
}