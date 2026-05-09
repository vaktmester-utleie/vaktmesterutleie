import { defineField, defineType } from 'sanity'

export const image = defineType({
  name: 'imageWithAlt',
  title: 'Bilde',
  type: 'object',
  fields: [
    defineField({ name: 'image', type: 'image' }),
    defineField({ name: 'alt', type: 'string', title: 'Alt-tekst' }),
  ],
})
