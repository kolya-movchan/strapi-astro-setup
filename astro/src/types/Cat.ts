export interface Cat {
  id: number
  attributes: {
    name: string
    breed: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    img: Image
  }
}

interface Image {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: string | null
      caption: string | null
      width: number
      height: number
      formats: {
        [key: string]: {
          ext: string
          url: string
          hash: string
          mime: string
          name: string
          path: null | string
          size: number
          width: number
          height: number
        }
      }
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: null | string
      provider: string
      provider_metadata: null | string
      createdAt: string
      updatedAt: string
    }
  }
}
