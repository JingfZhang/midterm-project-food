$(document).ready(function() {

    $("#submit").on('click', function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let phone = $("#phone").val();
        if ( !name || !phone ) {
            let $error = "Name or phone number cannot be empty";
            $(".error-message").text($error);
            $(".error-message").slideDown();
        }
    })

});