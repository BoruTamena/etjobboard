import React, { FC } from "react";
import CompaniesList from "./constant";
import Image from "next/image";



interface Props {

}


const PartnersCompanies:FC<Props>=({})=>{
    return(

        <div className="container mx-auto flex flex-auto  flex-wrap justify-start space-x-3  space-y-5 flex-col-2 md:flex md:justify-between items-center px-4 mb-1">
            {
                CompaniesList.map((item,index)=>
                <Image
                    key={item.Id}
                    src={item.Logo}
                    width={100}
                    height={50}
                    alt={item.Name}
                />
            )
            }

        </div>

    )
}

export default PartnersCompanies
