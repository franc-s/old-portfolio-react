import React from 'react';
import Project from '../../components/Project'

export default function HarvestMate(){

    return(
        <div>

            <Project
            title="HarvestMate"
            platform="Web App"
            technologies={["ReactJS","Python","Django","PyTorch","REST","CORS"]}
            images={["testimage.jpeg","testimage.jpeg","testimage.jpeg"]}
            description="HarvestMate was built as a minimum viable product for harvest
            prediction due to a shortage of highly experienced entomologists. I built
             HarvestMate from scratch using React for the front-end and Python’s Django
            framework for the backend. This project utilises a fast.ai pytorch model that
            I trained to predict the variety of 8 different types of apples" 

        
            />
        </div>
    )
}



