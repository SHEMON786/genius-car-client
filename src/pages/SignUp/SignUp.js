import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
                alert('Logged In With Google');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-700 py-10 border">
                    <h1 className="text-5xl text-center font-bold mb-3 text-orange-600">Sign Up</h1>
                    <Form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="********" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success text-slate-900 normal-case text-xl font-semibold" type="submit" value="Sign Up" />
                        </div>
                    </Form>
                    <div>
                        <p className='text-base font-medium text-center'>Or Sign Up With</p>
                        <div className='flex justify-center items-center text-5xl my-4'>
                            <FaGoogle onClick={handleGoogleSignIn} className='bg-gray-100 rounded-full p-3 text-zinc-700' />
                            <FaFacebook className='mx-7 bg-gray-100 rounded-full p-3 text-blue-600' />
                            <FaGithub className='bg-gray-100 rounded-full p-3' />
                        </div>
                    </div>
                    <p className='text-center text-base'>Already have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;