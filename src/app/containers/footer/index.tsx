import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";


interface Props {

}

const Footer:FC<Props>=({})=>{
    return (
        <div className=" bg-neutral-900 mt-14">

            {/* Logo  */}
            <div className=" container mx-auto flex items-center space-x-2 pr-4 pt-10 px-5">
                <Image width={30} height={30} src="/Frame 3.svg" alt="logo" />
                <p className="font-bold text-white">JobHuntly</p>
            </div>

            <div className="container mx-auto grid grid-cols-12 gap-5 text-white p-2">

              
                {/* about description */}
                <div className=" col-span-11 md:block md:col-span-4">
                    <p className="pt-3  px-5 capitalize font-normal text-slate-200">Great platform for the job seeker that passionate about startups.
                    Find your dream job easie</p>
                </div>

                 <div className=" col-span-6 md:col-span-2">

                    <p className=" text-white text-xl px-5">Abouts</p>
                      {
                        ["companies","pricing","terms","advice","privacy policy"].map((it,index)=><Link key={index} href={""} 
                        className=" text-sm px-5 block py-2 capitalize text-slate-200">
                           {it}
                        </Link>)
                      }
                
                 </div>


                 <div className=" col-span-6 md:col-span-2">

                    <p className=" text-white text-xl px-5">Resources</p>
                      {
                        ["help docs","guide","updates","contact us"].map((it,index)=><Link key={index} href={""} 
                        className=" text-sm px-5 block py-2 capitalize text-slate-200">
                           {it}
                        </Link>)
                      }
                
                 </div>

                 <div className=" col-span-11 md:col-span-4">

                    <p className=" text-white text-xl px-5">Get Jobs notifications</p>

                    <p className="px-5 text-slate-200 font-normal pt-1"> The latest job news, articles, sent to your inbox weekly.</p>

                    <div className=" px-5 pt-3 flex space-x-3">

                       <Input   name="email" type="email" placeholder="exampel@gmail.com"/> 

                       <Button className="p-3 bg-purple-500 text-white hover:bg-purple-600 capitalize"> Subscribe</Button>
                    </div>
                 </div>

            </div>

            
        </div>
    )
}


export default Footer