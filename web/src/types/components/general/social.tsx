import { FaMediumM, FaDev } from "react-icons/fa";
import { Github, LinkedIn } from "../../../../public/svg/socials";

export const iconsMap = {
  medium: <FaMediumM />,
  dev: <FaDev />,
  github: <Github />,
  linkedin: <LinkedIn />
};

export type SocialIcon = keyof typeof iconsMap;