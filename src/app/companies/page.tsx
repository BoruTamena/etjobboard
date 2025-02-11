import React from "react";
import SearchJob from "../containers/hero-section/search_job";
import RecommendedJobs from "../containers/companies/recomended_companies";
import CtaSection from "../containers/cta";



const Page=()=>{
    return (
    <div>
    <div className=" bg-[url(/Pattern.png)] bg-slate-200">
      
        <div className="container mx-auto p-3">
        <p className=" text-4xl capitalize text-center font-medium mt-3 p-3 "> Find your <span className="text-purple-500 font-bold md:outline-double p-2  ">dream companies</span> </p>
        {/* <img className="  object-center  y-1/2 md:py-3" src="/Group.svg"  alt="group equal" /> */}
          <p className=" text-center m-10">Find the dream companies you dream work fo</p>
        <section>
            <div className="mt-5">
            <SearchJob/>

            <p className=" mt-4 mb-20 font-light"> Search jobs directly from most popular companies </p>

            </div>
        </section>
        </div>
      </div>


      <div className=" container mx-auto p-3">
        <p className="text-2xl font-medium  mt-10"> Recommended Companies </p>
        <p className="font-normal text-neutral-500 "> Best Companies have never image before ... </p>
        <RecommendedJobs/>

        <div className="mt-10"/>
        <CtaSection />
      </div>


     </div>
    )
}

export default Page