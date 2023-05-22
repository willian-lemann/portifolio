import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
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
      type: "text",
    }),
  ],
});
