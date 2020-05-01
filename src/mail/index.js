export default function sendMail(name, phone, email, message) {
    window.$.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
            name: name,
            phone: phone,
            email: email,
            message: message
        },
        cache: false,
        success: function () {
            // Success message
            window.$('#success').html("<div class='alert alert-success'>");
            window.$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            window.$('#success > .alert-success')
                .append("<strong>Mensaje enviado exitosamente. </strong>");
            window.$('#success > .alert-success')
                .append('</div>');
            //clear all fields
            window.$('#contactForm').trigger("reset");
        },
        error: function () {
            // Fail message
            window.$('#success').html("<div class='alert alert-danger'>");
            window.$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            window.$('#success > .alert-danger').append(window.$("<strong>").text("Lo sentimos " + name + ", parece que el servidor de correos no esta funcionando. Por favor intente más tarde!"));
            window.$('#success > .alert-danger').append('</div>');
            //clear all fields
            window.$('#contactForm').trigger("reset");
        },
        complete: function () {
            setTimeout(function () {
                window.$this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            }, 1000);
        }
    });
}