import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Namn på prosjekt',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bilde',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
      validation: (r) => r.required(),
      description: 'Bilde karusell',
    }),

    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Kort beskrivelse av prosjektet',
    }),
  ],
})
