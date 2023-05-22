import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  i18n: true,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
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
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          title: "Projects",
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
              title: "Description",
              name: "description",
              type: "string",
            },
            {
              title: "Link",
              name: "link",
              type: "string",
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
