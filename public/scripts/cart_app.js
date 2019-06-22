$(() => {
    var $total = 0;
    var cart = JSON.parse(localStorage.getItem("cart")); 
    //store each items(object) in cartItem
    for(item in cart) {
    let cartItem = cart[item];

      let $container = `
          <div class="cart-item">
            <header class="cart-item-header">
                <span class = "item-name">${cartItem.name}</span>
                <span class = "item-quantity">${cartItem.quantity}</span>
            </header>
            <footer class="remove cart-item-footer">
              <button class = "btn btn-primary cart-remove-button" type='submit' data-id='${item}' data-name='${cartItem.name}'>
                REMOVE
              </button>
              <span class = "item-price">$${cartItem.price}
            </footer>
          </div>
      `;
      $("#cart-body").append($container);
      $total = $total + parseFloat(cartItem.price)
      $(".total_price").html($total)
    }

 //remove selected items in the cart 
  $("#cart-body .remove").on("click", function (event) {
    event.preventDefault();
   var cart = JSON.parse(localStorage.getItem("cart"))
   var itemId = $(event.target).data("id");

    $(this).parent().remove();
    $total = $total - parseFloat(cart[itemId].price)
    $total = $total.toFixed(2)
    $(".total_price").html($total)
    delete cart[itemId]

     
     localStorage.setItem("cart", JSON.stringify(cart))
  })

//clear storage and go back to menu page
 $("#clear-order-button").on("click", function (event) {
      delete cart
      localStorage.clear();
    })
  });

  
