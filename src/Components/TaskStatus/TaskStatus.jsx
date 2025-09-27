import React from 'react';
import CustomerService from '../CustomerService/CustomerService';
const TaskStatus = () => {
    return (
        <div className=" text-white p-4 rounded  items-center justify-center w-1/4 ml-3">
            <div className='mb-5'>
                <h2 className='text-[#34485A] text-2xl'>Task Status</h2>
                <p className='text-[#627382] text-xs'>Select a ticket to add to Task Status</p>
            </div>

           


            <div className='pb-7'>
                <h2 className='text-[#34485A] text-2xl'>Resolved Task</h2>
                <p className='text-[#627382] text-xs'>No resolved tasks yet.</p>
            </div>


        </div>
    );
};

export default TaskStatus;