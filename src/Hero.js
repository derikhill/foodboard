import SignupButton from './auth/SignupButton';

const Hero = () => {  
  return (
    <div 
      className="hero-image"
    >
      <div
        className="container flex flex-col h-full place-content-around md:place-content-center"
      >
        <div className="md:px-32 mt-6 p-5 text-center md:text-left">
          <h1 className="font-medium md:text-6xl text-5xl text-white">FoodBoard</h1>
          <h3 className="font-light md:text-3xl pt-3 text-2xl text-white">Save Meals. Get Ideas.</h3>
        </div>
        <div className="md:px-32 mt-10 p-5 text-center md:text-left">
          <h6 className="font-semibold text-white text-2xl">Create an account to</h6>
          <h6 className="font-semibold text-white text-2xl">save your own meals</h6>
          <SignupButton />
          {/* <button className="bg-gray-700 md:w-1/4 mt-1.5 p-3 place-self-center rounded-md text-white w-1/2">
            Sign up
          </button> */}
        </div>
      </div>
      {/* <div className="button-block">
      </div> */}
    </div>
  );
}

export default Hero 