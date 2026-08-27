import { About } from "@/components/sections/About";
import { BrandValues } from "@/components/sections/BrandValues";
import { Contact } from "@/components/sections/Contact";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <BrandValues />
      <Services />
      <About />
      <Contact />
      <ContactCTA />
    </>
  );
}
