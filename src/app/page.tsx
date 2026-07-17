import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <Pricing />
      <About />
      <FAQ />
      <Contact />
      <ContactCTA />
    </>
  );
}
