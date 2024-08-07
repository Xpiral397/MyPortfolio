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
import { FC, useEffect } from "react";
import { XpiralParallaxDemo } from "@/components/product";
import { GridBackgroundDemo } from "@/components/ui/gridBackground";
import { DeveloperDemo } from "@/components/developer";
import { Grid } from "@/components/Grid";
import RecentProjects from "@/components/RecentProject";
import Clients from "@/components/Client";
import Experience from "@/components/exp";
import BuildWithMe from "@/components/BuildWithMe";
import Approach from "@/components/approach";
import Footer from "@/components/footer";
import { words, clientWord } from "@/components/data";
import { TypewriterEffectSmooth } from "@/components/ui/type-writer";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/magic-button";
// Define the SkillCard component
interface SkillCardProps {
  title: string;
  description: string;
}

const SkillCard: FC<SkillCardProps> = ({ title, description }) => {
  return (
    <div className="p-4 m-2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      <MagicButton
        title="Learn More"
        icon={<FaLocationArrow />}
        position="right"
      />
    </div>
  );
};

function Metrics({ dark }: { dark: boolean }) {
  if (dark) {
    return (
      <div className="flex items-center justify-center w-full px-4 py-2 rounded-full">
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
    );
  } else {
    return (
      <div className="flex items-center justify-center w-full px-4 py-2 rounded-full">
        <div className="px-5  lg:-mt-[50px] w-[90%] z-[100]  absolute  rounded-[12px] buttom-0 sm:mt-[150px] md:mt-[100px]  wall-paper h-[120px] flex items-center  justify-around ">
          <div className="text-center">
            <h1 className="text-amber-500  font-[700] text-[20px] ">6</h1>
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
    );
  }
}

function BuildProject() {
  return (
    <>
      <div className="from-amber-100 via-amber-50 90% to-white bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 h-full w-full flex items-center xl:flex-row flex-col lg:justify-around justify-center space-y-10 sm:space-y-0 rounded-md py-48 text-center px-2 relative">
        <div className="absolute top-0 mt-10 right-10"></div>
        <div className="z-[10000] xl:w-1/2 md:text-center xl:text-left font-[600] sm:text-left text-center dark:text-slate-200 text-purple-950 text-5xl w-full lg:max-w-[575px]">
          <p>Build better with me using professional skills & services</p>
          <Button className="bg-purple-500 py-4 rounded-md px-4 w-[300px] text-slate-200">
            Build A Project
          </Button>
        </div>
        <div className="flex items-center justify-center sm:mt-0 mt-10">
          <div className="grid w-full h-full grid-cols-1 gap-5 mt-40 sm:mt-0 lg:grid-cols-2">
            <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px] xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">Expertise</h1>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                With years of experience in software development, I bring a
                wealth of knowledge and expertise to every project. My technical
                skills and attention to detail ensure top-quality results.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px] xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">Innovation</h1>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                I am committed to staying at the forefront of technology. By
                leveraging the latest tools and methodologies, I deliver
                innovative solutions that give your project a competitive edge.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px] xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Customization
              </h1>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                I understand that every project is unique. By offering tailored
                solutions that meet your specific needs, I ensure that the final
                product aligns perfectly with your vision and goals.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px] xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">
                Reliability
              </h1>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                My commitment to delivering projects on time and within budget
                means you can trust me to be a reliable partner. I focus on
                clear communication and transparency throughout the development
                process.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more
              </Button>
            </div>
            <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px] xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
              <WaterDrop color="secondary" />
              <h1 className="text-slate-800 dark:text-slate-200">Quality</h1>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                I am dedicated to providing premium quality in all my projects.
                Using top-of-the-line materials and the latest technologies, I
                deliver solutions that are built to last and exceed
                expectations.
              </p>
              <Button
                endContent={
                  <div className="text-[10px] font-[500]">
                    <DoubleArrow fontSize="inherit" color="inherit" />
                  </div>
                }
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//   return (
//     <>
//       {/* <div className=" bg-gradient-to-b from-white dark:hidden  via-amber-500 dark:to-slate-950 to-white w-20 h-20  -mt-6 md:-mt-[370px] lg:-mt-40 "></div> */}
//       {/* <div className="w-full h-20 -mt-40 bg-gradient-to-b from-zinc-900 via-zinc-900 dark:hidden to-slate-950"></div> */}
//       <div className="from-amber-100 via-amber-50 90% to-white bg-gradient-to-b dark:from-slate-900  dark:to-slate-950 h-full w-full flex items-center xl:flex-row flex-col lg:justify-around justify-center space-y-10 sm:space-y-0 rounded-md  py-48  text-center px-2 relative">
//         <div className="absolute top-0 mt-10 right-10"></div>
//         <div className="z-[10000] xl:w-1/2 md:text-center xl:text-left  font-[600] sm:text-left text-center  dark:text-slate-200 text-purple-950 text-5xl w-full lg:max-w-[575px]">
//           <p> Build better with me with professional skills & services</p>
//           <Button className="bg-purple-500 py-4 rounded-md px-4 w-[300px]  text-slate-200 ">
//             Build A Project{" "}
//           </Button>
//         </div>
//         <div className={"flex items-center justify-center sm:mt-0 mt-10  "}>
//           <div className="grid w-full h-full grid-cols-1 gap-5 mt-40 sm:mt-0s lg:grid-cols-2">
//             <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto  md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
//               <WaterDrop color="secondary" />
//               <h1 className="text-slate-800 dark:text-slate-200">
//                 Premium Quality
//               </h1>
//               <p className="text-sm text-slate-700 dark:text-slate-200">
//                 Discover an exceptional range of products and services
//                 meticulously designed to exceed your expectations. We invest in
//                 top-of-the-line materials, cutting-edge technologies, and
//                 unparalleled expertise to deliver lasting value and tangible
//                 benefits.
//               </p>
//               <Button
//                 endContent={
//                   <div className="text-[10px] font-[500]">
//                     <DoubleArrow fontSize="inherit" color="inherit" />
//                   </div>
//                 }
//               >
//                 Learn more{" "}
//               </Button>
//             </div>
//             <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto  md:w-[350px]  xl:w-[300px]  rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
//               <WaterDrop color="secondary" />
//               <h1 className="text-slate-800 dark:text-slate-200">
//                 Premium Quality
//               </h1>
//               <p className="text-sm text-slate-700 dark:text-slate-200">
//                 Discover an exceptional range of products and services
//                 meticulously designed to exceed your expectations. We invest in
//                 top-of-the-line materials, cutting-edge technologies, and
//                 unparalleled expertise to deliver lasting value and tangible
//                 benefits.
//               </p>
//               <Button
//                 endContent={
//                   <div className="text-[10px] font-[500]">
//                     <DoubleArrow fontSize="inherit" color="inherit" />
//                   </div>
//                 }
//               >
//                 Learn more{" "}
//               </Button>
//             </div>
//             <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
//               <WaterDrop color="secondary" />
//               <h1 className="text-slate-800 dark:text-slate-200">
//                 Premium Quality
//               </h1>
//               <p className="text-sm text-slate-700 dark:text-slate-200">
//                 Discover an exceptional range of products and services
//                 meticulously designed to exceed your expectations. We invest in
//                 top-of-the-line materials, cutting-edge technologies, and
//                 unparalleled expertise to deliver lasting value and tangible
//                 benefits.
//               </p>
//               <Button
//                 endContent={
//                   <div className="text-[10px] font-[500]">
//                     <DoubleArrow fontSize="inherit" color="inherit" />
//                   </div>
//                 }
//               >
//                 Learn more{" "}
//               </Button>
//             </div>

//             <div className="h-full md:h-[330px] xl:h-[330px] w-[90%] mx-auto md:w-[350px]  xl:w-[300px] rounded-lg dark:bg-slate-900 shadow-xl hover:shadow-2xl space-y-5 bg-white sm:p-6 p-3">
//               <WaterDrop color="secondary" />
//               <h1 className="text-slate-800 dark:text-slate-200">
//                 Premium Quality
//               </h1>
//               <p className="text-sm text-slate-700 dark:text-slate-200">
//                 Discover an exceptional range of products and services
//                 meticulously designed to exceed your expectations. I invest in
//                 top-of-the-line materials, cutting-edge technologies, and
//                 unparalleled expertise to deliver lasting value and tangible
//                 benefits.
//               </p>
//               <Button
//                 endContent={
//                   <div className="text-[10px] font-[500]">
//                     <DoubleArrow fontSize="inherit" color="inherit" />
//                   </div>
//                 }
//               >
//                 Learn more{" "}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// AboutMe component
function AboutMe({ mode = "light" }: { mode?: "dark" | "light" }) {
  const skills = [
    {
      title: "Master of NextJS, ReactJS and Dango",
      description:
        "Experienced in building dynamic websites and applications using NextJS, React Dajngo, Nuxt, NestJS, ensuring robust backend functionality.",
    },
    {
      title: "Java Expertise",
      description:
        "Proficient in Java development for building scalable and secure applications, with a strong understanding of OOP principles.",
    },
    {
      title: "Python Pro",
      description:
        "Skilled in Python for data science, web development, and automation, with experience in Django and Flask frameworks.",
    },
    {
      title: "JavaScript & TypeScript Mastery",
      description:
        "Expert in JavaScript for frontend and backend development, including frameworks like React and Node.js.",
    },
    {
      title: "C# Developer",
      description:
        "Experienced in C# for building desktop and web applications, leveraging the power of .NET framework.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full h-full p-6 bg-gradient-to-b from-white to-amber-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="mb-10 -mt-5 ">
        <Metrics dark={mode == "dark"} />
      </div>
      <div className="w-64 overflow-hidden max-h-64">
        <Image
          src={MyPicture}
          alt="My Picture"
          className="h-[500px] mt-10 mb-4 rounded-full  object-buttom mb-30"
        />
      </div>
      <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        Adebunmi Olamide Sunday
      </h1>
      <p className="mb-8 text-lg text-center text-gray-700 dark:text-gray-300">
        Fullstack Developer, Data Scientist, and AI Enthusiast
      </p>
      <div className="relative flex flex-wrap justify-center w-full h-full">
        {skills.map((skill, index) => (
          <div key={index} className="relative m-4 w-80">
            <SkillCard title={skill.title} description={skill.description} />
            {index < skills.length - 1 && (
              <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-300 left-1/2">
                <div className="h-full border-l border-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  useEffect(() => {
    const handleScroll = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="w-full h-full overflow-hidden ">
      <div className="relative dark:hidden z-[10]  wall-paper h-full  overflow-hidden  ">
        <section className="relative z-[10]  flex wall-paper h-[80vh] md:h-[60vh] lg:h-[80vh]  flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="flex items-center justify-center w-full h-full p-5 lg:p-12">
            <div className="flex flex-col items-center justify-center w-full space-y-3 text-2xl md:space-x-10 lg:space-x-5 md:flex-row text-zinc-950">
              <div>
                <div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
                  <div className=" text-3xl xl:text-[40px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
                    <h1 className="leading-2.5rem mb-2">
                      <TypewriterEffectSmooth
                        className="-mb-10"
                        words={[
                          {
                            text: "Hi ",
                          },
                          {
                            text: "meet,",
                          },
                        ]}
                      />{" "}
                      <TypewriterEffectSmooth
                        className="-mb-2"
                        words={[
                          {
                            text: "Xpiral",
                            className: "text-amber-800 text-3xl",
                          },
                          {
                            text: "Software Engineer,",
                            className: "text-blue-600 text-3xl",
                          },
                        ]}
                      />{" "}
                    </h1>
                    <h1 className="leading-10 lg:leading-2.5rem">
                      I Turn Solving Problems Into
                    </h1>
                    <h1>Rich Experience</h1>
                  </div>
                  <p className="text-[14px] md:text-[16px] text-slate-900 font-[500]  md:w-[98%]">
                    I help you solve your online challenges and generate more
                    sales by designing custom webites, Programs, bloging,
                    dedicated to solving brand, intricate problems and implement
                    best pratices strategies
                  </p>
                  <div className="max-w-xl space-x-2">
                    <MagicButton
                      title={"Hier Me"}
                      icon={<ArrowForwardIosSharp />}
                      position="left"
                      otherClasses="!bg-[#161A31]"
                    />

                    <MagicButton
                      title={"Build Project"}
                      icon={<ArrowForwardIosSharp />}
                      position="left"
                      otherClasses="!bg-[#161A31]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between overflow-w-hidden">
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

                      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-pink-100"></div> */}
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
        <AboutMe />
        <BuildProject />
      </div>
      <div className="w-full text-white dark:block hidden z-[10] relative mt-10 h-full ">
        <div className="absolute top-0 w-full h-full left-1"></div>
        <section className="relative z-[10]  flex wall-paper-2 h-[80vh] md:h-[60vh] lg:h-[80vh]  flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="flex items-center justify-center w-full h-full p-5">
            <div className="flex flex-col items-center justify-center w-full space-y-3 text-2xl md:space-x-10 lg:space-x-5 md:flex-row text-zinc-950">
              <div>
                <div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
                  <div className="text-white text-3xl xl:text-[37px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
                    <h1 className="leading-2.5rem mb-2">
                      <TypewriterEffectSmooth
                        className="-mb-10"
                        words={[
                          {
                            text: "Hi ",
                          },
                          {
                            text: "meet,",
                          },
                        ]}
                      />{" "}
                      <TypewriterEffectSmooth
                        className="-mb-2"
                        words={[
                          {
                            text: "Xpiral",
                            className: "text-amber-800 text-3xl",
                          },
                          {
                            text: "Software Engineer,",
                            className: "text-blue-700 text-3xl",
                          },
                        ]}
                      />{" "}
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
                  <div className="max-w-xl space-x-2">
                    <MagicButton
                      title={"Hier Me"}
                      icon={<ArrowForwardIosSharp />}
                      position="left"
                      otherClasses="!bg-[#161A31]"
                    />

                    <MagicButton
                      title={"Build Project"}
                      icon={<ArrowForwardIosSharp />}
                      position="left"
                      otherClasses="!bg-[#161A31]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between overflow-w-hidden">
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
        <AboutMe mode="dark" />
        <BuildProject />
      </div>
      <GridBackgroundDemo>
        <Grid />
      </GridBackgroundDemo>

      <GridBackgroundDemo>
        <XpiralParallaxDemo />
      </GridBackgroundDemo>

      <GridBackgroundDemo>
        <DeveloperDemo />
      </GridBackgroundDemo>
      <div className="relative">
        <BuildWithMe />
      </div>
      <GridBackgroundDemo>
        <TypewriterEffectSmooth className="max-w-max mx-auto" words={words} />
        <RecentProjects />
      </GridBackgroundDemo>
      <GridBackgroundDemo>
        <TypewriterEffectSmooth
          className="max-w-max mx-auto"
          words={clientWord}
        />
        <Clients />
      </GridBackgroundDemo>
      <GridBackgroundDemo>
        <Experience />
      </GridBackgroundDemo>
      <GridBackgroundDemo>
        <Approach />
      </GridBackgroundDemo>
      <GridBackgroundDemo>
        <Footer />
      </GridBackgroundDemo>
    </div>
  );
}
