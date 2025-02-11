import React ,{FC}from "react";
import { Job } from "../../../../../types/featurejob";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";





const JobCard:FC<Job>=({Id,Title,Subtitle,Logo,Description,Category})=>{

    return (
        <div className="p-3">

            <Card className=" rounded-none border-purple-200 shadow-none ">
                <div className="grid grid-cols-12 gap-1 p-4">

                    <CardHeader className="col-span-12 md:col-span-2 ">
                        <Image src={Logo} alt={Title} width={50} height={50} className=" object-fill"/>
                    </CardHeader>

                    <CardContent className="col-span-12 md:col-span-6 p-2">
                        <CardTitle className=" font-medium">
                            {Title}
                        </CardTitle>

                        <CardDescription className="mt-3">
                            <p className=" text-neutral-500">{Description}</p>
                        </CardDescription>
                        {
                            Category.map((item,index)=><Badge variant="outline" 
                             key={index} className=" bg-red-400 p-2 font-normal text-yellow-50 rounded-full m-1 mt-5">{item}</Badge>)
                        }

                    </CardContent>

                    
                    <div className="col-span-12 md:col-span-4 p-3">
                        <Button variant="default" className=" bg-purple-500 p-3 w-full shadow-none text-white hover:bg-purple-600"> Apply</Button>

                        <Progress value={50} className="w-[100%] bg-green-200 mt-3"/>

                        <p className="mt-3 font-normal text-neutral-400">5 people applied of 10 capicity</p>
                    </div>

                </div>
            </Card>

        </div>
    )
}


export default JobCard