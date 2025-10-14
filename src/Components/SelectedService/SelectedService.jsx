import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedService = ({isSelected,resolved,setResolved}) => {
    return (

        isSelected.map(customer=> <SelectedCard customer={customer} isSelected={isSelected} resolved={resolved} setResolved={setResolved}></SelectedCard>
            )

        
    );
};

export default SelectedService;