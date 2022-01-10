import { Component } from 'react'
import Project from '../components/Project'

class ProjectIndex extends Component {

    state = {
       projects: []
    }

    componentDidMount() {
        const url ="http://localhost:3000/projects"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
            //console.log(data)
            this.setState({
                projects: data
            })
        })
    }

    makeProjectCards() {
        let projects = this.state.projects 
        return projects.map(project => <Project key={project.id} id={project.id} title={project.title} description={project.description} github={project.github} demo={project.demo}/>)
    }


    render() {
    return ( 
    <>
    <h1 className="page-heading">Projects!</h1>
    <div className="card-container">
    {this.makeProjectCards()}
    </div>
    </>
    )
    }
}

export default ProjectIndex