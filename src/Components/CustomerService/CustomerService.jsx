import React, { use } from 'react';
import Services from '../Services/Services';
const CustomerService = ({ customerPromise }) => {
    const customerData = use(customerPromise);
    // console.log(customerData)
    return (
        <div className='max-w-[1000px] mx-auto'>
            <h2 className='font-semibold text-xl mt-8'>Customer Tickets</h2>
            <div className=' mt-8 grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    customerData.map(customer => <Services customer={customer}></Services>
                    
                )

                }



            </div>
        </div>

    );
};

export default CustomerService;