export const CountryHome = ({ themeValue, country, search}) => {  
  return (
    <div className='grid grid-cols-4 w-screen my-14 '>
      {country?.filter((cstuff) => {
        return !search ? cstuff : cstuff?.name.toLowerCase().includes(search)
      }).map((cstuff) =>(
        <div className={themeValue ? 'h-5/6 flex flex-col w-2/3  drop-shadow-lg bg-darkBlue rounded' : 'h-5/6 flex flex-col w-2/3 drop-shadow-lg bg-lwhite rounded' }>
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
