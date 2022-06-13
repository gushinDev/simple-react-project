import './App.css';
import { useState } from 'react';





function App() {

  const [init, setInit] = useState('Initial');

  async function getData() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const promise = await fetch("localhost:3000", options);
    const data = await promise.json();
    setInit(data)
  } 
  
  getData();
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{init}</h1>
      </header>
    </div>
  );
}

export default App;
