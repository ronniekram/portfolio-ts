import { BsInfoCircle } from "react-icons/bs";

export default {
  name: "about",
  title: "About Page",
  type: "document",
  icon: BsInfoCircle,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "media",
      title: "Media",
      type: "thumbnail",
    },
    {
      name: "profesh",
      title: "Professional",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "personal",
      title: "Personal",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};