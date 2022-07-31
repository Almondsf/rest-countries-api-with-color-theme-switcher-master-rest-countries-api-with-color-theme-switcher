import { TailSpin } from  'react-loader-spinner'
const Spinner = ({themeValue}) => {
    return (
       <div className='flex justify-center mt-[200px]'>
         <TailSpin
  height="80"
  width="80"
  color={themeValue ? "#fff" : "grey"}
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
       </div>
    );
}
 
export default Spinner;