import {useParams} from 'react-router-dom'
import useFetch from './useFetch'


export const Detail = () => {
  const {callingCodes} = useParams()
  const{country, loading} = useFetch("https://restcountries.com/v2/all/")
  return (
    <div>
      {country && (
        <div>{country.map((cstuff) =>(
          <div>{cstuff.name}</div>
        ))}</div>
      )}
    </div>
  )
}
