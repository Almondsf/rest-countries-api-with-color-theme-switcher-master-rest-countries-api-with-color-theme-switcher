

export const Head = ({toggleFunc, themeValue}) => {
  return (
    <div className={themeValue ? 'bg-darkBlue drop-shadow-md flex justify-between  px-10 py-3 font-bold font-Nunito' :'drop-shadow-md border-b flex justify-between px-10 py-3 font-bold font-Nunito'}>
        <h2>Where in the world?</h2>
        <h2 className='cursor-pointer' onClick={toggleFunc}><span></span>{themeValue ? 'Light Mode' : 'Dark Mode'}</h2>
    </div>
  );
}
