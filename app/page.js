import ContactButton from "@/components/ContactButton";
import Nav from "@/components/Nav";

import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ContactButton />
      <WhatWeDo />
      <WhatWeOffer />
    </>
  );
}
