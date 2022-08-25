import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch'
import Spinner from "./Spinner"
import { BiArrowBack } from "react-icons/bi";

export const Detail = ({themeValue}) => {
  const {callingCodes} = useParams()
  const{country, loading} = useFetch("https://restcountries.com/v2/callingcode/" + callingCodes)
  const history = useHistory()
  return (
    <div>
    {loading && <Spinner themeValue={themeValue}/>}
    {loading || <button className={themeValue ? ' drop-shadow-lg bg-darkBlue rounded text-sm flex mt-1 px-2 py-1' : 'text-sm mt-1 flex drop-shadow-lg bg-lwhite py-1 px-2 rounded' } onClick={() => history.go(-1)}><span className='mt-1 mr-1'><BiArrowBack/></span>Back</button>}
      {country && (
        <div>{country.map((cstuff) =>(
          <div>{cstuff.name}</div>
        ))}</div>
      )}
    </div>
  )
}
