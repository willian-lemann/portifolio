import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  i18n: {
    languages: ["en", "pt"],
  },
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "headerExperiences",
      title: "HeaderExperiences",
      type: "string",
    }),
    defineField({
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [
        {
          title: "Experiences",
          type: "object",
          fields: [
            {
              title: "Logo",
              name: "logo",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
            {
              title: "Name",
              name: "name",
              type: "string",
            },
            {
              title: "Role",
              name: "role",
              type: "string",
            },
            {
              title: "From",
              name: "from",
              type: "datetime",
            },
            {
              title: "to",
              name: "to",
              type: "datetime",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],
});
