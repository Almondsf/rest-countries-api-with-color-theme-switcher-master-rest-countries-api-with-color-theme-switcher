import {useState, useEffect} from 'react'
import { FaSistrix } from "react-icons/fa";
import {CountryHome} from './CountryHome'
import Spinner from "./Spinner"
export const Home = ({ themeValue, data, country, loading}) => {
    const [search, setSearch] = useState(null)
    const [region, setRegion] = useState(null)
    
  return (
    <>
      {loading && <Spinner themeValue={themeValue}/>}
    {
      !loading && <div className='mx-6 mt-2 py-5'>
      <div className="md:flex md:justify-between drop-shadow rounded">
        <span className={themeValue ? "flex self-center items-center py-3 rounded md:pr-5 px-3 bg-darkBlue mb-4" : "mb-4 flex text-darkBlue bg-white self-center items-center py-3 rounded md:pr-5 px-3"}><FaSistrix/> 
        <input onChange={event => setSearch(event.target.value)} className={themeValue ? 'md:pl-3 border-none outline-none bg-darkBlue' : 'bg-white md:pl-3 border-none outline-none'} type="search" placeholder="Search for a country"></input></span>
        <span className=""><select onChange={event => setRegion(event.target.value)} className={themeValue ? "flex self-center items-center py-3 rounded outline-none pr-3 px-3 bg-darkBlue" : "flex outline-none text-darkBlue bg-white self-center items-center py-3 rounded pr-3 px-3"} name="countries" id="">
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        </span>
      </div>
 
      {country && <CountryHome  themeValue={themeValue} country={country} search={search} region={region}/>}
  </div>
    }
    </>
  )
}
