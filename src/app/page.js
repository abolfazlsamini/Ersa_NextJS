"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import home_main from "../../public/home/home_main.png";

export default function Home() {
  const ref = useRef();
  const [valueOffset, setValueOffset] = useState();
  useEffect(() => {
    const captures = document.querySelectorAll(".glow-capture");

    captures.forEach((capture) => {
      const clonedChild = capture.children[0].cloneNode(true);
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

    // setValueOffset(
    //   ref.current.getBoundingClientRect().top - window.visualViewport.height
    // );
    // window.addEventListener("scroll", scroll);
  }, []);

  function scroll() {
    setValueOffset(
      ref.current.getBoundingClientRect().top - window.visualViewport.height
    );
  }

  const GLow = () => {
    return (
      <section>
        <div className="relative glow-capture">
          <div className="group bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6  glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
            <div className="flex-1 md:order-1 order-2">
              <p className="opacity-50">Tropical fish</p>
              <h2 className="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">
                Banana Wrasse
              </h2>
              <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
                <p>
                  The Banana Wrasse is known for its vibrant yellow color and
                  elongated body, resembling a banana.
                </p>
                <p>
                  This active and playful fish thrives in tropical reef
                  environments, often seen darting among corals and rocks.
                </p>
              </div>

              <button className="font-semibold px-6 bg-zinc-950/50  py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6 glow:ring-1 glow:border-glow glow:ring-glow">
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
  const Offset = () => {
    return (
      <section>
        <div className="relative">
          <div className="top-0 right-0 fixed"> {valueOffset} </div>
        </div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
        <div ref={ref} className="w-1/2 border border-red-700 h-52">
          lorem nsaldj aslkdn qwmn dlkas
        </div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
        <div className="w-1/2 border h-52">lorem nsaldj aslkdn qwmn dlkas</div>
      </section>
    );
  };
  return (
    <main>
      {/* <div className="glow-capture relative w-11/12 mx-auto mainPic">
        <div className="glow absolute w-full h-full mx-auto group bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6  glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]"></div>
        <Image
          src={home_main}
          alt=""
          width={0}
          height={0}
          className="rounded-2xl "
        />
        <div
          className="glow-overlay"
          style={{ "--glow-color": "#6472f3" }}
        ></div>
      </div> */}
      <a className="glow_btn">
        <div>info@yoursite.com</div>
      </a>
    </main>
  );
}
