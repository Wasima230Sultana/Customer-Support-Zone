import React from 'react';

const FooterPart = () => {
    return (
        <div className='bg-[#000000] min-h-96'>
        
      <div className='max-w-[1100px] mx-auto text-[#ffffff] grid grid-col-1 md:grid-cols-5 gap-5 border-b-1 border-gray-700 p-8'>
        <div className='space-y-2'>
          <h1 className='font-bold text-xl'>CS — Ticket System</h1>
          <p className='text-[#A1A1AA] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div className='space-y-2'>
          <h1 className='font-medium text-xl'>Company</h1>
          <div className='flex flex-col text-[#A1A1AA] text-sm space-y-2'>
            <a  href="">About Us</a>
            <a href="">Our Mission</a>
            <a href="">Contact Saled</a>
          </div>
        </div>

         <div className='space-y-2'>
          <h1 className='font-medium text-xl'>Services</h1>
          <div  className='flex flex-col text-[#A1A1AA] text-sm space-y-2'>
            <a href="">Products & Services</a>
            <a href="">Customer Stories</a>
            <a href="">Download Apps</a>
          </div>
        </div>

         <div className='space-y-2'>
          <h1 className='font-medium text-xl'>Information</h1>
          <div  className='flex flex-col text-[#A1A1AA] text-sm space-y-2'>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Join Us</a>
          </div>
        </div>
        
        <div className='space-y-2'>
          <h1 className='font-medium text-xl'>Social Links</h1>
          <div className='text-[#A1A1AA] text-sm space-y-2'>
            <div className='flex items-center '>
              <img className='w-4 h-4 mr-2' src="https://i.ibb.co.com/FL1GLwvy/fi-5969020.png" alt="" />
              <p>@CS — Ticket System</p>
            </div>
              
                <div className='flex items-center'>
              <img className='w-4 h-4 mr-2' src="https://i.ibb.co.com/QF5dsZxq/fi-145807.png" alt="" />
              <p>@CS — Ticket System</p>
            </div>

              <div  className='flex items-center '>
              <img className='w-4 h-4 mr-2' src="https://i.ibb.co.com/jP44X8cV/Group.png" alt="" />
              <p>@CS — Ticket System</p>
            </div>
             
              <div  className='flex items-center '>
              <img className='w-4 h-4 mr-2' src="https://i.ibb.co.com/KxGS7JcY/fi-6244710.png" alt="" />
              <p>support@cst.com</p>
            </div>

          </div>
        </div>
      </div>

      <div className='text-sm flex items-center justify-center text-[#FAFAFA] p-3'>
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
      </div>
    );
};

export default FooterPart;