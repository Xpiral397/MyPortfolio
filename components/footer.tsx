import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "./data";
import MagicButton from "./ui/magic-button";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="absolute left-0 w-full -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-between mt-16 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Addebunmi Olamide Sunday
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-center w-10 h-10  bg-slate-900 bg-opacity-75 border rounded-lg cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 dark:bg-black-200 border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;