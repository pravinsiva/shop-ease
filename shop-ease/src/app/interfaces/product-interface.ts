// interface for product model
export interface IProducts {
    id: number,
    imgPathArray: string[],
    name: string,
    price: number,
    offer: number,
    prodDesc: string,
    categoryID: number
}
// interface for category model
export interface ICategories{
    categoryID: number,
    categoryName: string
}