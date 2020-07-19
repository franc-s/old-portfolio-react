import React from 'react';
import Project from '../../components/Project'

export default function Seekdo(){

    let list = [
    "Built in React Native",
    "Phone Authentication",
    "Multi-step Forms",
    "Push Notifications",
    "Custom Splash Screens",
    "Image caching",
    "Find people to do activities",
    "Dynamic content from Firestore API",
    "Create unique events",
    "Private messaging and matching algorithm",
    "Google Places Location API",
    "Edit your Profile"
]

    return(
        <div>

            <Project
            title="SeekDo"
            platform="Mobile App"
            technologies={["React Native","NodeJS","Context","Async Data","Firebase","Cloud Functions","FireStore DB","Cloud Storage"]}
            images={["1.png","2.png","4.png","5.png","6.png","7.png","9.png","10.png","12.png","13.png","14.png","16.png",]}
            legend={list}
            description={["SeekDo is a cross-platform mobile app that works on both iOS and Android, developed using React Native. SeekDo allows users to meet people to do the activities they love with the ease of use that existing dating apps offer.",<br/>,<br/>,"I took advantage of a number of features Google offers to enhance the functionality, these include Firebase Phone Authentication, Firestore DB, Firebase Storage and Google Cloud functions and Google Places API."]}
            ImageStyle={{width:'auto',height:'100%'}}

        
            />
        </div>
    )
}