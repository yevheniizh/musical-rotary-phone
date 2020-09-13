for (var i = 0; i < 100; i++) {
    console.log(i);
}

//key-description examples
// var cat = {
//     name: 'Snizhok',
//     color: 'white'
// }

// var cat1 = {
//     name: 'Murzik',
//     color: 'black'
// }


//constructor example
function Cat (name, color) {
    this.name = name;
    this.color = color;

    this.run = function() {
        console.log(this.name + ' runs!');
    }
    return this;
}

var cat1 = new Cat('Snizhok', 'white');
var cat2 = new Cat('Murzik', 'black');

console.log(cat1.name);
console.log(cat2.name);
cat1.run();
cat2.run();


//delaying function
setTimeout(function() {
    cat1.run();  
}, 2000)


//using onevent attribute:
//method1 (in HTML inside tag with onclick-property)
//method2 (by id (#) inside tag)
function clicker() {
    cat1.name();
}

function clicker2() {
    cat2.name();
}

clickbtn.onclick = clicker;
clickbtn.onclick = clicker2; //здесь будет вызываться только последняя функция

//method3
clickbtn.onclick = clicker;
eventbtn.addEventListener('click', function(e) { //eventbtn - id inside some tag
    console.log('text'); 
    console.log (e);                      //ВЫЗЫВАЕТ В КОНСОЛЬ
}, false);

eventbtn.addEventListener('click', clicker, false); //+ЕЩЁ ВЫЗЫВАЕТ ALERT
// enentbtn.removeEventListener('click', clicker)