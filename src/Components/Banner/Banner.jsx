import React from 'react';
import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200  rounded-3xl ">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='space-y-13'>
                    <h1 className="text-5xl font-bold w-[520px] leading-16">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;