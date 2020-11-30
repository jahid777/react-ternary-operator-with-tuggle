import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './Components/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false); //deafult value false rakse

  return (
    <div className="App">
     <h1>Is Familiar : {familiar.toString()}</h1> {/* familiar ar value false hobe ar ata string hisabe asbe */}
      <button onClick={() => setFamiliar (!familiar)}>toggle friend</button>
     <User familiar={familiar}></User> {/*user ar modee fimilar ar value mani false patahyse user components a*/}
    </div>
  );
}

export default App;
