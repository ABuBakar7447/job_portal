import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../Picture/tiger-it-bangladesh.png'
import pic2 from '../Picture/leadsoft.jpg'
import pic3 from '../Picture/KAZ.png'

const TopIt = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-white'>Top IT Companies <br/>In Bangladesh</h2>
            <div className='w-full grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto my-5 '>

                <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">TigerITBD</h2>
                        <p className='text-start'>Tiger it has 10 years of experience working in software development.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">LeadSoft</h2>
                        <p className='text-start'>The mission of the company is to realize the customer’s business and delivery result through their experience.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>


                <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">KAZ Software</h2>
                        <p className='text-start'> It is one of the leading custom software companies in Bangladesh in order to create ordinary software.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>



        

            </div>
        </div>
    );
};

export default TopIt;