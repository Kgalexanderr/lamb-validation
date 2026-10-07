import type { Metadata } from "next";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "./_components/hero";
import { Box } from "./_components/box";
import { Spec } from "./_components/spec";
import { Details } from "./_components/details";
import { GalleryThree } from "./_components/gallery";

export const metadata: Metadata = {
  title: "Moss Pioneer | A Wearable Concept for Sermons",
  description:
    "Explore Moss Pioneer, a concept-stage wearable designed to help churchgoers record sermons without taking out a phone and revisit them afterward.",
};

export default function MossPioneerPage(){
  return(
    <div className="w-full max-w-8xl mx-auto px-4 lg:px-8">
      <Header/>
      <Hero/>
      <GalleryThree/>
      <Spec/>
      <Box/>
      <Details/>
      <Footer/>
    </div>
  )
}