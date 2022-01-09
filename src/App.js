import './App.css';
import ProjectIndex from './containers/ProjectIndex';
import Nav from './components/Nav';


function App() {
  return (
   
    <div className="App">
    <Nav />
    <header className="App-header">
       <h1>Portfolio</h1>
    </header> 
    <ProjectIndex />
      
    </div>
  );
}

export default App;


 // <header className="App-header">