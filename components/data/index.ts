export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and open communication",
    description: "",
    className: "lg:col-span-2 md:col-span-1 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Diverse in Skills",
    description: "Master of Languages & frameworks",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a Passion for Development",
    description:
      "Driven by a strong passion for technology and development, I have six years of experience in the software engineering field. I am proficient in seven programming languages and have expertise in over 22 frameworks. My projects span across various domains, including AI, SaaS, 3D simulations, and more.",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 dark:text-inherit text-slate-900",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a JavaScript Animation library",
    description:
      "The Inside Scoop on my latest project and my development expertise.",
    className: "md:col-span-1 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to collaborate on new projects",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A real Software-as-a-Service app with AI features and a payment system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple iPhone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 5,
    title: "Voucher Kings",
    des: "A comprehensive system for managing and redeeming vouchers with advanced security features.",
    img: "/product/voucher-5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/voucher-kings",
  },
  {
    id: 6,
    title: "Proliferate",
    des: "A robust platform for content creation and distribution, designed to maximize audience engagement.",
    img: "/product/prolife.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/proliferate",
  },
  {
    id: 7,
    title: "Pro-Search",
    des: "An advanced search engine designed for efficiency and accuracy in data retrieval.",
    img: "/product/pro-search.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/pro-search",
  },
  {
    id: 8,
    title: "KIC",
    des: "A knowledge integration center to streamline the process of gathering and managing information.",
    img: "/product/kic.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/kic",
  },
  {
    id: 9,
    title: "Xpiral - Mathematical Problem Solver",
    des: "A powerful tool designed to solve complex mathematical problems, including algebra, models, equations, factorization, and expanding brackets.",
    img: "/product/lib.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.npmjs.com/package/xpiral",
  },
  {
    id: 10,
    title: "Xgenai AI",
    des: "An advanced AI platform for generating intelligent responses and performing complex tasks.",
    img: "/product/Screenshot 2024-08-06 173623.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin/xgenai",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer - Overmind",
    desc: "Led the development of a comprehensive web platform using React.js and Django, ensuring seamless user experiences and robust backend functionality.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Developer - EcoGuard",
    desc: "Developed machine learning models to detect natural disasters and analyze NDVI using Google Earth Engine.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data Scientist - KingCyberCafe",
    desc: "Led data processing and analysis projects, leveraging advanced Python techniques and machine learning algorithms to deliver actionable insights.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer - Engpy",
    desc: "Developed and maintained applications using modern frontend and backend technologies, ensuring high performance and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "github.com/Xpiral397",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "twitter.com/in/xpiral397",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "linkedin.com/in/xpiral",
  },
];
export const words = [
  {
    text: "Explore",
  },
  {
    text: "my",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },

  {
    text: "NextJS *",
    className: "text-blue-600 dark:text-blue-500",
  },
  {
    text: "NodeJS *",
    className: "text-purple-500 dark:text-purple-500",
  },
  {
    text: "Python",
    className: "text-orange-500 dark:text-orange-500",
  },
];

export const clientWord = [
  {
    text: "See ",
  },
  {
    text: "What",
  },
  {
    text: "My",
  },
  {
    text: "Client",
    className: "text-orange-600 dark:text-ornage-700",
  },
  {
    text: "Says",
  },

  {
    text: "About me",
    className: "text-purple-600 dark:text-purple-500",
  },
];

export const expWord = [
  {
    text: "Experiecne ",
  },
  {
    text: "Get",
  },
  {
    text: "The ",
  },
  {
    text: "Job",
    className: " text-oblique  text-orange-600 dark:text-ornage-700",
  },
  {
    text: "Done",
  },
  {
    text: "More",
  },

  {
    text: "Easier",
    className: "text-purple-600 dark:text-purple-500",
  },
  {
    text: "And",
    // className: "text-purple-600 dark:text-purple-500",
  },
  {
    text: "Faster",
    className: "text-ornage-700 dark:text-orange-700",
  },
];
