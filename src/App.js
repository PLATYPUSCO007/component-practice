import logo from './logo.svg';
import './App.css';
import {MyComponent} from './components/MyComponent';
import {SecondComponent} from './components/SecondComponent';
import {ThirdComponent} from './components/ThirdComponent';

function App() {

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
        <MyComponent />
        <SecondComponent />
        <ThirdComponent card={medicalRecord}/>
      </header>
    </div>
  );
}

export default App;
