import React from 'react';
import { Link } from 'react-router-dom';

const Experienced = () => {
    return (
        <div>
            <h1 className='font-bold text-4xl text-red-600 my-5 underline'>Experienced Sector</h1>
            <h1 className='font-bold text-xl'>If You Have Experience<br/> Than, They Are Looking For You.</h1>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                
                
                <div className="card w-11/12 bg-blue-400 shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold underline">UI Designer</h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-white'> Ultra UI Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-white'>UI Designer</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>



                <div className="card w-11/12 bg-white shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 font-bold underline">Graphics Designer</h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-black'> Multi Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-black'>Graphics Design</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-black'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>



                <div className="card w-11/12 bg-blue-400 shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold underline">Front-end Developer</h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-white'> Star Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-white'>Front-end</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>




                <div className="card w-11/12 bg-white shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 font-bold underline">UX Designer </h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-black'> Ultra UI Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-black'>UX Designer</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-black'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>




                <div className="card w-11/12 bg-blue-400 shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold underline">Software Quality Tester</h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-white'> Asus Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-white'>Software Quality Tester</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>




                <div className="card w-11/12 bg-white shadow-xl border border-teal-200">
                    <div className="card-body">
                        <h2 className="card-title text-blue-600 font-bold underline">Technical Writer</h2>
                        <div className='text-start'>
                        <p className='font-bold text-orange-600'>Company: <span className='text-black'> Multi Tech LTD </span></p>
                        <p className='font-bold text-orange-600'>Position: <span className='text-black'>Technical Writer</span></p>
                        <p className='font-bold text-orange-600'>Location: <span className='text-black'>Bangladesh</span></p>
                        </div>
                        
                        <div className="card-actions justify-end">
                            <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                        </div>
                    </div>
                </div>



                
                
            </div>

            <button className='btn btn-warning'>View More</button>
            
        </div>
    );
};

export default Experienced;