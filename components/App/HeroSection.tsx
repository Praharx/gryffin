import Image from "next/image"
import SecondBrain from "@/components/buttons/second-brain";

function HeroSection() {
  return (
    <div className="mt-6">
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600  text-center font-[200]">
        <span>Your AI <Image src="/solana.png" alt="Image Holder" width={1000} height={1000} className="inline-block w-[10rem] h-[10rem] ml-2" /> dev assistant</span>
      </h1>
      <h1 className="relative z-10 text-sm md:text-2xl text-center text-gray-400">
        Get ready-to-use answers from all your knowledge<br/> and quit manual organization for good.
      </h1>
      <div className="flex justify-center mt-4">
        <SecondBrain text="Get started for free" />
      </div>
    </div>
  )
}

export default HeroSection
