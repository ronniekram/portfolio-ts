import type { NextPage } from "next";
import Social from "../src/components/general/social";
import "twin.macro";

const TestPage = () => {
  return (
    <div tw="w-screen h-screen bg-orange-light flex items-center justify-center space-x-3">
      <Social title="Github" type="github" href="https://github.com/ronniekram" />
      <Social title="LinkedIn" type="linkedin" href="https://github.com/ronniekram" />
      <Social title="Medium" type="medium" href="https://github.com/ronniekram" />
      <Social title="Dev.to" type="dev" href="https://github.com/ronniekram" />
      <Social title="Email me!" type="mail" href="https://github.com/ronniekram" />
    </div>
  )
};

export default TestPage;