import type { NextPage } from "next";
import Head from "next/head";
import "twin.macro";

import { Logo } from "../public/assets/logo";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Ronnie Bee - Front End Developer</title>
      </Head>
      <div tw="w-screen h-screen bg-purple-light flex justify-center items-center font-hack font-bold text-black text-center px-8">
        <div>
          <div tw="w-[fit-content] mx-auto mb-4">
            {/* LOGO GOES HERE  */}
            <Logo />
          </div>
          <h2 tw="text-sm mb-3 font-normal">pgh, pa based front end developer</h2>
          <h1 tw="text-4xl md:(text-5xl) mb-6">See yinz soon!</h1>
        </div>
      </div>
    </>
  );
};

export default Home;