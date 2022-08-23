import {useState, useEffect} from 'react'

const useFetch = (apiUrl) => {
    const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
    

    useEffect(() =>{
      fetch(apiUrl)

        .then(response =>{
          return response.json();
        })
        .then(data =>{
          setCountry(data)
          setLoading(false)
        })
    }, [apiUrl])
  
  return {country, loading}
}

export default useFetch