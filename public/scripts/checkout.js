$(document).ready(function() {

    // Code to toggle form
//   $('#submit').on('click', function (event) {
//     $('.confirm-container').slideToggle(100);
//   })


    $("#submit").on('click', function(event) {
        event.preventDefault();
        let name = $("#name");
        let phone = $("#phone");
        if ( name === "" || phone === "") {
            let $error = "Name or phone number cannot be empty";
            $(".error-message").text($error);
            $(".error-message").slideDown();
        } else {
            $('.confirm-container').slideToggle(100);
        }
    })

});