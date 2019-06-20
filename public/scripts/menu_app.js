$(() => {
  $.ajax({
    method: "GET",
    url: "/api/items"
  }).done((items) => {
    for(item of items) {
      var $header = $("<header>");
      var $p = $("<p>");
      var $footer = $("<footer>");

      $header.append(item["name"]);
      // $p.append(item["description"]);
      $footer.append("$ " + item["price"]);

      $("#menu_body").append($header);
      // $("#menu_body").append($p);
      $("#menu_body").append($footer);

    }
  });;
});
