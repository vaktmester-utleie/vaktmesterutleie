import { READ_TOKEN, SANITY_PROJECT_ID } from '@/lib/env'
import { createClient } from 'next-sanity'
export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: READ_TOKEN,
})
