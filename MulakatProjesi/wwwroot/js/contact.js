function passTheInterview() {
    // #region Contact Model
    var contactVM = {
        //[Required, MaxLength(128)]
        Name: $('#fullName').val(),
        //[Required, MaxLength(10), MinLength(10)]
        PhoneNumber: $('#phoneNumber').val().toString(),
        //[Required, EmailAddress]
        Email: $('#email').val(),
        //[Required, MaxLength(256)]
        Message: $('#message').val()
    }
    // #endregion

    // #region Check List
    var nameCheck = false;
    var phoneNumberCheck = false;
    var emailCheck = false;
    var messageCheck = false;
    var isValid = false;
    // #endregion

    // #region Validations
    var validationSummary = $("#validationSummary");
    validationSummary.children().remove();
    // Name
    if (contactVM.Name.length > 0) nameCheck = true;
    else validationSummary.append('<p class="text-danger m-0">Name and Surname required!</p><br/>');

    // Phone Number
    var testPhoneNumber = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
    if (testPhoneNumber.test(contactVM.PhoneNumber)) phoneNumberCheck = true;
    else validationSummary.append('<p class="text-danger m-0">Phone Number must be 10 characters!</p><br/>');

    // Email
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (testEmail.test(contactVM.Email)) emailCheck = true;
    else validationSummary.append('<p class="text-danger m-0">Please enter a valid email address!</p><br/>');

    // Message
    if (contactVM.Message.length > 0) messageCheck = true;
    else validationSummary.append('<p class="text-danger m-0">Message required!</p><br/>');

    // Is Valid?
    if (nameCheck && phoneNumberCheck && emailCheck && messageCheck) isValid = true;
    // #endregion

    // #region Post Request
    if (isValid) {
        // #region Token
        var token = 'secret';
        // #endregion

        $.ajax({
            type: 'POST',
            url: 'https://api.kitapbulal.com/chat/add',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `sAuth ${token}`
            },
            data: JSON.stringify(contactVM),
            success: function (response) {
                console.log(response);
                validationSummary.append('<p class="text-success m-0">Congs! You are Hired!</p><br/>');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    // #endregion
}
