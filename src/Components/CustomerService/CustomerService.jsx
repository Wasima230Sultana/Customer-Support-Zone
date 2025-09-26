import React, { use } from 'react';
import Services from '../Services/Services';
const CustomerService = ({ customerPromise }) => {
    const customerData = use(customerPromise);
    // console.log(customerData)
    return (
        <div className='max-w-[1100px] mx-auto'>
            <h2 className='font-semibold text-xl mt-8'>Customer Tickets</h2>
            <div className=' md:flex pb-8' >
                <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 '>
                    {
                        customerData.map(customer => <Services key={customer.id} customer={customer}></Services>)

                    }
                </div>


                <div className=" text-white p-4 rounded  items-center justify-center w-1/4 ml-3">
                    <div className='mb-3'>
                        <h2 className='text-[#34485A] text-2xl'>Task Status</h2>
                        <p className='text-[#627382] text-xs'>Select a ticket to add to Task Status</p>
                    </div>

                    <div className='pb-7'>
                        <h2 className='text-[#34485A] text-2xl'>Resolved Task</h2>
                        <p className='text-[#627382] text-xs'>No resolved tasks yet.</p>
                    </div>
                </div>
                
            </div>
        </div>

    );
};

export default CustomerService;