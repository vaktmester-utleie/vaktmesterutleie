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
      title: 'Pris per dag',
    }),
    defineField({
      name: 'pricePerWeek',
      type: 'number',
      title: 'Pris per veke',
      validation: (Rule) =>
        Rule.custom((pricePerWeek, context) => {
          const { pricePerDay } = context.document as { pricePerDay?: number }
          if (!pricePerDay && !pricePerWeek) {
            return 'Må ha enten pris per dag eller per veke'
          }
          return true
        }),
    }),
    defineField({
      name: 'specs',
      type: 'text',
      title: 'Beskrivelse',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
      title: 'Bilete',
      validation(rule, context) {
        rule.required()
      },
    }),
  ],
})
