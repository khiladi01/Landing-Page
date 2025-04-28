import bgimage from './assets/bgimage.jpg';
import sideimage from './assets/sideimage.svg';
import googleimage from './assets/googleimage.png';

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-slate-600 select-none">
        {/* Navbar */}
        <div className="h-[60px] w-full bg-slate-400 shadow-md shadow-black sticky top-0 flex items-center justify-between px-4">
          <span className="text-white font-semibold text-[22px] font-mono">
            Gym Center
          </span>
          <div className="flex items-center space-x-5">
            <button className="text-white font-medium text-md hover:text-slate-100 cursor-pointer">
              Sign Up
            </button>
            <button className="w-[120px] h-[35px] text-white font-medium text-sm hover:text-slate-100 cursor-pointer flex justify-center items-center rounded-full bg-slate-700">
              Login
            </button>
          </div>
        </div>

        {/* Main Section */}
        <div
          className="min-h-screen bg-center bg-cover flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          {/* Left Text Content */}
          <div className="text-center md:text-left max-w-md">
            <header className="text-slate-50 text-4xl md:text-6xl font-mono leading-tight">
              Look & Feel
              <br />
              Your Best Ever
            </header>
            <p className="text-slate-200 pt-6 md:pt-10 text-sm md:text-base">
              Get ready to build PREETY MUSCLES and find out just how fun getting healthy and stronger can be
            </p>

            {/* Buttons Section */}
            <div className="pt-6 md:pt-10 flex flex-col items-center md:items-start gap-5">
              <button className="text-slate-50 h-[60px] w-[250px] md:h-[70px] md:w-[350px] bg-rose-500 hover:bg-rose-600 cursor-pointer rounded-full text-lg font-medium">
                START FREE TRIAL
              </button>
              <img src={googleimage} alt="google" className="h-[40px] w-[130px] md:h-[50px] md:w-[150px] cursor-pointer" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={sideimage} alt="gym" className="w-[300px] md:w-[450px] lg:w-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
