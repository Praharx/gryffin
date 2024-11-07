import Image from "next/image"
import SecondBrain from "@/components/buttons/second-brain";

function HeroSection() {
  return (
    <div className="mt-6">
      <div className="flex justify-center items-center">
        <h1 className="relative z-10 mt-2 text-md md:text-7xl bg-clip-text text-transparent bg-[radial-gradient(circle_farthest-side_at_45%,#fff,rgba(255,255,255,.43))] text-center">
        <span className="font-[500]">Your AI<Image src="/solana_image.png" alt="Image Holder" width={1000} height={1000} className="inline-block w-[9rem] h-[9rem] ml-2" /></span>
      </h1>
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-[radial-gradient(circle_farthest-side_at_45%,#fff,rgba(255,255,255,.43))] text-center h-[10vh] font-medium">
        <span className="font-[500]">Co-pilot & Debugger</span>
      </h1>
      </div>
      <div className="flex justify-center flex-col items-center gap-1 -mt-2">
        <h1 className="relative z-10 text-sm md:text-2xl text-center max-w-xl text-[#9A9997]">
          Enhancing solana developer experience with 
        </h1>
        <h1 className="relative z-10 text-sm md:text-2xl text-center max-w-xl text-[#9A9997]">auto-completion & vulnerability scanning</h1>

      </div>
      <div className="flex justify-center mt-8">
        <SecondBrain text="Get started for free" />
      </div>
    </div>
  )
}

export default HeroSection
