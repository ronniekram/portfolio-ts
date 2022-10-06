import { BsJournalBookmark } from "react-icons/bs";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: BsJournalBookmark,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "thumbnail",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "screenshot",
      title: "Screenshot",
      type: "screenshot",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDesc",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: "longDesc",
      title: "Long Description",
      type: "text",
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: "tech",
      title: "Languages/Frameworks/Libraries",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(3).max(8),
    },
    {
      name: "links",
      title: "Links to live site & repo",
      type: "links",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lighthouse",
      title: "Lighthouse Scores",
      type: "lighthouse",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};