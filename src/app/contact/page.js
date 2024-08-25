"use client";
import hover_double_pic_1 from "../../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../../public/home/hover_double_pic_2.webp";
import { useRef, useEffect } from "react";
import Image from "next/image";
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
  const Avatar_card_1 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `35rem`);
    }, []);
    return (
      <section className="mx-auto w-full max-w-[49em] overflow-hidden py-10">
        <div className="glow-capture relative m-auto w-11/12 sm:mx-0 sm:my-0 sm:w-full">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
            <form className="relative w-full">
              <div className="flex w-full py-5">
                <div className="flex w-1/2 flex-col pr-2">
                  <label for="first-name" className="text-xs uppercase">
                    <p>
                      First Name&nbsp;
                      <span className="text-[#5566ff]">{"(required)"}</span>
                    </p>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="First-Name"
                    id="first-name"
                    required
                    className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
                  ></input>
                </div>
                <div className="flex w-1/2 flex-col pl-2">
                  <label for="last-name" className="text-xs uppercase">
                    <p>Last Name</p>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Last-Name"
                    id="last-name"
                    className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
                  ></input>
                </div>
              </div>
              <div className="flex w-full flex-col pr-2">
                <label for="email" className="text-xs uppercase">
                  <p>
                    Email&nbsp;
                    <span className="text-[#5566ff]">{"(required)"}</span>
                  </p>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  id="email"
                  required
                  className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
                ></input>
              </div>
              <div className="mb-28 flex w-full flex-col pr-2">
                <label for="message" className="text-xs uppercase">
                  <p>
                    Message&nbsp;
                    <span className="text-[#5566ff]">{"(required)"}</span>
                  </p>
                </label>
                <textarea
                  placeholder="Tell us how we can help"
                  name="Message"
                  id="message"
                  required
                  maxLength="5000"
                  className="z-20 min-h-[16em] rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
                ></textarea>
              </div>
              <button className="unGlow_btn absolute bottom-6 z-30 w-full rounded-xl">
                Submit
              </button>
            </form>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#5566ff" }}
          ></div>
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
            Contact
          </div>
          <h1 className="mb-10 mt-5 text-center text-5xl sm:text-7xl md:w-2/3 2xl:w-2/3">
            Contact our support team for assistance
          </h1>
          <p className="mx-auto md:w-1/2">
            Nibh risus neque malesuada scelerisque scelerisque semper aliquet
            quis pellentesque. Amet leo id imperdiet pulvinar vel.
          </p>
        </div>
      </section>
      <div className="py-20">
        <div className="mx-auto max-w-[1200px] px-2">
          <Avatar_card_1 />
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] pb-0">
        <Card_3 />
      </div>
    </section>
  );
}
