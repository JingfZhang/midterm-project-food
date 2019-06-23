$(() => {
    var $total = 0;
    var cart = JSON.parse(localStorage.getItem("cart")); 
    //store each items(object) in cartItem and append to #cart-body
    const populateCart = (cb) => {
      for(item in cart) {
        let cartItem = cart[item];
          let $container = `
              <div class="cart-item">
                <header class="cart-item-header">
                    <span class = "item-name">${cartItem.name}</span>
                    <span class = "item-quantity">${cartItem.quantity}</span>
                </header>
                <footer class="cart-item-footer">
                 <span class = "item-price">$${cartItem.price}</span>
                 <i class ="far fa-trash-alt btn btn-primary cart-remove-button" type='submit' data-id='${item}' data-name='${cartItem.name}'>
                 </i>
                 </footer>
              </div>
          `;
          $("#cart-body").append($container);
          $total = $total + parseFloat(cartItem.price)
          $total = round($total);
          $(".total_price").html($total)
        }
        cb();   
    }

    //takes remove/orderclear function as cb
    populateCart( () => {
      //remove selected items in the cart 
      $("#cart-body .cart-remove-button").on("click", function (event) {
        event.preventDefault();
       var cart = JSON.parse(localStorage.getItem("cart"))
       var itemId = $(event.target).data("id");
        $(this).parent().parent().remove();

        $total = $total - parseFloat(cart[itemId].price)
        $total = round($total);

        $(".total_price").html($total)
        delete cart[itemId]
    
         
         localStorage.setItem("cart", JSON.stringify(cart))
      })
    })
  
      //clear storage and go back to menu page
      $("#clear-order-button").on("click", function (event) {
        delete cart
        localStorage.clear();
    })
});

function round(number) {
  return Math.round(number * 100) / 100;
}
