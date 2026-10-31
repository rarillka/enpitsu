import Image from "next/image";
import Btn_v1_lg from "@/components/btn-v1-lg/Btn-v1-lg";
import HeroCharacter from "@/components/heroChar/HeroCharacter";

export default function Home() {
  return (
    <div>
      <div id="hero_section" className="relative mt-18 w-full h-120">
        <div className="relative flex items-center md:justify-center md:mx-auto gap-10">
          <div className="text-white absolute z-20">
            <div className="relative md:left-[1] md:top-[-100] sm:top-[-100]">
              <h1 className="font-sjz absolute md:left-75 sm:left-[6em] sm:top-[-17] drop-shadow-[0px_4px_10.2px_#000000] text-[77px] top-[-32] left-86 sm:text-[44px]">
                MUSCARIA
              </h1>
              <p className="font-montserrat absolute italic top-14 sm:left-[7em] md:left-14 text-center text-[18px] font-light w-100 tracking-wider leading-6 drop-shadow-[0px_4px_10.2px_#000000]">
                «Город Фрагейт хранит ошибки <br /> каждого из его жителей. Лишь
                им <br /> решать: принять своё прошлое,
                <br /> или сдаться. Но разум не всегда <br />
                является главным союзником. Не <br />
                дай ему запутать тебя, Элиас.»
              </p>
              <span className="hidden sm:block absolute top-56 md:left-67 sm:left-65">
                <Btn_v1_lg
                  btn_text={"ОПРОБОВАТЬ ДЕМО"}
                  text_color={"#2f2019"}
                  stroke_color={"#FFFFFF"}
                />
              </span>
            </div>
          </div>

          <div>
            <div className="pointer-events-none absolute inset-y-0 md:left-1/2  md:-translate-x-1/2 w-full h-200 sm:h-full  md:w-screen z-[-1]">
              <Image
                src="/img/main-hero-section/main-hero-bg.png"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="sm:block hidden w-full sm:ml-0 sm:mt-0 sm:h-120">
              <div className="flex items-center md:justify-center md:mx-auto gap-10">
                <HeroCharacter
                  wrapperClassName="w-70.5 h-70.5"
                  imageClassName="top-[-75] md:left-30"
                  defaultSrc="/img/main-hero-section/oliver-default.png"
                  darkSrc="/img/main-hero-section/oliver-dark.png"
                  width={282}
                  height={282}
                />
                <HeroCharacter
                  wrapperClassName="w-65 h-50"
                  imageClassName="top-[-135] md:left-16 sm:left-20"
                  defaultSrc="/img/main-hero-section/keren-default.png"
                  darkSrc="/img/main-hero-section/keren-dark.png"
                  width={282}
                  height={282}
                />
                <HeroCharacter
                  wrapperClassName="w-85 h-70.5"
                  imageClassName="top-[-55] md:left-[-7] sm:left-20"
                  defaultSrc="/img/main-hero-section/max-default.png"
                  darkSrc="/img/main-hero-section/max-dark.png"
                  width={500}
                  height={500}
                />
                <HeroCharacter
                  wrapperClassName="w-[320px] h-[282px]"
                  imageClassName="top-[-73] md:left-[-90]"
                  defaultSrc="/img/main-hero-section/elias-default.png"
                  darkSrc="/img/main-hero-section/elias-dark.png"
                  width={350}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
