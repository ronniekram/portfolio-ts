import { BsCamera } from "react-icons/bs";

export default {
  name: "thumbnail",
  title: "Thumbnail",
  type: "image",
  icon: BsCamera,
  fields: [
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
  ],
};