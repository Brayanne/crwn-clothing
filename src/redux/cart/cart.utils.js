export const addItemToCart = (cartItems, cartItemToAdd) => { //first argument is all the existing items in cart at moment, second is the item we want to add
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
            );
    }
    
    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};