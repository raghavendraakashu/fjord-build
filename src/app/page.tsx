import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { WhyFjord } from "@/components/sections/WhyFjord";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
      <WhyFjord />
    </>
  );
}
