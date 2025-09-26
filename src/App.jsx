
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import vectorImg from './assets/vector1.png'
import vecImg from './assets/vector2.png'
function App() {


  return (
    <>

      <Navbar></Navbar>
      <div className='bg-[#dbe1e4] max-h-full'>

        <div className='max-w-[1000px] mx-auto pt-5'> 

            <div className='flex justify-between bg-linear-to-r from-[#632EE3] to-[#9F62F2] relative w-100 h-30 rounded-xl'>
              <div>

              <img className='absolute w-full h-full z-0 inset-0' src={vecImg} alt="" />

                  <img className='absolute inset-0 w-full h-full z-10 pr-60' src={vectorImg} alt="" />

                  <div className='absolute inset-0 flex flex-col items-center justify-center z-20 text-center'>

                     <p className='text-white text-xl font-bold'>In Progress</p>
                   <p className='text-white text-sm font-medium'>0</p>
                 
                  </div>
                  
                   <img className='absolute w-full h-full z-10 rotate-y-180 pr-60 inset-0' src={vectorImg} alt="" />

                    
              </div>                                           
            </div>
            
          </div>
        </div>
    </>
  )
}

export default App
