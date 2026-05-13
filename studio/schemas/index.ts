import { image } from '../shared/image'
import { categorySchema } from './categorySchema'
import { projectSchema } from './projectSchema'
import { rentalSchema } from './rentalSchema'
import { serviceSchema } from './serviceSchema'

export const schemaTypes = [
  serviceSchema,
  image,
  rentalSchema,
  categorySchema,
  projectSchema,
]
