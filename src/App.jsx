
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Suspense } from 'react'
import FooterPart from './Components/FooterPart/FooterPart'
import Mainpart from './Components/Mainpart/Mainpart'
import { ToastContainer } from 'react-toastify';

const fetchCustomer = async () => {
  const res = await fetch('/customer.json')
  return res.json();

}


function App() {

const customerPromise = fetchCustomer();


  return (
    <>

      <Navbar></Navbar>
      <div className='bg-[#f2f4f6] max-h-full'>


        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Mainpart promise={customerPromise}></Mainpart>
        </Suspense>



      </div>


      <FooterPart></FooterPart>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>

  )
}

export default App
