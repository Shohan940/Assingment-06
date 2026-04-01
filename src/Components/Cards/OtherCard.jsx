import React from 'react';
import Person from '../../assets/user.png'
import Box from '../../assets/package.png'
import Roc from '../../assets/rocket.png'

const OtherCard = () => {
    return (
        <div className='my-20 max-w-300 mx-auto'>
            <div>
                <h1 className='text-4xl text-center'>Get Started in 3 Steps</h1>
            </div>
            <div className='flex justify-center items-center gap-10 mt-10'>


                <div className='card shadow bg-base-100 w-96 space-y-4 border border-amber-400 p-4'>
                    <div className='flex justify-center items-center h-6 w-6 border rounded-full bg-[#4f39f6]'><span>01</span></div>
                    <div className='flex items-center justify-center'>
                        <img className='h-20 w-20' src={Person} alt="User" />
                    </div>
                    <h2 className='text-2xl text-center'>Create Account</h2>
                    <p className='text-center'>Sign up for free in seconds. No credit card <br />required to get started.</p>
                </div>

                <div className='card shadow bg-base-100 w-96 space-y-4 border border-amber-400 p-4 '>
                    <div className='flex justify-center items-center h-6 w-6 border rounded-full bg-[#4f39f6]'><span>02</span></div>
                    <div className='flex items-center justify-center'>
                        <img className='h-20 w-20' src={Box} alt="Package" />
                    </div>
                    <h2 className='text-2xl text-center'>Choose Products</h2>
                    <p className='text-center'>Browse our catalog and select the tools <br />that fit your needs.</p>
                </div>

                <div className='card shadow bg-base-100 w-96 space-y-4 border border-amber-400 p-4'>
                    <div className='flex justify-center items-center h-6 w-6 border rounded-full bg-[#4f39f6]'><span>03</span></div>
                    <div className='flex items-center justify-center'>
                        <img className='h-20 w-20' src={Roc} alt="Rocket" />
                    </div>
                    <h2 className='text-2xl text-center'>Start Creating</h2>
                    <p className='text-center'>Download and start using your premium <br />tools immediately.</p>
                </div>

            </div>


            <div >
                <div className='text-center mt-20 space-y-3'>
                    <h1 className='text-5xl'>Simple, Transparent Pricing</h1>
                    <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div>
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p>For teams and businesses</p>
                                <span className="text-xl"><span className='text-4xl'>$0</span>/month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                               
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary rounded-full btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body bg-[#9514FA]">
                            <span className="badge badge-xs badge-warning">Most Popular</span>
                            <div>
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <p>Best for professionals</p>
                                <span className="text-xl"><span className='text-4xl font-bold'>$29</span>/month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                                
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-white text-[#9514FA] rounded-full btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div>
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p>For teams and businesses</p>
                                <span className="text-xl"><span className='text-4xl'>$99</span>/month</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                               
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary rounded-full btn-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OtherCard;