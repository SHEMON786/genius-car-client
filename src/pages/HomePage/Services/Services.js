import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const searchRef = useRef();
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:7007/services?search=${search}&order=${isAsc ? 'asc' : 'dsc'}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600'>Service</p>
                <h1 className='font-bold text-5xl my-5'>Our Service Area</h1>
                <p className='text-gray-500 w-1/2 mx-auto mb-12'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='flex justify-center'>
                <input ref={searchRef} type="text" placeholder="Type here" className="input input-bordered input-sm mr-3" />
                <button onClick={handleSearch} className="btn btn-success btn-sm btn-outline normal-case">Search</button>
            </div>
            <div className='mb-10 flex justify-end mr-11'>
                <button onClick={() => setIsAsc(!isAsc)} className="btn btn-outline normal-case">{isAsc ? 'Price: Low > High' : 'Price: High > Low'}</button>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-12 flex justify-center items-center'>
                <button className="btn bg-orange-600 text-lg px-5 font-semibold border-0 text-white normal-case">More Services</button>
            </div>
        </div>
    );
};

export default Services;