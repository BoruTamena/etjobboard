import NavBar from "@/components/nav";

import Image from "next/image";
import HeroSection from "./containers/hero-section";
import PartnersCompanies from "./containers/partners";
import CareerPath from "./containers/career";
import { ArrowRight } from "lucide-react";
import CtaSection from "./containers/cta";
import FeatureJobs from "./containers/featuredjobs";
import Footer from "./containers/footer";

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
      <p className="font-bold text-3xl md:text-4xl">
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


  <section className="container mx-auto p-3 mt-16">
    <CtaSection/>

  </section>


  <section className="container mx-auto p-3 ">

    <p className="mt-28 mb-10 "> 
      <span className="text-4xl font-bold">Featured</span>
       <span className="text-4xl font-bold text-purple-600">Jobs</span>
    </p>

    <FeatureJobs/>
  </section>
   
   <Footer/>
  </div>
  );
}
