import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white h-screen flex items-center justify-center gap-10">
      <div className="max-w-[416px] gap-6 flex flex-col">
        <div className="px-[16px] py-[8px] relative w-full h-[32px]">
          <img
            src="/btn_login.svg"
            alt="btn_login"
            className="w-8 h-8 absolute left-0 top-0"
          />
        </div>
        <div className="self-stretch">
          <h3 className="text-[#09090B] text-[24px] font-semibold leading-[32px]">
            Create your account
          </h3>
          <p className="text-[16px] font-[400] leading-[24px] text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full rounded-[6px] border-1 border-[#E4E4E7] px-2 py-1.5"
        />
        <button className="w-full rounded-[6px] bg-gray-800/20 text-white py-2 px-4">
          Let's Go
        </button>
        <p className="text-[#71717A] text-[16px] font-[400]">
          Already have an account?
          <span className="text-[#2563EB] text-[16px] font-[400] leading-[24px] ml-1">
            Log in
          </span>
        </p>
      </div>
      <Image src="/bg_login.png" alt="bg_login" width={1000} height={1000} />
    </div>
  )
}

export default page
