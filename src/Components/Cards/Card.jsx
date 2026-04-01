import React, { useState } from 'react';
import GetJsonCard from './GetJsonCard';
import SelectedProduct from './SelectedProduct';

const Card = ({data, selectedProduct, setSelectedProduct, setIsCartView}) => {
    const [product, setProduct] = useState('ok');

    return (
        <div className='max-w-300 mx-auto'>
            <div className='text-center space-y-4 mt-16'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p>
                  Choose from our curated collection of premium digital products designed 
                  <br />to boost your productivity and creativity.
                </p>

                <div className='flex justify-center gap-4 rounded-full'>
                    <button 
                      onClick={() => {setProduct('ok'); setIsCartView(false);}} 
                      className={`btn ${product === 'ok' ? 'bg-[#9514FA] text-white': 'bg-gray-200 text-gray-700'} rounded-full`}
                    >
                      Products
                    </button>

                    <button 
                      onClick={() => {setProduct('cart'); setIsCartView(true);}} 
                      className={`btn ${product === 'cart' ? 'bg-[#9514FA] text-white': 'bg-gray-200 text-gray-700'} rounded-full`}
                    >
                      Cart (0{selectedProduct.length})
                    </button>
                </div>
            </div>

            <div>
                {product === 'ok' ?  
                    <GetJsonCard 
                        getData={data}  
                        selectedProduct={selectedProduct} 
                        setSelectedProduct={setSelectedProduct}
                    /> 
                : 
                    <SelectedProduct 
                        getData={data}   
                        selectedProduct={selectedProduct} 
                        setSelectedProduct={setSelectedProduct}
                    />
                }
            </div>
        </div>
    );
};

export default Card;