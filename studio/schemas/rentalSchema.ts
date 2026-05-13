import { defineField, defineType } from 'sanity'

export const rentalSchema = defineType({
  name: 'rental',
  type: 'document',
  title: 'Utleigeprodukt',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Namn på produkt' }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Kategori',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'available',
      type: 'boolean',
      title: 'Ledig for utleige',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pricePerDay',
      type: 'number',
      title: 'Pris per dag (kr)',
    }),
    defineField({
      name: 'pricePerWeek',
      type: 'number',
      title: 'Pris per veke (kr)',
    }),
    defineField({
      name: 'specs',
      type: 'string',
      title: 'Spesifikasjonar',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'image', type: 'imageWithAlt', title: 'Bilete' }),
  ],
})
