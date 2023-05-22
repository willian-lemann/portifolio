import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  i18n: true,
  fields: [
    defineField({
      name: "navigation",
      title: "Navigation",
      type: "array",
      of: [
        {
          title: "navigation",
          type: "object",
          fields: [
            {
              title: "Label",
              name: "label",
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
  ],
});
