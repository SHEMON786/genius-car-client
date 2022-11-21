import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mt-12 mb-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={parts} className="w-3/5 right-5 top-1/2 border-t-8 border-l-8 border-base-200 absolute rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2 ml-14 mt-0'>
                    <p className='text-xl font-bold text-orange-600 mb-5'>About Us</p>
                    <h1 className="text-5xl font-bold mb-7">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="w-2/3 text-gray-500 mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="w-2/3 text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600 text-lg px-5 font-semibold border-0 text-white normal-case mt-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;