
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Suspense } from 'react'
import Banner from './Components/Banner/Banner'
function App() {


  return (
    <>

      <Navbar></Navbar>
      <div className='bg-[#f2f4f6] max-h-full'>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Banner> </Banner>
        </Suspense>


        </div>
    </>
  )
}

export default App
