

export const Head = ({toggleFunc, themeValue}) => {
  return (
    <div className={themeValue ? 'cursor-pointer bg-darkBlue drop-shadow-md flex justify-between px-10 py-3 font-bold font-Nunito' :'drop-shadow-md border-b cursor-pointer flex justify-between px-10 py-3 font-bold font-Nunito'}>
        <h2>Where in the world?</h2>
        <h2 onClick={toggleFunc}><span></span>Dark Mode</h2>
    </div>
  );
}
