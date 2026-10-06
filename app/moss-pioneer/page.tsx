import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Hero } from "./_components/hero";
import { Box } from "./_components/box";
import { Spec } from "./_components/spec";
import { Details } from "./_components/details";

export default function MossPioneerPage(){
  return(
    <div className="w-full max-w-8xl mx-auto px-8">
      <Header/>
      <Hero/>
      <Spec/>
      <Box/>
      <Details/>
      <Footer/>
    </div>
  )
}