import React from 'react';
import vectorImg from '../../assets/vector1.png'
import vecImg from '../../assets/vector2.png'

const Banner = () => {
    return (
        <div className='max-w-[1000px] mx-auto pt-5 flex flex-wrap justify-between items-center'> 

            <div className='flex justify-between bg-linear-to-r from-[#632EE3] to-[#9F62F2] relative w-120 h-30 rounded-xl'>
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
            
             <div className='flex justify-between bg-linear-to-r from-[#54CF68] to-[#00827A] relative w-120 h-30 rounded-xl'>
              <div>

              <img className='absolute w-full h-full z-0 inset-0' src={vecImg} alt="" />

                  <img className='absolute inset-0 w-full h-full z-10 pr-60' src={vectorImg} alt="" />

                  <div className='absolute inset-0 flex flex-col items-center justify-center z-20 text-center'>

                     <p className='text-white text-xl font-bold'>Resolved</p>
                   <p className='text-white text-sm font-medium'>0</p>
                 
                  </div>
                  
                   <img className='absolute w-full h-full z-10 rotate-y-180 pr-60 inset-0' src={vectorImg} alt="" />

                    
              </div>                                           
            </div>

          </div>
    );
};

export default Banner;