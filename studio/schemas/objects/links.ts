import { FiExternalLink } from "react-icons/fi";

export default {
  name: "links",
  title: "Project Links",
  type: "object",
  icon: FiExternalLink,
  fields: [
    {
      name: "live",
      title: "Live Site",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "github",
      title: "Github Repo",
      type: "url",
    },
  ],
};