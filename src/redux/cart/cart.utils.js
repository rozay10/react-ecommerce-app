export const addItemToCart = (cartItems, cartItemToAdd ) => {

    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id);
    console.log('intial', cartItems);
    
    if (existingCartItem) {
        return cartItems.map(cartItem => {            
          return  cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem
        })
    }
    return [ ...cartItems, {...cartItemToAdd, quantity: 1} ]
}