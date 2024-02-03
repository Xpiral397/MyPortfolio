"use client"
import {ArrowForward, ArrowForwardIosSharp} from "@mui/icons-material";
import MyPicture from '@/public/backgrouds/xpiral4.png'
import Border from '@/public/backgrouds/backfrop.jpg'
import {Button} from "@nextui-org/button";
import Image from "next/image"
import js from '@/public/Language/js.svg'
import c from '@/public/Language/c.svg'
import python from '@/public/Language/python.svg'
import move from '@/public/Language/ts.png'
import backdrop from '@/public/backgrouds/backdrop.png'

export default function Page() {
	return (
		<div className='w-full '>
			<div className="relative dark:hidden z-[10] relative  h-screen h-[50vh] overflow-hidden  ">

				<section className="relative z-[10]  flex wall-paper h-[80vh] md:h-[60vh] flex-col items-center justify-center gap-4 py-8 md:py-10">
					<div className="flex justify-center items-center h-full w-full p-5 lg:p-12">
						<div className=' w-full space-y-3 md:space-x-10 lg:space-x-5 flex md:flex-row flex-col justify-center items-center text-zinc-950 text-2xl  w-full'>
							<div>
								<div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
									<div className=" text-3xl xl:text-[40px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
										<h1 className='leading-2.5rem mb-2'>Hi, meet <span className=' text-amber-800'>Xpiral</span>, <span className='text-blue-600'>Software Engineer,</span></h1>
										<h1 className='leading-10 lg:leading-2.5rem'> I Turn Sloving Problems Into</h1>
										<h1>Rich Experience</h1>
									</div>
									<p className="text-[14px] md:text-[16px] text-slate-900 font-[500]  md:w-[98%]">
										I help you solve your online challenges and generate more sales by designing custom webites, Programms, bloging, dedicated to solving brand, intricate problems and implement best pratices strategies
									</p>
									<Button className="bg-slate-400 text-slate-800"><span className="text-slate-950">Let start A project Together</span> <ArrowForwardIosSharp /> </Button>
								</div>
							</div>
							<div className=' flex justify-between items-center  overflow-w-hidden '>
								<div className='md:hidden flex bg-white   w-full h-[200px] w-full rounded-md shadow-2xl bg-pink-100'>

								</div>
								<div className="md:mx-1 mx-[50%] relative w-full  max-w-[600px]">
									<div className="lg:mt-20 animate bg-xpiral-100 animate-pulse border-slate-500 flex justify-center items-center  shadow-2xl h-[200px] w-[200px] md:h-[300px] md:w-[300px]  xl:h-[600px] xl:w-[600px] px-6 py-6 rounded-full">
										<div className=" animsate animaste-pulse border-slate-500 shadow-2xl  md:h-[400px] md:w-[400px] flex justify-center items-center px-5 px-5 rounded-full">
											<div className="ansimate border-slate-500 bg-pink-100 shadow-2xl  h-[300px] w-[300px] flex justify-center items-center px-4 py-4  rounded-full">

											</div>
											<div className="absolute z-[99] animsate animaste-pulse border-slate-500 shadow-2xl flex justify-center items-center  h-[400px] w-[400px]  px-5 px-5 rounded-full">
											</div>
											<div className="absolute z-[99] animsate animaste-pulse border-slate-500 shadow-2xl flex justify-center items-center h-[400px] w-[400px]  px-5 px-5 rounded-full">
											</div>
										</div>
									</div>
									<div className="absolute top-0 z-[999]">
										<div className='relative lg:mt-[50px] xl:mt-[150px]  xl:mx-[120px]  -mt-10 max-h-[320px] md:max-h-[420px] overflow-hidden'>
											<Image className={`w-[1500px] md:w-[1900px] xl:w-[300px] -mt-200 z-[100]`} width={0} height={0} alt={"xpiral"} src={MyPicture} />
										</div>

									</div>
									<div className='absolute xl:mt-[150px] space-y-6 top-0 left-0 -mx-[50px]'>
										<div className='space-y-5'>
											<Image className={`  top-0 left-0  w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={js.src} />
											<Image className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={python} />
											<Image className={`  top-0 -left-0  w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={c.src} />
											<Image className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={move} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="w-full flex items-center px-4 py-2 justify-center rounded-full">
					<div className='px-5 rounded-full w-[98%] z-[100]  absolute shadow-2xl rounded-md buttom-0  -mt-[50px] bg-white h-[100px] flex items-center  justify-around '>

						<div className="text-center">
							<h1 className='text-amber-500  font-[700] text-[20px] '>
								5+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Years Of Experience
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500  font-[700]  text-extrabold text-[20px] '>
								15+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Ongoging & Hand's On Project
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500   font-[700] text-extrabold text-[20px] '>
								10+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Project Development from scratch
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500  font-[700] text-extrabold text-[20px] '>
								7+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Project Deployed Development
							</p>
						</div>


					</div>
				</div>
			</div >

			<div className="  w-full text-white dark:block hidden z-[10] relative mt-10 h-screen ">
				<section className=" w-full  z-[10000]  flex wall-paper-2 h-screen md:h-[75vh] lg:h-[70vh]  xl:h-[65vh] flex-col items-center justify-center gap-4 py-8 md:py-10">
					<div className="flex justify-center items-center h-full w-full p-5">
						<div className=' w-full space-y-3 md:space-x-10 lg:space-x-5 flex md:flex-row flex-col justify-center items-center text-zinc-950 text-2xl  w-full'>
							<div>
								<div className="space-y-3 w-full  max-w-[1200px] lg:max-w-[900px] ">
									<div className="text-white text-3xl xl:text-[37px] font-[650] font-[Heltivica, cursive, Arial, font-sans] h-full">
										<h1 className='leading-2.5rem mb-2'>Hi, meet <span className=' text-amber-500'>Xpiral</span>, <span className='text-blue-600'>Software Engineer,</span></h1>
										<h1 className='leading-10 lg:leading-2.5rem'> I Turn Sloving Problems Into</h1>
										<h1>Rich Experience</h1>
									</div>
									<p className="z-[1000000] text-zinc-500 text-[14px] md:text-[16px]  font-[500]  md:w-[98%]">
										I help you solve your online challenges and generate more sales by designing custom webites, Programms, bloging, dedicated to solving brand, intricate problems and implement best pratices strategies
									</p>
									<Button className="rounded-md bg-amber-500 text-extrabold text-white"><span className="text-white text-extrabold  ">Let start A project Together</span> <ArrowForwardIosSharp fontSize={'small'} /> </Button>
								</div>
							</div>
							<div className=' flex justify-between items-center  overflow-w-hidden '>
								<div className='md:hidden flex bg-white   w-full h-[200px] w-full rounded-md shadow-2xl bg-pink-100'>

								</div>
								<div className="md:mx-1 mx-[50%] relative w-full  max-w-[600px]">
									<div className="lg:mt-20 animate bg-slate-800 animate-pulse border-slate-500 flex justify-center items-center  shadow-2xl h-[200px] w-[200px] md:h-[300px] md:w-[300px]  xl:h-[600px] xl:w-[600px] px-6 py-6 rounded-full">
										<div className=" animsate animaste-pulse border-slate-500 shadow-2xl  md:h-[400px] md:w-[400px] flex justify-center items-center px-5 px-5 rounded-full">
											<div className="ansimate border-slate-500 bg-slate-950 shadow-2xl  h-[300px] w-[300px] flex justify-center items-center px-4 py-4  rounded-full">

											</div>
											<div className="absolute z-[99] animsate animaste-pulse border-slate-500 shadow-2xl flex justify-center items-center  h-[400px] w-[400px]  px-5 px-5 rounded-full">
											</div>
											<div className="absolute z-[99] animsate animaste-pulse border-slate-500 shadow-2xl flex justify-center items-center h-[400px] w-[400px]  px-5 px-5 rounded-full">
											</div>
										</div>
									</div>
									<div className="absolute top-0 z-[999]">
										<div className='relative lg:mt-[50px] xl:mt-[150px]  xl:mx-[120px]  -mt-10 max-h-[320px] xl:max-h-[450px] md:max-h-[420px] overflow-hidden'>
											<Image className={`w-[1500px] md:w-[1900px] xl:w-[300px] -mt-200 z-[100]`} width={0} height={0} alt={"xpiral"} src={MyPicture} />
										</div>

									</div>
									<div className='absolute mt-[-50px] lg:mt-[20px] xl:mt-[150px] space-y-6 top-0 lg:-left-3 md:-left-5 -left-10 -mx-[700px] sm:-mx-[50px]'>
										<div className='space-y-5'>
											<Image className={`  top-0 left-0  w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={js.src} />
											<Image className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={python} />
											<Image className={`  top-0 -left-0  w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={c.src} />
											<Image className={`  top-0 -left-0 w-[70px]  -mt-200 z-[99]`} width={0} height={0} alt={"xpiral"} src={move} />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="w-full flex items-center px-4 py-2 justify-center rounded-full">
					<div className='px-5 rounded-full w-[90%] z-[188800]  absolute  rounded-md buttom-0  wall-paper-2 h-[100px] flex items-center  justify-around '>

						<div className="text-center">
							<h1 className='glyphs text-amber-500  font-[700] text-[20px] '>
								5+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Years Of Experience
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500  font-[700]  text-extrabold text-[20px] '>
								15+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Ongoging & Hand's On Project
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500   font-[700] text-extrabold text-[20px] '>
								10+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Project Development from scratch
							</p>
						</div>

						<div className="text-center">
							<h1 className='text-amber-500  font-[700] text-extrabold text-[20px] '>
								7+
							</h1>
							<p className='text-blue-500 text-[13px] font-[600]'>
								Project Deployed Development
							</p>
						</div>
					</div>
				</div>

			</div >

		</div>

	);
}
