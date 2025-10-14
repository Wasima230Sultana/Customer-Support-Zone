
const SelectedCard = ({ customer }) => {
  
  return (
        <div className="card card-xs bg-[#E0E7FF] shadow-sm w-80 md:w-full mb-2">
          <div className="card-body ">
            <h2 className='font-medium text-[#001931] '>{customer.title}</h2>
          </div>
        </div>
     
  
  );
};

export default SelectedCard;
