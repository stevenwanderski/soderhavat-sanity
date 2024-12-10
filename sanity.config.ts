import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Soderhavet',

  projectId: '8o45v0eh',
  dataset: 'production',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
