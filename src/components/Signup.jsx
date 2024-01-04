import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import Modal from './Modal';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div className='max-w-md bg-white shadow w-full mx-auto flex item center justify-center my-20'>
            <div className="modal-action mt-0 flex flex-col ">

                <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>

                    <h3 className='font-bold text-lg'>Sign UP</h3>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                            {...register("email")}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                            {...register("password")}
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover mt-1">Forgot password?</a>
                        </label>
                    </div>
                    {/* Error Text */}

                    {/* Login Button */}
                    <div className="form-control mt-6">
                        <input type='submit' value="Create an Account" className="btn bg-green text-white"></input>
                    </div>
                    <p className='text-center my-2'>Have an account ?
                        <button className='underline text-red'
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >
                            Login
                        </button>
                    </p>

                    {/* Close Button */}
                    <Link
                        to="/"
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </Link>

                </form>

                {/* Sign in Via Social Media */}
                <div className='space-x-3 text-center mb-5'>
                    <button className="btn btn-circle hover:bg-green hover:text-white text-xl">
                        <FaGoogle />
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-white text-xl">
                        <FaFacebook />
                    </button>
                    <button className="btn btn-circle hover:bg-green hover:text-white text-xl">
                        <FaGithub />
                    </button>
                </div>

            </div>
            <Modal></Modal>
        </div>

    )
}

export default Signup