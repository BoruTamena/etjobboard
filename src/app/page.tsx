import NavBar from "@/components/nav";

import Image from "next/image";
import HeroSection from "./containers/hero-section";
import PartnersCompanies from "./containers/partners";

export default function Home() {
  return (
   
  <div>

    <NavBar/>

    <HeroSection/>

   <section className=" container mx-auto ">

    <p className="p-3 text-black font-normal ">Companies that support us </p>
    <PartnersCompanies/>
   </section>
    
   <section className="container mx-auto p-2 mt-9 mb-4">

    <p className="font-bold text-4xl">
      <span className=" text-purple-600">Explore by</span>
      <span className="px-2">Category</span>
    </p>
   </section>
   
  </div>
  );
}
