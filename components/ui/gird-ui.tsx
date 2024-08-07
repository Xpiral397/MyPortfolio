import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./bgradient";
import { Globe } from "./globe";
import { useState } from "react";
import { animations } from "framer-motion";
import animationData from "../data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./magic-button";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[19rem] lg:auto-cols-[1rem] grid-cols-1 md:grid-cols-3 gap-4 md:max-w-7xl w-full mx-auto "
        // className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  key,
  spareImg,
  img,
  imgClass,
  id,
  titleClassName,
  description,
  header,
  icon,
}: {
  id: number;
  img?: string;
  spareImg: string;
  titleClassName: string;
  imgClass?: string;
  key: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "xpiral397@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "h-full md:h-inherit overflow-hidden  min-h-[200px] row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-slate-950 dark:border-slate-900 bg-pink-50 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        // background: "rgb(4,7,29)",
        backgroundColor: "",
      }}
    >
      <div className={`${id === 6 && "flex w-full justify-center h-full"}`}>
        <div className="absolute w-full h-full ">
          {img && (
            <img
              // className={cn("object-center, object-cover", imgClass)}
              src={img}
              alt=""
            />
          )}
        </div>
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 5 && "w-full opacity-80"
        } `}
      >
        {spareImg && (
          <img
            src={spareImg}
            alt={spareImg}
            //   width={220}
            className="object-cover object-center w-full h-full"
          />
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          "transition duration-200 group-hover/bento:translate-x-2 relative md:h-full min-h-[120px]  flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans text-sm  font-[500] dark:font-extralight texr-slate-900 dark:text-[#c1c2d3]   md:text-xs lg:text-base z-10">
          {description}
        </div>{" "}
        <div className="z-10 mt-2 mb-2 font-sans text-lg font-bold max-w-96">
          {title}
        </div>
        {id == 6 && (
          <div className="hidden w-full h-full dark:block">
            <BackgroundGradientAnimation>
              <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full px-4 text-3xl font-bold text-center text-white pointer-events-none md:text-4xl lg:text-7xl">
                {/* <p className="font-bold text-center text-transparent bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Gradients X Animations
              </p> */}
              </div>
            </BackgroundGradientAnimation>
          </div>
        )}
        {id == 2 && (
          <div className="absolute overflow-hidden opacity-[0.5]">
            <Globe />
          </div>
        )}
        {id == 3 && (
          <div className="absolute flex gap-1 lg:gap-5 w-fit -right-3 lg:-right-2 opacity-[0.3]">
            <div className="flex flex-col gap-3">
              {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span> */}
              {["NextJS", "MongoDB", "Django", "Express"].map((item) => {
                return (
                  <span className="py-2 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 rounded-lg text-center bg-pink-200 dark:bg-[#10132e]">
                    {item}
                  </span>
                );
              })}
              {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span> */}
            </div>
            <div className="flex flex-col gap-3">
              {["Python", "Typescript", "NodeJS", ""].map((item) => {
                return (
                  <span className="py-2 text-xs opacity-50 lg:py-4 lg:px-3 lg:text-base lg:opacity-100 rounded-lg text-center  bg-pink-200 dark:bg-[#10132e]">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {id === 6 && (
          <div className="relative z-40 mt-5">
            {/* button border magic from tailwind css buttons  */}
            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
            {/* add handleCopy() for the copy the text */}
            <div
              className={`absolute -bottom-5 right-0  ${
                copied ? "block" : "block"
              }`}
            >
              {/* <img src="/confetti.gif" alt="confetti" /> */}
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
