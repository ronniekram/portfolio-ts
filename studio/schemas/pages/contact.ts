import { BsFillPhoneVibrateFill } from "react-icons/bs";

export default {
  name: "contact",
  title: "Contact Page",
  type: "document",
  icon: BsFillPhoneVibrateFill,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "social" }],
    },
    {
      name: "freelance",
      title: "Freelance Info",
      type: "text",
      validation: (Rule) => Rule.required(),
    }
  ],
};