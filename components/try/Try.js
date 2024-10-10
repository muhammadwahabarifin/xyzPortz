/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { MENULINKS } from "constants";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Try = ({ isDesktop }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  const services = [
    {
      img: "/assets/learn.svg",
      title: "SHADCDNUI",
      sub: "Lessons on design that cover the most recent developments.",
      promo: "design",
      frame: ["Nextjs", "TailwindCSS", "Frontend"],
    },
    {
      img: "/assets/figma.svg",
      title: "web Development",
      sub: "Lesson on design that cover then most recent development",
      promo: "design",
      frame: ["HTML", "CSS", "JS"],
    },
    {
      img: "/assets/code.svg",
      title: "web Development",
      sub: "Lesson on design that cover then most recent development",
      promo: "design",
      rating: "4.5",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container transform-gpu`}
    >
      <div className="flex flex-col py-2 justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Projects
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            Some things I&apos;ve built with love, expertise and a pinch of
            magical ingredients.{" "}
          </h2>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <li className="relative flex flex-col sm:flex-row xl:flex-col items-start border-white">
            <div className="order-1 sm:ml-6 xl:ml-0">
              <h3 className="mb-1 text-slate-900 font-semibold">
                ShadcnUI
              </h3>
              <div className="prose prose-slate prose-sm text-slate-600">
                <p>
                  Completely unstyled, fully accessible UI components, designed
                  to integrate beautifully with Tailwind CSS.
                </p>
              </div>
              <a
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href=""
              >
                Learn more
                <span className="sr-only">
                  , Completely unstyled, fully accessible UI components
                </span>
                <svg
                  className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
              </a>
            </div>
            <img
              src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
              alt=""
              className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="1216"
              height="640"
            />
          </li>
         
        </div>
      </div>
    </section>
  );
};

export default Try;
