import React, { FC } from "react";
import CareerList from "./constant";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";



interface Props {

}

const CareerPath:FC<Props>=()=>{
    return(
        <div className="grid grid-cols-12 gap-2 mt-4">

            {
                CareerList.map((item,index)=>
                <Card  key={item.Id}className=" border-purple-200 shadow-none col-span-11  md:col-span-3
                 hover:bg-purple-400 hover:text-white 
                  rounded-none ">
                    <CardHeader>
                        <Image className="bg-purple-300 border-spacing-1 rounded" src={item.Logo} alt={item.Name} width={40} height={30}/>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="pt-3 pb-3 text-xl">{item.Name}</CardTitle>
                        <CardDescription  className="flex">
                            {item.Description}
                            <ArrowRight/>
                        </CardDescription>
                    </CardContent>

                </Card>)
            }

        </div>
    )
}

export default CareerPath