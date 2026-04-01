import React from 'react';
import banner from '../../assets/banner.png'
import { IoPlayOutline } from 'react-icons/io5'

const Hero = () => {
    return (
        <div>
            <div className='flex height-[700px] max-w-300 mx-auto items-center justify-between gap-5 mt-10'>
                <div className='space-y-4'>
                    <button className='btn rounded-full text-[#9514FA] bg-[#E1E7FF]'>New: AI-Powered Tools Available</button>
                    <h1 className='text-6xl font-bold'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-gray-100'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />Explore Products
                    </p>
                    <div className='flex gap-5'>
                        <a className="btn rounded-full bg-gradient-to-r from-[#9514FA] to-[#4F39F6]">Explore Products</a>
                        <button className="btn btn-outline rounded-full btn-primary"><IoPlayOutline /> Primary</button>
                    </div>
                </div>
                <div><img className='h-125' src={banner} alt="Banner" /></div>
            </div>

            <div className='bg-gradient-to-r from-[#9514FA] to-[#4F39F6] text-white py-10 mt-10'>
                <div className='flex text-center items-center justify-around gap-10 max-w-300 mx-auto'>
                    <div>
                        <span className='text-5xl font-bold'>50k+</span>
                        <p>Active Users</p>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <span className='text-5xl font-bold'>100+</span>
                        <p>Premium Tools</p>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <span className='text-5xl font-bold'>4.8/5</span>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;