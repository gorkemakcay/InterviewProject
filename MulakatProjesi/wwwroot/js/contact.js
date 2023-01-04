﻿function passTheInterview() {
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
        var token = 'eyJIZWFkIjoic0F1dGggVG9rZW4iLCJCb2R5IjoiYkd0SHNFSURKaGRiUFBZN2pIS21tSWh0OHQxYjU1dVlSb1JkejBnY0VHRGc1NENJY1pMTDJCUmpQYXoxUEdjYnZDUi84VFMyeXZrc1BqeVhIazR0VlVPMG9hRFhaR015ME5xNzM4cjZ4UzgzSEVBVnRBWmZYZWpxZWw3NUR0Ty9qc0VITzFTWnV5bldJa1JxVXBuK3dRVVRWcXJSY2tsNGJVUGVCT3dTOGU2SDUvVWxRZG9ZejRodDh0MWI1NXVZV084VHJ4U3F3TlM3aWF4aVQya29zM3ZGSHFGRmYzVUY1Q0g1OUZ4TXZuQ3ZJcE1zV1l3Mk1TdDB0T3drRlQyV2piVlBERVJjc0YyZ2k3ZHpoQW8zR2FHL2FkR2tmcmg2QlFHNnp2V29UeGpMcHdZcXZIeDBqUVVoTEFIVEJQeWhmOUVzeXRTWGxQSkUyeUUvZTFUWU1NbHZHN2UweW5jOXU3MCtNWFNEeEdDSWJmTGRXK2VibUJubEdWYnQ2OS8rSytFK2ovZDdDMlZvQ3FTTzJBUTh6UkltNEx0b21WdWtLN09aMXY1WmZ0QUFGN1dyMDJtUkY0aHQ4dDFiNTV1WU02SWZkb0VaYTQ1UnN0dExwY2pYckhRWmg5dmN5aHZocVV4emN3RWc0cHVJYmZMZFcrZWJtSUhsVnBLak5JMHBPQ0gzRWNRSUxrVk1qSEVCM0VRNUxkL2dRZGtzZ2Q2dGlHM3kzVnZubTVpYXNEVllNSEdVV3RabFN2Y3pMN242N1VLekZVK0lMWXBYRjBPWnJEVXdWWWh0OHQxYjU1dVlMNkgvQ1lvSWtZWExlWTBlRmZXTThnVVhYZzVUdWlBemk5aXhROGU4S1VDSWJmTGRXK2VibUoxZFR2Y0g0cGl1Wk5mWENlTXZPRnp5ZFkwTGhOYTJXdDIvZ0FRMG5wTGVpRzN5M1Z2bm01aGcwQ0g0M3NRVGRpTmJFdFBKeWt4L1NTTkVRcWl6QVlQTmcyUzRJMUNNN1lodDh0MWI1NXVZVXhSUVpVY1NzZHFXY0xMMFU0VVk3cFc0eDRyTHNqWG80Nm1CRGNRckgrbUliZkxkVytlYm1BVkFzb1BWSCtVK2swbVh4R0JHUmFxM0t6VTBYNlh1RTdMeTRaSnd6a1VnaUczeTNWdm5tNWovZWJZQTFXaktaSGlxeXJFTHE4M0oyUlRDYjZ0WDQ5K3JiYWVaK2xOR0o0aHQ4dDFiNTV1WTl6bHdtcFRFL3Q5Nm1iMTJxVzdtL3NOVDF6dFcxZ3JXVXhPY3VXbzdYb0NJYmZMZFcrZWJtTnRWRmZpTTNjdDVhcHkzSUZ5b2doYnJBYTh0U0o0ZlNibnNzaHRzUlQ2S2lHM3kzVnZubTVqSEVuR3lJeDNKRWNxYVlKTldJbFI5azN3K2lQSW5tQTZMVjdHdDY1eG1kWWh0OHQxYjU1dVlicDdRVWcyRGlEcEZwMFRtR2oxVzZjQmRKTEJoTE9KeHpkb1VleEd5LzZ4RFNMU0NaTk8vZitoUk1aUFFoMFBMM2ZMZWY5cjJlcDVsdm9Yb1piamQ1MElGRFF6ZFRhUGR0RkZRSEZKcjY2TVo2WTJGY3Ayc09Hajhrb3V1MVk2YmlHM3kzVnZubTVoRG1qZklYWVl4QWF3MkhBZE1FZlU4RnYrYUxXTTBOTHY3ZFhJMm9JZGNDRko1QkJGdnBJMmdENUVZZklWREdMRi9ZMjFMK0ZXa1NGYkp5Q3BXN0tiYlZVaDE5Q2hDZGhaK2tpRE4zV1R5YUNSakQwTlYxVThzdHB6bkovcndxZTVETmhQNVZTR09yejhFZ3Z4UnpTemhXeDB2UkFxN3l1dGhwd29qS0VVZEs1SE9wM3ZnTEUxSlY3ZjdEaUJLRVJ5RThsL0NsbFJjSmtWTWxMNjU4KzkyWVdUaXhpb3JPVnFPTm9HQ00zM3Z5bmd0eEZSaVVXOFRtVlJVbU8zc0Z4SlhDR1YvWUF4Qm9RVUR5WFlLaE0rQzhtZGErNWlid1JHRE93eTl1ZmZVZGFhRDU3VXJySVNoSUdsWFBpd3hkT1VjTUYzTHNnTVdaQU9ZdXpJcFN4M0ZsUUtQMWpFRmVzc3lzbWJXTTdaUnVvRVFqN0paWUNrSWNGOWRCOFVaT1o1YkFLcTB5ZmZHQmF5SkhiOFgwZTRMdHoyWHhGM0Z3bXJNN0ExM3pmWVZkV1JqTGcvcE1Ca3QrQkZtcm9wS09tSW43R1liaThnVzNaSjIvOXprYjkrRDRKUVpwWjdYT2F3QTdJM3BhQm9DTTZ4b2tOU0o4UFQwNXpMMG1rajlyS0E9IiwiRm9vdCI6ImthcmFrb2submV0In0=';
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