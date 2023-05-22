import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          title: "Projects",
          type: "object",
          fields: [
            {
              title: "Image",
              name: "image",
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
            { name: "price", title: "Price", type: "number" },
            {
              title: "Name",
              name: "name",
              type: "string",
            },
            {
              title: "Benefits",
              name: "benefits",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
});
