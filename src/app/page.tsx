import Image from "next/image";
import bgImage from "/public/intro.jpg"
import Rate from "@/components/rate";

export default function Home() {
  return (
    <div className="home container-fluid h-screen">
        <div className="relative w-full h-screen flex justify-center content-center">
            <Image src={bgImage} alt="background image " className="bg-cover bg-center" fill={true}/>
          <div className="image absolute flex justify-center items-center pt-52 flex-col">
            <h1 className="text-4xl text-center text-blue-600 font-bold">welcome to e-store</h1>
            <div className="container mx-auto">
            <p className="text-sm md:text-xl   text-white ">A wonderful place to find a all your required courses </p>
            </div>
           
            <div className="intro-bt flex justify-center gap-3 pt-3 text-white">
              <a href="/login">
              <button className="bg-blue-700 rounded px-2 py-1  hover:bg-white  hover:text-blue-600 ">SignIn</button>
              </a>
              <a href="/signup">
              <button className="bg-blue-700 rounded px-2 py-1  hover:bg-white hover:text-blue-600">SignOut</button>
              </a>
            </div>
          </div>
          </div>
    </div> 
  );
}
