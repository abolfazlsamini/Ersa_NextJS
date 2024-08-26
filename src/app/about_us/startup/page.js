"use client";

import hover_double_pic_1 from "../../../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../../../public/home/hover_double_pic_2.webp";

import startup from "../../../../public/about_us/pages/startup.jpg";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Startup() {
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

  const Card_3_bottum = () => {
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
            <div className="relative z-10 mx-auto flex justify-center text-center sm:w-1/2">
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
    <main className="mt-20 overflow-hidden py-10">
      <section className="mx-auto max-w-[1200px]">
        <div className="mx-auto mt-16 flex flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#5566ff26] px-3 py-1 text-sm uppercase text-[#56f]">
            Incubation of start-ups
          </div>
          <h1 className="mb-10 mt-5 text-center">
            The support and incubation of blockchain-based start-ups is one of
            our main tasks
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div>
          <Image
            src={startup}
            alt=""
            placeholder="blur"
            width={0}
            height={0}
            className="mx-auto rounded-xl"
          />
        </div>
      </section>
      <section className="mx-auto my-20 max-w-[1200px]">
        <div className="mx-auto w-11/12 px-4">
          <p>
            The support and incubation of blockchain-based start-ups is one of
            our main tasks. With our many years of experience in this area, we
            offer a platform for turning innovative ideas into reality
          </p>
          <h2 className="mb-5 mt-8">Monetization strategies</h2>
          <p>We invest in innovative startups and share in their profits</p>
          <p>
            Offering consulting and acceleration services for startups and
            charging consulting fees
          </p>
          <p>
            Creating a blockchain startup ecosystem and leveraging shared
            networks and resources
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px]">
        <Card_3_bottum />
      </div>
    </main>
  );
}
