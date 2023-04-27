import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from 'next/image';
import skipper from '../public/dev-ed-wave.png'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Dimitri Marco Portfolio</title>
        <meta name="deescription" content="Generated by skipper"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          
             {/* Nav Here  */}
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyskipper</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full'>Resume</a>
              </li>
            </ul>
          </nav>



            {/* Profile Here  */}
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 font-medium text-teal-500'>Oluwatosin Adegoeoye</h2>
            <h3 className='text-5xl py-2'>Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
            </p>
          </div>


          {/* Social icons Here  */}
          <div className='text-5xl flex justify-center gap-16 py-3'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>



        </section>
      </main>
    </div>
    
  )
}
