"use client";

import hover_double_pic_1 from "../../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../../public/home/hover_double_pic_2.webp";
import avatar_1 from "../../../public/home/avatar_1.webp";
import bubble_icon from "../../../public/home/bubble_icon.svg";
import Image from "next/image";
import { useRef, useEffect } from "react";
export default function Pricing() {
  let visibilityPercent = (mainPicRef) => {
    const windowHeight = window.visualViewport.height;
    if (windowHeight - mainPicRef.current.getBoundingClientRect().top < 0) {
      return 0;
    }
    if (
      windowHeight - mainPicRef.current.getBoundingClientRect().top >
      2 * windowHeight
    )
      return 0;
    return (
      (windowHeight - mainPicRef.current.getBoundingClientRect().top) /
      (windowHeight * 2)
    );
  };
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
  const Price_card_1 = () => {
    return (
      <section className="sm:w-1/2">
        <div className="glow-capture relative m-5 w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="flex-1">
              <div>
                <h2 className="mb-3 w-max pr-1 text-2xl font-bold tracking-tighter">
                  Stake (307 Million Stake )
                </h2>
                <h2 className="mb-3 w-max pr-1 text-6xl font-bold tracking-tighter">
                  58%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  79.82 million shares to management
                </p>
                <p className="py-10">
                  This part of the shares is allocated to the members of the
                  management team and the founders
                </p>
              </div>
            </div>
          </div>
          <a
            className="unGlow_btn absolute bottom-10 left-7 lg:left-20"
            href="#"
          >
            Get Started
          </a>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ff00ff" }}
          ></div>
        </div>
      </section>
    );
  };
  const Price_card_2 = () => {
    return (
      <section className="sm:w-1/2">
        <div className="glow-capture relative m-5 w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="flex-1">
              <div>
                <h2 className="mb-3 w-max pr-1 text-2xl font-bold tracking-tighter">
                  Stake (307 Million Stake )
                </h2>
                <h2 className="mb-3 w-max pr-1 text-6xl font-bold tracking-tighter">
                  6%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  18.42 million shares to management
                </p>
                <p className="py-10">
                  These shares are being publicly sold at a price of 10 cents
                  per share
                </p>
              </div>
            </div>
          </div>
          <a
            className="unGlow_btn absolute bottom-10 left-7 lg:left-20"
            href="#"
          >
            Get Started
          </a>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#03d8ff" }}
          ></div>
        </div>
      </section>
    );
  };
  const FullPlan = () => {
    return (
      <section className="px-6">
        <div className="flex w-full flex-col items-center rounded-2xl border-2 border-white/5 bg-[#09121de5] px-4">
          <div className="mx-auto text-center">
            <div className="m-2 items-center sm:m-0 sm:w-full">
              <div className="p-2 sm:p-5">
                <div className="">
                  <Image
                    src={bubble_icon}
                    width={0}
                    height={0}
                    alt=""
                    className="mx-auto my-3 rounded-lg"
                  />
                  <h2 className="mx-auto text-xl">
                    To view the complete Onigama stock and plan details, please
                    visit the Plan page
                  </h2>
                  <a className="unGlow_btn my-5" href="#">
                    View Full Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Card_3 = () => {
    console.count();
    const hover_pic_1_ref = useRef();
    const hover_pic_1_blur_ref = useRef();
    const hover_pic_2_ref = useRef();
    const hover_pic_2_blur_ref = useRef();
    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const width = window.innerWidth;
        const height = window.innerWidth;
        if (width < 768) return;
        `"""*********** hover pic section **************"""`;
        hover_pic_1_ref.current.style.setProperty(
          // 15 to 5 deg
          "--cardhoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_1_ref.current.style.setProperty(
          // -25 to -15 deg
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_1_ref.current.style.setProperty(
          // 15 to 10 deg
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        `"""*********** hover pic blur section **************"""`;
        hover_pic_1_blur_ref.current.style.setProperty(
          // 15 to 5 deg
          "--cardhoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_1_blur_ref.current.style.setProperty(
          // -25 to -15 deg
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_1_blur_ref.current.style.setProperty(
          // 15 to 10 deg
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        `"""*********** hover pic 2 section **************"""`;
        hover_pic_2_ref.current.style.setProperty(
          // 15 to 5 deg
          "--cardhoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_2_ref.current.style.setProperty(
          // -25 to -15 deg
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_2_ref.current.style.setProperty(
          // 15 to 10 deg
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        `"""*********** hover pic blur 2 section **************"""`;
        hover_pic_2_blur_ref.current.style.setProperty(
          // 15 to 5 deg
          "--cardhoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_2_blur_ref.current.style.setProperty(
          // -25 to -15 deg
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_2_blur_ref.current.style.setProperty(
          // 15 to 10 deg
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
      });

      window.addEventListener("scroll", scrolly);
    }, []);

    function scrolly() {
      hover_pic_1_ref.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
      );
      hover_pic_1_blur_ref.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
      );
      hover_pic_2_ref.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
      );
      hover_pic_2_blur_ref.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
      );
    }
    return (
      <div className="m-5">
        <div className="glow-capture relative w-full overflow-hidden rounded-2xl">
          <div className="glow group relative flex flex-col flex-wrap items-center justify-center gap-6 overflow-hidden rounded-2xl border-2 border-white/5 bg-[#13243655] px-8 pb-44 pt-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:px-16 sm:py-36 md:flex-row md:items-start md:justify-between">
            <div className="relative z-10 mx-auto flex justify-center text-center sm:w-1/2">
              <div>
                <h2 className="mb-3 font-bold tracking-tighter glow:text-glow/[.5]">
                  Get started with our SaaS platform
                </h2>

                <p>
                  Vestibulum mattis ornare sed erat arcu. Id lorem a volutpat
                  enim nunc. Eget sem lacus.
                </p>
              </div>
            </div>
          </div>
          <Image
            src={hover_double_pic_2}
            width={0}
            height={0}
            ref={hover_pic_1_ref}
            alt=""
            className="cardhoverpic absolute bottom-0 right-0 w-1/4 rounded-lg"
          />
          <Image
            src={hover_double_pic_2}
            width={0}
            height={0}
            ref={hover_pic_1_blur_ref}
            alt=""
            className="cardhoverpic absolute -bottom-1/3 right-0 -z-10 w-1/2 rounded-lg blur-md"
          />
          <Image
            src={hover_double_pic_1}
            width={0}
            height={0}
            ref={hover_pic_2_ref}
            alt=""
            className="cardhoverpic absolute -left-[15%] top-0 w-1/4 rounded-lg"
          />
          <Image
            src={hover_double_pic_1}
            width={0}
            height={0}
            ref={hover_pic_2_blur_ref}
            alt=""
            className="cardhoverpic absolute -left-1/3 -top-1/3 -z-10 w-1/2 rounded-lg blur-md"
          />
          <a
            className="unGlow_btn absolute left-1/2 top-[70%] -translate-x-1/2"
            href="#"
          >
            More&nbsp;Features
          </a>

          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ffde00" }}
          ></div>
        </div>
      </div>
    );
  };
  const Avatar_card_1 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. Nunc felis.”
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#ffde00" }}
          ></div>
        </div>
      </section>
    );
  };

  const Avatar_card_2 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. Nunc felis.”
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#6fffdb" }}
          ></div>
        </div>
      </section>
    );
  };
  const Avatar_card_3 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. nibh lacinia dictum odio sit.asdasd Adipiscing volutpat
                elementum cursus et quam lectus diam. Nunc felis.”
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#03d8ff" }}
          ></div>
        </div>
      </section>
    );
  };
  const Avatar_card_4 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. Nunc felis.”
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#9eff6f" }}
          ></div>
        </div>
      </section>
    );
  };
  const Avatar_card_5 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. Nunc felis.”5
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#ff6ff7" }}
          ></div>
        </div>
      </section>
    );
  };
  const Avatar_card_6 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `20rem`);
    }, []);
    return (
      <section className="w-full md:max-w-[400px]">
        <div className="glow-capture relative m-5 w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <div className="py-5">
              <p>
                “Lorem venenatis purus facilisi nibh lacinia dictum odio
                sit.asdasd Adipiscing volutpat elementum cursus et quam lectus
                diam. Nunc felis.”
              </p>
              <div className="flex">
                <Image
                  src={avatar_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mr-3 size-[2.9em] rounded-full"
                />
                <div>
                  <h2 className="m-0 p-0 text-xl">Malcom Reynolds</h2>
                  <p className="m-0">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#726fff" }}
          ></div>
        </div>
      </section>
    );
  };
  return (
    <section className="mt-32">
      <section>
        <div className="mx-auto mt-16 flex flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
            Pricing
          </div>
          <h1 className="mb-10 mt-5 text-center text-3xl sm:text-5xl">
            Find the perfect plan for your needs
          </h1>
        </div>
      </section>
      <div className="mask_bg py-20">
        <div className="mx-auto max-w-[1200px] px-2">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <Avatar_card_1 />
              <Avatar_card_2 />
            </div>
            <div className="flex flex-col">
              <Avatar_card_3 />
              <Avatar_card_4 />
            </div>
            <div className="flex flex-col">
              <Avatar_card_5 />
              <Avatar_card_6 />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] pb-52">
        <div className="flex flex-col sm:flex-row">
          <Price_card_1 />
          <Price_card_2 />
        </div>
        <div className="mx-auto mb-20 mt-4">
          <FullPlan />
        </div>
        <Card_3 />
      </div>
    </section>
  );
}
