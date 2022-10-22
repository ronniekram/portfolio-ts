import { FaMediumM, FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsEnvelopeFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi"

export const iconsMap = {
  medium: <FaMediumM />,
  dev: <BiPencil />,
  github: <BsGithub />,
  linkedin: <FaLinkedinIn />,
  mail: <BsEnvelopeFill />,
};

export type SocialIcon = keyof typeof iconsMap;