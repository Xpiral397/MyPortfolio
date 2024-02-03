"use client"
import {ArrowForward, ArrowForwardIosSharp} from "@mui/icons-material";
import MyPicture from '@/public/backgrouds/xpiral.png'
import {Button} from "@nextui-org/button";
import Image from "next/image";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-xpiral">
			<section className="bg-xpiral flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center max-w-[600px] w-full">
					<div className='space-y-3 flex justify-between text-zinc-950 text-2xl font-[800]'>
						<div>
							<div className="space-y-2">
								<p> I Turn Sloving Problems Into</p>
								<p>Rich Experience</p>
							</div>
							<p className="lg:">
								I help you solve your online challenges and generate more sales by designing custom webites, Programms, bloging, dedicated to solving brand , intricate problems and implement best pratices strategies
							</p>
							<Button className="bg-slate-400 text-slate-800"><span className="text-slate-950">Let start A project Together</span> <ArrowForwardIosSharp /> </Button>
						</div>
					</div>

					<div className="relateive flex-1 w-[300px] w-full h-[300px]">
						<Image width={0} height={0} alt={"xpiral"} src={MyPicture} />

					</div>

				</div>
			</section>
		</div >
	);
}
