import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing <br />
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white font-normal text-lg'>
                    There are many variations of passages of  available, But <br />
                    The majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning text-lg mr-5 normal-case">Discover More</button>
                <button className="btn btn-outline btn-info text-lg normal-case">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;