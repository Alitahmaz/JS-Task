const inputValue = document.getElementById('inputVal');
const fruitList = document.getElementById('fruit-list');
const btn = document.getElementById('addBtn');


btn.addEventListener('click', function () {
    addFruitToList();
});

function addFruitToList() {
    const li = document.createElement('li');
    li.innerText = inputValue.value;
    fruitList.appendChild(li);
    inputValue.value = '';
}
//task2

const countBtn = document.getElementById('countBtn');

countBtn.addEventListener('click', function () {
    getFruitsCount();
});

function getFruitsCount() {
    const liList = document.querySelectorAll('#fruit-list li');
    const spanField = document.getElementById('count');
    spanField.innerText = `Fruits count: ${liList.length}`;
}

//task3
const toggleBtn = document.getElementById('toggleBtn');


toggleBtn.addEventListener('click', function () {
    toggleList()
});

function toggleList() {
    fruitList.classList.toggle('d-none');
}

//task4
const numValue = document.getElementById('numberInput');
const numberBtn = document.getElementById('addNumber');
const numberList = document.getElementById('numberList');

numberBtn.addEventListener('click', function () {
    addNumbers(numValue.value);});