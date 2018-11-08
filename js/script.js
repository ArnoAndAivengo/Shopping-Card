var data = {"total":0,"rows":[]};
var totalCost = 0;


$(function(){
    $('#cartcontent').datagrid({
        singleSelect:true
    });
    $('.item').draggable({
        revert:true,
        proxy:'clone',
        onStartDrag:function(){
            $(this).draggable('options').cursor = 'not-allowed';
            $(this).draggable('proxy').css('z-index',10);
        },
        onStopDrag:function(){
            $(this).draggable('options').cursor='move';

        }
    });
    $('.cart').droppable({
        onDragEnter:function(e,source){
            $(source).draggable('options').cursor='auto';
        },
        onDragLeave:function(e,source){
            $(source).draggable('options').cursor='not-allowed';
        },
        onDrop:function(e,source){
            var name = $(source).find('p:eq(0)').html();
            var price = $(source).find('p:eq(1)').html();
            addProduct(name, parseFloat(price.split('$')[1]));
        }
    });
});

function addProduct(name,price){
    function add(){
        for(var i=0; i<data.total; i++){
            var row = data.rows[i];
            if (row.name == name){
                row.quantity += 1;
                return;
            }
        }
        data.total += 1;
        data.rows.push({
            name:name,
            quantity:1,
            price:price,
            remove: '<button class="remove" onclick="removeProduct(this, event)">&#10005;</button>'
        });
    }
    add();
    totalCost += price;
    console.log(totalCost);

    if (totalCost >= 301) {
        $('#cartcontent').datagrid('loadData', data);
        (alert('Максимальная Сумма: Баланс превышен'));
        $('div.cart .maxSum').html('Максимальная Сумма: Баланс превышен');
        $('div.cart .total').html('Total: $' + 300);
        $( ".item" ).draggable({
            disabled: true
        });
        ;

    }else{
        $('#cartcontent').datagrid('loadData', data);
        $('div.cart .total').html('Total: $' + totalCost);
    }
}

function removeProduct(el, event) {
    var tr = $(el).closest('tr');
    var name = tr.find('td[field=name]').text();
    var price = tr.find('td[field=price]').text();
    var quantity = tr.find('td[field=quantity]').text();
    for(var i = 0; i < data.total; i++){
        var row = data.rows[i];
        if (row.name == name) {
            data.rows.splice(i, 1);
            data.total--;
            break;
        }
    }
    totalCost -=  price * quantity;
    $('#cartcontent').datagrid('loadData', data);
    $('div.cart .total').html('Total: $'+totalCost);

    if (totalCost <= 300 ) {
        $('#cartcontent').datagrid('loadData', data);
        $('div.cart .maxSum').html('Максимальная Сумма: 300');
        $( ".item" ).draggable({
            disabled: false
        });
    }
}