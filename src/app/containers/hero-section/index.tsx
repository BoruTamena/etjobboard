
import Image from "next/image";
import React, { FC } from "react";
import SearchJob from "./search_job";


interface Props {

}


const HeroSection:FC<Props>=({})=>{
    return(
        <div className=" bg-slate-200 w-full h-auto md:bg-slate-50 ">

        <div className="container relative top-0 mx-auto md:grid grid-cols-4 gap-1 items-center">
          
           {/* Left Section */}
           <div className="col-span-4 p-2 md:col-span-2 md:px-3 md:py-10 ">
             <p className="text-6xl font-medium md:text-7xl">Discover</p>
             <p className="text-6xl font-medium md:text-7xl">More than</p>
             <p className="text-6xl font-medium md:text-7xl md:font-bold text-purple-600">5000+ jobs</p>
     
             <img className="y-1/2 md:py-3" src="/Group.svg"  alt="group equal" />
             <p className=" px-1 md:w-[500px]">
               Great platform for job seekers looking for new career heights and passionate about startups.
             </p>
     
             {/* Overlay Form (Only for md and larger screens, inside left section) */}
             <div className=" ">
               <div className="relative top-0 pt-2  md:w-[130%] z-40 ">
                   <SearchJob/>
                   <p className="pt-3 font-thin   text-wrap">Popular : UI Designer, UX Researcher, Android, Admin</p>
               </div>

             </div>
     
             
           </div>
     
           {/* Right Section (Image) */}
           <div className="hidden md:block md:col-span-2 relative h-full bg-[url(/Pattern.png)]  bg-cover bg-repeat-x">
             <Image
               src="/manhomePic.png"
               alt="img"
               fill={1==1}
               className=" object-contain z-20"
             />
           </div>
         </div>
     
        </div>
    )
}


export default HeroSection