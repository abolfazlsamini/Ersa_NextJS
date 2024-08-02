"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import home_main from "../../public/home/home_main.png";
import float_pic_1 from "../../public/home/float_pic_1.png";
import float_pic_2 from "../../public/home/float_pic_2.png";
import card_pic_1 from "../../public/home/card_pic_1.webp";
import card_pic_2 from "../../public/home/card_pic_2.webp";
import card_pic_3 from "../../public/home/card_pic_3.webp";
import card_pic_4 from "../../public/home/card_pic_4.webp";
import hover_pic_1 from "../../public/home/hover_pic_1.jpg";
import hover_pic_2 from "../../public/home/hover_pic_2.webp";
import hover_pic_3 from "../../public/home/hover_pic_3.webp";
import hover_double_pic_1 from "../../public/home/hover_double_pic_1.webp";
import hover_double_pic_2 from "../../public/home/hover_double_pic_2.webp";
import key_icon from "../../public/home/key_icon.svg";
import bubble_icon from "../../public/home/bubble_icon.svg";
import cloud_icon from "../../public/home/cloud_icon.svg";
import horizontal_icon_1 from "../../public/home/horizontal_icon_1.svg";
import horizontal_icon_2 from "../../public/home/horizontal_icon_2.svg";
import horizontal_icon_3 from "../../public/home/horizontal_icon_3.svg";
import horizontal_icon_4 from "../../public/home/horizontal_icon_4.svg";
import horizontal_icon_5 from "../../public/home/horizontal_icon_5.svg";
import horizontal_icon_6 from "../../public/home/horizontal_icon_6.svg";
import horizontal_icon_7 from "../../public/home/horizontal_icon_7.svg";
import horizontal_icon_8 from "../../public/home/horizontal_icon_8.svg";
import horizontal_icon_9 from "../../public/home/horizontal_icon_9.svg";
import horizontal_icon_10 from "../../public/home/horizontal_icon_10.svg";
import amazon_icon from "../../public/home/amazon_icon.svg";
import small_cards_1 from "../../public/home/small_cards_1.svg";
import small_cards_2 from "../../public/home/small_cards_2.svg";
import small_cards_3 from "../../public/home/small_cards_3.svg";
import small_cards_4 from "../../public/home/small_cards_4.svg";
import small_cards_5 from "../../public/home/small_cards_5.svg";
import small_cards_6 from "../../public/home/small_cards_6.svg";
import small_cards_7 from "../../public/home/small_cards_7.svg";
import small_cards_8 from "../../public/home/small_cards_8.svg";

import avatar_1 from "../../public/home/avatar_1.webp";
export default function Home() {
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
  // const mainPicRef = useRef();
  // const cardhoverPic_1 = useRef();
  // const hover_pic_1_ref = useRef();
  // const hover_pic_2_ref = useRef();
  // const hover_pic_3_ref = useRef();
  // const carddoublehoverPic_1 = useRef();
  // const [valueOffset, setValueOffset] = useState();
  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture");
    // var r = document.getElementsByClassName("mainPic")[0];
    // var cardhoverPic_1 = document.getElementsByClassName("cardhoverPic")[0];
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
    // window.addEventListener("mousemove", (event) => {
    //   // const x = event.pageX;
    //   // const y = event.pageY;
    //   // const width = window.innerWidth;
    //   // const height = window.innerWidth;
    //   // if (x < width / 2) {
    //   //   //mouse on left side of screen
    //   //   if (width / (x + 1) / 5 < 6)
    //   //     r.style.setProperty("--mainPic-y", `${-width / (x + 1) / 6}deg`);
    //   //   else r.style.setProperty("--mainPic-y", `${-1}deg`);
    //   // } else {
    //   //   r.style.setProperty("--mainPic-y", `${(x / width) * 5}deg`);
    //   // }

    //   `"""*********** hover pic section **************"""`;
    //   // hover_pic_1_ref.current.style.setProperty(
    //   //   // 15 to 5 deg
    //   //   "--hoverpic-rot-x",
    //   //   `${(y / height) * 5 + 10}deg`,
    //   // );
    //   // hover_pic_1_ref.current.style.setProperty(
    //   //   // -25 to -15 deg
    //   //   "--hoverpic-rot-y",
    //   //   `${-25 + (x / width) * 10}deg`,
    //   // );
    //   // hover_pic_1_ref.current.style.setProperty(
    //   //   // 15 to 10 deg
    //   //   "--hoverpic-rot-z",
    //   //   `${15 - (x / width) * 5}deg`,
    //   // );
    //   // hover_pic_2_ref.current.style.setProperty(
    //   //   // 15 to 5 deg
    //   //   "--hoverpic-rot-x",
    //   //   `${(y / height) * 5 + 10}deg`,
    //   // );
    //   // hover_pic_2_ref.current.style.setProperty(
    //   //   // -25 to -15 deg
    //   //   "--hoverpic-rot-y",
    //   //   `${-25 + (x / width) * 10}deg`,
    //   // );
    //   // hover_pic_2_ref.current.style.setProperty(
    //   //   // 15 to 10 deg
    //   //   "--hoverpic-rot-z",
    //   //   `${15 - (x / width) * 5}deg`,
    //   // );
    //   // hover_pic_3_ref.current.style.setProperty(
    //   //   // 15 to 5 deg
    //   //   "--hoverpic-rot-x",
    //   //   `${(y / height) * 5 + 10}deg`,
    //   // );
    //   // hover_pic_3_ref.current.style.setProperty(
    //   //   // -25 to -15 deg
    //   //   "--hoverpic-rot-y",
    //   //   `${-25 + (x / width) * 10}deg`,
    //   // );
    //   // hover_pic_3_ref.current.style.setProperty(
    //   //   // 15 to 10 deg
    //   //   "--hoverpic-rot-z",
    //   //   `${15 - (x / width) * 5}deg`,
    //   // );
    //   // `"""*********** card 1 section **************"""`;
    //   // cardhoverPic_1.current.style.setProperty(
    //   //   "--cardhoverpic-rot-x",
    //   //   `${(y / height) * 10 + 5}deg`,
    //   // );
    //   // cardhoverPic_1.current.style.setProperty(
    //   //   "--cardhoverpic-rot-z",
    //   //   `${15 - (x / width) * 5}deg`,
    //   // );
    //   // cardhoverPic_1.current.style.setProperty(
    //   //   "--cardhoverpic-rot-y",
    //   //   `${-25 + (x / width) * 10}deg`,
    //   // );
    //   // cardhoverPic_1.current.style.setProperty(
    //   //   "--cardhoverpic-tran-x",
    //   //   `${30 - (x / width) * 6}%`,
    //   // );
    // });

    // setValueOffset(
    //   ref.current.getBoundingClientRect().top - window.visualViewport.height
    // );
    // window.addEventListener("scroll", scrolly);
  }, []);

  function scrolly() {
    // hover_pic_1_ref.current.style.setProperty(
    //   "--hoverpic-tran-y",
    //   `${10 - visibilityPercent(hover_pic_1_ref) * 20}em`,
    // );
    // hover_pic_2_ref.current.style.setProperty(
    //   "--hoverpic-tran-y",
    //   `${10 - visibilityPercent(hover_pic_2_ref) * 15}em`,
    // );
    // hover_pic_3_ref.current.style.setProperty(
    //   "--hoverpic-tran-y",
    //   `${10 - visibilityPercent(hover_pic_3_ref) * 20}em`,
    // );
    // cardhoverPic_1.current.style.setProperty(
    //   "--cardhoverpic-tran-y",
    //   `${3 - visibilityPercent(cardhoverPic_1) * 6}em`,
    // );
    // mainPicRef.current.style.setProperty(
    //   "--mainPic-trans-y",
    //   `${visibilityPercent(mainPicRef) * -100}px`,
    // );
    // if (visibilityPercent(mainPicRef) > 0.5) {
    //   mainPicRef.current.style.setProperty(
    //     "--mainPic-rot-y",
    //     `${visibilityPercent(mainPicRef) * -6}deg`,
    //   );
    // } else {
    //   mainPicRef.current.style.setProperty(
    //     "--mainPic-rot-y",
    //     `${visibilityPercent(mainPicRef) * 6}deg`,
    //   );
    // }
    // setValueOffset(
    //   ref.current.getBoundingClientRect().top - window.visualViewport.height
    // );
  }

  const GLow = () => {
    return (
      <section>
        <div className="glow-capture relative">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-4 border-white/5 bg-zinc-900/50 p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow md:flex-row md:items-start md:justify-between">
            <div className="order-2 flex-1 md:order-1">
              <p className="opacity-50">Tropical fish</p>
              <h2 className="mb-3 text-4xl font-bold tracking-tighter glow:text-glow/[.15]">
                Banana Wrasse
              </h2>
              <div className="prose-lg prose-zinc prose-invert text-opacity-90 md:prose-base">
                <p>
                  The Banana Wrasse is known for its vibrant yellow color and
                  elongated body, resembling a banana.
                </p>
                <p>
                  This active and playful fish thrives in tropical reef
                  environments, often seen darting among corals and rocks.
                </p>
              </div>

              <button className="mt-6 rounded-xl border-2 border-white/10 bg-zinc-950/50 px-6 py-3 font-semibold text-white/90 glow:border-glow glow:ring-1 glow:ring-glow">
                Learn more
              </button>
            </div>

            {/* <img
            src="fish-1.jpg"
            alt="Banana Wrasse"
            className="max-w-sm rounded-full object-cover w-40 h-40 border-4 border-white/5 md:order-2 order-1 glow glow:ring-1 glow:border-glow/[.5] glow:ring-glow shadow-inner"
          /> */}
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
      </section>
    );
  };
  const MainPic_sec = () => {
    const mainPicRef = useRef();
    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const width = window.innerWidth;
        const height = window.innerWidth;
        if (x < width / 2) {
          //mouse on left side of screen
          if (width / (x + 1) / 5 < 6)
            mainPicRef.current.style.setProperty(
              "--mainPic-y",
              `${-width / (x + 1) / 6}deg`,
            );
          else mainPicRef.current.style.setProperty("--mainPic-y", `${-1}deg`);
        } else {
          mainPicRef.current.style.setProperty(
            "--mainPic-y",
            `${(x / width) * 5}deg`,
          );
        }
      });

      window.addEventListener("scroll", scrolly);
    }, []);
    function scrolly() {
      mainPicRef.current.style.setProperty(
        "--mainPic-trans-y",
        `${visibilityPercent(mainPicRef) * -100}px`,
      );
      if (visibilityPercent(mainPicRef) > 0.5) {
        mainPicRef.current.style.setProperty(
          "--mainPic-rot-y",
          `${visibilityPercent(mainPicRef) * -6}deg`,
        );
      } else {
        mainPicRef.current.style.setProperty(
          "--mainPic-rot-y",
          `${visibilityPercent(mainPicRef) * 6}deg`,
        );
      }
    }
    return (
      <section className="overflow-hidden p-20">
        <div className="glow-capture mainPic relative mx-auto" ref={mainPicRef}>
          <div className="glow glow group absolute mx-auto flex h-full w-full flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-zinc-900/50 p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.03] glow:ring-1 glow:ring-glow md:flex-row md:items-start md:justify-between"></div>
          <Image
            src={home_main}
            alt=""
            width={0}
            height={0}
            className="rounded-2xl"
          />
          <div
            className="glow-overlay rounded-2xl"
            style={{ "--glow-color": "#6472f3" }}
          ></div>
        </div>
        {/* <div className="mask_bg"></div> */}
      </section>
    );
  };
  const Button = () => {
    return (
      <div>
        <a className="unGlow_btn" href="#">
          Get Started
        </a>
        <a className="glow_btn">
          info@yoursite.com
          {/* <div className="bg_btn"></div> */}
          {/* <div>info@yoursite.com</div> */}
        </a>
      </div>
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
                <h2 className="mb-3 text-4xl font-bold tracking-tighter">
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
            style={{ "--glow-color": "#7c3aed" }}
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
                <h2 className="mb-3 text-4xl font-bold tracking-tighter">
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
            style={{ "--glow-color": "#ff00ff" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_2_1 = () => {
    const cardhoverPic_1 = useRef();
    function scrolly() {
      cardhoverPic_1.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${3 - visibilityPercent(cardhoverPic_1) * 6}em`,
      );
    }
    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const width = window.innerWidth;
        const height = window.innerWidth;
        if (width < 768) return;
        `"""*********** card 1 section **************"""`;
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-x",
          `${(y / height) * 10 + 5}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-tran-x",
          `${30 - (x / width) * 6}%`,
        );
      });
      window.addEventListener("scroll", scrolly);
    }, []);
    return (
      <div className="mx-5 mt-5">
        <div className="glow-capture relative mx-0 w-full overflow-hidden rounded-2xl">
          <div className="glow group relative flex flex-col flex-wrap items-center justify-center gap-6 overflow-hidden rounded-2xl border-2 border-white/5 bg-[#13243655] px-10 pb-44 pt-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:px-16 sm:py-36 md:flex-row md:items-start md:justify-between">
            <div className="relative z-10 flex sm:w-1/2">
              <div>
                <h2 className="mb-3 font-bold tracking-tighter glow:text-glow/[.5]">
                  Large-scale projects in the field of imports and exports
                </h2>

                <p>
                  Investing in imports and exports is one of the key drivers of
                  economic activity for countries. This type of investment
                  offers countless opportunities for businesses
                </p>
              </div>
            </div>
          </div>
          <Image
            src={float_pic_1}
            width={0}
            height={0}
            ref={cardhoverPic_1}
            alt=""
            className="cardhoverpic absolute bottom-0 right-0 w-2/3 rounded-lg"
          />
          <a
            className="unGlow_btn absolute left-8 top-[70%] sm:left-16"
            href="#"
          >
            More Features
          </a>

          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ff0000dd" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_1_3 = () => {
    return (
      <div className="my-2 md:w-1/2">
        <div className="glow-capture relative m-auto w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div>
                <Image
                  src={card_pic_3}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg"
                />
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-bold tracking-tighter">
                  Investment in gold, stone, and diamond mining
                </h2>

                <p>
                  Our specialized team is engaged in specific activities in this
                  field. Part of your investment will enter this sector
                </p>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_1_4 = () => {
    return (
      <div className="my-2 md:w-1/2">
        <div className="glow-capture relative m-auto w-11/12 sm:m-0 sm:w-full">
          <div className="glow group mx-0 flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:p-16 md:ml-4 md:mr-2 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div>
                <Image
                  src={card_pic_4}
                  width={0}
                  height={0}
                  alt=""
                  className="mb-10 rounded-lg"
                />
              </div>
              <div>
                <h2 className="mb-3 text-4xl font-bold tracking-tighter">
                  Launch Our Cryptocurrency Exchange Platform
                </h2>

                <p>
                  Trade a diverse range of cryptocurrencies including Bitcoin,
                  Ethereum, Litecoin, and many more.Our dedicated support team
                  is available around the clock to assist you with any queries
                  or issues
                </p>
              </div>
            </div>
          </div>
          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ff00ff" }}
          ></div>
        </div>
      </div>
    );
  };
  const Card_2_2 = () => {
    const cardhoverPic_1 = useRef();
    function scrolly() {
      cardhoverPic_1.current.style.setProperty(
        "--cardhoverpic-tran-y",
        `${3 - visibilityPercent(cardhoverPic_1) * 6}em`,
      );
    }
    useEffect(() => {
      window.addEventListener("mousemove", (event) => {
        const x = event.pageX;
        const y = event.pageY;
        const width = window.innerWidth;
        const height = window.innerWidth;
        if (width < 768) return;
        `"""*********** card 1 section **************"""`;
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-x",
          `${(y / height) * 10 + 5}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        cardhoverPic_1.current.style.setProperty(
          "--cardhoverpic-tran-x",
          `${30 - (x / width) * 6}%`,
        );
      });
      window.addEventListener("scroll", scrolly);
    }, []);
    return (
      <div className="mx-5 mt-5">
        <div className="glow-capture relative mx-0 w-full overflow-hidden rounded-2xl">
          <div className="glow group relative flex flex-col flex-wrap items-center justify-center gap-6 overflow-hidden rounded-2xl border-2 border-white/5 bg-[#13243655] px-10 pb-44 pt-10 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:px-16 sm:py-36 md:flex-row md:items-start md:justify-between">
            <div className="relative z-10 flex sm:w-1/2">
              <div>
                <h2 className="mb-3 font-bold tracking-tighter glow:text-glow/[.5]">
                  We will operate in the Tourism area
                </h2>

                <p>
                  The tourism industry is one of the most thriving industries in
                  the world.By offering various tourism packages and related
                  services, we present national and international tourist
                  attractions to our customers
                </p>
              </div>
            </div>
          </div>
          <Image
            src={float_pic_2}
            width={0}
            height={0}
            ref={cardhoverPic_1}
            alt=""
            className="cardhoverpic absolute bottom-0 right-0 w-2/3 rounded-lg"
          />
          <a
            className="unGlow_btn absolute left-8 top-[70%] sm:left-16"
            href="#"
          >
            More Features
          </a>

          <div
            className="glow-overlay"
            style={{ "--glow-color": "#ff0000dd" }}
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
            style={{ "--glow-color": "#ff0000dd" }}
          ></div>
        </div>
      </div>
    );
  };
  const Hoverpic_sec = () => {
    const hover_pic_1_ref = useRef();
    const hover_pic_2_ref = useRef();
    const hover_pic_3_ref = useRef();

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
          "--hoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_1_ref.current.style.setProperty(
          // -25 to -15 deg
          "--hoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_1_ref.current.style.setProperty(
          // 15 to 10 deg
          "--hoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        hover_pic_2_ref.current.style.setProperty(
          // 15 to 5 deg
          "--hoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_2_ref.current.style.setProperty(
          // -25 to -15 deg
          "--hoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_2_ref.current.style.setProperty(
          // 15 to 10 deg
          "--hoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
        hover_pic_3_ref.current.style.setProperty(
          // 15 to 5 deg
          "--hoverpic-rot-x",
          `${(y / height) * 5 + 10}deg`,
        );
        hover_pic_3_ref.current.style.setProperty(
          // -25 to -15 deg
          "--hoverpic-rot-y",
          `${-25 + (x / width) * 10}deg`,
        );
        hover_pic_3_ref.current.style.setProperty(
          // 15 to 10 deg
          "--hoverpic-rot-z",
          `${15 - (x / width) * 5}deg`,
        );
      });

      window.addEventListener("scroll", scrolly);
    }, []);

    function scrolly() {
      hover_pic_1_ref.current.style.setProperty(
        "--hoverpic-tran-y",
        `${10 - visibilityPercent(hover_pic_1_ref) * 20}em`,
      );
      hover_pic_2_ref.current.style.setProperty(
        "--hoverpic-tran-y",
        `${10 - visibilityPercent(hover_pic_2_ref) * 15}em`,
      );
      hover_pic_3_ref.current.style.setProperty(
        "--hoverpic-tran-y",
        `${10 - visibilityPercent(hover_pic_3_ref) * 20}em`,
      );
    }
    return (
      <section>
        <div className="flex flex-col items-center py-20 sm:flex-row">
          <div className="min-h-[60vh] sm:min-h-[80vh] sm:w-1/2">
            <Image
              src={hover_pic_1}
              ref={hover_pic_1_ref}
              alt=""
              width={0}
              height={0}
              className="hoverpic1 relative z-20 ml-[-23%] mt-[5%] w-3/4 rounded-lg sm:ml-0 sm:w-1/2"
            />
            <Image
              src={hover_pic_2}
              ref={hover_pic_2_ref}
              alt=""
              width={0}
              height={0}
              className="hoverpic2 relative z-10 ml-[-43%] mt-[-16%] w-3/4 rounded-lg sm:ml-[-23%] sm:w-1/2"
            />
            <Image
              src={hover_pic_3}
              ref={hover_pic_3_ref}
              alt=""
              width={0}
              height={0}
              className="hoverpic3 relative z-20 ml-[-40%] mt-[-27%] w-3/4 rounded-lg sm:ml-[-27%] sm:w-1/2"
            />
          </div>
          <div className="mt-20 px-5 sm:w-1/2 sm:py-20">
            <div className="my-4 w-min rounded-full bg-[#72ebb126] px-3 py-2 text-xs uppercase text-[#72ebb1]">
              Security
            </div>
            <h1 className="sm:text-5xl">
              Learn about the measures we take to keep your data safe
            </h1>
            <p>
              At Onigama, we guarantee your security. Our powerful servers
              prevent any breaches and theft of your information
            </p>
            <div className="flex">
              <Image
                src={key_icon}
                width={0}
                height={0}
                alt=""
                className="mr-3"
              />
              <p>
                Our robust security team works around the clock to thwart any
                malicious actions against your data
              </p>
            </div>
            <div className="flex">
              <Image
                src={cloud_icon}
                width={0}
                height={0}
                alt=""
                className="mr-3"
              />
              <p>
                Onigama assures you that your information will remain safe and
                secure
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
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
          <a className="unGlow_btn absolute bottom-10 left-20" href="#">
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
          <a className="unGlow_btn absolute bottom-10 left-20" href="#">
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
            style={{ "--glow-color": "#ff00ff" }}
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
            style={{ "--glow-color": "#ff00ff" }}
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
            style={{ "--glow-color": "#ff00ff" }}
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
            style={{ "--glow-color": "#ff00ff" }}
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
            style={{ "--glow-color": "#ff00ff" }}
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
            style={{ "--glow-color": "#ff00ff" }}
          ></div>
        </div>
      </section>
    );
  };

  const Horizontal_scrol = () => {
    return (
      <section>
        <div className="horizontal_container relative mx-auto flex w-full max-w-[1200px] flex-row overflow-hidden whitespace-nowrap">
          <div className="horizontal_scroll flex-none whitespace-nowrap">
            <span className="inline-flex">
              <Image
                src={horizontal_icon_1}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_2}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_3}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_4}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_5}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_6}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_7}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_8}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_9}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_10}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
          </div>
          <div className="horizontal_scroll_2 w-max flex-none whitespace-nowrap">
            <span className="inline-flex">
              <Image
                src={horizontal_icon_1}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_2}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_3}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_4}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_5}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_6}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_7}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_8}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_9}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
            <span className="inline-flex">
              <Image
                src={horizontal_icon_10}
                width={0}
                height={0}
                alt=""
                className="mr-7 size-[5.9em]"
              />
            </span>
          </div>
        </div>
      </section>
    );
  };

  const Small_card_1 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_1}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_2 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_2}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_3 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_3}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_4 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_4}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_5 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_5}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_6 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_6}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_7 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_7}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const Small_card_8 = () => {
    const overlay_ref = new useRef();
    useEffect(() => {
      overlay_ref.current.style.setProperty("--glow-size", `5rem`);
    }, []);
    return (
      <div className="mx-auto text-center">
        <div className="glow-capture relative m-2 w-11/12 sm:m-0 sm:w-max">
          <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] p-2 shadow-lg shadow-black/80 glow:border-glow glow:ring-1 glow:ring-glow sm:p-5 md:flex-row md:items-start md:justify-between">
            <div className="">
              <Image
                src={small_cards_8}
                width={0}
                height={0}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div
            className="glow-overlay"
            ref={overlay_ref}
            style={{ "--glow-color": "#7c3aed" }}
          ></div>
        </div>
        <h2 className="mx-auto mb-8 w-max text-xl font-bold tracking-tighter">
          Amazon
        </h2>
      </div>
    );
  };
  const FullPlan = () => {
    return (
      <section className="mx-4">
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
  return (
    <main>
      <section>
        <section>
          <div className="mx-auto mt-32 flex flex-col items-center px-10 text-center sm:px-20 lg:w-1/2">
            <h1>Make Your Money Do Teh Most</h1>
            <p>
              Investing today is not just about securing your future; it's about
              creating opportunities for growth and prosperity that you and your
              loved ones can enjoy for years to come
            </p>
            <a className="unGlow_btn my-5" href="#">
              Get Started
            </a>
          </div>
        </section>
        <div className="mask_bg">
          <div className="mx-auto max-w-[1390px]">
            <MainPic_sec />
          </div>
        </div>
        <section>
          <div className="mx-auto max-w-[1390px] text-center">
            <p className="py-5 text-sm">FOLLOW OUR SOCIAL MEDIA</p>
            <Horizontal_scrol />
          </div>
          <div className="mx-auto mt-32 flex flex-col items-center px-10 text-center sm:px-20">
            <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
              Features
            </div>
            <h1 className="mb-20 mt-5 text-center text-3xl sm:text-5xl lg:w-1/2">
              Get to know the services and features of Onigama
            </h1>
          </div>
        </section>
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col px-2 md:flex-row">
            <Card_1_1 />
            <Card_1_2 />
          </div>
          <Card_2_1 />
        </div>
        <div className="mx-auto my-5 max-w-[1200px]">
          <div className="flex flex-col px-2 md:flex-row">
            <Card_1_3 />
            <Card_1_4 />
          </div>
          <Card_2_2 />
        </div>
        <div className="mx-auto max-w-[1200px]">
          <Hoverpic_sec />
        </div>
        <section>
          <div className="mx-auto mt-32 flex flex-col items-center px-10 text-center sm:px-20">
            <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
              Pricing
            </div>
            <h1 className="mb-20 mt-5 text-center text-3xl sm:text-5xl">
              Get to know the services and features of Onigama
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

        <div className="mx-auto mt-32 flex flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
            Integrations
          </div>
          <h1 className="mb-10 mt-5 text-center text-3xl sm:text-5xl">
            Follow us on social media to stay updated with the latest news
          </h1>
          <div className="my-20 w-full max-w-[1200px]">
            <div className="flex w-full flex-row md:flex-col">
              <div className="mx-auto mt-10 flex w-full flex-col justify-between px-10 md:flex-row">
                <Small_card_1 />
                <Small_card_2 />
                <Small_card_3 />
                <Small_card_4 />
              </div>
              <div className="mx-auto mt-10 flex w-full flex-col justify-between px-10 md:flex-row">
                <Small_card_5 />
                <Small_card_6 />
                <Small_card_7 />
                <Small_card_8 />
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="mx-auto mt-32 flex flex-col items-center px-10 text-center sm:px-20">
            <div className="rounded-full bg-[#5566ff26] px-2 py-1 text-sm uppercase text-[#56f]">
              Pricing
            </div>
            <h1 className="mb-10 mt-5 text-center text-3xl sm:text-5xl">
              Find the perfect plan for your needs
            </h1>
          </div>
        </section>
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
    </main>
  );
}
