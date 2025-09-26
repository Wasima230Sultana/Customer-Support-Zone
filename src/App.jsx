
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Suspense } from 'react'
import Banner from './Components/Banner/Banner'
import CustomerService from './Components/CustomerService/CustomerService'

const fetchCustomer = async () => {
  const res = await fetch('/customer.json')
  return res.json();

}

const customerPromise = fetchCustomer();

function App() {


  return (
    <>

      <Navbar></Navbar>
      <div className='bg-[#f2f4f6] max-h-full'>
        
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Banner> </Banner>
          </Suspense>
 
          <Suspense>
            <CustomerService customerPromise={customerPromise}> </CustomerService>
          </Suspense>
        

      </div>


    </>
  )
}

export default App
