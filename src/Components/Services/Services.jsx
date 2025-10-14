import React, {  } from 'react';
const Services = ({ customer, handleSelection }) => {
  
    return (
        <div className="card bg-base-100 card-sm shadow-sm" onClick={() => {handleSelection(customer) }}>
            <div className="card-body">

                <div className='flex justify-between items-center'>
                    <h2 className="card-title text-[#001931]">
                        {customer.title}</h2>

                    <div className=''>
                        <button
                            className={`btn h-7 rounded-2xl ${customer.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : "bg-[#F8F3B9] text-[#9C7700]"
                                }`}
                        >
                            <div
                                className={`w-3 h-3 flex items-center justify-center rounded-full ${customer.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
                                    } text-white font-medium text-xs`}
                            ></div>
                            {customer.status}
                        </button>

                    </div>

                </div>

                <p className='text-[#627382]'>{customer.description}</p>

                <div className='flex justify-between items-center'>

                    <div className='flex items-center'>
                        <p className='mr-3 font-medium text-xs text-[#627382]'>#{customer.id}</p>

                        <p className={`font-medium text-xs ${customer.priority === "HIGH PRIORITY"
                            ? "text-[#F83044]"
                            : customer.priority === "MEDIUM PRIORITY"
                                ? "text-[#FEBB0C]"
                                : "text-[#02A53B]"
                            }`}
                        >
                            {customer.priority}
                        </p>
                    </div>

                    <div className='flex items-center'>
                        <p className='mr-3 font-medium text-xs text-[#627382]'>{customer.customer}</p>
                        <img className='mr-3' src="https://i.ibb.co.com/k6r7djPy/Vector-3.png" alt="" />
                        <p className='mr-3 font-medium text-xs text-[#627382]'>{customer.createdAt}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Services;