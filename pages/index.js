import Head from "next/head"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import admin from "../public/admin-portret.jpg"
import proj1 from "../public/netflixClone.png"
import proj2 from "../public/chatApp.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portofoliu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:p-10">
        <section className="flex justify-between relative shadow-2xl md:p-10 p-5  bg-gradient-to-tr  from-indigo-700 to-indigo-300">
          <BsFillMoonStarsFill className=" text-xl rounded-full" />
          <h2 className=" font-bold text-1xl font-mono text-black">
            DEVELOPEDBYIUS
          </h2>
        </section>
        <section className=" md:p-10  flex align-center justify-center relative text-center">
          <div className="">
            <h1 className=" text-4xl pt-10">Dulea Iustina</h1>
            <h3 className=" text-xl py-4">Developer</h3>
            <p className=" text-1xl pb-5">
              Ambitious and hardworking junior developer looking for a job
              conducive to personal development.
            </p>
            <a href="https://github.com/iustina-d">
              <AiFillGithub className=" mx-auto text-2xl" />
            </a>

            <Image
              src={admin}
              width={200}
              height={200}
              className=" mx-auto my-10 rounded-2xl pointer-events-none "
            ></Image>
          </div>
        </section>
        <section className="p-10 text-center">
          <h2 className=" text-4xl my-10">About Me</h2>
          <h4 className="max-w-3xl mx-auto">
            I am a junior programmer with no experience at a company, but I was
            a student at CodeCool programming school where I gained experience
            working in a team and individually. I use a creative approach to
            problem-solving. I have always been an energetic person and eager to
            learn new skills.
          </h4>
        </section>
        <section className=" p-10">
          <h2 className="my-10 text-4xl mx-auto text-center">Projects</h2>
          <div className="flex  flex-col gap-10 lg:gap-20 lg:flex-row lg:justify-center ">
            <div
              className="shadow-2xl p-5 md:basis-1/2 md:flex-1 md:mx-auto bg-gradient-to-tr  from-indigo-700 to-indigo-300"
              href="https://iustina-d-chat-app.netlify.app"
            >
              <Image src={proj1}></Image>
              <h3>NETFLIX-CLONE</h3>
              <p>
                This is a clone of the main page on Netflix. I created it using
                HTML, CSS, and javascript. The purpose of this project is to
                become more familiar with following a particular design.
              </p>
              <h5 className="align-end text-red-600">
                To go Live click on the project.
              </h5>
            </div>
            <div
              className="shadow-2xl p-5 md:basis-1/2 md:flex-1 md:mx-auto bg-gradient-to-tr  from-indigo-700 to-indigo-300"
              href="https://iustina-d-netflix-clone.netlify.app"
            >
              <Image src={proj2}></Image>
              <h3>ChatApp</h3>
              <p>
                The purpose of this app is conversational. The user can have a
                real-time conversation with all the people connected at that
                moment. Flexible application on most devices. It is an
                application made with React && Vite, for data storage and
                authentication we used FireBase and for its design, we used
                HTML, CSS, and Bootstrap.
              </p>
              <h5 className=" text-red-600">
                To go Live click on the project.
              </h5>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-black text-white text-center py-10">
        <h3>CONTACT</h3>
        <h4>Phone:0739152538</h4>
        <h4>Email:iusti_iustina1999@yahoo.com</h4>
      </footer>
    </div>
  )
}
