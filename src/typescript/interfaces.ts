interface IServing {
  number: number
  size: number
  unit: string
}

export interface IProduct {
  id: number
  image: string
  imageType: string
  readableServingSize?: number | null
  restaurantChain: string
  servingSize?: number | null
  servings: IServing
  title: string
}

export interface IRestaurant {
  id: number
  image: string
  title: string
}
