import React from 'react';
import Project from '../../components/Project'

export default function HarvestMate(){

    return(
        <div>

            <Project
            title="HarvestMate"
            platform="Web App"
            technologies={["ReactJS","Python","Django","PyTorch","REST","CORS"]}
            images={["H1.png","H2.png","H3.png","H4.png"]}
            legend={["Built in React","Image Recognition","Multistep Form","Developed Model with Google Colab"]}
 

           description={["HarvestMate is a Web App built using ReactJS for the front-end and Python’s Django framework for the backend. I built HarvestMate  as a minimum viable product for harvest prediction due to a shortage of highly experienced entomologists.",<br/>,<br/>,"This project utilises a fast.ai PyTorch model that I trained to predict the variety of 8 different types of apples. I took advantage of Google Collab’s free GPU facility to speed up my modelling. "]}
            ImageStyle={{width:'100%',height:'50%'}}

        
            />
        </div>
    )
}



