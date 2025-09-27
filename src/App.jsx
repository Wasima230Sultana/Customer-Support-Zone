
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Suspense, useState } from 'react'
import Banner from './Components/Banner/Banner'
import CustomerService from './Components/CustomerService/CustomerService'
import FooterPart from './Components/FooterPart/FooterPart'
const fetchCustomer = async () => {
  const res = await fetch('/customer.json')
  return res.json();

}

const customerPromise = fetchCustomer();

function App() {
const [isSelected, setIsSelected] = useState([])
const [inProgress, setInProgress] = useState(0)

  return (
    <>

      <Navbar></Navbar>
      <div className='bg-[#f2f4f6] max-h-full'>
        
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Banner inProgress={inProgress}> </Banner>
          </Suspense>
 
          <Suspense>
            <CustomerService setIsSelected={setIsSelected} isSelected={isSelected} customerPromise={customerPromise} setInProgress={setInProgress} inProgress={inProgress}> </CustomerService>
          </Suspense>
        

      </div>


      <FooterPart></FooterPart>



    </>
  )
}

export default App
