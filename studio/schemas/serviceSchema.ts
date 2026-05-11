import { defineArrayMember, defineField, defineType } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Teneste',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string' }),
    defineField({ name: 'description', title: 'Beskriving', type: 'text' }),
    defineField({ name: 'image', title: 'Bilete', type: 'imageWithAlt' }),
    defineField({
      name: 'tags',
      title: 'Taggar',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'cta', title: 'Knapptekst', type: 'string' }),
  ],
})
