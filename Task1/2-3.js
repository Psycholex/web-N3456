//2. Основные тэги в документе
let linksCount = document.getElementsByTagName('a').length;
let imagesCount = document.getElementsByTagName('img').length;
let firstAnchorContent = document.getElementsByTagName('a')[0].innerHTML;
let picWidth = document.getElementsByTagName('img')[0].width;
let maxWidth = document.getElementsByTagName('img')[0].width;
let num = 1;
let sum = 0;

//2.4-2.5 Вывод с помощью JS кол-ва ссылок
let countOne = document.createElement('h3');
countOne.innerHTML = "Количество ссылок в задании: " + linksCount;
document.getElementById('links').appendChild(countOne);

//2.7 Вывод количества картинок
let countTwo = document.createElement('h3');
countTwo.innerHTML = "Количество картинок в задании: " + imagesCount;
document.getElementById('images').appendChild(countTwo);

//2.6 Вывод содержимого первого анкора на странице
let countThree = document.createElement('h3');
countThree.innerHTML = "Содержимое первого анкора: " + firstAnchorContent;
document.getElementById('anchors').appendChild(countThree);

//2.8 Вывод ширины первой картинки
let countFour = document.createElement('h3');
countFour.innerHTML = "Ширина первой картинки: " + picWidth + "px";
document.getElementById('images').appendChild(countFour);

//2.9 Вывод ширины самой широкой картинки
for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
	if (document.getElementsByTagName('img')[i].width>maxWidth) {
		maxWidth = document.getElementsByTagName('img')[i].width;
		num = i+1;
	}
}
let countFive = document.createElement('h3');
countFive.innerHTML = "Самая широкая картинка: №" + num +". Её ширина: " + maxWidth + "px";
document.getElementById('images').appendChild(countFive);

//2.10 Вывод суммы высот всех высот картинок
for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
	sum = sum + document.getElementsByTagName('img')[i].height;
}
let countSix = document.createElement('h3');
countSix.innerHTML = `Сумма высот всех картинок: ${sum}px`;
document.getElementById('images').appendChild(countSix);

//3. Формы

//3.2 Отобразите на странице имена всех четных форм через запятую
let outputNames = document.getElementById('evens')
outputNames.innerHTML = document.getElementsByClassName('myForm')[1].name
const showEvens = () =>{
	for (var i = 3; i <10; i++) {
		if (i%2!=0){
			outputNames.innerHTML = outputNames.innerHTML +", " + document.getElementsByClassName('myForm')[i].name;
		}
	}
}
showEvens();

//3.4. Добавьте в каждую форму кнопку “Показать имя формы”
const showName = (event) => {
	event.preventDefault();
	let myName = event.target.parentNode.name;
	alert(`Мое имя: ${myName}`);
}
for (var i = 0; i <10; i++) {
	document.getElementsByClassName('showNameBtn')[i].addEventListener('click', showName);
}

//3.5 Добавьте в каждую форму кнопку “Принадлежность”
const showId = (event) => {
	event.preventDefault();
	let myId = event.target.parentNode.id;
	alert(`Мой Id: ${myId}`);
}
for (var i = 0; i <10; i++) {
	document.getElementsByClassName('showIdBtn')[i].addEventListener('click', showId);
}

//3.6 Создайте функцию для сброса полей формы.
//Добавьте к каждой форме кнопку “Сбросить”
const resetForm = (event) => {
	event.preventDefault();
	event.target.parentNode.reset();
}
for (var i = 0; i <10; i++) {
	document.getElementsByClassName('resetBtn')[i].addEventListener('click', resetForm);
}

//3.7 Добавьте в каждую форму кнопку “Показать количество полей”
const showInputNumber = (event) => {
	event.preventDefault();
	let sum = event.target.parentNode.getElementsByTagName('input').length;
	alert(`Количество полей: ${sum}`);
}
for (var i = 0; i <10; i++) {
	document.getElementsByClassName('showInputBtn')[i].addEventListener('click', showInputNumber);
}

//3.8 Оформление кнопок
buttonArr = document.querySelectorAll('button');
const changeColor = (event) => {
	event.preventDefault();
	event.target.style.backgroundColor = 'rgba(255, 127, 80, 50%)';
}

const resetColor = (event) => {
	event.preventDefault();
	event.target.style.backgroundColor = 'rgba(255, 160, 122, 20%)';
}
for (var i = 0; i <40; i++) {
	buttonArr[i].addEventListener('mouseover', changeColor);
	buttonArr[i].addEventListener('mouseout', resetColor);
}

//Назначение кнопкам иконок
buttonArr.forEach((button) =>{
	let image = document.createElement('img');
	image.style.width = '20px';
	image.style.height = '20px';
	image.style.verticalAlign = 'bottom';
	switch (button.innerText){
		case "Показать имя формы": image.src = 'btn/btn1.png';
			break;
		case "Принадлежность": image.src = 'btn/btn2.png';
			break;
		case "Сбросить": image.src = 'btn/btn3.png';
			break;
		case "Показать количество полей": image.src = 'btn/btn4.png';
			break;
		default: image.src = 'images/btn1.png';
	}
	button.prepend(image);
})



const createNewArr = (arr) => {//ф-я заполнения двумерного массива
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let smallArr = [arr[i].innerHTML, 1, arr[i].href];
		if (i==0){
			newArr.push(smallArr);
		}else{
			let stop = false;
			for (let j = 0; j < newArr.length; j++) {
				if (smallArr[0]==newArr[j][0]) {
					newArr[j][1]=newArr[j][1]+1;
					newArr[j][2]=newArr[j][2]+', '+smallArr[2];
					stop = true;
					break;
				}
			}
			if (!stop){
				newArr.push(smallArr);
			}
		}
	}
	return newArr;
}

createTable(document.getElementById('linksTask'), 3);
