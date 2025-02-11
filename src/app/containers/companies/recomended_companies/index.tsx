import React from "react";
import { RecommendedCompanies } from "../constant";
import CompanyList from "../companies_list";



const RecommendedJobs =()=>{
    return(
        <div className=" grid grid-cols-12 gap-2">
            {
              RecommendedCompanies.map((item,index)=>
                <div className=" col-span-12 md:col-span-4 mt-10"  key={index}>
                 <CompanyList
                    Name={item.Name}
                    Logo={item.Logo}
                    TotalJobs={item.TotalJobs}
                    Description={item.Description }
                    />
                </div>
              )
            }
        </div>
    )
}

export default RecommendedJobs