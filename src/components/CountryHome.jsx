export const CountryHome = ({ themeValue, country, search, region}) => {  
  return (
    <div className='md:grid md:grid-cols-4 md:my-5 mx-auto my-5'>
      {country?.filter((cstuff) => 
        search || region ? (search && cstuff?.name.toLowerCase().includes(search)) || (region && cstuff?.region === region) : cstuff 
      ).map((cstuff) =>(
        <div className={themeValue ? 'md:h-5/6 mx-5 h-2/3 my-6 flex flex-col  drop-shadow-lg bg-darkBlue rounded' : ' mx-5 md:h-5/6 h-2/3 flex my-6 flex-col  drop-shadow-lg bg-lwhite rounded' }>
          <span className=' rounded-t md:h-1/2'><img className='md:h-5/6 w-full rounded-t' src={cstuff.flags.png} alt={cstuff.name.official}/></span>
        <div className='flex flex-col justify-center pl-3 md:h-2/3 pb-2 flex-wrap text-sm'>
          <span>{cstuff.name}</span>
          <span>Population: {cstuff.population}</span>
          <span>Region: {cstuff.region}</span>
          <span>Capital: {cstuff.capital}</span>
        </div>
      </div>
      ))}
    </div>
  )
}
