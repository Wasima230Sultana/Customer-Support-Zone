import React from 'react';
import SelectedService from '../SelectedService/SelectedService';
const SelectedCard = ({ customer, isSelected,resolved, setResolved }) => {
    const handleResolve = () =>{
      setResolved(resolved + 1);
      
    }
  return (
        <div className="card bg-base-100 card-xs shadow-sm w-80 md:w-full mb-2">
          <div className="card-body ">
            <h2 className="card-title text-[#001931]">{customer.title}</h2>
            <div className="mt-2">
              <button onClick={() => (handleResolve())} className="btn bg-[#02A53B] btn-block">Complete</button>
            </div>
          </div>
        </div>
     
  
  );
};

export default SelectedCard;
