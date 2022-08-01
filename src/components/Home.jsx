import {useState, useEffect} from 'react'
import { FaSistrix } from "react-icons/fa";
import {CountryHome} from './CountryHome'
import Spinner from "./Spinner"
export const Home = ({ themeValue, data}) => {
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
    }, [data])
    

    const [search, setSearch] = useState()
    
    
  return (
    <>

        {loading && <Spinner themeValue={themeValue}/>}
    {
      !loading && <div className='md:mx-10 w-screen mt-2 py-2'>
      <div className="md:flex md:justify-between drop-shadow rounded">
        <span className={themeValue ? "flex self-center items-center py-1 rounded pr-5 px-3 bg-darkBlue " : "flex text-darkBlue bg-white self-center items-center py-1 rounded pr-5 px-3"}><FaSistrix/> 
        <input onChange={event => setSearch(event.target.value)} className={themeValue ? 'md:pl-3 border-none outline-none bg-darkBlue' : 'bg-white md:pl-3 border-none outline-none'} type="search" placeholder="Search for a country"></input></span>
        <span className="md:mr-[100px]"><select className={themeValue ? "flex self-center items-center py-1 rounded outline-none pr-5 px-3 bg-darkBlue" : "flex outline-none text-darkBlue bg-white self-center items-center py-1 rounded pr-5 px-3"} name="countries" id="">
          <option value="volvo">All</option>
          <option value="volvo">Africa</option>
          <option value="saab">America</option>
          <option value="mercedes">Asia</option>
          <option value="audi">Europe</option>
          <option value="volvo">Oceania</option>
        </select>
        </span>
      </div>
 
      {country && <CountryHome  themeValue={themeValue} country={country} search={search} />}
  </div>
    }
    </>
  )
}
