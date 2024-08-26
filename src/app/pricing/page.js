"use client";

import hover_double_pic_1 from "../../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../../public/home/hover_double_pic_2.webp";
import avatar_1 from "../../../public/home/avatar_1.webp";
import bubble_icon from "../../../public/home/bubble_icon.svg";
import x_icon from "../../../public/x_icon.svg";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
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
        <div className="glow-capture relative mx-auto my-5 h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex h-full flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="w-full">
              <div>
                <h2 className="mb-3 pr-1 text-2xl font-bold tracking-tighter">
                  Stock Count (79.82 Million)
                </h2>
                <h2 className="mb-3 pr-1 text-6xl font-bold tracking-tighter">
                  Management - 26%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  79.82 Million shares to management
                </p>
                <p className="py-10">
                  26% of the total shares are allocated to management. This
                  portion of the stock is allocated to the company's managers
                  and executive team to encourage them to perform better and
                  increase the value of the company
                </p>
              </div>
              <a className="unGlow_btn relative z-30" href="#">
                Get Started
              </a>
            </div>
          </div>
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
        <div className="glow-capture relative mx-auto my-5 h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex h-full flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="w-full">
              <div>
                <h2 className="mb-3 pr-1 text-2xl font-bold tracking-tighter">
                  Stock Count: 18.42 Million
                </h2>
                <h2 className="mb-3 pr-1 text-6xl font-bold tracking-tighter">
                  Open Sale - 6%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  Price per share: 10 cents
                </p>
                <p className="py-10">
                  6% of the total shares are sold freely on the market for 10
                  cents. This section allows public investors to buy shares of
                  the company
                </p>
              </div>
              <a className="unGlow_btn relative z-30" href="#">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#03d8ff" }}
          ></div>
        </div>
      </section>
    );
  };
  const Price_card_3 = () => {
    return (
      <section className="sm:w-1/2">
        <div className="glow-capture relative mx-auto my-5 w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="w-full">
              <div>
                <h2 className="mb-3 pr-1 text-2xl font-bold tracking-tighter">
                  Stock Count: 9.21 Million
                </h2>
                <h2 className="mb-3 pr-1 text-6xl font-bold tracking-tighter">
                  Small Investors - 3%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  Price per share: $1
                </p>
                <p className="py-10">
                  3% of the stock is allocated to investors who have invested
                  less than $100. These people receive shares equal to the
                  amount of their investment and no interest is paid to them.
                  This type of stock is designed to encourage small investors to
                  sign in
                </p>
              </div>
              <a className="unGlow_btn relative z-30" href="#">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ff00ff" }}
          ></div>
        </div>
      </section>
    );
  };
  const Price_card_4 = () => {
    return (
      <section className="sm:w-1/2">
        <div className="glow-capture relative mx-auto my-5 h-full w-11/12 sm:m-0 sm:w-full">
          <div className="glow group flex h-full flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-6 pb-16 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-5 md:flex-row md:items-start md:justify-between md:p-16">
            <div className="w-full">
              <div>
                <h2 className="mb-3 pr-1 text-2xl font-bold tracking-tighter">
                  Stock Count: 199.55 Million
                </h2>
                <h2 className="mb-3 pr-1 text-6xl font-bold tracking-tighter">
                  System Built-in Sales - 65%
                </h2>

                <p className="border-b border-b-gray-500/10 pb-10">
                  Price per share: 5 cents
                </p>
                <p className="py-10">
                  65% of the shares are allocated for internal sales of the
                  system. In this method, investors can buy 5 shares for every
                  $1 invested, for 5 cents. This plan is designed to attract
                  domestic capital and encourage more investment
                </p>
              </div>
              <a className="unGlow_btn relative z-30" href="#">
                Get Started
              </a>
            </div>
          </div>
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
        if (hover_pic_1_ref.current)
          hover_pic_1_ref.current.style.setProperty(
            // 15 to 5 deg
            "--cardhoverpic-rot-x",
            `${(y / height) * 5 + 10}deg`,
          );
        if (hover_pic_1_ref.current)
          hover_pic_1_ref.current.style.setProperty(
            // -25 to -15 deg
            "--cardhoverpic-rot-y",
            `${-25 + (x / width) * 10}deg`,
          );
        if (hover_pic_1_ref.current)
          hover_pic_1_ref.current.style.setProperty(
            // 15 to 10 deg
            "--cardhoverpic-rot-z",
            `${15 - (x / width) * 5}deg`,
          );
        `"""*********** hover pic blur section **************"""`;
        if (hover_pic_1_blur_ref.current)
          hover_pic_1_blur_ref.current.style.setProperty(
            // 15 to 5 deg
            "--cardhoverpic-rot-x",
            `${(y / height) * 5 + 10}deg`,
          );
        if (hover_pic_1_blur_ref.current)
          hover_pic_1_blur_ref.current.style.setProperty(
            // -25 to -15 deg
            "--cardhoverpic-rot-y",
            `${-25 + (x / width) * 10}deg`,
          );
        if (hover_pic_1_blur_ref.current)
          hover_pic_1_blur_ref.current.style.setProperty(
            // 15 to 10 deg
            "--cardhoverpic-rot-z",
            `${15 - (x / width) * 5}deg`,
          );
        `"""*********** hover pic 2 section **************"""`;
        if (hover_pic_2_ref.current)
          hover_pic_2_ref.current.style.setProperty(
            // 15 to 5 deg
            "--cardhoverpic-rot-x",
            `${(y / height) * 5 + 10}deg`,
          );
        if (hover_pic_2_ref.current)
          hover_pic_2_ref.current.style.setProperty(
            // -25 to -15 deg
            "--cardhoverpic-rot-y",
            `${-25 + (x / width) * 10}deg`,
          );
        if (hover_pic_2_ref.current)
          hover_pic_2_ref.current.style.setProperty(
            // 15 to 10 deg
            "--cardhoverpic-rot-z",
            `${15 - (x / width) * 5}deg`,
          );
        `"""*********** hover pic blur 2 section **************"""`;
        if (hover_pic_2_blur_ref.current)
          hover_pic_2_blur_ref.current.style.setProperty(
            // 15 to 5 deg
            "--cardhoverpic-rot-x",
            `${(y / height) * 5 + 10}deg`,
          );
        if (hover_pic_2_blur_ref.current)
          hover_pic_2_blur_ref.current.style.setProperty(
            // -25 to -15 deg
            "--cardhoverpic-rot-y",
            `${-25 + (x / width) * 10}deg`,
          );
        if (hover_pic_2_blur_ref.current)
          hover_pic_2_blur_ref.current.style.setProperty(
            // 15 to 10 deg
            "--cardhoverpic-rot-z",
            `${15 - (x / width) * 5}deg`,
          );
      });

      window.addEventListener("scroll", scrolly);
    }, []);

    function scrolly() {
      if (hover_pic_1_ref.current)
        hover_pic_1_ref.current.style.setProperty(
          "--cardhoverpic-tran-y",
          `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
        );
      if (hover_pic_1_blur_ref.current)
        hover_pic_1_blur_ref.current.style.setProperty(
          "--cardhoverpic-tran-y",
          `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
        );
      if (hover_pic_2_ref.current)
        hover_pic_2_ref.current.style.setProperty(
          "--cardhoverpic-tran-y",
          `${5 - visibilityPercent(hover_pic_1_ref) * 20}em`,
        );
      if (hover_pic_2_blur_ref.current)
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

  const Expandable_sec = () => {
    const [accordion, setAccordion] = useState({
      acc1: false,
      acc2: false,
      acc3: false,
      acc4: false,
      acc5: false,
      acc6: false,
    });
    return (
      <section>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc1: !accordion.acc1 })}
        >
          <div
            className={
              accordion.acc1
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc1
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc1
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc2: !accordion.acc2 })}
        >
          <div
            className={
              accordion.acc2
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc2
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc2
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc3: !accordion.acc3 })}
        >
          <div
            className={
              accordion.acc3
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc3
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc3
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc4: !accordion.acc4 })}
        >
          <div
            className={
              accordion.acc4
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc4
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc4
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc5: !accordion.acc5 })}
        >
          <div
            className={
              accordion.acc5
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc5
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc5
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
        <div
          className="mb-4"
          onClick={() => setAccordion({ ...accordion, acc6: !accordion.acc6 })}
        >
          <div
            className={
              accordion.acc6
                ? "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#0a1420] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
                : "mx-auto w-11/12 max-w-[54em] cursor-pointer overflow-hidden rounded-2xl border-2 border-white/5 bg-[#09121de5] px-5 py-4 transition-all duration-300 hover:px-6 md:w-auto md:px-7 hover:md:px-9"
            }
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl">
                What is Ersa and how does it work?
              </h2>
              <Image
                src={x_icon}
                width={0}
                height={0}
                alt=""
                className={
                  accordion.acc6
                    ? "transition-all duration-500"
                    : "rotate-45 transition-all duration-500"
                }
              />
            </div>
            <div
              className={
                accordion.acc6
                  ? "max-h-[10rem] overflow-hidden transition-all duration-500"
                  : "max-h-0 overflow-hidden transition-all duration-500"
              }
            >
              <p>
                Rutrum placerat condimentum eget diam erat et. Risus tellus
                euismod diam tristique pellentesque. Nec sodales nulla luctus eu
                ornare aliquam enim mauris. Ut velit malesuada.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <section className="mt-32 overflow-hidden py-10">
      <section>
        <div className="mx-auto mb-12 flex max-w-[1200px] flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#72ebb126] px-3 py-1 text-xs uppercase text-[#72ebb1]">
            Stock
          </div>
          <h1 className="mb-10 mt-5 text-center">
            Investment Strategy and Tokenomics of Onigama Stocks
          </h1>
          <p className="md:w-1/2">
            Investment Strategy and Tokenomics of Onigama Stocks Analysis of
            Structure, Opportunities and Conversion to Real Assets (RWAs)
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px] pb-20">
        <div className="flex flex-col justify-stretch sm:flex-row">
          <Price_card_1 />
          <Price_card_2 />
        </div>
        <div className="flex flex-col justify-stretch sm:mt-6 sm:flex-row">
          <Price_card_3 />
          <Price_card_4 />
        </div>
        <section className="mx-auto mb-20 mt-8 px-8">
          <p>
            Onigama Corporation, as an investment company, seeks to achieve
            long-term strategic and financial goals by using stocks as one of
            its key tools. Stock efficiency in Onigama plays an important role
            in attracting capital, motivating employees, managing risk, and
            increasing the value of the company. In the following, we will
            examine the different aspects of stock efficiency in this company :
          </p>

          <h2 className="mt-7">Capital Raising</h2>
          <p>
            Financing for new investments: Through the issuance of shares, the
            onigama company raises the necessary capital to enter into new
            investment projects and expand its portfolio. Stock efficiency in
            this sector refers to the success of Onigama in raising capital with
            the lowest cost and the highest returns.
          </p>
          <p>
            Reducing financing costs: Compared to financing through debts, which
            requires the payment of interest, financing through a share issuance
            allows the onigama company to reduce its financing costs while
            avoiding the financial burden and risks associated with debts
          </p>
          <h2 className="mt-7">Employee Incentives</h2>
          <p>
            Incentive Shares for Managers and Employees: Onigama can grant its
            employees and managers shares or stock options to encourage them to
            perform better and increase productivity. This leads to the
            alignment of employees' interests with those of shareholders and
            causes their efforts to increase the value of the company.
          </p>
          <p>
            Retaining talent and motivating more: Giving shares to employees at
            Onigama serves as a strategy to retain key talent and reduce their
            exit rates. This motivational tool can help build more commitment
            and loyalty among employees
          </p>
          <h2 className="mt-7">Risk Management </h2>
          <p>
            Diversification of investments: A stock issuance allows Onigama to
            acquire a variety of financial resources through the sale of shares,
            reducing its dependence on debt.This strategy helps to better manage
            financial and economic risks.
          </p>
          <p>
            Reducing debts: By using stocks instead of debt, Onigama can avoid
            the financial burden of interest and associated risks, which leads
            to greater financial sustainability in the long term
          </p>
          <h2 className="mt-7">Valuation</h2>
          <p>
            Increasing the value of the company through successful investments:
            When the onigama company manages its shares properly and has
            successful investments, the value of the shares increases, and
            consequently, the value of the company as a whole grows. This
            increase in value can attract new investors and strengthen the
            company's position in the financial markets.
          </p>
          <p>
            Reflection of the company's performance in the stock market: The
            stock price of Onigama in the market can indicate the financial
            performance and prospects of the company's investments. Successful
            performance in investment projects can lead to an increase in stock
            prices and build confidence among investors
          </p>
          <h2 className="mt-7">Optimal Use of Equity</h2>
          <p>
            Strategic use of stock issuance and redemption: Onigama management
            must carefully determine when and how much new stock is issued or
            existing stock is redeemed. These decisions should be made based on
            a careful assessment of market conditions and the company's
            investment needs in order to achieve the most optimal outcome.
          </p>
          <p>
            Preventing excessive dilution of shareholder ownership: One of the
            significant challenges in issuing new shares is diluting the
            ownership of existing shareholders. Stock efficiency in Onigama
            means carefully managing the process in such a way that the
            interests of the current shareholders are preserved and their value
            is not diminished in the long run
          </p>
          <h2 className="mt-7">Control and Ownership</h2>
          <p>
            Maintaining control over strategic decisions: Onigama can maintain
            control over the ownership structure and strategic decisions
            according to the amount of shares issued. This allows the company to
            act independently and with minimal external interference on the way
            to achieving its goals.
          </p>
          <p>
            Balance of power among shareholders: Stock efficiency in an onigama
            corporation means maintaining a balance of power between different
            shareholders, so that no group has absolute power in making
            decisions unless it is necessary for the strategic interests of the
            company
          </p>
          <h2 className="mt-7">Conclusion</h2>
          <p>
            The stock efficiency in Onigama represents the company's ability to
            make the best use of stocks to achieve its financial and strategic
            goals. This concept refers to the balance between attracting
            capital, motivating employees, managing risk, increasing the value
            of the company, and maintaining control over the ownership
            structure. With the right strategies, Onigama can be successful in
            raising capital, improving financial performance, and building trust
            in the market, strengthening its position among investment firms
          </p>
          <h2 className="mt-7">Important Notes</h2>
          <p>
            Valuation and Strategy : This structure represents a multiple
            valuation strategy that is somehow tailored to the type of investor
            and the purpose of the investment. In this way, the company can
            attract different capitals and use the different purchasing power of
            investors at the same time.
          </p>
          <p>
            Flexibility : This structure reflects the company's flexibility in
            raising capital through various channels, which helps expand access
            to financial resources
          </p>
          <h2 className="mt-7">Ways to make money for Onigama shareholders</h2>
          <h2 className="mt-7">1 : Stock price increase</h2>
          <p>
            Added value through company growth: Onigama Company's successful
            performance in project execution and asset management leads to an
            increase in company value. This increase in value is directly
            reflected in the stock price. Shareholders can profit from this
            increase by holding their stock over time and selling it at a higher
            price in the future.
          </p>
          <p>
            Market volatility: The stock price may be affected by market
            fluctuations and positive or negative news related to the company.
            Shareholders can exploit these fluctuations through accurate market
            analysis and appropriate timing
          </p>
          <h2 className="mt-7">
            2 : Receiving Profit from Participation in Projects
          </h2>
          <p>
            Direct Participation in Projects: Onigama may offer special
            investment projects that shareholders can participate in directly.
            These projects can include investments in startups, real estate, or
            other profitable opportunities.
          </p>
          <p>
            Dividends: In addition to increasing the value of shares,
            shareholders may also benefit from dividends. This dividend is paid
            to shareholders as part of the company's net profit and can be
            awarded in cash or in the form of additional stock tokens.
          </p>
          <p>
            Additional Rewards: In some cases, successful company projects can
            provide additional rewards to shareholders, such as special refunds
            or discounts on the purchase of new shares. These bonuses can
            provide more incentive for shareholders to invest and participate
          </p>
          <h2 className="mt-7">3 : Long-term impact on shareholders</h2>
          <p>
            Strengthening financial position: By combining two methods of
            monetizing stock price appreciation and participating in projects,
            shareholders can strengthen their financial position in the long
            run. This combination allows them to both benefit from the increase
            in the value of their assets and exploit the cash flow generated by
            dividends and projects.
          </p>
          <p>
            Creating sustainable wealth: For long-term shareholders, these
            strategies can help build sustainable wealth and sustainable growth
            over time. By holding shares in the company and actively
            participating in projects, shareholders can gradually increase their
            wealth.
          </p>
          <h2 className="mt-7">
            Converting Onigama Shares into Real Assets (RWAs): Strategic
            Benefits and Opportunities for the Future
          </h2>
          <p>
            Converting Onigama shares into real estate assets (RWAs) in the
            future could be an important strategic step that will give the
            company and its shareholders access to new benefits and
            opportunities. This conversion means that the value of stocks is
            directly related to physical assets or real assets, which may
            include real estate, infrastructure, or manufacturing assets
          </p>
          <h2 className="mt-7">Real-World Assets (RWAs)</h2>
          <p>
            1. Real estate: includes land, houses, commercial buildings and
            other types of properties
          </p>
          <p>
            2. Commodities: Includes raw materials such as oil, gold, silver,
            and other precious metals
          </p>
          <p>
            3. Vehicles: including cars, ships, planes and other means of
            transportation
          </p>
          <p>
            4. Furniture: Includes machinery, industrial equipment and other
            physical assets
          </p>
          <p>
            5. Stocks and bonds: Stocks of companies and bonds that have
            economic value
          </p>
          <p>
            In the financial sphere, the term RWAs often refers to assets that
            are pitted against digital assets such as cryptocurrencies. These
            assets usually have a more fixed value and are used in traditional
            economic systems as collateral or financial backing
          </p>
          <h2 className="mt-7">Benefits of converting shares into RWAs : </h2>
          <p>
            1. Real Backing: By converting shares into real assets, the value of
            these shares is directly linked to the value of these assets. This
            can build more trust among shareholders, as real assets typically
            have more stability and security than purely digital assets.
          </p>
          <p>
            2. Diversification and risk reduction: By having the backing of real
            assets, shareholders benefit from more diversification, and this can
            help reduce investment risk. In the event of market volatility, the
            value of real assets may remain more stable.
          </p>
          <p>
            3. Increased liquidity: Real assets can be easily converted into
            cash, which can help shareholders when they need more liquidity.
          </p>
          <p>
            4. Attracting new investors: Stocks that are tied to real assets may
            be more attractive to conservative investors or those looking for
            real backing for their investments.
          </p>
          <h2 className="mt-7">Conclusion : </h2>
          <p>
            By designing a unique structure for its stocks and providing various
            investment opportunities, Onigama has been able to create a suitable
            platform to attract various investors and strengthen its position in
            the market. The division of stocks into segments such as management
            stocks, open selling, stocks for small investors, and internal sales
            of the system shows the company's flexibility and targeted strategy.
          </p>
          <p>
            Onigama shareholders can earn money in two main ways, namely
            increasing the share price and participating in the company's
            projects. This approach, in addition to increasing the value of
            shareholders' assets, creates more opportunities to benefit from the
            profits of successful projects. In the future, converting stocks
            into real assets (RWAs) as a long-term strategy could lead to
            increased investment stability and security, as these stocks are
            directly linked to physical and real assets.
          </p>
          <p>
            With all of this, Onigama is creating a comprehensive investment
            structure that allows shareholders not only to benefit from the
            growth in the value of the stock, but also to enjoy the financial
            and security benefits associated with real assets. This balanced and
            long-term approach makes Onigama one of the powerful players in the
            investment arena and provides many opportunities for current and
            future investors
          </p>
        </section>
      </div>
      <section>
        <div className="mx-auto mb-12 flex max-w-[1200px] flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#eb728126] px-3 py-1 text-sm uppercase text-[#eb7281]">
            FAQ
          </div>
          <h1 className="mb-10 mt-5 text-center">
            Get answers to common questions
          </h1>
          <p className="md:w-1/2">
            Senectus diam purus praesent vestibulum nisi accumsan justo
            porttitor sed. Mattis sem nibh ut donec non augue.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px] pb-20">
        <Expandable_sec />
      </div>
      <div className="mx-auto max-w-[1200px] pb-0">
        <Card_3 />
      </div>
    </section>
  );
}
