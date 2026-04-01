// import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SelectedProduct from './SelectedProduct';

const GetJsonCard = ({ getData, setSelectedProduct,selectedProduct }) => {
    
    
    const handleClick = (id) => {
        const product = getData.find((product) => product.id === id);

        
       setSelectedProduct(prev => 
        prev.find(p => p.id === id) ? prev : [...prev, product]
       );
       toast(`${product.name} has been selected!`);

    };
    
    
    return (
        <div>
            <div className='grid sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {getData.map((products) => {
                    return (
                        <div key={products.id} className="card w-96 bg-base-100 shadow-sm ">
                            <div className="card-body bg-[#9514FA] rounded">
                                <div className='flex justify-between items-center'>
                                    <img src={products.productImg} alt={products.name} />
                                    <span className="badge badge-xs badge-warning">{products.badge}</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{products.name}</h2>
                                    <p>{products.description}</p>
                                    <span className="text-xl"><span className='text-4xl font-bold'>${products.price}</span>/{products.billing}</span>
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
                                    <button onClick={() => handleClick(products.id)} className="btn bg-white text-[#9514FA] rounded-full btn-block hover:bg-black hover:text-white">{selectedProduct.includes(products.id) ? 'In Cart' : 'Buy Now'}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default GetJsonCard;
