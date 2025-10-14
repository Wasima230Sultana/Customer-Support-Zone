import React, { use, useState } from 'react';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';
import SelectedService from '../SelectedService/SelectedService';
import SelectedCard from '../SelectedCard/SelectedCard';
import { toast } from 'react-toastify';

const Mainpart = ({ promise }) => {
    const data = use(promise);
    const [customerData, setCustomerData] = useState(data);

    const [inProgress, setInProgress] = useState([])
    const [resolved, setResolved] = useState([])

    const handleSelection = (customer) => {

        const isExist = inProgress.find((selected) => selected.id == customer.id);
        if (isExist) {
            toast('Already clicked');
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

        const remainingResolved = customerData.filter((selected) => selected.id !== customer.id)
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
                    <h2 className='font-semibold text-4xl'>Customer Tickets</h2>
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
                   <h2 className='font-semibold text-4xl'>Task Status</h2>
                   <p className='text-[16px] text-[#627382]'>Select a ticket to add to Task Status</p> 
                   <div>
                    {
                        inProgress.map((customer) => (
                            <SelectedService
                            handleProgress = {handleProgress}
                            key={customer.id}
                            customer={customer}
                            >                              
                            </SelectedService>
                        ))
                    }
                   </div>

                <h2 className='font-semibold text-4xl'>Resolved Task</h2>
               <p className='text-[16px] text-[#627382]'>No resolved tasks yet.</p>
                <div>
                    {
                        resolved.map((customer) => (
                            <SelectedCard
                            key={customer.id}
                            customer={customer}
                            >                 
                            </SelectedCard>
                        ))
                    }
                </div>
                </div>
                </div>
               
            </section>
           
           

        </div>
    );
};

export default Mainpart;