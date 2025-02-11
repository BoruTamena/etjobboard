import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";
import React, { FC } from "react";


interface Props{

    Name:string 
    Description?:string 
    Logo:string 
    TotalJobs?:number

}


const CompanyList:FC<Props>=({Name,Description,Logo,TotalJobs})=>{

    return(
        <Card className=" rounded-none shadow-none border-neutral-200">
        <CardHeader className="flex flex-row justify-between items-center">
            <div>
                <Image src={Logo} alt={Name} width={100} height={100} />
            </div>
            <div>
                <Badge variant="outline" className="p-2 bg-purple-300 border-none shadow-none font-normal text-purple-900" >
                    {TotalJobs} Jobs
                </Badge>
            </div>
            
        </CardHeader>

        <CardContent>
            <CardTitle className="text-purple-400">{Name}</CardTitle>
            <CardDescription className="mt-3 text-justify capitalize ">
                <p className=" text-neutral-700">{Description}</p>
            </CardDescription>
        </CardContent>

        <CardFooter>
            <Badge variant="outline" className=" rounded-full py-2 px-3 border-purple-400 font-medium shadow-none"> Technology</Badge>
        </CardFooter>
        </Card>
    )
}

export default CompanyList