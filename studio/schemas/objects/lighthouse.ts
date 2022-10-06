import { SiLighthouse } from "react-icons/si";

export default {
  name: "lighthouse",
  title: "Lighthouse Scores",
  type: "object",
  icon: SiLighthouse,
  fields: [
    {
      name: "performance",
      title: "Performance",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: "a11y",
      title: "Accessibility",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: "bestPractices",
      title: "Best Practices",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: "seo",
      title: "SEO",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
  ],
};