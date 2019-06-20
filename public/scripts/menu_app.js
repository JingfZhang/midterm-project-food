$(() => {
  $.ajax({
    method: "GET",
    url: "/api/items"
  }).done((items) => {
    for(item of items) {
      var $header = $("<header>");
      // var $p = $("<p>");
      var $footer = $("<footer>");
      var $button = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}'>`).addClass("add_to_cart");
      var $buttonRemove = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}'>`).addClass("remove");


      $header.append(item["name"]);
      // $p.append(item["description"]);
      $footer.append("$ " + item["price"]);
      $button.append("ADD TO CART");
      $buttonRemove.append("REMOVE");
      $footer.append($button);
      $footer.append($buttonRemove);

      $("#menu_body").append($header);
      // $("#menu_body").append($p);
      $("#menu_body").append($footer);

    }
  });;

  localStorage.clear();

  $("#menu_body").on("click", ".add_to_cart", function (event) {
    event.preventDefault()
    var cart;
    var itemId = $(event.target).data("id")
    var itemName = $(event.target).data("name")
    console.log(itemId)

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      cart = {}
    }

    if (cart[itemId]) {
      cart[itemId].quantity += 1
    } else {
      cart[itemId] = {quantity: 1, name: itemName}
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
  })

    $("#menu_body").on("click", ".remove", function (event) {
    event.preventDefault()
    var cart;
    var itemId = $(event.target).data("id")
    var itemName = $(event.target).data("name")
    console.log(itemId)

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      cart = {}
    }

    if (cart[itemId].quantity > 1) {
      cart[itemId].quantity -= 1
    } else {
      delete cart[itemId];
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
  })

});

