"use client";
import Image from "next/image";
import logo from "../../public/nav_logo.svg";
import cart_icon from "../../public/cart_icon.svg";
import menu_icon from "../../public/menu_icon.svg";
import { useState } from "react";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="fixed left-1/2 top-3 z-30 w-11/12 -translate-x-1/2 rounded-full border border-[#6f87a042] bg-[#09121de5] px-3 py-3">
      <div className="relative w-full">
        <div className="flex items-center justify-between space-x-8 font-creato_medium text-[#6f87a0eb]">
          <div className="block lg:hidden">
            <a href="/">
              <Image alt="" width={0} height={0} src={logo} />
            </a>
          </div>
          <div className="hidden items-center space-x-8 lg:flex">
            <a href="/">
              <Image alt="" width={0} height={0} src={logo} />
            </a>
            <a href="" className="cursor-pointer hover:text-white">
              Features
            </a>
            <a href="/pricing" className="cursor-pointer hover:text-white">
              Pricing
            </a>
            <a href="" className="cursor-pointer hover:text-white">
              Blog
            </a>
            <a href="" className="cursor-pointer hover:text-white">
              Contacts
            </a>
            <a href="" className="cursor-pointer hover:text-white">
              Shop
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="" className="cursor-pointer hover:text-white">
              Log in
            </a>
            <a className="glow_btn px-5 py-2 font-creato_medium text-sm">
              Sign up
            </a>
            {/*       mobile     */}
            <div className="flex items-center lg:hidden">
              <div
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}
                className={
                  toggleMenu
                    ? "glow_btn_hovered px-4 py-2 font-creato_medium text-sm text-grayBLue hover:text-white"
                    : "glow_btn px-4 py-2 font-creato_medium text-sm text-grayBLue hover:text-white"
                }
              >
                <svg
                  fill="currentColor"
                  version="1.1"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24.75 24.75"
                >
                  <path
                    d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
                  />
                </svg>
              </div>
              <div
                className={
                  toggleMenu
                    ? "absolute left-0 top-10 z-10 max-h-[20rem] w-full overflow-hidden rounded-lg border border-[#6f87a042] px-5 backdrop-blur-lg transition-all duration-300 sm:top-16"
                    : "absolute left-0 top-10 z-10 max-h-0 w-full overflow-hidden rounded-lg border-[#6f87a042] px-5 backdrop-blur-lg transition-all duration-300 sm:top-16"
                }
              >
                <a
                  href=""
                  className="my-3 block cursor-pointer hover:text-white"
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="mt-3 block cursor-pointer hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href=""
                  className="mt-3 block cursor-pointer hover:text-white"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="mt-3 block cursor-pointer hover:text-white"
                >
                  Contacts
                </a>
                <a
                  href=""
                  className="my-3 block cursor-pointer hover:text-white"
                >
                  Shop
                </a>
              </div>
            </div>
            <div className="glow_btn relative px-4 py-2 font-creato_medium text-sm">
              <Image alt="" width={0} height={0} src={cart_icon} />
              <div className="absolute -top-1/2 right-0 translate-y-1/2 rounded-full bg-blue-600 px-2">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
