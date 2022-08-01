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
   <div className="App md:overflow-x-hidden">
      <div className={themeValue ? "min-h-[100vh] bg-vdarkBlue dark:text-white" : "min-h-[100vh] bg-light"}>
       <Head toggleFunc={toggleFunc} themeValue={themeValue}/>
        <Home toggleState={toggleState} themeValue={themeValue}/>
      </div>
   </div>
  );
}

export default App;
