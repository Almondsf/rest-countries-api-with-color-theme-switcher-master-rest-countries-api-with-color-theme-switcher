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
      !loading && <div className='mx-10 w-screen mt-2 py-2'>
      <div className="flex justify-between drop-shadow rounded">
        <span className={themeValue ? "flex self-center items-center py-1 rounded pr-5 px-3 bg-darkBlue" : "flex text-darkBlue bg-white self-center items-center py-1 rounded pr-5 px-3"}><FaSistrix/> 
        <input onChange={event => setSearch(event.target.value)} className={themeValue ? 'pl-3 border-none outline-none bg-darkBlue' : 'bg-white pl-3 border-none outline-none'} type="search" placeholder="Search for a country"></input></span>
      </div>
 
      {country && <CountryHome  themeValue={themeValue} country={country} search={search} />}
  </div>
    }
    </>
  )
}
