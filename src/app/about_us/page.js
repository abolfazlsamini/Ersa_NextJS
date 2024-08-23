"use client";

import pic_1 from "../../../public/about_us/pic_1.jpg";
import pic_2 from "../../../public/about_us/pic_2.jpg";
import pic_3 from "../../../public/about_us/pic_3.jpg";
import pic_4 from "../../../public/about_us/pic_4.jpg";
import pic_5 from "../../../public/about_us/pic_5.jpg";
import pic_6 from "../../../public/about_us/pic_6.jpg";
import pic_7 from "../../../public/about_us/pic_7.jpg";
import pic_8 from "../../../public/about_us/pic_8.jpg";
import pic_9 from "../../../public/about_us/pic_9.jpg";
import pic_10 from "../../../public/about_us/pic_10.jpg";
import greater_icon from "../../../public/greater_icon.svg";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
export default function About_us() {
  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture");
    captures.forEach((capture) => {
      var clonedChild = capture.children[0].cloneNode(true);
      const overlay = capture.querySelector(".glow-overlay");
      overlay.appendChild(clonedChild);

      capture.addEventListener("mousemove", (event) => {
        const x = event.pageX - capture.offsetLeft;
        const y = event.pageY - capture.offsetTop;
        overlay.style.setProperty("--glow-x", `${x}px`);
        overlay.style.setProperty("--glow-y", `${y}px`);
        overlay.style.setProperty("--glow-opacity", "1");
      });

      capture.addEventListener("mouseleave", () => {
        overlay.style.setProperty("--glow-opacity", "0");
      });
    });
  }, []);

  const Card_1 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">liquidity provider</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  One of the core activities of our company is the provision of
                  liquidity in digital markets
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#a03e27" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_2 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Gaming and mining</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  In the digital world, blockchain-based gaming and
                  cryptocurrency mining are extremely attractive
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#3c6e80" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_3 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_3}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Incubation of start-ups</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  The support and incubation of blockchain-based start-ups is
                  one of our main tasks
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#83572c" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_4 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_4}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Forex brokerage</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  The forex market is one of the largest and most sought-after
                  financial markets in the world
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#134d76" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_5 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_5}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Blockchain and tokens</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  Blockchain technology and digital tokens are among the most
                  important innovations of the last decade
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#6bffe9" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_6 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_6}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Mining</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  By exploiting rich mines, our company extracts and processes
                  valuable resources
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#bea799" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_7 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_7}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Export and import</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  Our company builds international networks for export and
                  import and supplies various goods to the target markets
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#bea799" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_8 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_8}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Tourism</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  The tourism industry is one of the most thriving industries in
                  the world
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#bea799" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_9 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_9}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Cinema</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  Involvement in the film industry and film production is one of
                  the most attractive areas of investment
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#bea799" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_10 = () => {
    return (
      <div className="mb-4 block self-stretch md:w-1/2">
        <div className="glow-capture relative mx-auto block h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 block h-full flex-col flex-wrap items-center justify-center rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="h-full">
              <div className="">
                <Image
                  placeholder="blur"
                  src={pic_10}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg glow:border-glow glow:bg-glow/[.15] glow:ring-2 glow:ring-glow"
                />
              </div>
              <div>
                <p className="text-xs">Conclusion and Financial plan</p>
                <h2 className="mb-3 pb-14 text-2xl font-bold tracking-tighter md:pb-10 md:text-4xl">
                  A detailed financial plan, including cost estimates, revenues
                  and profitability of the projects, is attached to this
                  proposal
                </h2>
                <div className="absolute bottom-10">
                  <Link
                    className="greater_link w-max [&_p]:hover:!text-white"
                    href="#"
                  >
                    <div className="greater_img absolute bottom-1/2 left-0 z-20 translate-y-1/2 rounded-full p-3 lg:left-0">
                      <Image src={greater_icon} width={0} height={0} alt="" />
                    </div>
                    <p className="pl-20">Read More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#bea799" }}
          ></div>
        </div>
      </div>
    );
  };
  return (
    <main className="mt-20 overflow-hidden py-10">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto mt-16 flex flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
            About Onigama
          </div>
          <h1 className="mb-10 mt-5 text-center">
            Learn more about the Onigama collection and its activities
          </h1>
          <p className="md:w-1/2">
            Our company aims to capitalize on various opportunities in the
            digital and fintech world by operating in nine main areas
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-stretch px-2 md:flex-row">
          <Card_1 />
          <Card_2 />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col px-2 md:flex-row">
          <Card_3 />
          <Card_4 />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col px-2 md:flex-row">
          <Card_5 />
          <Card_6 />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col px-2 md:flex-row">
          <Card_7 />
          <Card_8 />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col px-2 md:flex-row">
          <Card_9 />
          <Card_10 />
        </div>
      </div>
    </main>
  );
}
