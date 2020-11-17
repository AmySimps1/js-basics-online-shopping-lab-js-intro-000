var cart = []
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart['itemName'] = item;
  cart['itemPrice'] = Math.ceil(Math.random()*100)
  
  
  
  /*let newObj = Object.assign( Object.fromEntries(cart), { itemName: item, itemPrice: Math.ceil(Math.random()*100)
   })*/
   return `${item} has been added to your cart.`;
}



function viewCart(array) {
  if (array.length === 0 ){
    return 'Your shopping cart is empty.'
  } else {
  let items = [];
  for(i=0; i<array.length-1; i++){
  items.push(`${array[i]} at $${array[i].itemprice},`)
  
  items.push(`${array[array.length]} at $${array[array.legnth].itemprice}`)
  }
  return 'In your cart, you have' + items + '.'
}
}

function total() {
  let cartTotal = 0;
  array.map.sum(cart['itemprice']);
  return cartTotal;
}

function removeFromCart(item) {
  if (cart['itemName'] === item){
  delete cart.item;
  return cart
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  if (cardNumber.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
} else {
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
}
}
