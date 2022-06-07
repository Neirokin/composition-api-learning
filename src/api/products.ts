import axios from 'axios'
import type { IProduct } from '@/typescript/interfaces'

/**
 * Класс с апихами для работы с блюдом
 */
class Products {
  // Ключ апихи spoonacular
  private _apiKey = 'ccd3ede0e0b441a0b71b498c83adf7aa'

  // URL апихи spoonacular
  private _url = 'https://api.spoonacular.com/food/menuItems/search?query=burger&number=20'

  /**
   * Получить список блюд
   * @return {Promise<IProduct>>} - Список блюд
   */
  async getProducts(): Promise<IProduct[]> {
    const { data } = await axios.get(this._url, {
      params: {
        apiKey: this._apiKey,
      },
    })

    return data.menuItems
  }

  /**
   * Получить фейковый список блюд (без запроса)
   * @return {Promise<IProduct>>} - Список блюд
   */
  getProductsMock(): Promise<IProduct[]> {
    const fakeData = [
      {
        id: 419357,
        title: 'Burger Sliders',
        restaurantChain: 'Hooters',
        image: 'https://images.spoonacular.com/file/wximages/419357-312x231.png',
        imageType: 'png',
        servings: {
          number: 1,
          size: 2,
          unit: 'oz',
        },
      },
      {
        id: 412357,
        title: 'Burger Sliders',
        restaurantChain: 'Hooters',
        image: 'https://images.spoonacular.com/file/wximages/419357-312x231.png',
        imageType: 'png',
        servings: {
          number: 1,
          size: 2,
          unit: 'oz',
        },
      },
      {
        id: 424571,
        title: 'Bacon King Burger',
        restaurantChain: 'Burger King',
        image: 'https://images.spoonacular.com/file/wximages/424571-312x231.png',
        imageType: 'png',
        servings: {
          number: 1,
          size: 2,
          unit: 'oz',
        },
      },
      {
        id: 424572,
        title: 'Bacon King Burger',
        restaurantChain: 'Burger King',
        image: 'https://images.spoonacular.com/file/wximages/424571-312x231.png',
        imageType: 'png',
        servings: {
          number: 1,
          size: 2,
          unit: 'oz',
        },
      },
    ]

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeData)
      }, 100)
    })
  }
}

export const productsApi = new Products()
