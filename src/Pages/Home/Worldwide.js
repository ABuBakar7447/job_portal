import React from 'react';

import pic3 from '../Picture/microsoft.webp'
import pic4 from '../Picture/oracle.jpeg'
import pic5 from '../Picture/google.webp'

const Worldwide = () => {
    return (
        <div>

            <h2 className='text-2xl mt-10 font-bold text-white'>Worlwide Best IT Companies</h2>
            <div className='w-full grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-1 mx-auto my-5 '>

            <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Microsoft</h2>
                        <p className='text-start'> Microsoft Corporation is an American multinational technology </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Oracle</h2>
                        <p className='text-start'>Oracle Corporation is an American multinational computer technology corporation </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-11/12 mx-auto h-72 bg-base-100 shadow-xl">
                    <figure><img src={pic5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Google</h2>
                        <p className='text-start'>Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Visit Now</button>
                        </div>
                    </div>
                </div>
            </div>
                

            </div>
            );
};

            export default Worldwide;