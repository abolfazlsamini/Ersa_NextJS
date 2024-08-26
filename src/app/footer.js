"use client";
import Image from "next/image";

import logo from "../../public/nav_logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto mt-20 w-[99%] max-w-[1180px] px-5 py-3 pb-10 md:w-11/12 md:px-0">
        <div className="mx-auto block justify-between md:flex">
          <div className="mr-4 md:w-2/5 md:pr-28">
            <Image alt="" width={0} height={0} src={logo} />
            <p className="py-5">
              Duis tincidunt quis bibendum magna dignissim lorem. Venenatis
              laoreet facilisis nunc
            </p>
            <a className="glow_btn rounded-2xl px-4 py-3" href="#">
              info@yourwebsite.com
            </a>
          </div>
          <div className="flex flex-wrap md:my-0 md:w-3/5 md:justify-around">
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Quick Links
              </div>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/stock"
              >
                stock
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/contact"
              >
                contact
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/about_us"
              >
                About Us
              </Link>
            </div>
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Template
              </div>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/stock"
              >
                stock
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/contact"
              >
                contact
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/blog"
              >
                blog
              </Link>
            </div>
            <div className="mt-10 pr-8">
              <div className="mb-3 block font-creato_medium text-[#6f87a080]">
                Social
              </div>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/features"
              >
                Features
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/stock"
              >
                stock
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/contact"
              >
                contact
              </Link>
              <Link
                className="mb-3 block font-creato_medium text-[#6f87a0eb] hover:text-[#6f87a0a1]"
                href="/about_us"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
