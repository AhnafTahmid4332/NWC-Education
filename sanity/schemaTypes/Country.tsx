import { defineType, defineField } from "sanity";

export const Country = defineType({
  name: "Country",
  title: "Country",
  type: "document",
  fields: [
    // General country-level fields
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
    }),
    defineField({
      name: "pageSubTitle",
      title: "Page Subtitle",
      type: "string",
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "hoverDescription",
      title: "Hover Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Nested "fromCountries" array
    defineField({
      name: "fromCountries",
      title: "From Countries",
      type: "array",
      of: [
        defineField({
          name: "fromCountry",
          title: "From Country",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Country Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "heroImage",
              title: "heroImage",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "heroTitle",
              title: "heroTitle",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "body",
              title: "Body",
              type: "blockContent",
              description: "The main content of the blog post.",
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "name",
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            // Nested "cards" for each from-country
            defineField({
              name: "cards",
              title: "Cards",
              type: "array",
              of: [
                defineField({
                  name: "card",
                  title: "Card",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Card Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                      initialValue: (context) =>
                        [
                          "Overview",
                          "Course Subjects",
                          "Best University & Programs",
                          "Fees & Scholarships Facility",
                          "Career & Work Opportunity",
                          "FAQ and Application Support",
                        ][context.index],
                      readOnly: true,
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                      validation: (Rule) => Rule.required().min(20).max(500),
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
                    // Add dynamic content for the card page
                    defineField({
                      name: "heroImage",
                      title: "Hero Image",
                      type: "image",
                      options: {
                        hotspot: true,
                      },
                      description:
                        "Image to appear in the hero section of the page.",
                    }),
                    defineField({
                      name: "heroTitle",
                      title: "Hero Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                      description: "Title for the hero section of the page.",
                    }),
                    defineField({
                      name: "contentBody",
                      title: "Content Body",
                      type: "blockContent",
                      description:
                        "Main content of the page, written in markdown.",
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
              initialValue: [
                {
                  title: "Overview",
                  description: "",
                  slug: { current: "overview" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
                {
                  title: "Course Subjects",
                  description: "",
                  slug: { current: "course-subjects" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
                {
                  title: "Best University & Programs",
                  description: "",
                  slug: { current: "best-university-programs" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
                {
                  title: "Fees & Scholarships Facility",
                  description: "",
                  slug: { current: "fees-scholarships-facility" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
                {
                  title: "Career & Work Opportunity",
                  description: "",
                  slug: { current: "career-work-opportunity" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
                {
                  title: "FAQ and Application Support",
                  description: "",
                  slug: { current: "faq-application-support" },
                  heroImage: {},
                  heroTitle: "",
                  contentBody: "",
                },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
