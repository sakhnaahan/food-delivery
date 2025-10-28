import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <Link href="/">
        <div className="flex gap-[12px] w-full max-w-[1440px] p-[88px] bg-black justify-between items-center h-[172px]">
          <div className="flex gap-[12px]">
            <Image src="/logo.png" width={46} height={37.29} alt="logo" />
            <div>
              <h4 className="text-[20px] font-[600] text-white">
                Nom<span className="text-[#EF4444]">Nom</span>
              </h4>
              <p className="text-[12px] font-[400] leading-[16px] text-white">
                Swift delivery
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-center">
            <button className="bg-[#F4F4F5] text-black font-semibold py-2 px-4 rounded-[999px]">
              Sign up
            </button>
            <button className="bg-[#EF4444] text-white font-semibold py-2 px-4 rounded-[999px] ">
              Log in
            </button>
          </div>
        </div>
      </Link>
    </header>
  )
}

export default Navbar
