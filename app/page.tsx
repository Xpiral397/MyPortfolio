"use client";
import {
  ArrowForward,
  ArrowForwardIosSharp,
  DoubleArrow,
  HighQualityOutlined,
  WaterDrop,
} from "@mui/icons-material";
import MyPicture from "@/public/backgrouds/xpiral4.png";
import Border from "@/public/backgrouds/backfrop.jpg";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import js from "@/public/Language/js.svg";
import c from "@/public/Language/c.svg";
import python from "@/public/Language/python.svg";
import move from "@/public/Language/ts.png";
import backdrop from "@/public/backgrouds/backdrop.png";

export default function Page() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <div className="relative dark:hidden z-[10]   h-screen  overflow-hidden  ">
        <section className="relative z-[10]  flex wall-paper h-[80vh] md:h-[60vh] lg:h-[80vh]  flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="flex justify-center items-center h-full w-full p-5 lg:p-12">
            <div className=" space-y-3 md:space-x-10 lg:space-x-5 flex md:flex-row flex-col justify-center items-center text-zinc-950 text-2xl  w-full">
              <div>
                <div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
                  <div className=" text-3xl xl:text-[40px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
                    <h1 className="leading-2.5rem mb-2">
                      Hi, meet <span className=" text-amber-800">Xpiral</span>,{" "}
                      <span className="text-blue-600">Software Engineer,</span>
                    </h1>
                    <h1 className="leading-10 lg:leading-2.5rem">
                      {" "}
                      I Turn Sloving Problems Into
                    </h1>
                    <h1>Rich Experience</h1>
                  </div>
                  <p className="text-[14px] md:text-[16px] text-slate-900 font-[500]  md:w-[98%]">
                    I help you solve your online challenges and generate more
                    sales by designing custom webites, Programms, bloging,
                    dedicated to solving brand, intricate problems and implement
                    best pratices strategies
                  </p>
                  <Button className="bg-slate-400 text-slate-800">
                    <span className="text-slate-950">
                      Let start A project Together
                    </span>{" "}
                    <ArrowForwardIosSharp />{" "}
                  </Button>
                </div>
              </div>
              <div className=" flex justify-between items-center  overflow-w-hidden ">
                <div className="md:hidden flex  h-[200px] w-full rounded-md shadow-2xl bg-pink-100"></div>
                <div className="md:mx-1 mx-[50%] relative w-full  max-w-[600px]">
                  <div className="lg:mt-20 animate bg-xpiral-100 animate-pulse border-slate-500 flex justify-center items-center  shadow-2xl h-[200px] w-[200px] md:h-[300px] md:w-[300px]  xl:h-[600px] xl:w-[600px] px-6 py-6 rounded-full">
                    <div className=" animsate animaste-pulse border-slate-500 shadow-2xl  md:h-[400px] md:w-[400px] flex justify-center items-center px-5  rounded-full">
                      <div className="ansimate border-slate-500 bg-pink-100 shadow-2xl  h-[300px] w-[300px] flex justify-center items-center px-4 py-4  rounded-full"></div>
                      <div className="absolute z-[99] animsate animaste-pulse border-slate-500 shadow-2xl flex justify-center items-center  h-[400px] w-[400px]  px-5  rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 z-[999]">
                    <div className=" bg-pink-10 sm:rounded-full lg:rounded-none  relative lg:mt-[60px] xl:mt-[150px]  xl:mx-[120px]  -mt-10 max-h-[320px] md:max-h-[520px] overflow-hidden">
                      <Image
                        className={`w-[1500px] md:w-[1900px] xl:w-[300px] mt-5 z-[100] opacity-[0.9]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={MyPicture}
                      />

                      {/* <div className=" bg-gradient-to-b  from-transparent via-pink-100 to-pink-200 mt-[100px] h-32 w-full absolute bottom-0  rounded-full "></div> */}

                      {/* <div className=" bg-gradient-to-b  from-transparent to-pink-100  h-32 w-full absolute bottom-0  "></div> */}
                    </div>
                  </div>
                  <div className="absolute xl:mt-[150px] space-y-6 top-0 left-0 -mx-[50px]">
                    <div className="space-y-5">
                      <Image
                        className={`  top-0 left-0  w-[70px]  -mt-200 z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={js.src}
                      />
                      <Image
                        className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={python}
                      />
                      <Image
                        className={`  top-0 -left-0  w-[70px]  -mt-200 z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={c.src}
                      />
                      <Image
                        className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={move}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex items-center px-4 py-2 justify-center rounded-full">
          <div className="px-5  w-[98%] z-[100]  absolute shadow-2xl rounded-lg buttom-0 sm:mt-[150px] md:mt-[100px] lg:-mt-[42px] bg-white h-[100px] flex items-center  justify-around ">
            <div className="text-center">
              <h1 className="text-amber-500  font-[700] text-[20px] ">5+</h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Years Of Experience
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500  font-[700]  text-extrabold text-[20px] ">
                15+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Ongoging & Hand's On Project
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500   font-[700] text-extrabold text-[20px] ">
                10+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Project Development from scratch
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500  font-[700] text-extrabold text-[20px] ">
                7+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Project Deployed Development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white dark:block hidden z-[10] relative mt-10 h-screen ">
        <div className="w-full h-full absolute top-0 left-1"></div>
        <section className="relative z-[10]  flex wall-paper-2 h-[80vh] md:h-[60vh] lg:h-[80vh]  flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="flex justify-center items-center h-full w-full p-5">
            <div className="  space-y-3 md:space-x-10 lg:space-x-5 flex md:flex-row flex-col justify-center items-center text-zinc-950 text-2xl  w-full">
              <div>
                <div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
                  <div className="text-white text-3xl xl:text-[37px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
                    <h1 className="leading-2.5rem mb-2">
                      Hi, meet <span className=" text-amber-500">Xpiral</span>,{" "}
                      <span className="text-blue-600">Software Engineer,</span>
                    </h1>
                    <h1 className="leading-10 lg:leading-2.5rem">
                      {" "}
                      I Turn Sloving Problems Into
                    </h1>
                    <h1>Rich Experience</h1>
                  </div>
                  <p className="z-[1000000] text-zinc-500 text-[14px] md:text-[16px]  font-[500]  md:w-[98%]">
                    I help you solve your online challenges and generate more
                    sales by designing custom webites, Programms, bloging,
                    dedicated to solving brand, intricate problems and implement
                    best pratices strategies
                  </p>
                  <Button className="rounded-md bg-amber-500 text-extrabold text-white">
                    <span className="text-white text-extrabold  ">
                      Let start A project Together
                    </span>{" "}
                    <ArrowForwardIosSharp fontSize={"small"} />{" "}
                  </Button>
                </div>
              </div>
              <div className=" flex justify-between items-center  overflow-w-hidden ">
                <div className="md:hidden flex  h-[200px] w-full rounded-md shadow-2xl bg-pink-100"></div>
                <div className="md:mx-1 mx-[50%] relative w-full  max-w-[600px]">
                  <div className="lg:mt-20 animate bg-slate-800  border-slate-500 flex justify-center items-center  shadow-2xl h-[200px] w-[200px] md:h-[300px] md:w-[300px]  xl:h-[600px] xl:w-[600px] px-6 py-6 rounded-full">
                    <div className="animate-pulse border-slate-500 shadow-2xl  md:h-[400px] md:w-[400px] flex justify-center items-center px-5  rounded-full">
                      <div className="absolute z-[99] animate-pulse border-slate-500 shadow-2xl flex justify-center items-center  h-[400px] w-[400px]  px-5 rounded-full"></div>
                      <div className="absolute z-[99]animate-pulse border-slate-500 shadow-2xl flex justify-center items-center h-[400px] w-[400px]  px-6 rounded-full"></div>
                    </div>
                    {/* <div className="ansimate border-slate-300 md:bg-slate-300 bg-slate-500 shadow-2xl md:-mt-[300px] -mt-[200px] h-[200px] w-[100px] md:w-[900px] flex justify-center items-center px-1 py-4  rounded-full"></div> */}
                  </div>

                  <div className="absolute top-0 ">
                    <div className="sm:rounded-full lg:rounded-none  relative lg:mt-[60px] xl:mt-[150px]  xl:mx-[120px]  -mt-10 max-h-[320px] md:max-h-[520px] overflow-hidden ">
                      {/* <div className=" absolute top-0 right-0 bg-white rounded-full md:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] lg:left-26 md:left-24 z-[10] left-14 -mt-9  "></div>{" "} */}
                      <div className="w-full h-full">
                        <Image
                          className={` w-[1500px] md:w-[1900px] xl:w-[300px] -mt-200  `}
                          width={0}
                          height={0}
                          alt={"xpiral"}
                          src={MyPicture}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute mt-[-50px] lg:mt-[20px] xl:mt-[150px] space-y-6 top-0 lg:-left-3 md:-left-5 -left-10 -mx-[700px] sm:-mx-[50px]">
                    <div className="space-y-2 md:space-y-5">
                      <Image
                        className={`  top-0 left-0 w-[50px] md:w-[70px]  z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={js.src}
                      />
                      <Image
                        className={`  top-0 -left-0 w-[50px] md:w-[70px] z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={python}
                      />
                      <Image
                        className={`  top-0 -left-0  w-[50px] md:w-[70px]   z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={c.src}
                      />
                      <Image
                        className={`  top-0 -left-0 w-[50px] md:w-[70px] z-[99]`}
                        width={0}
                        height={0}
                        alt={"xpiral"}
                        src={move}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex items-center px-4 py-2 justify-center rounded-full">
          <div className="px-5  w-[90%] z-[188800]  absolute  rounded-lg buttom-0  wall-paper-2 h-[100px] flex items-center  justify-around ">
            <div className="text-center">
              <h1 className="glyphs text-amber-500  font-[700] text-[20px] ">
                5+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Years Of Experience
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500  font-[700]  text-extrabold text-[20px] ">
                15+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Ongoging & Hand's On Project
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500   font-[700] text-extrabold text-[20px] ">
                10+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Project Development from scratch
              </p>
            </div>

            <div className="text-center">
              <h1 className="text-amber-500  font-[700] text-extrabold text-[20px] ">
                7+
              </h1>
              <p className="text-blue-500 text-[13px] font-[600]">
                Project Deployed Development
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-white dark:from-zinc-900 dark:via-zinc-900 via-amber-500 dark:to-slate-950 to-white w-20 h-20  -mt-60 md:-mt-[370px] lg:-mt-40 "></div>
      <div className=" bg-gradient-to-b from-zinc-900 via-zinc-900 to-slate-950 w-full h-20 -mt-40"></div>
      <div className="from-white via-amber-100 90% to-white bg-gradient-to-tr dark:from-slate-900  dark:to-slate-950 h-full w-full flex items-center lg:flex-row flex-col lg:justify-around justify-center space-y-10 sm:space-y-0 rounded-md  py-48 relative">
        <div className="absolute top-0 mt-10 right-10"></div>
        <div className="lg:w-1/2 md:text-center lg:text-left font-[600] sm:text-left text-center  dark:text-slate-200 text-purple-950 text-5xl w-full lg:max-w-[575px]">
          <p> Build better with me with professional skills & services</p>
          <Button className="bg-purple-500 py-4 rounded-md px-4 w-[300px]  text-slate-200 ">
            Build A Project{" "}
          </Button>
        </div>
        <div className={"flex items-center justify-center sm:mt-0 mt-10  "}>
          <div className="sm:mt-0s mt-40 grid grid-cols-2 w-full h-full gap-5">
            <div className="h-full md:h-[330px] xl:h-[330px] w-[200px] md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Premium Quality
              </h1>
              <p className="text-slate-700 dark:text-slate-200 text-sm">
                Discover an exceptional range of products and services
                meticulously designed to exceed your expectations. We invest in
                top-of-the-line materials, cutting-edge technologies, and
                unparalleled expertise to deliver lasting value and tangible
                benefits.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more{" "}
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[200px] md:w-[350px]  xl:w-[300px]  rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Premium Quality
              </h1>
              <p className="text-slate-700 dark:text-slate-200 text-sm">
                Discover an exceptional range of products and services
                meticulously designed to exceed your expectations. We invest in
                top-of-the-line materials, cutting-edge technologies, and
                unparalleled expertise to deliver lasting value and tangible
                benefits.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more{" "}
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[200px] md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Premium Quality
              </h1>
              <p className="text-slate-700 dark:text-slate-200 text-sm">
                Discover an exceptional range of products and services
                meticulously designed to exceed your expectations. We invest in
                top-of-the-line materials, cutting-edge technologies, and
                unparalleled expertise to deliver lasting value and tangible
                benefits.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more{" "}
              </Button>
            </div>

            <div className="h-full md:h-[330px] xl:h-[330px] w-[200px] md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Premium Quality
              </h1>
              <p className="text-slate-700 dark:text-slate-200 text-sm">
                Discover an exceptional range of products and services
                meticulously designed to exceed your expectations. We invest in
                top-of-the-line materials, cutting-edge technologies, and
                unparalleled expertise to deliver lasting value and tangible
                benefits.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more{" "}
              </Button>
            </div>
          </div>
        </div>
        <div cl></div>
      </div>
    </div>
  );
}
