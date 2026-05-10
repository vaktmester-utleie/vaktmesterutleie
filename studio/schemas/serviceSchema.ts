import { defineArrayMember, defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Tjeneste',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string' }),
    defineField({ name: 'description', title: 'Beskrivelse', type: 'text' }),
    defineField({ name: 'image', type: 'imageWithAlt' }),
    defineField({
      name: 'tags',
      title: 'Tag',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),

    defineField({ name: 'cta', title: 'CTA-tekst', type: 'string' }),
  ],
})
