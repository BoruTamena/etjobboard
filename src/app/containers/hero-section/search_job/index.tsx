"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LocateFixed, LocateIcon, Search } from "lucide-react";
import { useRouter } from "next/navigation";

import React, { FC } from "react";


interface Props {

}


const SearchJob: FC<Props>=({})=>{


  const router= useRouter()

  
    return(
      

    //     <div className="flex flex-col container mx-auto md:flex-row justify-evenly items-center gap-y-4 md:space-x-3 bg-white w-full z-30 p-3">

    //     {/* Job Search Input */}
    //     <div className="flex items-center justify-center space-x-2 md:p-5 w-full">
    //       <Search className="mt-1 md:mt-3" />
    //       <Input 
    //         type="text" 
    //         placeholder="Job Title or Keyword" 
    //         className="w-full border-t-0 border-l-0 border-r-0 border-b-1" 
    //       />
    //     </div>
      
    //     {/* Location Input */}
    //     <div className="flex items-center justify-center space-x-2 md:p-5 w-full">
    //       <LocateFixed className="mt-1 md:mt-3" />
    //       <Input 
    //         type="text"  
    //         placeholder="Ethiopia, Addis Ababa" 
    //         className="w-full border-t-0 border-l-0 border-r-0 border-b-1" 
    //       />
    //     </div>
      
    //     {/* Search Button */}
    //     <div className="w-full md:w-auto md:p-5">
    //       <Button 
    //         type="submit" 
    //         className="w-full md:w-auto bg-purple-500 text-white hover:bg-purple-800 capitalize"
    //       >
    //         Search My Job
    //       </Button>
    //     </div>
      
    //   </div>
      

    <div className="flex flex-col md:flex-row justify-evenly items-center gap-y-4 md:space-x-3 bg-white md:w-full z-30 p-3">

  {/* Job Search Input */}
  <div className="flex items-center justify-center space-x-2 w-full md:p-5">
    <Search className="mt-1 md:mt-3" />
    <Input 
      type="text" 
      placeholder="Job Title or Keyword" 
      className="border-t-0 shadow-none border-l-0 border-r-0 border-b-1"
    />
  </div>

  {/* Location Input */}
  <div className="flex items-center justify-center space-x-2 w-full md:p-5">
    <LocateFixed className="mt-1 md:mt-3" />
    <Input 
      type="text"  
      placeholder="Ethiopia, Addis Ababa" 
      className="w-full shadow-none max-w-full border-t-0 border-l-0 border-r-0 border-b-1"
    />
  </div>

  {/* Search Button */}
  <div className="w-full md:w-auto md:p-5">
    <Button 
      type="submit" 
      onClick={()=>router.push("/jobs ")}
      className=" w-full p-5 md:w-auto bg-purple-500 text-white hover:bg-purple-800 capitalize"
   >
    
      Search My Job
    </Button>
  </div>

</div>


       
    )
}


export default SearchJob