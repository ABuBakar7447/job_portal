import React from 'react';
import { Link } from 'react-router-dom';

const Apply = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                        <form className="card-body">
                            <h1 className="text-4xl text-center font-bold">Provide Your Information</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="password" name='password' placeholder="number" className="input input-bordered" required />
                            </div>


                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;