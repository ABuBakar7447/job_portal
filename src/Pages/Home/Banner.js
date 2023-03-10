import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../Picture/jobbanner22.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-36 lg:h-96 md:h-64" style={{ backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="">
            {/* <h1 className="mb-5 lg:text-4xl md:text-3xl sm:text-2xl font-bold text-yellow-400">Visit The Site &<br/>Find The Best Job For You</h1>
            <Link to='/'>
            <button className="btn btn-primary">Get Started</button>
            </Link> */}
            
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;