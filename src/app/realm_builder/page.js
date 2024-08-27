"use client";
import Image from "next/image";

import sec1_pic_pc from "../../../public/realm_builder/sec1_pic_pc.jpg";
import sec1_logo from "../../../public/realm_builder/sec1_logo.png";

import sec2_pic_1 from "../../../public/realm_builder/sec2_pic_1.jpg";
import sec2_pic_2 from "../../../public/realm_builder/sec2_pic_2.jpg";
import sec2_pic_3 from "../../../public/realm_builder/sec2_pic_3.jpg";

import sec3_pic_1 from "../../../public/realm_builder/sec3_pic_1.jpg";
import sec3_pic_2 from "../../../public/realm_builder/sec3_pic_2.jpg";
import sec3_pic_3 from "../../../public/realm_builder/sec3_pic_3.jpg";

export default function Realm_builder() {
  const Sec_1 = () => {
    return (
      <section>
        <div className="relative min-h-[100vh] w-full bg-[#161616] md:min-h-0">
          <div>
            <picture>
              <source
                srcSet="./realm_builder/sec1_pic_mobile.jpg"
                media="(max-width:767.95px)"
              ></source>
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec1_pic_pc}
                className=""
              />
            </picture>
          </div>
          <div className="absolute bottom-0 left-1/2 mx-auto flex w-11/12 -translate-x-1/2 flex-col items-center md:bottom-1/2 md:left-20 md:block md:w-1/2 md:translate-x-0 md:translate-y-1/2 2xl:left-1/4 2xl:w-1/4">
            <Image width={0} height={0} alt="" src={sec1_logo} />
            <div className="my-2 font-neueplaktext_regular text-xl">
              Check out the Tales of Kenzera™: kengoa launch trailer and embark
              on your adventure through the beautiful and treacherous lands of
              Kenzera today!
            </div>
            <div className="my-2 w-full py-2 xl:flex">
              <a className="font-kengoa relative my-2 block w-full cursor-pointer rounded-sm bg-[#0ecdd4] px-7 py-3 text-center text-xl uppercase text-black md:w-max md:hover:scale-105 xl:my-4 xl:mr-4 md:[&_*]:hover:scale-95">
                <div className="">BUY NOW</div>
              </a>
              <a className="font-kengoa relative mb-4 mt-2 block w-full cursor-pointer rounded-sm border-2 px-7 py-3 text-center text-xl uppercase text-white md:w-max md:hover:scale-105 xl:my-4 md:[&_*]:hover:scale-95">
                <div className="">watch the trailer</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Discord = () => {
    return (
      <section>
        <div className="realm_builder_discord_bg">
          <div className="mx-auto flex flex-col items-center justify-between px-10 py-5 md:flex-row md:px-20 xl:w-3/4">
            <div className="font-kengoa text-2xl font-bold uppercase text-black">
              Chat with the team on Discord
            </div>
            <a className="font-kengoa relative my-2 block w-full cursor-pointer rounded-sm border-2 border-black px-7 py-3 text-center text-xl font-bold uppercase text-black md:w-max md:hover:scale-105 md:[&_div]:hover:scale-95">
              <div className="flex items-center">
                <span className="pr-2">join now</span>
                <span>
                  <svg
                    viewBox="0 0 71 55"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    width={20}
                    height={20}
                  >
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978Z M23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253Z M47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  };
  const Sec_2 = () => {
    return (
      <section>
        <div>
          <div className="realm_builder_src_2_bg_1 flex flex-col items-center md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_1}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="my-2 font-neueplaktext_regular text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim`&apos;s own experience with grief, discovering
                  how love gives us the courage to press on after devastating
                  loss. As kengoa, you must face your own emotions to become a
                  worthy Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="realm_builder_src_2_bg_2 flex flex-col items-center md:flex-row">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_2}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="my-2 font-neueplaktext_regular text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim`&apos;s own experience with grief, discovering
                  how love gives us the courage to press on after devastating
                  loss. As kengoa, you must face your own emotions to become a
                  worthy Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="realm_builder_src_2_bg_3 flex flex-col items-center md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec2_pic_3}
                className=""
              />
            </div>
            <div className="md:w-1/2">
              <div className="mx-auto w-11/12 py-20 md:w-9/12 md:py-0">
                <div className="font-t1korium text-[54px] 2xl:text-[100px]">
                  BECOME THE WARRIOR SHAMAN
                </div>
                <div className="my-2 font-neueplaktext_regular text-xl">
                  Embark on a poignant single-player story shaped by actor
                  Abubakar Salim`&apos;s own experience with grief, discovering
                  how love gives us the courage to press on after devastating
                  loss. As kengoa, you must face your own emotions to become a
                  worthy Nganga: a spiritual healer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  const Sec_3 = () => {
    return (
      <section>
        <div className="realm_builder_src_3_bg py-20">
          <div className="text-center font-t1korium text-[54px] 2xl:text-[100px]">
            LATEST NEWS
          </div>
          <div className="mx-auto md:flex md:w-10/12">
            <div className="realm_builder_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_1}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-kengoa font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-kengoa text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: kengoa demo now!
                </div>
                <div className="mt-2 hidden font-neueplaktext_regular text-xl text-black md:block">
                  Wield the dance of the shaman in the updated demo, now
                  available on Steam. Trial coming to Xbox and PlayStation this
                  week!
                </div>
              </div>
            </div>
            <div className="realm_builder_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_2}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-kengoa font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-kengoa text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: kengoa demo now!
                </div>
                <div className="mt-2 hidden font-neueplaktext_regular text-xl text-black md:block">
                  Details regarding the 1.1.1 hotfix
                </div>
              </div>
            </div>
            <div className="realm_builder_card_shadow mb-4 cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-1 md:mr-4 md:w-1/3">
              <Image
                width={0}
                height={0}
                alt=""
                placeholder="blur"
                src={sec3_pic_3}
                className="hidden md:block"
              />
              <div className="px-5 md:py-4">
                <div className="font-kengoa font-bold text-[#0ecdd4]">
                  JUN 11, 2024
                </div>
                <div className="font-kengoa text-xl font-bold uppercase text-black xl:text-2xl">
                  Play the new Tales of Kenzera™: kengoa demo now!
                </div>
                <div className="mt-2 hidden font-neueplaktext_regular text-xl text-black md:block">
                  Wield the dance of the shaman in the updated demo, now
                  available on Steam. Trial coming to Xbox and PlayStation this
                  week!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <section>
      <title>Realm Builder</title>
      <div>
        <Sec_1 />
        <Discord />
        <Sec_2 />
        <Sec_3 />
      </div>
    </section>
  );
}
