import React, { FC } from "react";
import SearchJob from "../containers/hero-section/search_job";
import NavBar from "@/components/nav";
import JobsSection from "../containers/JobFind";

interface Props {

}

const Page:FC<Props>=({})=>{
    return(
        <div className=" bg-slate-200 ">
      
        <div className="container mx-auto p-3">
        <p className=" text-4xl capitalize text-center font-medium mt-4 p-3"> Find your <span className="text-purple-500">dreamjobs</span> </p>

        <section>
            <div className="mt-5">
            <SearchJob/>

            <p className="mt-4 font-light"> Search jobs of your dream </p>
            </div>
        </section>
        </div>

        <div className="bg-slate-50 w-full mt-4">
        <JobsSection/>

        </div>
           

        </div>
    )
}


export default Page