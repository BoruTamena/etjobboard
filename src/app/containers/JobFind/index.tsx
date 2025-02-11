import React, { FC } from "react";
import JobFilter from "./jobfilter";

import JobCard from "./jobs";
import { EmployementType, JobCategories, JobLevels, JobSearchList } from "./constant";


interface Props {

}

const JobsSection:FC<Props>=()=>{
    return(
        <div className=" container mx-auto p-3 grid grid-cols-12 gap-5 pt-10">

            {/* Filter Section  */}
            <div className=" hidden md:block col-span-3">

              <JobFilter  
              EmpoymentType={EmployementType}
              Categories={JobCategories}  
              JobLevels={JobLevels}
              />

            </div>

            {/* job search result */}
            <div className="col-span-12 md:col-span-8">

                <div>
                    <p className="font-semibold text-3xl px-3 mb-4">All Jobs </p>
                </div>
                {
                    JobSearchList.map((job,index)=><JobCard key={job.Id} 
                    Id={job.Id}
                    Title={job.Title}
                    Subtitle={job.Subtitle}
                    Logo={job.Logo}
                    Description={job.Description}
                    Category={job.Category}
                    />)
                }
                
            </div>


        
        </div>
    )
}

export default JobsSection