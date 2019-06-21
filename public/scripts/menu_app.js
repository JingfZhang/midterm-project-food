$(() => {
  $.ajax({
    method: "GET",
    url: "/api/items"
  }).done((items) => {
    for(item of items) {
      var $header = $("<header>");
      // var $p = $("<p>");
      var $footer = $("<footer>");
<<<<<<< Updated upstream
      var $button = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}'>`).addClass("add_to_cart");
      var $buttonRemove = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}'>`).addClass("remove");

=======
      var $button = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("add");
      var $buttonRemove = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("remove");
      var $counter = $(`<span id='${item.id}' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("item_counter");
>>>>>>> Stashed changes

      $header.append(item["name"]);
      // $p.append(item["description"]);
      $footer.append("$ " + item["price"]);
      $button.append("ADD TO CART");
      $buttonRemove.append("REMOVE");
      $footer.append($button);
      $footer.append($buttonRemove);
      $footer.append($counter);
      $(".item_counter").html(0);

      $("#menu_body").append($header);
      // $("#menu_body").append($p);
      $("#menu_body").append($footer);

    }
  });;

<<<<<<< Updated upstream
  localStorage.clear();
=======
  $("section.pizza").slideUp(1);
  $("section.pasta").slideUp(1);
  $("section.burger").slideUp(1);
  $("section.wings").slideUp(1);
  $("section.pop").slideUp(1);

  $("button.pizza").click(function() {
    $("section.pizza").slideToggle();
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.pasta").click(function() {
    $("section.pasta").slideToggle();
    $("section.pizza").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.burger").click(function() {
    $("section.burger").slideToggle();
    $("section.pasta").slideUp(1);
    $("section.pizza").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.wings").click(function() {
    $("section.wings").slideToggle();
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.pizza").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.pop").click(function() {
    $("section.pop").slideToggle();
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pizza").slideUp(1);
  })
>>>>>>> Stashed changes

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

    $(`span.item_counter#${itemId}`).html(cart[itemId].quantity);
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
<<<<<<< Updated upstream
=======
      cart[itemId].price = (cart[itemId].quantity * itemPrice).toFixed(2);
      $(`span.item_counter#${itemId}`).html(cart[itemId].quantity);
>>>>>>> Stashed changes
    } else {
      delete cart[itemId];
      $(`span.item_counter#${itemId}`).html(0);
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
  })

});