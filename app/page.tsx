import Navbar from "@/components/App/Navbar";
import HeroSection from "@/components/App/HeroSection";
import Demo from "@/components/App/Demo";
import Framework from "@/components/App/Framework";
import Features from "@/components/App/Features"
export default function Home() {
  return (
    <div className="bg-[#0E0E0F]">
      <Navbar/>
      <HeroSection/>
      <Demo/>  
      <Framework/>
      <Features/>
    </div>
  );
}
 