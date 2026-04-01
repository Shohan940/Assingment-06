import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Cards/Card'
import OtherCard from './Components/Cards/OtherCard'
import Footers from './Components/Footer/Footers'
import Hero from './Components/heroSection/Hero'
import Navber from './Components/navber/Navber'
import { ToastContainer } from 'react-toastify'

function App() {

  const [selectedProduct, setSelectedProduct] = useState([]);
  const [isCartView, setIsCartView] = useState(false);
  const [data, setData] = useState([]);

 
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}../public/Data.json`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {!isCartView && <Navber selectedProduct={selectedProduct} />}
      {!isCartView && <Hero />}

      <Suspense fallback={<div>Loading...</div>}>
        <Card 
          data={data} 
          selectedProduct={selectedProduct} 
          setSelectedProduct={setSelectedProduct}  
          setIsCartView={setIsCartView}
        />
      </Suspense>

      {!isCartView && <OtherCard />}
      {!isCartView && <Footers />}

      <ToastContainer />
    </>
  )
}

export default App