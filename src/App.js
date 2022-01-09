import './App.css';
import ProjectIndex from './containers/ProjectIndex';
import {Nav, About, Home}  from './components'
import { Routes, Route } from "react-router-dom"



function App() {
  return (
   
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="projects" element={ <ProjectIndex/> } />
  </Routes>
 
   
    


    </div>
  );
}

export default App;


 // <header className="App-header">
     // <Routes>
    // <Route path= "/" component={Home} />
    // <Route path="/about"><About/></Route>
    // <Route path="/projects"><ProjectIndex/></Route>
    // </Routes>

    // <Routes>
    // <Route path="/" element={<Home />}>
    // <Route path="about" element={<About />} />
    // <Route path="projects" element={<ProjectIndex />} />
    // </Route>
    // </Routes>