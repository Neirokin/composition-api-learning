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

interface IServing {
  number: number
  size: number
  unit: string
}
