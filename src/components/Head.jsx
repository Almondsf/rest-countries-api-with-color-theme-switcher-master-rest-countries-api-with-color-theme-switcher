import {FaRegMoon} from "react-icons/fa";
import { BiSun } from "react-icons/bi";
export const Head = ({toggleFunc, themeValue}) => {
  return (
    <div className={themeValue ? 'bg-darkBlue drop-shadow-md flex justify-between  px-7 py-5 font-bold font-Nunito' :'drop-shadow-md border-b flex justify-between px-10 py-5 font-bold font-Nunito'}>
        <h2>Where in the world?</h2>
        <h2 className='cursor-pointer flex' onClick={toggleFunc}><span className='text-center mt-1 pr-1'>{themeValue? <BiSun/>:<FaRegMoon/>}</span>{themeValue ? 'Light Mode' : 'Dark Mode'}</h2>
    </div>
  );
}
