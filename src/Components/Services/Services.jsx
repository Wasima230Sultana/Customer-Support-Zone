import React from 'react';
import CustomerService from '../CustomerService/CustomerService';
const Services = ({customer}) => {
    return (
         <div className=''>
                        <div className="card bg-base-100 card-sm shadow-sm">
                            <div className="card-body">

                                <div className='flex justify-between items-center'>
                                    <h2 className="card-title text-[#001931]">{customer.title}</h2>

                                    <div className=''>
                                        <button className="btn h-7 rounded-2xl bg-[#B9F8CF] text-[#0B5E06]">
                                            <div className="w-3 h-3 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
                                            </div>
                                            {customer.status}
                                        </button>
                                    </div>

                                </div>

                                <p className='text-[#627382]'>{customer.description}</p>

                                <div className='flex justify-between items-center'>

                                    <div className='flex items-center'>
                                        <p className='mr-3 font-medium text-sm text-[#627382]'>#  {customer.id}</p>
                                        <p className='text-[#F83044] font-medium text-sm'>{customer.priority}</p>
                                    </div>

                                    <div className='flex items-center'>
                                        <p className='mr-3 font-medium text-sm text-[#627382]'>{customer.customer}</p>
                                        <img className='mr-3' src="https://i.ibb.co.com/k6r7djPy/Vector-3.png" alt="" />
                                        <p className='mr-3 font-medium text-sm text-[#627382]'>{customer.createdAt}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
    );
};

export default Services;