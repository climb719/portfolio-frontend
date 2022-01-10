import { Component } from 'react'

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


    render() {
    return ( 
    <>
    <h1 className="page-heading">Projects!</h1>
    </>
    )
    }
}

export default ProjectIndex