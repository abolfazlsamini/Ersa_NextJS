"use client";
import hover_double_pic_1 from "../../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../../public/home/hover_double_pic_2.webp";
import { useRef, useEffect } from "react";
import Image from "next/image";
import card_pic_1 from "../../../public/plan/01.jpg";
import card_pic_2 from "../../../public/plan/02.jpg";
import card_pic_3 from "../../../public/plan/03.jpg";
import card_pic_4 from "../../../public/plan/04.jpg";
import card_pic_5 from "../../../public/plan/05.jpg";
import card_pic_6 from "../../../public/plan/06.jpg";
import card_pic_7 from "../../../public/plan/07.jpg";
import card_pic_8 from "../../../public/plan/08.jpg";

export default function Contact() {
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
  const Card_1_1 = () => {
    return (
      <div className="my-2 md:w-1/2">
        <div className="glow-capture relative m-auto w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div>
                <Image
                  src={card_pic_1}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg"
                />
              </div>
              <div>
                <h2 className="mb-3 text-3xl font-bold tracking-tighter md:text-4xl">
                  Earn money and have fun by playing our Cryptocurrency games
                </h2>

                <p>
                  Cryptocurrency games are digital games that utilize blockchain
                  technology and cryptocurrencies
                </p>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ffde00" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_1_2 = () => {
    return (
      <div className="my-2 md:w-1/2">
        <div className="glow-capture relative m-auto w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div>
                <Image
                  src={card_pic_2}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg"
                />
              </div>
              <div>
                <h2 className="mb-3 text-3xl font-bold tracking-tighter md:text-4xl">
                  Trade in our Forex brokerage
                </h2>

                <p>
                  We offer brokerage services in this market that enable users
                  to trade currencies
                </p>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#03d8ff" }}
          ></div>
        </div>
      </div>
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
        if (hover_pic_1_ref.current) {
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
        }
        `"""*********** hover pic blur section **************"""`;
        if (hover_pic_1_blur_ref.current) {
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
        }
        `"""*********** hover pic 2 section **************"""`;
        if (hover_pic_2_ref.current) {
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
        }
        `"""*********** hover pic blur 2 section **************"""`;
        if (hover_pic_2_blur_ref.current) {
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
        }
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
            <div className="relative z-10 mx-auto flex justify-center text-center md:w-2/3 2xl:w-1/2">
              <div>
                <h2 className="mb-3 font-bold tracking-tighter glow:text-glow/[.5]">
                  Join the grand Onigama project
                </h2>

                <p>
                  Join one of the biggest money-making projects. Onigama offers
                  comprehensive management and planning at every moment. Join
                  Onigama and feel the difference
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
            Get&nbsp;Started
          </a>

          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ffde00" }}
          ></div>
        </div>
      </div>
    );
  };
  return (
    <section className="mt-32">
      <section>
        <div className="mx-auto mb-1 flex max-w-[1200px] flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#eb728126] px-3 py-1 text-sm uppercase text-[#eb7281]">
            Plan
          </div>
          <h1 className="mb-10 mt-5 text-center text-5xl sm:text-7xl md:w-2/3 2xl:w-2/3">
            Contact our support team for assistance
          </h1>
          <p className="mx-auto md:w-1/2">
            Feel free to ask us any questions . Onigama will answer all your
            questions.
          </p>
        </div>
      </section>
      <div className="py-20">
        <div className="mx-auto max-w-[1200px] px-2">
          {/* <Avatar_card_1 /> */}
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] pb-0">
        <Card_3 />
      </div>
    </section>
  );
}
