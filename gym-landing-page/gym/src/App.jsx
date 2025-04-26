import bgimage from './assets/bgimage.jpg'
import sideimage from './assets/sideimage.svg'
import googleimage from './assets/googleimage.png'

function App() {
  

  return (
    <>
      <div className="h-auto w-full bg-slate-600 select-none ">
      <div className="h-[60px] w-full bg-slate-400 shadow-md shadow-black sticky top-0 ">
       <div className="p-[15px] ">

        <span className="text-white font-semibold text-[22px] font-mono ">Gym Center</span>

        <span className="float-right ">
        <button className='w-[150px] h-[30px] text-white font-medium text-md hover:text-slate-100 cursor-pointer outline-0 flex justify-center items-center rounded-full bg-slate-700 '>
          Login
        </button>
        </span>

        <span className="float-right pr-5 ">
        <button className='text-white font-medium text-md hover:text-slate-100 cursor-pointer'>
          Sign Up
        </button>
        </span>

       </div>
       {/* end div for P and A */}
      </div>
      {/* end div for nav bar */}

      <div className="h-screen bg-center bg-cover flex justify-center items-center gap-30 " style={{ backgroundImage: `url(${bgimage})` }}>
      
      <div className=' '>
      <header className='text-slate-50 text-6xl font-mono '>
        Look & Feel 
        <br></br>
        Your Best Ever
      </header>
      <p className='text-slate-300 pt-[50px] w-[500px] '>
        Get ready to build PREETY MUSCLES and find out just how fun getting healthy and stronger can be
      </p>

      <div className='pt-[50px] '>
      <button className='text-slate-50  h-[70px] w-[350px] bg-rose-500 hover:bg-rose-600 cursor-pointer rounded-full text-lg font-medium'>
        START FREE TRAIL
      </button>
      </div>

      <div className='pt-[50px] cursor-pointer pl-[5px] '>
        <img src={googleimage} alt="iamge" className='h-[50px] w-[150px] ' />
      </div>

      </div>

      <div>
      <img src={sideimage} alt="image" className=' w-[500px] ' />
      </div>

      </div>
      </div>
      {/* Main Div */}
    </>
  )
}

export default App
