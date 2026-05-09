import { defineQuery } from 'next-sanity'

export const SERVICE_QUERY = defineQuery(
  `*[_type == 'service']{_id, title, image, tags, description}`
)
