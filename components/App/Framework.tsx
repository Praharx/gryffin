import { Anchor } from 'lucide-react'
import React from 'react'

function Framework() {
  return (
    <div>
    <div className='flex justify-center items-center flex-col mt-16 gap-10'>
        <h3 className='text-transparent text-center text-2xl bg-clip-text bg-[radial-gradient(circle_closest-corner,#fff,rgba(0,0,0,.2))]'>Gryffin supports <br/>the top Solana development frameworks.</h3>
        <div className='flex gap-[15rem]'>
            <span><Anchor />Anchor</span>
            <span>Native Sol</span>
            <span>Steel</span>
            <span>Poseidon</span>
            <span>Seahorse</span>
        </div>

    </div>
      <div className="relative mt-32 w-3/4 mx-auto">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="absolute w-3/4 h-[1px] bg-[radial-gradient(circle_closest-corner,#fff,rgba(39,41,43,.76))]"></div>
          </div>
        </div>
    </div>
  )
}

export default Framework
