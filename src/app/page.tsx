import NavBar from "@/components/nav";

import Image from "next/image";
import HeroSection from "./containers/hero-section";
import PartnersCompanies from "./containers/partners";
import CareerPath from "./containers/career";
import { ArrowRight } from "lucide-react";
import CtaSection from "./containers/cta";

export default function Home() {
  return (
   
  <div>

    <NavBar/>

    <HeroSection/>

   <section className=" container mx-auto ">

    <p className="p-3 text-purple-200 font-normal  ">Companies that support us </p>
    <PartnersCompanies/>
   </section>
    

 <section className="container mx-auto p-2 mt-10 md:mt-28 ">

  <div className="block md:flex justify-between items-center mb-10">
      <p className="font-bold text-xl md:text-4xl">
        <span className=" text-purple-600">Explore by</span>
        <span className="px-2">Category</span>
      </p>

    <div className=" hidden md:flex justify-center items-center text-purple-900 font-medium capitalize">
      <p>show jobs</p>
      <ArrowRight/>

    </div>

  </div>
    <CareerPath/>
  </section>


  <section className="container mx-auto p-3 mt-20">
    <CtaSection/>

  </section>
   
  </div>
  );
}
