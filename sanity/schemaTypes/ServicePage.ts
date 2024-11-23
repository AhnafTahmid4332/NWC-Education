import { defineType, defineField } from "sanity";

export const ServicePageType = defineType({
  name: "ServicePage",
  title: "ServicePage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "HeroImage",
      title: "Hero Image",
      type: "url",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "SubTitle",
      title: "SubTitle",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "The main content of the blog post.",
    }),
  ],
});
