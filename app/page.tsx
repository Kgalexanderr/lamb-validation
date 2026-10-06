import Image from "next/image";

import { Header } from "./components/header";
import { Hero } from "./components/sections/hero";
import { Footer } from "./components/footer";
import { Gallery } from "./components/sections/gallery";
import { CTA } from "./components/sections/cta";
import { Slide } from "./components/sections/slide";
import { Chat } from "./components/sections/chat";

export default function Home() {
  return (
    <div className="w-full max-w-8xl mx-auto px-8">
      <Header/>
     
      <Hero/>
      <Slide/>
      <Gallery/>
      <Chat/>
      <CTA/>
      <Footer/>
    </div>
  );
}
