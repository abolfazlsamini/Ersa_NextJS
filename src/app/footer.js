"use client";
import Image from "next/image";

import logo from "../../public/nav_logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto mt-20 w-[99%] max-w-[1180px] px-5 py-3 pb-10 md:w-11/12 md:px-0">
        <div className="mx-auto block justify-between md:flex">
          <div className="mr-4 mt-10 md:w-2/5 md:pr-28">
            <Image alt="" width={0} height={0} src={logo} />
            <p className="py-5">
              Make Your Money
              <br /> Do The Most
            </p>

            <a className="glow_btn rounded-2xl px-4 py-3" href="#">
              info@onigama.com
            </a>
          </div>
          <div className="flex flex-wrap md:my-0 md:w-3/5 md:justify-around">
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Quick Links
              </div>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/stock"
              >
                stock
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/about_us"
              >
                About Us
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/contact"
              >
                Contact
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/plan"
              >
                Plan
              </Link>
            </div>
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Our services
              </div>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="about_us/gaming_and_mining"
              >
                Game
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="about_us/cinema"
              >
                Cinema
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="about_us/forex"
              >
                Forex
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="about_us/minimg"
              >
                Crypto
              </Link>
            </div>
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Social
              </div>
              {/* <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/features"
              >
                Features
              </Link> */}
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href=""
              >
                Instagram
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href=""
              >
                Youtube
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href=""
              >
                Facebook
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href=""
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
