/**
 * Esta funcion calcula el precio total de la orden
 * @param {array} products cartProduct: Array de productos 
 * @returns suma total
 */
export const totalPrice = (products) => {
   let sum = 0 
   products.forEach(product => sum += product.price)
   return sum
}