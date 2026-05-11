import { defineField, defineType } from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  type: 'document',
  title: 'Kategori',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({ name: 'image', title: 'Bilete', type: 'imageWithAlt' }),
  ],
})
