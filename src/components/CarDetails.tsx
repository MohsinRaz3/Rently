import React from 'react'
import { CarProps } from '../../types';


interface CarDetailsProps {
    isOpen: boolean;
    closeModel: () => void;
    car: CarProps
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
    return (
        <div>CarDetails</div>
    )
}

export default CarDetails