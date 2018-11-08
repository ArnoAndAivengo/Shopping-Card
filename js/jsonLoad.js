//
// const url = 'https://kodaktor.ru/cart_data.json';
// const id = document.getElementById('#id01');
//
// fetch(url)
//     .then(function(response) {
//         return response.json()
//     }).then(function(body) {

    // var elems = $("#id01");
    // Object.keys(body).forEach(function (key, i) {
    //     elems[i].id = 'device_'+ key
    // });
    // var elems = document.getElementsByClassName("id01");
    // $.each(body , function (key, value){
    //     console.log(key + ':' + value);
    //     elems[value].id = 'device_' + key
    // });

    // var elems = document.getElementsByClassName("id01").innerHTML;
    // for (var key in body) {
    //     console.log("Ключ: " + key + " значение: " + body[key]);
    //     elems[body] = 'device_' + key
    // }


    // const URI = 'https://kodaktor.ru/cart_data.json';
    //
    // fetch(URI)
    //     .then(function(response) {
    //         return response.json()
    //     }).then(function(body) {
    //
    //     let div = document.getElementById('list');
    //     let ul = document.createElement('ul');
    //     div.appendChild(ul);
    //
    //     $.each(body , function (key){
    //             var li = document.createElement('li');
    //             var a = document.createElement('a');
    //             var div1 = document.createElement('div');
    //             var p1 = document.createElement('p');
    //             var p2 = document.createElement('p');
    //             ul.className = 'products';
    //             a.className = 'item';
    //             a.innerHTML = '<img src="images/shirt6.gif"/>';
    //             p1.innerText =  key;
    //             p2.innerText =  body[key];
    //             ul.appendChild(li);
    //             li.appendChild(a);
    //             a.appendChild(div1);
    //             div1.appendChild(p1);
    //             div1.appendChild(p2);
    //     });
    // });
// $.each(body , function (key){
//     var li = document.createElement('li');
//     var a = document.createElement('a');
//     var div1 = document.createElement('div');
//     var p1 = document.createElement('p');
//     var p2 = document.createElement('p');
//     ul.className = 'products';
//     a.className = 'item';
//     a.innerHTML = '<img src="images/shirt6.gif"/>';
//     p1.innerText =  key;
//     p2.innerText =  body[key];
//     ul.appendChild(li);
//     li.appendChild(a);
//     a.appendChild(div1);
//     div1.appendChild(p1);
//     div1.appendChild(p2);
// });