$(document).ready(function() {

    $(".error-message").slideUp(1);


    $("#submit").on('click', function(event) {
        event.preventDefault();
        let name = $("#name");
        let phone = $("#phone");
        if ( name === "" || phone === "") {
            let $error = "Name or phone number cannot be empty";
            $(".error-message").text($error);
            $(".error-message").slideDown();
        } else {
            $.ajax({
                method: 'POST',
                url: "/checkout",
                data: $(this).serialize(),
                success: function() {
                    window.location.href = "http://localhost:8080/confirm";
                }
            })
        }
    })

    $("#name").on("click", function() {
      $(".error-message").slideUp();
    })
    $("#phone").on("click", function() {
      $(".error-message").slideUp();
    })

});
