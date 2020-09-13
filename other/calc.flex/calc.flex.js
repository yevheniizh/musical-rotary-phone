calc.zero.addEventListener('click', function() {
    calc.result.value += '0';
}, false)

calc.point.addEventListener('click', function() {
    calc.result.value += '.';
}, false)

calc.one.addEventListener('click', function() {
    calc.result.value += '1';
}, false)

calc.two.addEventListener('click', function() {
    calc.result.value += '2';
}, false)

calc.three.addEventListener('click', function() {
    calc.result.value += '3';
}, false)

calc.four.addEventListener('click', function() {
    calc.result.value += '4';
}, false)

calc.five.addEventListener('click', function() {
    calc.result.value += '5';
}, false)

calc.six.addEventListener('click', function() {
    calc.result.value += '6';
}, false)

calc.seven.addEventListener('click', function() {
    calc.result.value += '7';
}, false)

calc.eight.addEventListener('click', function() {
    calc.result.value += '8';
}, false)

calc.nine.addEventListener('click', function() {
    calc.result.value += '9';
}, false)


calc.plus.addEventListener('click', function(){
    calc.result.value += '+';
}, false)

calc.minus.addEventListener('click', function(){
    calc.result.value += '-';
}, false)

calc.multiply.addEventListener('click', function(){
    calc.result.value += '*';
}, false)

calc.devide.addEventListener('click', function(){
    calc.result.value += '/';
}, false)

calc.ac.addEventListener('click', function(){
    calc.result.value = null;
}, false)


calc.equal.addEventListener('click', function() {
    calc.result.value = eval(calc.result.value);
}, false)

