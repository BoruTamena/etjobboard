import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, CheckIcon, OptionIcon } from "lucide-react";
import React from "react";



const skills =["git","nextjs","node","redis"]

const Responsibilities=[
    "proficiency in next 15 is required",
    "ability to work in  continious change enviroment"

]

const NiceToHave=[
    "Fluent Engilsh",
    "Project Mangement Skills"

]
const Page = async ({params}:{params:Promise<{id:number}>})=>{


    const Id= (await params).id



    return (
        <section className="">
            {/* <p>dynamic jobs pages </p> */}

            <div className="container mx-auto mt-3 p-3 grid grid-cols-12 gap-12 ">

                <div className="col-span-7">
                    <article >
                        <p className="text-xl font-medium capitalize">Descriptions</p>

                        <p className=" text-justify pt-2 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, incidunt! Nihil adipisci unde ipsam possimus voluptatem. Fugiat ducimus nesciunt illum, hic cum ex modi beatae qui explicabo consequuntur. Similique, accusamus.</p>
                    </article>

                    <article >
                        <p className="text-xl font-medium capitalize mt-4">Responsibilities</p>

                          <ul className="">
                            {
                                Responsibilities.map((resp,index)=><li key={index} className="flex flex-row space-x-3 items-center mt-3">
                                    <CheckCircle className="text-green-500"/>
                                    <p className="capitalize text-green-600">{resp}</p>
                                </li>)
                            }
                          </ul>

                    </article>

                    <article >
                        <p className="text-xl font-medium capitalize mt-4">Nice to have</p>

                        <ul className="">
                            {
                                NiceToHave.map((resp,index)=><li key={index} className="flex flex-row space-x-3 items-center mt-3">
                                    <OptionIcon/>
                                    <p className="capitalize text-yellow-600 ">{resp}</p>
                                </li>)
                            }
                          </ul>
                    </article>
                </div>


                <div className=" col-span-4">

                    <article>
                    <p className=" text-xl font-medium capitalize">About Job</p>

                    <div className="flex justify-between items-center pt-2">
                        <div >Start date</div>
                        <div>Nov 2-2025</div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <div>Due date</div>
                        <div>Nov 2-2025</div>
                    </div>


                    <Button className="w-full bg-purple-800 hover:bg-purple-700  text-white mt-3">Apply</Button>
                        
                    </article>

                   <article>

                    <p className=" text-xl font-medium capitalize mt-5 ">skills</p>

                        {
                          skills.map((skill,index)=><Badge key={index} className="px-3 py-2 mx-1 rounded-full bg-purple-200 shadow-none font-medium  ">{skill}</Badge>)
                        }

                    <div>

                    </div>
                    
                  </article> 
                </div>
            </div>
        </section>
    )
}

export default Page