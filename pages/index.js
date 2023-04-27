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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dimitri Marco Portfolio</title>
        <meta name="deescription" content="Generated by skipper"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          {/* Nav Here  */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyskipper</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Profile Here  */}
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium text-teal-500">
              Oluwatosin Adegoeoye
            </h2>
            <h3 className="text-5xl py-2">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>

          {/* Social icons Here  */}
          <div className="text-5xl flex justify-center gap-16 py-3">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          {/* skiper image  */}
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden">
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
              developer, I've done remote work for
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
          <div>
             {/* one  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} className="mx-auto" />
              <h3> Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your network theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
            </div>

             

             {/* two  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} className="mx-auto" />
              <h3> Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your network theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
            </div>


            {/* three  */}
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className="mx-auto" />
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
              developer, I've done remote work for
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
        </section>


      </main>
    </div>
  );
}
