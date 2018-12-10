
const url = 'https://kodaktor.ru/cart_data.json';

fetch(url)
    .then(function(response) {
        return response.json()
    }).then(function(body) {

    let items = document.querySelectorAll('.items');

    $.each(body , function (key){
            items[0].innerHTML = '<p>' + "hdd" + '</p>' + '<p>' + 'Price:$' + body.hdd + '</p>';
            items[1].innerHTML = '<p>' + "sdd" + '</p>' + '<p>' + 'Price:$' + body.sdd + '</p>';
            items[2].innerHTML = '<p>' + "usbdrive" + '</p>' + '<p>' + 'Price:$' + body.usbdrive + '</p>';
    });
});