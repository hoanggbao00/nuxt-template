import type { MetaObject } from 'nuxt/schema'

const title = 'Homepage'
const description = 'Description for homepage'

export const getHomepageMeta = () => {
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
    ] as MetaObject['meta'],
  }
}
