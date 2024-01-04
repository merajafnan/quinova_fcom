import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Modal = () => {
    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">

                <div className="modal-action mt-0 flex flex-col ">

                    <form className="card-body" method='dialog'>

                        <h3 className='font-bold text-lg'>Please Login!</h3>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover mt-1">Forgot password?</a>
                            </label>
                        </div>
                        {/* Error Text */}

                        {/* Login Button */}
                        <div className="form-control mt-6">
                            <input type='submit' value="Login" className="btn bg-green text-white"></input>
                        </div>
                        <p className='text-center my-2'>Don't have an account ? <Link to="/signup" className='underline text-red '> Sign Up! </Link></p>

                    </form>

                    {/* Sign in Via Social Media */}
                    <div className='space-x-3 text-center mb-5'>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaFacebook />
                        </button>
                        <button className="btn btn-circle hover:bg-green hover:text-white">
                            <FaGithub />
                        </button>
                    </div>

                </div>
            </div>
        </dialog>
    )
}

export default Modal