import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState, useEffect} from 'react'
import './App.css';
import { Head } from './components/Head';
import { Home } from './components/Home';
import { Detail } from './components/Detail';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const toggleFunc = () => {
    setToggleState(!toggleState)

    localStorage.setItem("theme", JSON.stringify(toggleState))
  };
  const themeValue = JSON.parse(localStorage.getItem("theme"))
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
    const apiUrl = "https://restcountries.com/v2/all";

    useEffect(() =>{
      fetch(apiUrl)

        .then(response =>{
          return response.json();
        })
        .then(data =>{
          setCountry(data)
          setLoading(false)
        })
    }, [])
    
  return (
   <Router>
      <div className={themeValue ? "min-h-[100vh] bg-vdarkBlue dark:text-white" : "min-h-[100vh] bg-light"}>
        <Head toggleFunc={toggleFunc} themeValue={themeValue}/>
        <div>
          <Switch>
            <Route exact path="/"><Home loading={loading} country={country} toggleState={toggleState} themeValue={themeValue}/></Route>
            <Route path="/country/:name"><Detail country={country} themeValue={themeValue}/></Route>
          </Switch>
        </div>
      </div>
   </Router>
  );
}

export default App;