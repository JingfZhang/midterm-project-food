$(() => {
  $.ajax({
    method: "GET",
    url: "/api/items"
  }).done((items) => {
    for(item of items) {
      console.log(item)
      var $header = $("<header>");
      // var $p = $("<p>");
      var $container = $("<container>").addClass("container")
      var $footer = $("<footer>");
      var $button = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("add");
      var $buttonRemove = $(`<button type='submit' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("remove");
      var $counter = $(`<span id='${item.id}' data-id='${item.id}' data-name='${item.name}' data-price='${item.price}'>`).addClass("item_counter");

      if (JSON.parse(localStorage.getItem("cart")) != null && JSON.parse(localStorage.getItem("cart"))[item.id]) {
        console.log(JSON.parse(localStorage.getItem("cart"))[item.id].quantity)
        $counter.html(JSON.parse(localStorage.getItem("cart"))[item.id].quantity);
      } else {
        $counter.html(0);
      }

      $header.append(item["name"]);
      // $p.append(item["description"]);
      $header.append("     $" + item["price"]);
      $button.append("+");
      $buttonRemove.append("-");
      $footer.append($buttonRemove);
      $footer.append($counter);
      $footer.append($button);
      $container.append($header)
      $container.append($footer)

      // $(".item_counter").html(0);

      if(item["category_id"] == 1){
        $("section.pizza").append($container);
      } else if (item["category_id"] == 2){
        $("section.pasta").append($container);
      } else if (item["category_id"] == 3){
        $("section.burger").append($container);
      } else if (item["category_id"] == 4){
        $("section.pop").append($container);
      } else if (item["category_id"] == 5){
        $("section.wings").append($container);
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
    $("section.pizza").slideToggle(1);
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.pasta").click(function() {
    $("section.pasta").slideToggle(1);
    $("section.pizza").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.burger").click(function() {
    $("section.burger").slideToggle(1);
    $("section.pasta").slideUp(1);
    $("section.pizza").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.wings").click(function() {
    $("section.wings").slideToggle(1);
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.pizza").slideUp(1);
    $("section.pop").slideUp(1);
  })
  $("button.pop").click(function() {
    $("section.pop").slideToggle(1);
    $("section.pasta").slideUp(1);
    $("section.burger").slideUp(1);
    $("section.wings").slideUp(1);
    $("section.pizza").slideUp(1);
  })

  $("#menu_main").on("click", ".add", function (event) {
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

    $("#menu_main").on("click", ".remove", function (event) {
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
