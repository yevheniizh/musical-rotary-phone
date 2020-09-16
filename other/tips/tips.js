// Поле "Bill"

// let bill = document.getElementById('InitialInputs__bill'); //берем элемент инпута
// bill.addEventListener('focusout', function() {  //вызываем событие, при котором после ухода с зоны инпута обновляется значение с округлением до 0.00
//     tip_total_count();
//     bill_total_count();
//     let bill_parse = bill.value;
//     bill_parse = Math.round(bill_parse * 100) / 100; //чомусь не работает
//     bill_parse = bill_parse.toFixed(2);
//     return bill.value = bill_parse;
// }, false);

// //Поле "Tip%"

// let tip = document.getElementById('InitialInputs__tip_result'); //берем элемент инпута
// console.log(tip.value);

// let tip_plus = document.getElementById('InitialInputs__tip_plus'); //берем элемент кнопки "+"
// console.log(InitialInputs__tip_plus);

// let tip_minus = document.getElementById('InitialInputs__tip_minus'); //берем элемент кнопки "-"
// console.log(InitialInputs__tip_minus);

// tip_plus.addEventListener('click', function() { //присваиваем событие при нажатии на кнопку "+"
//     let result = parseInt(tip.value, 10); //берем значение в поле input и преобразовываем со строчного в цифру
//     if (tip.value <= 0) { //цикл-условие при значениях <0
//         tip.value = 1;
//     } else {
//         tip.value = result + 1;
//     }
//     console.log(tip.value);
//     tip_total_count();
//     bill_total_count();
// }, false);

// tip_minus.addEventListener('click', function() { //присваиваем событие при нажатии на кнопку "-"
//     let result = parseInt(tip.value, 10); //берем значение в поле input и преобразовываем со строчного в цифру
//     if (tip.value <= 0) { //цикл-условие при значениях <0
//         tip.value = 0;
//     } else {
//         tip.value = result - 1;
//     }
//     console.log(tip.value);
//     tip_total_count();
//     bill_total_count();
// }, false);

// //Поле "Number of people" по аналогии

// let NumOfPeople = document.getElementById('InitialInputs__NumOfPeople_result');
// console.log(NumOfPeople.value);

// let NumOfPeople_plus = document.getElementById('InitialInputs__NumOfPeople_plus');
// console.log(NumOfPeople_plus.value);

// let NumOfPeople_minus = document.getElementById('InitialInputs__NumOfPeople_minus');
// console.log(NumOfPeople_minus.value);

// NumOfPeople_plus.addEventListener('click', function() {
//     let result = parseInt(NumOfPeople.value, 10);
//     NumOfPeople.value = result + 1; 
//     console.log(NumOfPeople.value);
//     tip_total_count();
//     bill_total_count();
// }, false);

// NumOfPeople_minus.addEventListener('click', function() {
//     let result = parseInt(NumOfPeople.value, 10);
//     if (NumOfPeople.value <= 1) { //цикл-условие при значениях <0
//         NumOfPeople.value = 1;
//     } else {
//         NumOfPeople.value = result - 1;
//     }; 
//     console.log(NumOfPeople.value);
//     tip_total_count();
//     bill_total_count();
// }, false);

// //Поле результатов "Tip"

// function tip_total_count() { //вынес общую функцию калькуляции чаевых
//     let tip_total = (bill.value * (tip.value)/100) / NumOfPeople.value;
//         tip_total = Math.round(tip_total * 100) / 100;
//         tip_total = tip_total.toFixed(2);
//     return document.getElementById('DisplayCount_tip').innerHTML = "$" + tip_total;
// }

// //Поле результатов "Total"

// function bill_total_count() { //вынес общую функцию калькуляции суммарного счета (с чаевыми)
//     let bill_total = parseFloat(bill.value, 10) + (parseFloat(bill.value, 10) * (tip.value)/100);
//         bill_total = Math.round(bill_total * 100) / 100;
//         bill_total = bill_total.toFixed(2);
//         console.log(parseFloat(bill.value, 10) + (parseFloat(bill.value, 10) * (tip.value)/100));
//     return document.getElementById('DisplayCount_total').innerHTML = "$" + bill_total;
// }


//-jQuery-//


let bill_jq = $('#InitialInputs__bill'); //берем элемент инпута
console.log(bill_jq.val());

$(function() {
    $('bill_jq').on('focusout',function() {
    tip_total_count_jq();
    bill_total_count_jq();
    let bill_jq_parse = bill_jq.val();
    bill_jq_parse = Math.round(bill_jq_parse * 100) / 100; 
    bill_jq_parse = bill_jq_parse.toFixed(2);   
    console.log(bill_jq_parse);
    return bill_jq.val() = bill_jq_parse;
    });
});

//Поле "Tip%"

let tip_jq = $('#InitialInputs__tip_result'); //берем элемент инпута
console.log(tip_jq.val());

let tip_jq_plus = $('#InitialInputs__tip_plus'); //берем элемент кнопки "+"
console.log(tip_jq_plus.val());

let tip_jq_minus = $('#InitialInputs__tip_minus'); //берем элемент кнопки "-"
console.log(tip_jq_minus.val());

$('tip_jq_plus').click(function() { //присваиваем событие при нажатии на кнопку "+"
    let result_jq = parseInt(tip_jq.val(), 10); //берем значение в поле input и преобразовываем со строчного в цифру
    if (tip_jq.val() <= 0) { //цикл-условие при значениях <0
        tip_jq.val() = 1;
    } else {
        tip_jq.val() = result_jq + 1;
    }
    console.log(tip_jq.val());
    tip_total_count_jq();
    bill_total_count_jq();
}, false);

$('tip_jq_minus').click(function() { //присваиваем событие при нажатии на кнопку "-"
    let result_jq = parseInt(tip_jq.val(), 10); //берем значение в поле input и преобразовываем со строчного в цифру
    if (tip_jq.val() <= 0) { //цикл-условие при значениях <0
        tip_jq.val() = 0;
    } else {
        tip_jq.val() = result_jq - 1;
    }
    console.log(tip_jq.val());
    tip_total_count_jq();
    bill_total_count_jq();
}, false);

//Поле "Number of people" по аналогии

let NumOfPeople_jq = $('#InitialInputs__NumOfPeople_result');
console.log(NumOfPeople_jq.val());

let NumOfPeople_plus_jq = $('#InitialInputs__NumOfPeople_plus');
console.log(NumOfPeople_plus_jq.val());

let NumOfPeople_minus_jq = $('#InitialInputs__NumOfPeople_minus');
console.log(NumOfPeople_minus_jq.val());

$('NumOfPeople_plus_jq').click(function() {
    let result_jq = parseInt(NumOfPeople_jq.val(), 10);
    NumOfPeople_jq.val() = result_jq + 1; 
    console.log(NumOfPeople_jq.val());
    tip_total_count_jq();
    bill_total_count_jq();
}, false);

$('#NumOfPeople_minus').click(function() {
    let result_jq = parseInt(NumOfPeople_jq.val(), 10);
    if (NumOfPeople_jq.val() <= 1) { //цикл-условие при значениях <0
        NumOfPeople_jq.val() = 1;
    } else {
        NumOfPeople_jq.val() = result_jq - 1;
    }; 
    console.log(NumOfPeople_jq.val());
    $(tip_total_count_jq());
    $(bill_total_count_jq());
    console.log( $(bill_total_count_jq()));
}, false);

//Поле результатов "Tip"

$(function tip_total_count_jq() { //вынес общую функцию калькуляции чаевых
    let tip_total_jq = (bill_jq.val() * (tip_jq.val())/100) / NumOfPeople_jq.val();
        tip_total_jq = Math.round(tip_total_jq * 100) / 100;
        tip_total_jq = tip_total_jq.toFixed(2);
    return $('#DisplayCount_tip').val("$" + tip_total_jq);
});

//Поле результатов "Total"

$(function bill_total_count_jq() { //вынес общую функцию калькуляции суммарного счета (с чаевыми)
    let bill_total_jq = parseFloat(bill_jq.val(), 10) + (parseFloat(bill_jq.val(), 10) * (tip_jq.val())/100);
        bill_total_jq = Math.round(bill_total_jq * 100) / 100;
        bill_total_jq = bill_total_jq.toFixed(2);
        console.log(bill_total_jq);
    return $('#DisplayCount_total').val("$" + bill_total_jq);
});
