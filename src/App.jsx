import {useState} from 'react'
import './App.css';
import { Head } from './components/Head';
import { Home } from './components/Home';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const toggleFunc = () => {
    setToggleState(!toggleState)

    localStorage.setItem("theme", JSON.stringify(toggleState))
  };
  const themeValue = JSON.parse(localStorage.getItem("theme"))
  return (
   <div className="App overflow-x-hidden">
      <div className={themeValue ? "h-max bg-vdarkBlue dark:text-white" : "h-max bg-light"}>
       <Head toggleFunc={toggleFunc} themeValue={themeValue}/>
        <Home toggleState={toggleState} themeValue={themeValue}/>
      </div>
   </div>
  );
}

export default App;
