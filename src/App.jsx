
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

        <div className='max-w-[1000px] mx-auto mt-8'>
          <h2>Customer Tickets</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className="card bg-base-100 card-sm shadow-sm">
              <div className="card-body">

                <div className='flex justify-between items-center'>
                  <h2 className="card-title text-[#001931]">Login Issues - Can't Access Account</h2>

                  <div className=''>
                    <button className="btn h-7 rounded-2xl bg-[#B9F8CF] text-[#0B5E06]">
                      <div className="w-3 h-3 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
                      </div>
                      Open
                    </button>
                  </div>

                </div>

                <p className='text-[#627382]'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>

                <div className='flex justify-between items-center'>

                  <div className='flex items-center'>
                    <p className='mr-3 font-medium text-sm text-[#627382]'>#1001</p>
                    <p className='text-[#F83044] font-medium text-sm'>HIGH PRIORITY</p>
                  </div>

                  <div className='flex items-center'>
                    <p className='mr-3 font-medium text-sm text-[#627382]'>John Smith</p>
                    <img className='mr-3' src="https://i.ibb.co.com/k6r7djPy/Vector-3.png" alt="" />
                    <p className='mr-3 font-medium text-sm text-[#627382]'>1/15/2024</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
