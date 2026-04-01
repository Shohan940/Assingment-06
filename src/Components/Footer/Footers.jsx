import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footers = () => {
    return (
        <div className='bg-[#101727] text-white p-4'>
            <div className='max-w-300 mx-auto'>
                <div className='flex justify-between mb-8'>
                    <div>
                        <h2>DigiTools</h2>
                        <p>Premium digital tools for creators, <br />professionals, and businesses. Work smarter <br />with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <h2>Products</h2>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Press</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <h2>Resources</h2>
                        <p>Contact</p>
                        <p>Documentation</p>
                        <p>Community</p>
                        <p>Help Center</p>
                    </div>
                    <div>
                        <h2>Social Links</h2>
                        <span className='flex'><FaFacebookSquare /> <FaInstagramSquare /> <FaSquareXTwitter /></span>
                    </div>

                </div>

                <hr/>
                <div className='flex justify-between items-center mt-8'>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footers;