import type { MetaObject } from 'nuxt/schema'

type Meta = {
  title: string
  description: string
}

export const useMeta = (meta: Meta): MetaObject => {
  return {
    title: meta.title,
    meta: [
      {
        name: 'description',
        content: meta.description,
      },
    ],
  }
}
