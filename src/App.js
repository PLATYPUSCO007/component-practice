import logo from './logo.svg';
import './App.css';
import {MyComponent} from './components/MyComponent';
import {SecondComponent} from './components/SecondComponent';
import {ThirdComponent} from './components/ThirdComponent';
import {FourthComponent} from './components/FourthComponent';
import {Child} from './components/Child';
import { useState } from 'react';

function App() {

  const addMessage = (msj)=>{
    console.log(msj);
    setMsg(msj);
  }

  const [name, setname] = useState('Ricardo');
  const [msg, setMsg] = useState();

  const medicalRecord = {
    height: '1.71',
    rh: 'O+',
    allergies: 'Polvo'
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <h4>Mensaje del Hijo</h4>
        <pre>{msg}</pre>
        <Child name={name} addMessage={addMessage} setMsg={setMsg}/>
        <FourthComponent />
        <MyComponent />
        <SecondComponent />
        <ThirdComponent card={medicalRecord}/>
      </header>
    </div>
  );
}

export default App;
