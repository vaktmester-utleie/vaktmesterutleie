import { createClient } from 'next-sanity'
export const client = createClient({
  projectId: 'w16nugsv',
  dataset: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  apiVersion: '2024-01-01',
  useCdn: false,
})
