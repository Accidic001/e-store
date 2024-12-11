import Image from "next/image";
import bgImage from "/public/intro.jpg"


export default function Home() {
  return (
    <div className="home container-fluid h-screen">
        <div className="relative w-full h-screen flex justify-center content-center">
            <Image src={bgImage} alt="background image " className="bg-cover bg-center" fill={true}/>
          <div className="image absolute flex justify-center items-center pt-52 flex-col">
            <h1 className="text-4xl text-center text-blue-600 font-bold">welcome to e-store</h1>
            <div className="container mx-auto">
            <p className="text-sm md:text-xl  py-2 text-white ">A wonderful place to find a all your required courses </p>
            </div>
           
           <a href="/homePage">
            <div className="intro-bt flex justify-center items-center px-4 mt-3 py-1 gap-2 text-white bg-blue-600 hover:bg-white hover:text-blue-600 border rounded">
              <button className="text-xl ">explore
              </button>
              <div className="pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
              </div>
            </div>
            </a>
          </div>
          </div>
    </div> 
  );
}
