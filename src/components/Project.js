import React from 'react'


function Project(props) {

    const { title, description, id, github, demo} = props

    const onGitClick = (id) => {
        console.log(id)
        console.log(github)
        window.open(github, "_blank")
    }

    const onDemoClick = (id) => {
        console.log(id)
        window.open(demo, "_blank")
    }

  
    return (
        <div className="card" id={id} >
         <h2 className ="title">{title}</h2>
            
         <p className="card-text">{description}</p>
         <button id="project-btn" onClick={(e) => onGitClick(id)}>GitHub</button>
         <button id="project-btn" onClick={(e) => onDemoClick(id)}>Demo</button>
       
         
        </div>
        
        )  
    }

       



export default Project
