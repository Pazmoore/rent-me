export interface Host{
  image: string
  name: string
  location: string
  description: string
  reviewCount: number
  hostTime: string
  contact: string
}

export interface Review{
  image: string
  name: string
  location: string
  rating: number
  time: string
  review: string
}