import './App.css';
import ProjectIndex from './containers/ProjectIndex';
import {Nav, About, Home}  from './components'


function App() {
  return (
   
    <div className="App">
    <Nav />
    <Home />
    <About />
    <ProjectIndex />
      
    </div>
  );
}

export default App;


 // <header className="App-header">