import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedService = ({customerData,isSelected}) => {
    return (

        customerData.map(customer=> <SelectedCard customer={customer}></SelectedCard>
            )

        
    );
};

export default SelectedService;