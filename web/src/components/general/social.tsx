import tw, { styled } from "twin.macro";
import type { SocialProps } from "../../types/pages";
import { SocialIcon, iconsMap } from "../../types/components/general/social";

const Icon = styled.a`
  ${tw`w-10 h-10 rounded-full`};
  ${tw`transition-colors duration-300 ease-in-out`};
  ${tw`bg-purple-mid`};
  ${tw`hocus:(bg-purple-dark)`};
`;