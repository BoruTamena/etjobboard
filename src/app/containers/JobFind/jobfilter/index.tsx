"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import React, { FC } from "react";


interface FilterProps {
    EmpoymentType?:string[]
    Categories ?:string []
    JobLevels ?:string[]
    Range ?:string[]

}

const JobFilter:FC<FilterProps>=({EmpoymentType,Categories,JobLevels,Range})=>{
    return(
        <div>
          <Accordion type="single" collapsible className="w-full" >

          <AccordionItem value="4th item" className="border-none">
                <AccordionTrigger>Employement Type</AccordionTrigger>
                <AccordionContent>
                    {
                        EmpoymentType?.map((item,index)=><div key={index} className="flex items-center space-x-2 p-2">
                                <Checkbox id={item} />
                                <label htmlFor={item}>{item}</label>
                            </div>)
                    }

                </AccordionContent>

                
            </AccordionItem>

            <AccordionItem value="1st item" className="border-none">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                    {
                        Categories?.map((item,index)=><div key={index} className="flex items-center space-x-2  p-2">
                                <Checkbox id={item}/>
                                <label htmlFor={item}>{item}</label>
                            </div>)
                    }

                </AccordionContent>

                
            </AccordionItem>

            <AccordionItem value="2nd item" className="border-none">
             <AccordionTrigger>Job Level</AccordionTrigger>
             <AccordionContent>
                    {
                        JobLevels?.map((item,index)=><div key={index} className="flex items-center space-x-2  p-2">
                                <Checkbox id={item}/>
                                <label htmlFor={item}>{item}</label>
                            </div>)
                    }

                </AccordionContent>

            </AccordionItem>

            <AccordionItem value="3rd item" className="border-none">
             <AccordionTrigger>Salary Range</AccordionTrigger>
             <AccordionContent>
                    {
                        Range?.map((item,index)=><div key={index} className="flex items-center space-x-2  p-2">
                                <Checkbox id={item}/>
                                <label htmlFor={item}>{item}</label>
                            </div>)
                    }

                </AccordionContent>

            </AccordionItem>

          </Accordion>
        </div>
    )
}


export default JobFilter