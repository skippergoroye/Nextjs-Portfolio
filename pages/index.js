import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import skipper from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";


// Portfolio
import FacoProject1 from '../assets/portfolio/FacoProject1.png'
import turinProject from "../assets/portfolio/turinProject.png";
import hotelmgtProject from "../assets/portfolio/hotelmgtProject.png";
import podGProject from "../assets/portfolio/podGProject.png";
import ewalletapi from "../assets/portfolio/ewalletapi.png";
import queenFisherProject from "../assets/portfolio/queenFisherProject.png";




// Experience
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import NET from "../assets/NET.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import sqlServe from "../assets/sqlServe.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";











export default function Home() {
  const portfolios = [
    {
      id: 1,
      src: FacoProject1,
    },
    {
      id: 2,
      src: hotelmgtProject,
    },
    {
      id: 3,
      src: turinProject,
    },
    {
      id: 4,
      src: podGProject,
    },
    {
      id: 5,
      src: queenFisherProject,
    },
    {
      id: 6,
      src: ewalletapi,
    },
  ];






// Experience
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-black",
    },
    {
      id: 7,
      src: sqlServe,
      title: "sqlServer",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: NET,
      title: ".NET",
      style: "shadow-purple-400",
    },
  ];




  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : "" } >
      <Head>
        <title>oluwatosin adegoroye portfolio</title>
        <meta name="deescription" content="Generated by skipper"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          {/* Nav Here  */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyskipper</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Profile Here  */}
          <div className="text-center p-10">
          <h1 className="text-5xl py-2 md:text-3xl text-red-500">This portfolio is still under construction</h1>
            <h2 className="text-5xl py-2 font-medium text-teal-500 md:text-6xl">
              Oluwatosin Adegoroye
            </h2>
            <h3 className="text-5xl py-2 md:text-3xl">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and let&apos;s get cracking!
            </p>
          </div>

          {/* Social icons Here  */}
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          {/* skiper image  */}
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={skipper} 
                  alt='navbar-logo'
                  fill
                  style={{objectFit:"contain"}}                  
            />
          </div>
        </section>




        {/* section 2 */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>



           {/* card section  */}
          <div className="lg:flex gap-10">
             {/* one  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} alt="design" className="mx-auto" />
              <h3> Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your network theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
            </div>

             

             {/* two  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} className="mx-auto" alt="design"  />
              <h3> Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your network theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
            </div>


            {/* three  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <git src={code} width={100} height={100} alt="design"  className="mx-auto" />
              <h3> Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your network theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
            </div>
          </div>
        </section>

        

        {/* Portfolio section  */}
        <section>
          <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} alt="design" className="rounded-lg object-cover"  width={'100%'} height={'100%'} />
            </div>
          </div> */}
          {/* bg-gradient-to-b from-black to-gray-800 */}


              <div
                name="portfolio"
                // className=" w-full text-white md:h-screen"
              >
                <div className="mx-auto flex flex-col justify-center w-full h-full">
                  <div className="pb-8">
                    <p className="text-4xl text-black font-bold inline border-b-4 border-gray-500">
                      Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                  </div>

                  <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-6 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                      <div key={id} className="shadow-md shadow-gray-600 rounded-1g">
                        <Image
                          src={src}
                          alt="design"
                          width={'100%'} height={'100%'}
                          className="rounded-md duration-200 hover:scale-105"
                        />
                        <div className="flex items-center justify-center">
                        <a href="https://github.com/skippergoroye" target="_blank" rel="noreferrer">
                          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                            Code
                          </button>
                        </a>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
           </section>





        {/* <!-----   experinces -------> */}
        <section>
            <div
            name="experience"
            className="w-full h-screen"
          >
            <div className="mx-auto flex flex-col justify-center w-full h-full text-white">
              <div>
                <p className="text-4xl text-black font-bold border-b-4 border-gray-500 p-2 inline">
                  Experience
                </p>
                <p className="py-6">These are the technologies I&apos;ve worked with</p>
              </div>

             <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                      {techs.map(({ id, src, title, style }) => (
                        <div
                          key={id}
                          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                        <Image 
                            src={src} 
                            alt="design"
                            width={'100%'} height={'100%'} 
                            className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </section>





        {/* <!-----   Form -------> */}
        <section>
        <div
      name="contact"
      className="w-full h-screen p-4 text-white"
    >
      <div className="flex flex-col justify-center mx-auto w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-black font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            // action="https://getform.io/f/a710452e-4cca-4957-b363-ecea825ea566"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 shadow-2xl border p-6 rounded-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
}
