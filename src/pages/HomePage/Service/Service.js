import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, img, title, price } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[314px] h-[210px] rounded-md' src={img} alt="Shoes" /></figure>
            <div className="card-body mx-6">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className='text-orange-600  flex justify-between'>
                    <p className='font-semibold text-xl'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <HiArrowNarrowRight className='font-semibold text-2xl'></HiArrowNarrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;