import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';


const Modal = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { signUpWithGoogle, login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("")

    // redirecting to homepage or specific page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";



    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        // console.log(email,password);
        login(email, password).then((result) => {
            const user = result.user;
            alert("Login Sucessfully")
            document.getElementById('my_modal_5').close()
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage("Incorrect Email/Password")
        })
    }

    // Google Sign In
    const handleLogin = () => {
        signUpWithGoogle().then((result) => {
            const user = result.user;
            alert("Login Sucessfully")
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setErrorMessage("Incorrect Email/Password")
        })
    }
  
    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box">

                <div className="modal-action mt-0 flex flex-col ">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method='dialog'>

                        <h3 className='font-bold text-lg'>Please Login!</h3>

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
                        {
                            errorMessage ? <p className='text-red text-xs italic'>{errorMessage}</p> : ""
                        }

                        {/* Login Button */}
                        <div className="form-control mt-6">
                            <input type='submit' value="Login" className="btn bg-green text-white"></input>
                        </div>
                        <p className='text-center my-2'>Don't have an account ? <Link to="/signup" className='underline text-red '> Sign Up! </Link></p>

                        {/* Close Button */}
                        <button
                            htmlFor="my_modal_5"
                            onClick={() => document.getElementById('my_modal_5').close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                    </form>

                    {/* Sign in Via Social Media */}
                    <div className='space-x-3 text-center mb-5'>
                        <button className="btn btn-circle hover:bg-green hover:text-white text-xl" onClick={handleLogin}>
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
            </div>
        </dialog>
    )
}

export default Modal