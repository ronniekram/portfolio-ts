export default {
  name: "social",
  title: "Social",
  type: "object",
  fields: [
    {
      name: "siteName",
      title: "Website Name",
      type: "string",
      options: {
        list: [
          { title: "Medium", value: "medium" },
          { title: "Dev.to", value: "dev" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Github", value: "github" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "href",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};