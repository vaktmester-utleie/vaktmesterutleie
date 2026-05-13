import { defineQuery } from 'next-sanity'

export const SERVICE_QUERY = defineQuery(
  `*[_type == 'service']{_id, title, image, tags, description, cta, href}`
)

export const CATEGORY_QUERY = defineQuery(
  `*[_type == "category"]{_id, slug, title, image}`
)

export const RENTAL_BY_CATEGORY_QUERY = defineQuery(
  `*[_type == "rental" && category->slug.current == $slug]{_id, title, image, available, pricePerDay, pricePerWeek, specs}`
)

export const RENTAL_BY_ID_QUERY = defineQuery(
  `*[_type == "rental" && _id == $id][0]{_id, title, image, available, pricePerDay, pricePerWeek, specs, description}`
)

export const PROJECT_QUERY = defineQuery(
  `*[_type == 'project']{_id, title, image, description}`
)
