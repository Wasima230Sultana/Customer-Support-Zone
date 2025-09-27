import React, { Suspense, use, useState } from 'react';
import Services from '../Services/Services';
import TaskStatus from '../TaskStatus/TaskStatus';
import SelectedService from '../SelectedService/SelectedService';
const CustomerService = ({ customerPromise,setInProgress,inProgress,setIsSelected, isSelected}) => {
    const customerData = use(customerPromise);
    // console.log(customerData)
    
    return (
        <div className='max-w-[1100px] mx-auto'>
            <h2 className='font-semibold text-xl mt-8'>Customer Tickets</h2>
            <div className=' md:flex pb-8' >
                <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        customerData.map(customer => <Services key={customer.id} customer={customer} setInProgress={setInProgress} inProgress={inProgress} isSelected={isSelected} setIsSelected={setIsSelected}></Services>)

                    }
                </div>
               <Suspense><SelectedService customerData={customerData} isSelected={isSelected}></SelectedService></Suspense>
               
               <TaskStatus></TaskStatus>

                
                
                
                
                
                
            </div>
        </div>

    );
};

export default CustomerService;