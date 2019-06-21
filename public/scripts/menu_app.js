$(() => {
  $.ajax({
    method: "GET",
    url: "/api/items"
  }).done((items) => {
    for(item of items) {
      var $header = $("<header>");
      // var $p = $("<p>");
      var $footer = $("<footer>");
      var $button = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("add");
      var $buttonRemove = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("remove");
      var $counter = $(`<span id='${item.id}' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("item_counter");

      $header.append(item["name"]);
      // $p.append(item["description"]);
      $footer.append("$ " + item["price"]);
      $button.append("ADD");
      $buttonRemove.append("REMOVE");
      $footer.append($button);
      $footer.append($buttonRemove);
      $footer.append($counter);
      $(".item_counter").html(0);

      if(item["category_id"] == 1){
        $("#pizza").append($header);
        $("#pizza").append($footer);
      } else if (item["category_id"] == 2){
        $("#pasta").append($header);
        $("#pasta").append($footer);
      } else if (item["category_id"] == 3){
        $("#burger").append($header);
        $("#burger").append($footer);
      } else if (item["category_id"] == 4){
        $("#pop").append($header);
        $("#pop").append($footer);
      } else if (item["category_id"] == 5){
        $("#wings").append($header);
        $("#wings").append($footer);
      }
      // $("#menu_body").append($header);
      // $("#menu_body").append($p);
      // $("#menu_body").append($footer);

    }
  });

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

  $("#menu_body").on("click", ".add", function (event) {
    event.preventDefault()
    var cart;
    var itemId = $(event.target).data("id")
    var itemName = $(event.target).data("name")
    var itemPrice = $(event.target).data("price")
    console.log(itemId)

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      cart = {}
    }

    if (cart[itemId]) {
      cart[itemId].quantity += 1
      cart[itemId].price = (cart[itemId].quantity * itemPrice).toFixed(2);
    } else {
      cart[itemId] = {quantity: 1, name: itemName, price: itemPrice.toFixed(2)}
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
    var itemPrice = $(event.target).data("price")
    console.log(itemId)

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
    } else {
      cart = {}
    }

    if (cart[itemId].quantity > 1) {
      cart[itemId].quantity -= 1
      cart[itemId].price = (cart[itemId].quantity * itemPrice).toFixed(2);
      $(`span.item_counter#${itemId}`).html(cart[itemId].quantity);
    } else {
      delete cart[itemId];
      $(`span.item_counter#${itemId}`).html(0);
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
  })

});
