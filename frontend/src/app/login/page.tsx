import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="w-full max-w-[1440px] bg-white h-screen flex items-center justify-center gap-10">
      <div className="max-w-[416px] gap-6 flex flex-col">
        <div className="px-4 py-2 relative w-full h-8">
          <img
            src="/btn_login.svg"
            alt="btn_login"
            className="w-8 h-8 absolute left-0 top-0"
          />
        </div>
        <div className="self-stretch">
          <h3 className="text-[#09090B] text-[24px] font-semibold leading-8">
            Log in
          </h3>
          <p className="text-[16px] font-normal leading-6 text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <input
          type="password"
          placeholder="Enter your email address"
          className="w-full rounded-md border border-[#E4E4E7] px-2 py-1.5"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-md border border-[#E4E4E7] px-2 py-1.5"
        />
        <label className="flex items-center gap-1.5">
          <input type="checkbox" className="w-4 h-4 rounded-sm" />
          <span className="text-[#71717A] text-[14px font-normal">
            Show password
          </span>
        </label>
        <button className="border-b max-w-[130px]">Forgot password?</button>
        <button className="w-full rounded-md bg-gray-800/20 text-white py-2 px-4">
          Let's Go
        </button>
        <p className="text-[#71717A] text-[16px] font-normal">
          Don't have an account?
          <span className="text-[#2563EB] text-[16px] font-normal leading-6 ml-1">
            Sign up
          </span>
        </p>
      </div>
      <Image src="/bg_login.png" alt="bg_login" width={1000} height={1000} />
    </div>
  )
}

export default page
