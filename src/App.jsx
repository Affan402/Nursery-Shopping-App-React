import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from '../../conference_event_planner/src/AboutUs'

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
      <div className="">
        <div className={`relative w-screen h-screen bg-gray-100`}>
          <div className="aboslute inset-0 w-full h-full bg-cover bg-center brightness-90 bg-[url('https://cdn.pixabay.com/photo/2017/07/13/08/59/greenhouse-2499758_1280.jpg')]"></div>
            <div className='flex items-center justify-center h-screen w-screen b-black/50 backdrop-blur-sm gap-5'>
              <div className='relative z-10 w-[400px] h-[400px] text-center flex flex-col justify-center gap-2 mt-[430px] ml-[100px] -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-white text-5xl mb-2'>Welcome To Paradise Nursery</h1>
                <div className='w-12 h-0.5 bg-green-500 my-2.5'></div>
                <p className='text-white text-xl'>Where Green Meets Serenity</p>
                <button className='px-'>Get Started</button>
              </div>
              {/* <div className="about">
                <AboutUs />
              </div> */}
            </div>
        </div>
        {/* <div className="produvt">
          <ProductList />
        </div> */}
      </div>    
    </>
  )
}

export default App
