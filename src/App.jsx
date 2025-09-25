import { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';


function App() {
  const [showProductList, setShowProductList] = useState(false)

  const handleGetStartedClick = () => {
    setShowProductList(true);
  } 
  const handleHomeClick = () => {
    setShowProductList(false);
  }
 
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">

        {/*landing Page */}
        <div className={`absolute w-screen h-screen ${showProductList ? 'opacity-0' : 'opacity-100'}`}>

          {/*Background*/}
          <div className="absolute inset-0 bg-cover bg-center brightness-75 bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')]"></div>

            {/*Content Overlay*/}
            <div className='relative flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-black/50 backdrop-blur-sm gap-0'>

              {/*Landing Content*/}
              <div className=' ml-[400px] z-10 w-[400px] h-[400px] text-center flex flex-col justify-center items-center gap-3 mt-[430px] md:mt-0 md:ml-[250px] -translate-x-1/2'>
                <h1 className='text-white text-5xl mb-2'>Welcome To Paradise Nursery</h1>
                <div className='w-[50px] h-[2px] bg-green-500 my-3'></div>
                <p className='text-white text-2xl'>Where Green Meets Serenity</p>
                <button className='px-6 py-3 text-xl rounded-md bg-green-600 text-white hover:bg-green-700 mt-10 transition' onClick={handleGetStartedClick}>Get Started</button>
              </div>

              {/*About Us Section*/}
              <div className="w-[90%] md:w-[800px] max-w-[1000px] md:ml-0 mt-5 md:mt-0 z-10">
                <AboutUs />
              </div>
            </div>
        </div>
        <div className={`absolute left-0 w-full h-screen bg-white/90 backdrop-blur-md transition-all duration-500 overflow-y-auto z-20 ${
          showProductList ? 'top-0' : 'top-[100vh]'
        }`}>
          <ProductList onHomeClick={handleHomeClick} />
        </div>
      </div>    
    </>
  )
}

export default App;
