import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import Spinner from "./Spinner"


export const Detail = ({themeValue}) => {
  const {callingCodes} = useParams()
  const{country, loading} = useFetch("https://restcountries.com/v2/callingcode/" + callingCodes)
  return (
    <div>
    {loading && <Spinner themeValue={themeValue}/>}
    {loading || <button>Back</button>}
      {country && (
        <div>{country.map((cstuff) =>(
          <div>{cstuff.name}</div>
        ))}</div>
      )}
    </div>
  )
}
