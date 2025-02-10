import { type SchemaTypeDefinition } from 'sanity'
import { men } from './men'
import { women } from './women'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [men, women],
}
