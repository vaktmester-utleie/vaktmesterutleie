import { defineField, defineType } from 'sanity'

export const image = defineType({
  name: 'imageWithAlt',
  title: 'Bilde',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt-tekst',
      validation: (r) => r.required(),
      description: 'Alternativ tekst for skjermlesere',
    }),
  ],
})
