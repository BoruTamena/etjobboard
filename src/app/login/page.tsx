

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props{

}
const Page:FC<Props>=()=>{
    return(
        <div className="container mx-auto">

            <div className="flex flex-col items-center gap-3 mt-7 p-5">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-2 pr-4">
                    <Image width={30} height={30} src="/Frame 3.svg" alt="logo" />
                    <p className="font-bold">JobHuntly</p>
                </div>
        
            
                <p className="text-2xl capitalize font-semibold mt-5">Welcome back</p>

                    <p className="font-thin "> Fill your credintial !</p>
                    <div className=" divide-x-4 bg-purple-200  border-purple-200 "/>
                {/* <label htmlFor="name" className="text-left">Email</label> */}
                    <Input type="text" className=" rounded-2xl w-full md:w-1/2 p-5 py-7 text-neutral-600 border-purple-200 shadow-none capitalize" name="name" placeholder="user name"/>
                    {/* <label htmlFor="name" className="text-left">Email</label> */}

                    <Input type="password"  className=" w-full rounded-2xl  md:w-1/2 p-5 py-7   text-neutral-600 border-purple-200 shadow-none capitalize" name="name" placeholder="password"/>

                    <Button className="p-5 w-full shadow-none rounded-2xl py-7 bg-purple-500 hover:bg-purple-700 text-white capitalize md:w-1/2">Log in</Button>

                    <p className=" capitalize  mt-2">dont have accoutn
                        <Link className="text-purple-500" href="/signup"> sign up</Link>
                    </p>

            
            </div>

        </div>
    )
}

export default Page