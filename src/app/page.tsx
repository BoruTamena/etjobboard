import NavBar from "@/components/nav";

import Image from "next/image";
import HeroSection from "./containers/hero-section";

export default function Home() {
  return (
   
  <div>

    <NavBar/>

    <HeroSection/>
 


   <section className="container mx-auto ">

    <p className="p-3 text-black ">Companies that support us </p>
   </section>
    
   
   
  </div>
  );
}
