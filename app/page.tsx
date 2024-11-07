import Navbar from "@/components/App/Navbar";
import HeroSection from "@/components/App/HeroSection";
import Demo from "@/components/App/Demo";

export default function Home() {
  return (
    <div className="bg-[#0E0E0F]">
      <Navbar/>
      <HeroSection/>
      <Demo/>      
    </div>
  );
}
 