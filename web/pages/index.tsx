import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import "twin.macro";

import { Logo, Logo2 } from "../public/assets/logo";

const Home: NextPage = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    const animateTimeOut = setTimeout(() => setAnimate(!animate), 5000);
  }, [animate]);

  return (
    <>
      <Head>
        <title>Ronnie Bee - Front End Developer</title>
      </Head>
      <div tw="w-screen h-screen bg-purple-light flex justify-center items-center font-hack font-bold text-black text-center px-8">
        <div>
          <div tw="w-[fit-content] mx-auto mb-8">
            {animate ? <Logo2 /> : <Logo />}
          </div>
          <h1 tw="text-4xl md:(text-5xl) mb-6">Coming soon!</h1>
          <h2 tw="text-xl md:(text-2xl)">See ya then</h2>
        </div>
      </div>
    </>
  )
}

export default Home
