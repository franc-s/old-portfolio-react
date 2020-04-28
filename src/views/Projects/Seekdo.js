import React from 'react';
import Project from '../../components/Project'

export default function Seekdo(){

    return(
        <div>

            <Project
            title="SeekDo"
            platform="Mobile App"
            technologies={["React Native","NodeJS","Context","Async Data","Firebase","Cloud Functions","FireStore DB","Cloud Storage"]}
            images={["testimage.jpeg","testimage.jpeg","testimage.jpeg"]}
            description="Developed an iOS and Android application using React Native that allows users to meet people to do the activities they love.Utilized a number of firebase features including, authentication Google Cloud functions and the Firestore DB to enhance App.Developed Location API to allow users to query/select location "

        
            />
        </div>
    )
}