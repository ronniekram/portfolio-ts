import tw, { styled } from "twin.macro";
import type { SocialProps } from "../../types/pages";
import { SocialIcon, iconsMap } from "../../types/components/general/social";

const Icon = styled.a`
  ${tw`w-10 h-10 rounded-full`};
  ${tw`flex justify-center items-center`};
  ${tw`transition-colors duration-500 ease-in-out`};
  ${tw`bg-purple-mid text-orange-light text-xl`};
  ${tw`hocus:(bg-purple-dark)`};
`;

const Social = ({ title, type, href }: SocialProps) => (
  <Icon href={href} target="_blank" rel="noreferrer" aria-label={title}>
    {iconsMap[type]}
  </Icon>
);

export default Social;