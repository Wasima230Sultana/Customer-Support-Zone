import React, { use, useState } from 'react';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';
const Mainpart = ({ customerPromise }) => {
    const data = use(customerPromise);
    const [customerData, setCustomerData] = useState(data);

    const [inProgress, setInProgress] = useState([])
    const [resolved, setResolved] = useState([])

    const handleSelection = (customer) => {

        const isExist = inProgress.find((selected) => selected.id == customer.id);
        if (isExist) {
            alert('Already clicked');
            return;
        }
        const newSelection = [...inProgress, customer]
        setInProgress(newSelection)
    }
    const handleProgress = (customer) => {
        const newProgress = [...resolved, customer]
        setResolved(newProgress);

        const remainingSelection = inProgress.filter((selected => selected.id !== customer.id));
        setInProgress(remainingSelection)

        const remainingResolved = customerData.filter((selected) => selected.id !== customerData.id)
        setCustomerData(remainingResolved);
    }



    return (
        <div>
            <Banner
                resolved={resolved.length}
                inProgress={inProgress.length}
            > </Banner>

            <section className='w-11/12 mx-auto '>
                <div className='py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                     <div className=' lg:col-span-9 space-y-5'>
                    <h2 className='font-bold text-4xl'>services</h2>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            customerData.map((customer) => (
                                <Services
                                handleSelection = {handleSelection}
                                key={customer.id}
                                customer={customer}
                                ></Services>
                            ))
                        }
                    </div>
                </div>


                <div className='lg:col-span-3 space-y-5'>
                   <h2>selection and complete</h2> 
                </div>
                </div>
               
            </section>
           
           

        </div>
    );
};

export default Mainpart;