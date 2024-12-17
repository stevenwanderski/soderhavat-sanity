import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  type: "object",
  name: "hero",
  title: "Hero",
  fields: [
    defineField({ type: "string", name: "title", title: "Title" }),
    defineField({ type: "string", name: "subtitle", title: "Subtitle" }),
  ],
});