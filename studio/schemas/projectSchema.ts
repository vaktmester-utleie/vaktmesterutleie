import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Namn på prosjekt',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Bad', value: 'bad' },
          { title: 'Renovering', value: 'renovering' },
          { title: 'Terrasse', value: 'terrasse' },
          { title: 'Tak & inspeksjon', value: 'tak-inspeksjon' },
          { title: 'Vindu & dører', value: 'vindu-dorer' },
          { title: 'Hage', value: 'hage' },
          { title: 'Annet', value: 'annet' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'annet',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Lokasjon',
      type: 'string',
      options: {
        list: [
          { title: 'Bergen', value: 'Bergen' },
          { title: 'Osterøy', value: 'Osterøy' },
          { title: 'Arna', value: 'Arna' },
          { title: 'Åsane', value: 'Åsane' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'beforeImage',
      title: 'Før-bilde',
      type: 'imageWithAlt',
      description: 'Vises i før/etter-slideren.',
    }),
    defineField({
      name: 'afterImage',
      title: 'Etter-bilde',
      type: 'imageWithAlt',
      description: 'Slider + hovudbilde i galleriet.',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      description: 'Kort beskrivelse av prosjektet',
    }),
    defineField({
      name: 'date',
      title: 'Dato',
      type: 'date',
      description: 'Når ble prosjektet fullført',
    }),
  ],
})
