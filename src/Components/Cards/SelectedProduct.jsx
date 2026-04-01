import { toast } from "react-toastify";


const SelectedProduct = ({ selectedProduct, setSelectedProduct }) => {

    return (

        <div>
            <h1 className='text-2xl  mt-10'>Your Cart</h1>
            {selectedProduct.length === 0 ? <p className='text-center mt-10'>Your cart is empty.</p> : selectedProduct.map((product) => (

                <div key={product.id} className='max-w-300 mx-auto'>

                    <div className=" bg-base-100 shadow mt-3 flex justify-between items-center p-10 border rounded">
                        <div className="flex items-center gap-4">
                            <img className="w-8 h-8" src="https://i.ibb.co.com/Xr3YZGrZ/writing-2327400-1.png" alt="" />
                            <div>
                                <h1>{product.name}</h1>
                                <p>${product.price}</p>
                            </div>
                        </div>
                        <button className="btn btn-error" onClick={() =>
                            {setSelectedProduct(prev => prev.filter(p => p.id !== product.id))
                            toast(`${product.name} has been removed from the cart!`, { type: "error" });}}>Delete</button>
                    </div>





                </div>

            ))}
            <div className="flex justify-between items-center mt-3">
                <p>Total</p>
                <p>${selectedProduct.reduce((acc, p) => acc + p.price, 0)}</p>
            </div>
            <button className="btn bg-[#9514FA] text-white rounded-full btn-block mt-5" onClick={() => setSelectedProduct([])}>Checkout</button>
        </div>
    );
};

export default SelectedProduct;