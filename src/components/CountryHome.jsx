export const CountryHome = ({ themeValue, country, search}) => {  
  return (
    <div className='md:grid md:grid-cols-4 md:my-14 mx-auto my-5'>
      {country?.filter((cstuff) => {
        return !search ? cstuff : cstuff?.name.toLowerCase().includes(search)
      }).map((cstuff) =>(
        <div className={themeValue ? 'md:h-5/6 h-2/3 my-6 flex flex-col md:w-2/3 drop-shadow-lg bg-darkBlue rounded' : 'md:h-5/6 h-2/3 flex my-6 flex-col md:w-2/3 drop-shadow-lg bg-lwhite rounded' }>
          <span className=' rounded-t h-1/2'><img className='h-5/6 w-full rounded-t' src={cstuff.flags.png} alt={cstuff.name.official}/></span>
        <div className='flex flex-col justify-center pl-3 h-2/3 pb-5 flex-wrap text-sm'>
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
