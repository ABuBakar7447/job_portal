import React from 'react';
import { Link } from 'react-router-dom';
import Experienced from './Experienced';
import TopIt from './TopIt';
import Worldwide from './Worldwide';

const Fresher = () => {
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                <div className="col-span-3 md:col-span-3 lg:col-span-2 ...">

                <div>
                <h1 className='font-bold text-4xl text-white my-5 underline'>Beginner Level</h1>
                <h1 className='font-bold text-yellow-400 text-xl'>If You Are A Fresher And Searching Job For Intern <br /> Than, This Category Is Best For You.</h1>
                <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>


                    <div className="card w-11/12 bg-gray-800 shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">UI Designer</h2>
                            <div className='text-start'>
                                <p className='font-bold text-orange-600'>Company: <span className='text-white'> Ultra UI Tech LTD </span></p>
                                <p className='font-bold text-orange-600'>Position: <span className='text-white'>UI Designer</span> <span className='text-blue-600'>(Intern)</span></p>
                                <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>



                    <div className="card w-11/12 bg-black shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">Graphics Designer</h2>
                            <div className='text-start'>
                                <p className='font-bold text-orange-600'>Company: <span className='text-white'> Multi Tech LTD </span></p>
                                <p className='font-bold text-orange-600'>Position: <span className='text-white'>Graphics Design</span> <span className='text-blue-600'>(Intern)</span></p>
                                <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>



                    <div className="card w-11/12 bg-gray-800 shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">Front-end Developer</h2>
                            <div className='text-start'>
                                <p className='font-bold text-orange-600'>Company: <span className='text-white'> Star Tech LTD </span></p>
                                <p className='font-bold text-orange-600'>Position: <span className='text-white'>Front-end</span> <span className='text-blue-600'>(Intern)</span></p>
                                <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>




                    <div className="card w-11/12 bg-black shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">UX Designer </h2>
                            <div className='text-start'>
                                <p className='font-bold text-orange-600'>Company: <span className='text-white'> Ultra UI Tech LTD </span></p>
                                <p className='font-bold text-orange-600'>Position: <span className='text-white'>UX Designer</span> <span className='text-blue-600'>(Intern)</span></p>
                                <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>




                    <div className="card w-11/12 bg-gray-800 shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">Software Quality Tester</h2>
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




                    <div className="card w-11/12 bg-black shadow-xl border border-teal-200">
                        <div className="card-body">
                            <h2 className="card-title text-blue-600 font-bold underline">Technical Writer</h2>
                            <div className='text-start'>
                                <p className='font-bold text-orange-600'>Company: <span className='text-white'> Multi Tech LTD </span></p>
                                <p className='font-bold text-orange-600'>Position: <span className='text-white'>Technical Writer</span></p>
                                <p className='font-bold text-orange-600'>Location: <span className='text-white'>Bangladesh</span></p>
                            </div>

                            <div className="card-actions justify-end">
                                <Link to='/details'><button className="btn btn-primary">Apply Now</button></Link>
                            </div>
                        </div>
                    </div>





                </div>

                <button className='btn btn-warning'>View More</button>

            </div>


            <Experienced></Experienced>
                    
                </div>

                <div>
                    <TopIt></TopIt>
                    <Worldwide></Worldwide>
                </div>
            </div>
            
        </div>
    );
};

export default Fresher;