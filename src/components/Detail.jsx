import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch'
import Spinner from "./Spinner"


export const Detail = ({themeValue}) => {
  const {callingCodes} = useParams()
  const{country, loading} = useFetch("https://restcountries.com/v2/callingcode/" + callingCodes)
  const history = useHistory()
  return (
    <div>
    {loading && <Spinner themeValue={themeValue}/>}
    {loading || <button className={themeValue ? ' h-2/3  drop-shadow-lg bg-darkBlue rounded' : 'h-2/3 flex drop-shadow-lg bg-lwhite py-1 px-1 rounded' } onClick={() => history.go(-1)}>Back</button>}
      {country && (
        <div>{country.map((cstuff) =>(
          <div>{cstuff.name}</div>
        ))}</div>
      )}
    </div>
  )
}
