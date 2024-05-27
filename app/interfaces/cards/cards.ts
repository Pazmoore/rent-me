export interface HomeCards{
  id: string
  image: string
  title: string
  stock: number
}

export interface TrendingCards{
  id: string
  images: string[]
  favorite: boolean
  rating: string
  totalRating: string
  title: string
  price: string
  time: string
  availableFrom: string
  availableTo: string
  location: string
  fullAddress?: string
  productType: string
}

export interface TrendingRides{
  id: string
  images: string[]
  type: string
  title: string
  completeRide: number
  rating: number
  totalRating: 1
  location: string
  status: string
  seat: string
  model: string
  auto: string
  gauge: string
  productType: string
}

export interface PropertyCards{
  id: string
  images: string[]
  favorite: boolean
  price: string
  location: string
  valuation: string
  totalInvestment: string
  peopleInvested: number
  percentage: number
  full: boolean
}

export interface DriverCards{
  id: string
  images: string
  name: string
  rating: string
  totalRating: string
  num_rides: string
}
