import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName'; 
import Pessoa from './components/Pessoa';

function App() {

  const name = "Matheus"

  return (
    <div className="App">
      
      <HelloWord/>
      <SayMyName name="Jullia" />
      <SayMyName name="Lucas" />
      <SayMyName name="Maria" />
      <SayMyName name="Cleyton" />
      <SayMyName name={name} />

      <Pessoa 
      nome="Jullia Kathelyn"
      idade="22"
      profissao="programadora"
      foto="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg" />
      
    </div>
  );
}

export default App;
