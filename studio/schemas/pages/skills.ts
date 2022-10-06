import { GiSkills } from "react-icons/gi";

export default {
  name: "skills",
  title: "Skills",
  type: "document",
  icon: GiSkills,
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "languages",
      title: "Languages/Frameworks/Libraries",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().max(8),
    },
    {
      name: "tech",
      title: "Technologies/Programs/Tools",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().max(8),
    },
    {
      name: "soft",
      title: "Soft Skills",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().max(8),
    },
  ],
};