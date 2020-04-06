let rowsNumber;
let colsNumber;
let table;

const form = document.getElementById('tableWizard');
const createButton = document.getElementById('submitBtn');

const functionOne = document.getElementById('changeBorders');
const applyButtonOne = document.getElementById('applyBtnOne');

const functionTwo = document.getElementById('addTitle');

const functionThree = document.getElementById('deleteRow');

const functionFour = document.getElementById('addSomeMagic');

const functionFive = document.getElementById('deleteTable');



const rgb = (num) => { //функция возвращает код ргб ?
  return Math.floor(Math.random() * num);
}

const logSubmit = (event) => { //ф-я вызывает создание таблицы, скрывает форму и выводит блок ф-ий, п.2
  //log.innerHTML = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
  form.hidden=true;
  createTable (document.getElementById('table'), form.columns.value, form.rows.value);
  document.getElementById('functionOne').hidden=false;
  document.getElementById('functionTwo').hidden=false;
  document.getElementById('functionThree').hidden=false;
  document.getElementById('functionFour').hidden=false;
  document.getElementById('functionFive').hidden=false;
}

const logApplyOne = (event) => { //ф-я вызывает изменение границ таблицы
	//log.innerHTML = `Form Submitted! Time stamp: ${event.timeStamp}`;
	event.preventDefault();
	changeBorders(functionOne.borderWidth.value, functionOne.borderStyle.value);
}

const logApplyTwo = (event) => { //ф-я вызывает изменение заголовка
	//log.innerHTML = `Form Submitted! Time stamp: ${functionTwo.title.value}`;
	event.preventDefault();
	addTitle(functionTwo.title.value);
}

const logApplyThree = (event) => {// ф-я вызывает удаление ряда
	event.preventDefault();
	deleteOneRow(functionThree.rowNumber.value-1);
}

const logApplyFour = (event) => {// ф-я вызывает случайное изменение таблицы
	event.preventDefault();
	addSomeMagic();
}

const logApplyFive = (event) => {//ф-я вызывает удаление таблицы
	event.preventDefault();
	deleteMyTable();
}

const createTable = (parent, cols, rows) => { //ф-я создания таблицы, п.2
	table = document.createElement('table');
	rowsNumber = rows;
	colsNumber = cols;
	for (let i=0; i< rowsNumber; i++){
		let tr = document.createElement('tr');
		for (let j=0; j<colsNumber; j++){
			let td = document.createElement('td');
			let textArea = document.createElement('textarea');
			let btnSaveText = document.createElement('button');

            btnSaveText.innerHTML = 'Save';
			textArea.value = '0';
			td.appendChild(textArea);
			td.appendChild(btnSaveText);
            tr.appendChild(td);
            
			btnSaveText.onclick = function (){
				let newText = btnSaveText.parentNode.firstChild.value;
				//log.innerHTML = `Form Submitted! Value: ${newText}`;
				btnSaveText.parentNode.innerHTML = newText;
				btnSaveText.parentNode.removeChild('textarea');
				btnSaveText.parentNode.removeChild('button');
			}

		}
		table.appendChild(tr);
	}
	parent.hidden=false;
	parent.appendChild(table);
}


const changeBorders = (width, style) => { //ф-я изменяет границы таблицы, п.5
	table.style.border =`${width}px ${style} black`;
}

const addTitle = (title) => {//ф-я добавляет заголовок таблицы, п.6
	table.createCaption(); //метод создания элемента <заголовок>
	table.caption.innerHTML = title;
}

const deleteOneRow = (number) => {//ф-я удаляет строку, п.7
	if (number<rowsNumber) {
		table.deleteRow(number);
	}else{
		alert("Incorrect value")
	}
}

const addSomeMagic = () => {//ф-я "случайный выбор", п.8
	let luckyNumber = Math.floor(Math.random() * 1000);
	let randomRow = Math.floor(Math.random() * rowsNumber);
	let randomCol = Math.floor(Math.random() * colsNumber);
	if ((luckyNumber%6)===3){
		table.rows[randomRow].cells[randomCol].innerHTML='';
		let textArea = document.createElement('textarea');
			let btnSaveText = document.createElement('button');

			btnSaveText.onclick = function (){
				let newText = btnSaveText.parentNode.firstChild.value;
				//log.innerHTML = `Form Submitted! Value: ${newText}`;
				btnSaveText.parentNode.innerHTML = newText;
				btnSaveText.parentNode.removeChild('textarea');
				btnSaveText.parentNode.removeChild('button');
			}

			btnSaveText.innerHTML = 'Save';
			textArea.value = '0';
			table.rows[randomRow].cells[randomCol].appendChild(textArea);
			table.rows[randomRow].cells[randomCol].appendChild(btnSaveText);
	}else{
		let randomColorBg = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
		let randomColorText = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
		let randomTextSize = Math.floor(Math.random() * 10)+15;
		table.rows[randomRow].cells[randomCol].style.backgroundColor = randomColorBg;
		table.rows[randomRow].cells[randomCol].style.fontSize = `${randomTextSize}px`;
	}

}

const deleteMyTable = () => {//ф-я удаляет таблицу, п.9
	table.parentNode.removeChild(table);
	document.getElementById('table').hidden = true;
	form.hidden = false;
	document.getElementById('functionOne').hidden=true;
  	document.getElementById('functionTwo').hidden=true;
  	document.getElementById('functionThree').hidden=true;
  	document.getElementById('functionFour').hidden=true;
  	document.getElementById('functionFive').hidden=true;

}

form.addEventListener('submit', logSubmit);
functionOne.addEventListener('submit', logApplyOne);
functionTwo.addEventListener('submit', logApplyTwo);
functionThree.addEventListener('submit', logApplyThree);
functionFour.addEventListener('submit', logApplyFour);
functionFive.addEventListener('submit', logApplyFive);