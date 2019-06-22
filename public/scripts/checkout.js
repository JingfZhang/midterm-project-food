$(document).ready(function() {

    $(".error-message").slideUp(1);

    $("#submit").on('click', function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let phone = $("#phone").val();
        if ( !name || !phone ) {
            let $error = "Name or Phone Number cannot be empty. Please enter both to proceed to confirmation page.";
            $(".error-message").text($error);
            $(".error-message").slideDown();
        } else {
            $.ajax({
                method: 'POST',
                url: "/checkout",
                data: $(this).serialize(),
                success: function() {
                    localStorage.clear();
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
