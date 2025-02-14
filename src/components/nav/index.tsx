"use client"
import React, { FC } from "react";
import { NavItemLists } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { Separator } from "../ui/separator";

interface Props {}

const NavBar: FC<Props> = () => {



  return (
    <nav className=" bg-slate-200  md:bg-slate-50  ">
      <div className=" flex justify-between  md:container mx-auto px-3 py-5 md:flex items-center justify-center">
    
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


        <div className=" text-white md:hidden relative ">
            

            <Menubar className="z-50 border-none shadow-none">
              <MenubarMenu>
                <MenubarTrigger>
                    <MenuIcon/>
                </MenubarTrigger>

                <MenubarContent className="bg-slate-300">
                   {
                    NavItemLists.map((item,index)=><MenubarItem key={item.Id}>
                      <Link href={item.Path} className=" capitalize">
                        {item.Name}
                      </Link>
                      
                    </MenubarItem>)
                   }
               
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
