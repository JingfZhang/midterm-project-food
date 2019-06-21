$(() => {
    var $total = 0;
    var cart = JSON.parse(localStorage.getItem("cart")); 
    //store each items(object) in cartItem
    for(item in cart) {
    let cartItem = cart[item];

      let $container = `
      <div class="item${item}">
             <header class = "item_header">
              
               ${cartItem.name}
               ${cartItem.quantity}
             </header>
             <footer class="remove">
             <button type='submit' data-id='${item}' data-name='${cartItem.name}'>REMOVE</button>
               <p>$${cartItem.price}</p>
             </footer>
      </div>
      `;
      $("#cart-body").append($container);
      $total = $total + parseFloat(cartItem.price)
      $(".total_price").html($total)
    }

 //remove selected items in the cart 
  $("#cart-body").on("click", ".remove", function (event) {
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

  
