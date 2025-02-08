import React, { FC } from "react";
import FeatureJobsList from "./constant";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


interface Props {

}

const FeatureJobs:FC<Props>=()=>{

    return (
        <div className=" grid grid-cols-12 gap-2">

            {
                FeatureJobsList.map((item,index)=><Card className=" col-span-11 md:col-span-3 rounded-none border-purple-100 shadow-none" key={item.Id}>

                    <CardHeader>
                        <div className="flex justify-between">
                            <Image
                            src={item.Logo}
                            alt={item.Title}
                            width={40}
                            height={30}
                            />

                            <Button variant="outline">Full Time </Button>

                        </div>
                    </CardHeader>

                    <CardContent>
                    <CardTitle> {item.Title}</CardTitle>
                    <p className=" font-light pt-1"> {item.Subtitle}</p>
                        
                      <p className="pt-4 from-neutral-200">{item.Description}</p>
                        
                         
                    </CardContent>

                     <CardFooter>
                        {
                            item.Category.map((cat,ind)=><Badge  className={(ind +1 )% 2==0 ?"bg-purple-300  ml-3 rounded-full ":" bg-green-300" +" ml-3 rounded-full" } key={ind}
                            >
                               <p className=" font-medium p-2">
                               {cat}
                                </p> 
                            </Badge>)
                        }
                     </CardFooter>

                </Card>)
            }

        </div>
    )
}

export default FeatureJobs