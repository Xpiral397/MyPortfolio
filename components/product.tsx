"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

// Importing images from '@/public/product/'
import voucher4 from "@/public/product/vocuher-4.png";
import voucher3 from "@/public/product/vocuher-3.png";
import voucher2 from "@/public/product/vocuher-2.png";
import voucher from "@/public/product/voucher.png";
import profife from "@/public/product/profife.png";
import proife from "@/public/product/proife.png";
import prolife from "@/public/product/prolife.png";
import lib from "@/public/product/lib.png";
import lib6 from "@/public/product/lib-6.png";
import lib5 from "@/public/product/lib-5.png";
import lib4 from "@/public/product/lib-4.png";
import lib3 from "@/public/product/lib-3.png";
import lib2 from "@/public/product/lib-2.png";
import lib1 from "@/public/product/lib-1.png";
import kic7 from "@/public/product/kic-7.png";
import kic6 from "@/public/product/kic-6.png";
import kic5 from "@/public/product/kic-5.png";
import kic4 from "@/public/product/kic-4.png";
import kic3 from "@/public/product/kic-3.png";
import kic1 from "@/public/product/kic-1.png";
import kic1Alt from "@/public/product/kic1.png";
import kic from "@/public/product/kic.png";
import kings2 from "@/public/product/kings2.png";
import kings from "@/public/product/kings.png";
import arid3 from "@/public/product/arid3.png";
import arid2 from "@/public/product/arid2.png";
import aride1 from "@/public/product/Aride1.png";
import xgenai from "@/public/product/xgenai.png";
import prosearch from "@/public/product/prosearch.png";
import prosearchAlt from "@/public/product/pro-search.png";
import prosearch1 from "@/public/product/pro-search-1.png";
import screenshot from "@/public/product/Screenshot 2024-08-06 173623.png";
import voucher8 from "@/public/product/vocuher-8.png";
import voucher10 from "@/public/product/Voucher-10.png";
import voucher9 from "@/public/product/Voucher-9.png";
import voucher4Alt from "@/public/product/voucher4.png";
import voucher5 from "@/public/product/voucher-5.png";

// Define the products list
export const products = [
  {
    title: "Oui Library",
    link: "https://oui-library.vercel.app",
    thumbnails: [
      lib.src,
      lib1.src,
      lib2.src,
      lib3.src,
      lib4.src,
      lib5.src,
      lib6.src,
    ],
  },
  {
    title: "Oui Voucher",
    link: "https://oui-voucher.vercel.app",
    thumbnails: [
      voucher.src,
      voucher2.src,
      voucher3.src,
      voucher4.src,
      voucher4Alt.src,
      voucher5.src,
      voucher8.src,
      voucher9.src,
      voucher10.src,
    ],
  },
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    ],
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    ],
  },
  {
    title: "My Portfolio",
    link: "https://xpiral-portfolio.vercel.app/",
    thumbnails: ["/product/portfolio.png"],
  },
  {
    title: "My Portfolio",
    link: "https://xpiral-portfolio.vercel.app/",
    thumbnails: ["/product/portfolio2.png"],
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    ],
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    ],
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    ],
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    ],
  },

  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    ],
  },
  // {
  //   title: "SmartBridge",
  //   link: "https://smartbridgetech.com",
  //   thumbnails: [
  //     "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  //   ],
  // },
  // {
  //   title: "Renderwork Studio",
  //   link: "https://renderwork.studio",
  //   thumbnails: [
  //     "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  //   ],
  // },
  // {
  //   title: "Creme Digital",
  //   link: "https://cremedigital.com",
  //   thumbnails: [
  //     "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  //   ],
  // },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    ],
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    ],
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnails: [
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    ],
  },
  {
    title: "Xgen AI",
    link: "https://xgenai.vercel.app",
    thumbnails: [xgenai.src],
  },
  {
    title: "King's Cyber Cafe",
    link: "https://kings-cyber-cafe-nine.vercel.app",
    thumbnails: [
      kings.src,
      kings2.src,
      kic.src,
      kic1.src,
      kic1Alt.src,
      kic3.src,
      kic4.src,
      kic5.src,
      kic6.src,
      kic7.src,
    ],
  },
  {
    title: "Proliferate Mocha",
    link: "https://proliferate-mocha.vercel.app",
    thumbnails: [profife.src, proife.src, prolife.src],
  },
  {
    title: "Pro Research",
    link: "https://pro-research.vercel.app",
    thumbnails: [prosearch.src, prosearchAlt.src, prosearch1.src],
  },
];

// Function to get a random thumbnail from a list
const getRandomThumbnail = (thumbnails: any) => {
  return thumbnails[Math.floor(Math.random() * thumbnails.length)];
};

// XpiralParallaxDemo component
export function XpiralParallaxDemo() {
  const productsWithRandomThumbnails = products.map((product: any) => ({
    ...product,
    thumbnail: getRandomThumbnail(product.thumbnails),
  }));

  return <HeroParallax products={productsWithRandomThumbnails} />;
}
