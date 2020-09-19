// Поле "Bill"

let bill = document.getElementById('InitialInputs__bill');

bill.addEventListener('focusout', function() {
    tip_total_count();
    bill_total_count();
    let bill_parse = bill.value;
    bill_parse = Math.round(bill_parse * 100) / 100; //чомусь не работает
    bill_parse = bill_parse.toFixed(2);
    return bill.value = bill_parse;
}, false);

//Поле "Tip%"

let tip = document.getElementById('InitialInputs__tip_result');

let tip_plus = document.getElementById('InitialInputs__tip_plus');

let tip_minus = document.getElementById('InitialInputs__tip_minus');

//присваиваем событие при нажатии на кнопку "+"

tip_plus.addEventListener('click', function() {
    let result = parseInt(tip.value, 10);
    if (tip.value <= 0) {
        tip.value = 1;
    } else {
        tip.value = result + 1;
    }
    tip_total_count();
    bill_total_count();
}, false);

//присваиваем событие при нажатии на кнопку "-"

tip_minus.addEventListener('click', function() {
    let result = parseInt(tip.value, 10); //берем значение в поле input и преобразовываем со строчного в цифру
    if (tip.value <= 0) { //цикл-условие при значениях <0
        tip.value = 0;
    } else {
        tip.value = result - 1;
    }
    tip_total_count();
    bill_total_count();
}, false);

//Поле "Number of people"

let NumOfPeople = document.getElementById('InitialInputs__NumOfPeople_result');

let NumOfPeople_plus = document.getElementById('InitialInputs__NumOfPeople_plus');

let NumOfPeople_minus = document.getElementById('InitialInputs__NumOfPeople_minus');

//присваиваем событие при нажатии на кнопку "+"

NumOfPeople_plus.addEventListener('click', function() {
    let result = parseInt(NumOfPeople.value, 10);
    NumOfPeople.value = result + 1;
    tip_total_count();
    bill_total_count();
}, false);

//присваиваем событие при нажатии на кнопку "-"

NumOfPeople_minus.addEventListener('click', function() {
    let result = parseInt(NumOfPeople.value, 10);
    if (NumOfPeople.value <= 1) {
        NumOfPeople.value = 1;
    } else {
        NumOfPeople.value = result - 1;
    };
    tip_total_count();
    bill_total_count();
}, false);

//Поле результатов "Tip"

function tip_total_count() {
    let tip_total = (bill.value * (tip.value)/100) / NumOfPeople.value;
        tip_total = Math.round(tip_total * 100) / 100;
        tip_total = tip_total.toFixed(2);
        console.log('Tip = $' + tip_total);
    return document.getElementById('DisplayCount_tip').innerHTML = "$" + tip_total;
}

//Поле результатов "Total"

function bill_total_count() {
    let bill_total = parseFloat(bill.value, 10) + (parseFloat(bill.value, 10) * (tip.value)/100);
        bill_total = Math.round(bill_total * 100) / 100;
        bill_total = bill_total.toFixed(2);
        console.log('Total = $' + bill_total);
    return document.getElementById('DisplayCount_total').innerHTML = "$" + bill_total;
}




// -jQuery-//




// let bill_jq = $('#InitialInputs__bill');

// $(function() { 
//     bill_jq.focusout(() => {
//     tip_total_count_jq();
//     bill_total_count_jq();
//     let bill_jq_parse = bill_jq.val();
//     bill_jq_parse = Math.round(bill_jq_parse * 100) / 100; 
//     bill_jq_parse = bill_jq_parse.toFixed(2);
//     return bill_jq.val(bill_jq_parse);
//     });
// });

// //Поле "Tip%"

// let tip_jq = $('#InitialInputs__tip_result');

// let tip_jq_plus = $('#InitialInputs__tip_plus');

// let tip_jq_minus = $('#InitialInputs__tip_minus');

// //присваиваем событие при нажатии на кнопку "+"

// tip_jq_plus.click(() => { 
//     let result_jq = parseInt(tip_jq.val(), 10)
//     if (result_jq <= 0) {
//         result_jq = tip_jq.val(1);
//     } else {
//         let result_jq = tip_jq.val();
//         result_jq = tip_jq.val(++result_jq);
//     }
//     tip_total_count_jq();
//     bill_total_count_jq();
// });

// //присваиваем событие при нажатии на кнопку "-"

// tip_jq_minus.click(() => { 
//     let result_jq = parseInt(tip_jq.val(), 10)
//     if (result_jq <= 0) {
//         result_jq = tip_jq.val(0);
//     } else {
//         let result_jq = tip_jq.val();
//         result_jq = tip_jq.val(--result_jq);
//     }
//     tip_total_count_jq();
//     bill_total_count_jq();
// });

// //Поле "Number of people"

// let NumOfPeople_jq = $('#InitialInputs__NumOfPeople_result');

// let NumOfPeople_plus_jq = $('#InitialInputs__NumOfPeople_plus');

// let NumOfPeople_minus_jq = $('#InitialInputs__NumOfPeople_minus');

// //присваиваем событие при нажатии на кнопку "+"

// NumOfPeople_plus_jq.click(() => {
//     let result_jq = parseInt(NumOfPeople_jq.val(), 10);
//     if (result_jq < 1) {
//         result_jq = NumOfPeople_jq.val(1);
//     } else {
//         let result_jq = NumOfPeople_jq.val();
//         result_jq = NumOfPeople_jq.val(++result_jq); 
//     }
//     tip_total_count_jq();
//     bill_total_count_jq();
// });

// //присваиваем событие при нажатии на кнопку "-"

// NumOfPeople_minus_jq.click(() => {
//     let result_jq = parseInt(NumOfPeople_jq.val(), 10);
//     if (result_jq <= 1) {
//         result_jq = NumOfPeople_jq.val(1);
//     } else {
//         let result_jq = NumOfPeople_jq.val();
//         result_jq = NumOfPeople_jq.val(--result_jq);
//     }
//     tip_total_count_jq();
//     bill_total_count_jq();
// });

// //Поле результатов "Tip"

// tip_total_count_jq = () => { //вынес общую функцию калькуляции чаевых
//     let tip_total_jq = (bill_jq.val() * (tip_jq.val())/100) / NumOfPeople_jq.val();
//         tip_total_jq = Math.round(tip_total_jq * 100) / 100;
//         tip_total_jq = tip_total_jq.toFixed(2);
//         console.log('Tip = $' + tip_total_jq);
//     return bill_total_jq = $('#DisplayCount_tip').html("$" + tip_total_jq);
// }

// // //Поле результатов "Total"

// bill_total_count_jq = () => { //вынес общую функцию калькуляции суммарного счета (с чаевыми)
//     let bill_total_jq = parseFloat(bill_jq.val(), 10) + (parseFloat(bill_jq.val(), 10) * (tip_jq.val())/100);
//         bill_total_jq = Math.round(bill_total_jq * 100) / 100;
//         bill_total_jq = bill_total_jq.toFixed(2);
//         console.log('Total = $' + bill_total_jq);
//     return bill_total_jq = $('#DisplayCount_total').html("$" + bill_total_jq);
// }