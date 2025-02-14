"use client"
import React, { FC, useState } from "react";
import { NavItemLists } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

interface Props {}

const NavBar: FC<Props> = () => {


  const [open,setOpen]=useState(false)

  return (
    <nav className=" bg-slate-200  md:bg-slate-50  ">
      <div className=" flex justify-between md:container mx-auto px-3 py-5 md:flex items-center md:justify-center">
    
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 pr-4">
          <Image width={30} height={30} src="/Frame 3.svg" alt="logo" />
          <p className="font-bold">JobHuntly</p>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-grow justify-space space-x-1">
          {NavItemLists.map((item) => (
            <li key={item.Id}>
              <Link className="text-gray-700 hover:text-purple-500 px-4" href={item.Path}>
                <span className="capitalize">{item.Name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign Up Button (Right Corner) */}
        <div className="hidden md:block ">
           <Link href="/login">
          <span className="text-medium pr-6 capitalize text-purple-500">login</span>
           </Link>
          <Button className="bg-purple-500 text-white hover:bg-purple-900">Sign Up</Button>
        </div>


        <div className=" text-white md:hidden container relative top-0 right-0">
            
        <MenuIcon className=" absolute right-0  -top-3 "  onClick={()=>setOpen(!open)}/>


{
        open && <div className=" absolute right-1 top-6 bg-purple-50 z-50" >
            <ul className="flex flex-col flex-grow justify-space p-1">
                {NavItemLists.map((item) => (
                  <li key={item.Id}>
                    <Link className="text-gray-700 hover:text-purple-500 px-4 py-2" href={item.Path}>
                      <span className="capitalize">{item.Name}</span>
                    </Link>
                    
                  </li>
                ))}
              </ul>
              
            </div>}

           
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
