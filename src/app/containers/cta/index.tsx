import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";


interface Props {

}


const CtaSection:FC<Props>=({})=>{
    return(

        <div className="bg-[url(/CTA/Rectangle.svg)] bg-cover bg-center p-16 px-5">

        {/* Responsive Container */}
        <div className="container relative flex flex-col md:flex-row justify-between items-center mx-auto gap-5">

            {/* Text Section */}
            <div className="text-center md:text-left px-10">
                <p className="text-2xl text-center  md:text-5xl text-white capitalize mt-5 md:mt-10 font-mono font-bold">
                    Start posting <span className="pt-1 font-mono font-bold md:block ">jobs today</span>
                </p>
                <p className="p-2  text-white">Start posting jobs for only $10.</p>
                <Button type="button" className="p-6 capitalize text-purple-600 bg-white mt-5 w-full hover:bg-white">Sign up for free</Button>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2 h-64 md:h-full">
            <Image
                src="/CTA/Dashboard.png"
                alt="Dashboard preview"
                width={500}
                height={900}
                className=""
            />
            </div>

        </div>

        </div>

    )
}


export default CtaSection