let hh1 = document.createElement("h1") //создание заголовка
hh1.classList.add("h1","mb-5")
hh1.innerText = "Создание таблицы"
document.querySelector(".container").appendChild(hh1)

let forma = document.createElement("form") //создание формы
forma.classList.add("form-row", "form-group")
document.querySelector(".container").appendChild(forma)

let t1 = document.createElement("div") //создание div с кол-вом строк
t1.innerText = "Количество строк в таблице:"
forma.appendChild(t1)

let par1 = document.createElement("input")
par1.type = "number"
par1.classList.add("form-control", "mb-3", "mt-1")
par1.placeholder = "Введите кол-во строк"
forma.appendChild(par1)




let t2 = document.createElement("div")  //создание div с кол-вом столбцов
t2.innerText = "Количество столбцов в таблице:"
forma.appendChild(t2)

let par2 = document.createElement("input")
par2.type = "number"
par2.classList.add("form-control", "mt-1")
par2.placeholder = "Введите кол-во столбцов"
forma.appendChild(par2)



let soxr = document.createElement("input") //создание кнопки
soxr.type = "submit"
soxr.value = "Создать"
soxr.classList.add("btn", "btn-outline-secondary", "px-5", "mx-auto", "mt-2")
forma.appendChild(soxr)
forma.onsubmit = function (e) {
    if (e.target.elements[0].value < 1 || e.target.elements[1].value < 1) {
        alert("Ошибка!")
    } else if (e.target.elements[1].value > 40){
        alert("Слишком много столбцов!")
    } else{
        location.href = "table.html?width=" + e.target.elements[0].value + "&height=" + e.target.elements[1].value
    }

    return false
}