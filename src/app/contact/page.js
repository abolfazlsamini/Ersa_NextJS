"use client";
import { useRef, useEffect } from "react";
export default function Contact() {
  // useEffect(() => {
  //   const captures = document.querySelectorAll(".glow-capture");
  //   captures.forEach((capture) => {
  //     var clonedChild = capture.children[0].cloneNode(true);
  //     const overlay = capture.querySelector(".glow-overlay");
  //     overlay.appendChild(clonedChild);

  //     capture.addEventListener("mousemove", (event) => {
  //       const x = event.pageX - capture.offsetLeft;
  //       const y = event.pageY - capture.offsetTop;
  //       overlay.style.setProperty("--glow-x", `${x}px`);
  //       overlay.style.setProperty("--glow-y", `${y}px`);
  //       overlay.style.setProperty("--glow-opacity", "1");
  //     });

  //     capture.addEventListener("mouseleave", () => {
  //       overlay.style.setProperty("--glow-opacity", "0");
  //     });
  //   });
  // }, []);

  // const Avatar_card_1 = () => {
  //   const overlay_ref = new useRef();
  //   useEffect(() => {
  //     overlay_ref.current.style.setProperty("--glow-size", `35rem`);
  //   }, []);
  //   return (
  //     <section className="mx-auto w-full max-w-[49em] overflow-hidden py-10">
  //       <div className="glow-capture relative m-auto w-11/12 sm:mx-0 sm:my-0 sm:w-full">
  //         <div className="glow group flex flex-col flex-wrap items-center justify-center gap-6 rounded-2xl border-2 border-white/5 bg-[#09121de5] px-8 pt-5 shadow-lg shadow-black/80 glow:border-glow glow:bg-glow/[.15] glow:ring-1 glow:ring-glow sm:mx-2 sm:mb-4 md:flex-row md:items-start md:justify-between">
  //           <form className="relative w-full">
  //             <div className="flex w-full py-5">
  //               <div className="flex w-1/2 flex-col pr-2">
  //                 <label for="first-name" className="text-xs uppercase">
  //                   <p>
  //                     First Name&nbsp;
  //                     <span className="text-[#5566ff]">{"(required)"}</span>
  //                   </p>
  //                 </label>
  //                 <input
  //                   type="text"
  //                   placeholder="First Name"
  //                   name="First-Name"
  //                   id="first-name"
  //                   required
  //                   className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
  //                 ></input>
  //               </div>
  //               <div className="flex w-1/2 flex-col pl-2">
  //                 <label for="last-name" className="text-xs uppercase">
  //                   <p>Last Name</p>
  //                 </label>
  //                 <input
  //                   type="text"
  //                   placeholder="Last Name"
  //                   name="Last-Name"
  //                   id="last-name"
  //                   className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
  //                 ></input>
  //               </div>
  //             </div>
  //             <div className="flex w-full flex-col pr-2">
  //               <label for="email" className="text-xs uppercase">
  //                 <p>
  //                   Email&nbsp;
  //                   <span className="text-[#5566ff]">{"(required)"}</span>
  //                 </p>
  //               </label>
  //               <input
  //                 type="email"
  //                 placeholder="Email"
  //                 name="Email"
  //                 id="email"
  //                 required
  //                 className="z-20 rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
  //               ></input>
  //             </div>
  //             <div className="mb-28 flex w-full flex-col pr-2">
  //               <label for="message" className="text-xs uppercase">
  //                 <p>
  //                   Message&nbsp;
  //                   <span className="text-[#5566ff]">{"(required)"}</span>
  //                 </p>
  //               </label>
  //               <textarea
  //                 placeholder="Tell us how we can help"
  //                 name="Message"
  //                 id="message"
  //                 required
  //                 maxLength="5000"
  //                 className="z-20 min-h-[16em] rounded-xl border border-[#132436] bg-[#050b1180] px-5 py-4 placeholder:text-[#6f87a0eb] focus:border-[#5566ff] focus:outline-none focus-visible:outline-8"
  //               ></textarea>
  //             </div>
  //             <button className="unGlow_btn absolute bottom-6 z-30 w-full rounded-xl">
  //               Submit
  //             </button>
  //           </form>
  //         </div>
  //         <div
  //           className="glow-overlay"
  //           ref={overlay_ref}
  //           style={{ "--glow-color": "#5566ff" }}
  //         ></div>
  //       </div>
  //     </section>
  //   );
  // };

  return (
    <section className="mt-32">
      {/* <section>
        <div className="mx-auto mt-16 flex flex-col items-center px-10 text-center sm:px-20">
          <div className="rounded-full bg-[#eb728126] px-2 py-1 text-sm uppercase text-[#eb7281]">
            Contact
          </div>
          <h1 className="mb-10 mt-5 text-center text-5xl sm:text-7xl">
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
      </div> */}
    </section>
  );
}
