import bgimage from './assets/bgimage.jpg'

function App() {
  

  return (
    <>
      <div className="h-auto w-full bg-slate-600 select-none ">
      <div className="h-[100px] w-full bg-slate-300 shadow-md shadow-slate-950 sticky top-0 ">
       <div className="p-[30px] ">

        <span className="text-black font-semibold text-lg ">Gym Center</span>

        <span className="float-right text-slate-500 font-medium text-md hover:underline hover:underline-offset-8 decoration-slate-600 hover:text-slate-600 ">
        <a href="#">Membership</a>
        </span>

        <span className="float-right pr-3 text-slate-500 font-medium text-md hover:underline hover:underline-offset-8 decoration-slate-600 hover:text-slate-600 ">
        <a href="#">Contact</a>
        </span>

        <span className="float-right pr-3 text-slate-500 font-medium text-md hover:underline hover:underline-offset-8 decoration-slate-600 hover:text-slate-600 ">
        <a href="#">About</a>
        </span>

        <span className="float-right pr-3 text-slate-500 font-medium text-md underline underline-offset-8 decoration-slate-600 hover:text-slate-600 ">
        <a href="#">Home</a>
        </span>

       </div>
       {/* end div for P and A */}
      </div>
      {/* end div for nav bar */}

      <div className="h-[700px] bg-center bg-cover  " style={{ backgroundImage: `url(${bgimage})` }}>
      
      

      </div>
      </div>
      {/* Main Div */}
    </>
  )
}

export default App
