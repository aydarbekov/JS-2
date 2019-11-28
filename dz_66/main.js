//--------------------------------ЗАДАНИЕ 1---------------------------------
console.log('Задание 1');
let line_1 = document.getElementById("string-1");
let line_2 = document.getElementById("string-2");
let line_3 = document.getElementById("string-3");
let line_4 = document.getElementById("string-4");
let line_5 = document.getElementById("string-5");
let line_6 = document.getElementById("string-6");

console.log(line_3.innerText);
console.log(line_5.innerText);
console.log(line_2.innerText);
console.log(line_6.innerText);
console.log(line_4.innerText);
console.log(line_1.innerText);
console.log('');

//--------------------------------ЗАДАНИЕ 2---------------------------------
console.log('Задание 2');
let elements = document.getElementsByClassName('element');
// elements[0].style.color = 'red';
// elements[1].style.color = 'red';
// elements[2].style.color = 'red';
// elements[3].style.color = 'green';
// elements[4].style.color = 'green';
// elements[5].style.color = 'green';
for (let i=0; i < 3; i++) {
    elements[i].style.color = 'red';
}
for (let i=3; i < 6; i++) {
    elements[i].style.color = 'green';
}

//--------------------------------ЗАДАНИЕ 3---------------------------------
console.log('Задание 3');
let toAdd = document.getElementById('container');
toAdd.innerHTML += '<div class="element">Element 1</div>';
toAdd.innerHTML += '<div class="element">Element 2</div>';
toAdd.innerHTML += '<div class="element">Element 3</div>';
toAdd.innerHTML += '<div class="element">Element 4</div>';
toAdd.innerHTML += '<div class="element">Element 5</div>';
toAdd.innerHTML += '<div class="element">Element 6</div>';
//Хотел циклом, не смог форматировать i в строку
// for (let i=0; i<6; i++) {
//     toAdd.innerHTML += '<div class="element">Element ${i}</div>'
// }

//--------------------------------ЗАДАНИЕ 4---------------------------------
console.log('Задание 4');
let button = document.getElementById('add-item-btn');
let toAdd2 = document.getElementById('container2');
button.addEventListener('click', function() { toAdd2.innerHTML += '<div class="element">Element</div>' });