import './App.css';
import ProjectIndex from './containers/ProjectIndex';
import { Nav, About, Home, Skills, Blog, Contact }  from './components'
import { Routes, Route } from "react-router-dom"



function App() {
  return (
   
    <div className="App">
    <Nav />
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="about" element={ <About/> } />
    <Route path="skills" element={ <Skills/> } />
    <Route path="projects" element={ <ProjectIndex/> } />
    <Route path="blog" element={ <Blog/> } />
    <Route path="contact" element={ <Contact/> } />
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