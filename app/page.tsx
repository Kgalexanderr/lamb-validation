import Image from "next/image";

import { Header } from "./components/header";
import { Hero } from "./components/sections/hero";
import { Footer } from "./components/footer";
import { CTA } from "./components/sections/cta";
import { Slide } from "./components/sections/slide";
import { Chat } from "./components/sections/chat";
import { GalleryThree } from "./components/sections/gallery_three";

export default function Home() {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 lg:px-8">
      <Header/>
      <Hero/>
      <Slide/>
      <GalleryThree/>
      <Chat/>
      <CTA/>
      <Footer/>
    </div>
  );
}
