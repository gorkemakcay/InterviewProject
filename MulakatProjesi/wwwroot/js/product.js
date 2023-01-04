$(function () {
    var productTable = $('#productTable').children('tbody');

    $.ajax({
        type: 'GET',
        url: 'https://api.kitapbulal.com/test/getproducts',
        success: function (response) {
            $.each(response, function (index, data) {
                var image = `<td class="text-center align-middle" style="padding-top: 3px;"><img src="${data.imageUrl}" alt="${data.name}" width="50" /></td>`;
                var name = `<td class="align-middle" style="font-size: 20px;">${data.name}</td>`;
                var price = `<td class="text-center align-middle" style="font-size: 20px;">${data.price},00</td>`;

                productTable.append(
                    $('<tr>').append(image, name, price)
                );
            });
        }
    });
});