import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch'
import Spinner from "./Spinner"
import { BiArrowBack } from "react-icons/bi";

export const Detail = ({themeValue}) => {
  const {name} = useParams()
  const{country, loading} = useFetch("https://restcountries.com/v2/name/" + name)
  const history = useHistory()
  return (
    <div>
    {loading && <Spinner themeValue={themeValue}/>}
    {loading || <button className={themeValue ? 'my-10 ml-10 drop-shadow-lg bg-darkBlue rounded text-sm flex px-3 py-1 text-center' : 'text-center text-sm my-10 ml-10 flex drop-shadow-lg bg-lwhite py-1 px-3 rounded' } onClick={() => history.go(-1)}><span className='mt-1 mr-1'><BiArrowBack/></span>Back</button>}
      {country && (
        <div>{country.map((cstuff) =>(
          <div className='md:flex md:justify-center md:align-center'>
          <img className='w-[450px] h-[350px] md:mr-16' src={cstuff.flag} alt={cstuff.name}/>
          <div>
            <h1>{cstuff.name}</h1>
            <div className='md:flex'>
              <div>
                <ul>
                <li>Native Name: {cstuff.nativeName}</li>
                <li>Population: {cstuff.population}</li>
                <li>Region: {cstuff.region}</li>
                <li>Sub Region: {cstuff.subregion}</li>
                <li>Capital: {cstuff.capital}</li>
                </ul>
              </div>
              <div className='md:ml-16'>
                <ul>
                <li>Top Level Domain:  {cstuff.topLevelDomain}</li>
                <li>Currencies: {cstuff.currency}</li>
                <li>Languages: {cstuff.lang}</li>
                </ul>
              </div>
            </div>
          </div>
          Not done yet
          </div>
        ))}</div>
      )}
    </div>
  )
}
