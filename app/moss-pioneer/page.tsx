import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "./_components/hero";
import { Box } from "./_components/box";
import { Spec } from "./_components/spec";
import { Details } from "./_components/details";
import { GalleryThree } from "./_components/gallery";

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