function randomInteger(min, max) {  //функция рандома между min и max числами
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function setForm(target) {  //функция создания textarea
    target.innerHTML = ""

    let forma = document.createElement("form")
    forma.classList.add("form-group")
    target.appendChild(forma)

    let text = document.createElement("textarea")
    text.classList.add("form-control")
    forma.appendChild(text)

    forma.appendChild(document.createElement("br"))

    let soxr = document.createElement("input")
    soxr.classList.add("btn", "btn-success", "btn-sm", "px-5", "mx-auto", "mt-2")
    soxr.type = "submit"
    soxr.value = "Сохранить"
    forma.appendChild(soxr)
    forma.onsubmit = function (e) {
        e.target.parentNode.innerText = e.target.elements[0].value
        return false
    }
}

function CreateTable(str, stb) {    //функция создания таблицы 
    let table = document.createElement("table")
    table.classList.add("table", "table-responsive", "table-bordered")
    for (let i = 0; i <= str; i++) {
        let stroka = document.createElement("tr")
        for (let j = 0; j <= stb; j++) {
            let stolbets = document.createElement("td")
            stroka.appendChild(stolbets)

            //Добавление содержимого
            let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if (j == 0 && i == 0) {  //условие нулевой строки и столбца
                stolbets.classList.add("tsvet")
            }
            else if (j == 0 && i !== 0) { //условие нулевого столбца(добавляем цифры)
                let tsifra = document.createElement("p")
                tsifra.innerHTML = i
                stolbets.classList.add("tsvet", "shir")
                stolbets.appendChild(tsifra)
            }
            else if (i == 0 && j !== 0) { //условие нулевой строки (добавляем буквы)
                let bukva = document.createElement("p")
                bukva.innerHTML = arr_EN[j - 1]
                stolbets.classList.add("tsvet")
                stolbets.appendChild(bukva)
            }
            else {                        //создание поля textarea
                setForm(stolbets)
            }
            table.appendChild(stroka)
        }
        document.querySelector(".container").appendChild(table)
    }
}

function First(functions) {  //Функция создания 1 карточки
    let div1 = document.createElement("div") //ПЕРВОЕ ПОЛЕ ВВОДА
    div1.classList.add("card", "p-2", "mr-1", "mb-1")
    functions.appendChild(div1)

    let h6_1 = document.createElement("h6") //1. заголовок
    h6_1.classList.add("card-title")
    h6_1.innerHTML = "Границы"
    div1.appendChild(h6_1)

    let p1 = document.createElement("p")  //2. текст
    p1.classList.add("card-text")
    p1.innerHTML = "Введите ширину и стиль границы в поля ниже."
    div1.appendChild(p1)

    let shirina = document.createElement("input") //3. поля ввода
    shirina.type = "text"
    shirina.maxLength = 3
    shirina.classList.add("form-text", "form-control")
    shirina.oninput = function () { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + variant.value }
    div1.appendChild(shirina)

    const border = ["none", "dotted", "dashed", "solid", "double", "groove"]
    let variant = document.createElement("select")
    variant.classList.add("form-text", "form-control")
    div1.appendChild(variant)
    for (let i = 0; i < border.length; i++) {
        let opt = document.createElement("option")
        opt.innerText = border[i]
        variant.appendChild(opt)
        variant.onchange = function () { but1.innerText = "Применить " + shirina.value + " px" + " и рамка " + variant.value }
    }

    let but1 = document.createElement("button")  //4. кнопка
    but1.classList.add("knopka", "btn", "btn-secondary", "mx-auto", "mt-2")
    but1.innerText = "Применить"
    but1.onclick = function () {
        let text = but1.parentNode.querySelector("input").value
        let borderStyle = but1.parentNode.querySelector("select").value

        if (text.search(/\D/) >= 0 || text < 1) {
            alert("Ошибка!")
        } else {
            document.querySelector("table").style.borderStyle = borderStyle
            document.querySelector("table").style.borderWidth = text + "px"
        }
    }
    div1.appendChild(but1)


}

function Second(functions) { //Функция создания 2 карточки
    let div2 = document.createElement("div") //ВТОРОЕ ПОЛЕ ВВОДА
    div2.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div2)

    let h6_2 = document.createElement("h6") //1. заголовок
    h6_2.classList.add("card-title")
    h6_2.innerHTML = "Заголовок таблицы"
    div2.appendChild(h6_2)

    let p2 = document.createElement("p")  //2. текст
    p2.classList.add("card-text")
    p2.innerText = "Введите заголовок таблицы в поле ниже."
    div2.appendChild(p2)

    let zag = document.createElement("input") //3. поле ввода
    zag.classList.add("form-text", "form-control")
    zag.type = "text"
    div2.appendChild(zag)

    let but2 = document.createElement("button")  //4. кнопка
    but2.classList.add("btn", "btn-secondary", "mx-auto", "mt-2")
    but2.innerText = "Добавить"
    but2.onclick = function () { H.innerText = zag.value }
    div2.appendChild(but2)

}

function Third(functions) { //Функция создания 3 карточки
    let div3 = document.createElement("div") //ТРЕТЬЕ ПОЛЕ ВВОДА
    div3.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div3)


    let h6_3 = document.createElement("h6") //1. заголовок
    h6_3.classList.add("card-title")
    h6_3.innerHTML = "Удаление строки"
    div3.appendChild(h6_3)

    let p3 = document.createElement("p") //2. текст
    p3.classList.add("card-text")
    p3.innerText = "Введите номер строки и столбца, которые хотите удалить."
    div3.appendChild(p3)


    let divv1 = document.createElement("div") //3. поле ввода 1
    divv1.classList.add("input-group", "mb-3")
    div3.appendChild(divv1)

    let str = document.createElement("input")
    str.classList.add("form-control")
    str.placeholder = "Строка"
    str.type = "text"
    divv1.appendChild(str)

    let divv2 = document.createElement("div") //4. кнопка для строки
    divv2.classList.add("input-group-append")
    divv1.appendChild(divv2)

    let but3 = document.createElement("button")
    but3.classList.add("btn", "btn-secondary")
    but3.innerText = "Удалить"
    but3.onclick = function () {
        if (str.value > 0 && str.value < document.getElementsByTagName("tr").length) {
            document.getElementsByTagName("tr")[str.value].remove()
        } else { alert("Значение некорректно") }
    }
    divv2.appendChild(but3)


    let divv_1 = document.createElement("div") //5. поле ввода 2
    divv_1.classList.add("input-group", "mb-3")
    div3.appendChild(divv_1)

    let str2 = document.createElement("input")
    str2.classList.add("form-control")
    str2.placeholder = "Столбец"
    str2.type = "text"
    divv_1.appendChild(str2)

    let divv_2 = document.createElement("div") //6. кнопка для столбца
    divv_2.classList.add("input-group-append")
    divv_1.appendChild(divv_2)

    let but33 = document.createElement("button")
    but33.classList.add("btn", "btn-secondary")
    but33.innerText = "Удалить"
    but33.onclick = function () {
        if (str2.value > 0 && str2.value < document.getElementsByTagName("tr")[0].getElementsByTagName("td").length) {
            let trs = document.getElementsByTagName("tr")
            for (let i = 0; i < trs.length; i++) {
                trs[i].getElementsByTagName("td")[str2.value].remove()
            }
        } else { alert("Значение некорректно") }
    }
    divv_2.appendChild(but33)
}

function Fourth(functions) {  //Функция создания 4 карточки
    let div4 = document.createElement("div") //ЧЕТВЕРТОЕ ПОЛЕ ВВОДА
    div4.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div4)

    let h6_4 = document.createElement("h6") //1. заголовок
    h6_4.classList.add("card-title")
    h6_4.innerHTML = "Случайный выбор"
    div4.appendChild(h6_4)


    let p4 = document.createElement("p") // 2. текст
    p4.classList.add("card-text")
    p4.innerText = "Просто жми!"
    div4.appendChild(p4)

    let but4 = document.createElement("button") //3. кнопка
    but4.classList.add("btn", "btn-secondary")
    but4.innerText = "Magic"
    but4.onclick = function () {
        let randi = randomInteger(1, document.getElementsByTagName("tr").length - 1)
        let randj = randomInteger(1, document.getElementsByTagName("tr")[0].getElementsByTagName("td").length - 1)
        let rand = document.getElementsByTagName("tr")[randi].childNodes[randj]
        rand.style.backgroundColor = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.color = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")"
        rand.style.fontSize = randomInteger(15, 25) + "pt"
        if (Math.random() > 0.5) {
            setForm(rand)
        }
    }
    div4.appendChild(but4)
}

function Fifth(functions) {  //Функция создания 4 карточки
    let div5 = document.createElement("div") //ПЯТОЕ ПОЛЕ ВВОДА
    div5.classList.add("card", "p-2", "mx-1", "mb-1")
    functions.appendChild(div5)

    let h6_5 = document.createElement("h6") //1. заголовок
    h6_5.classList.add("card-title")
    h6_5.innerHTML = "Очистить таблицу"
    div5.appendChild(h6_5)

    let p5 = document.createElement("p") //2. текст
    p5.classList.add("card-text")
    p5.innerText = "Название говорит само за себя."
    div5.appendChild(p5)

    let but5 = document.createElement("button")  //3. кнопка
    but5.classList.add("btn", "btn-secondary")
    but5.innerText = "Очистить"
    but5.onclick = function () {
        let inputs = functions.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        };

        H.innerText = "Без названия"
        document.getElementsByClassName("knopka")[0].innerHTML = "Применить"

        let trs = document.getElementsByTagName("tr")

        for (let i = 1; i < trs.length; i++) {
            let tds = trs[i].getElementsByTagName("td")
            for (let j = 1; j < tds.length; j++) {
                tds[j].style.backgroundColor = "white"
                tds[j].style.color = "black"
                tds[j].style.fontSize = "inherit"
                document.querySelector("table").style.border = "none"
                setForm(tds[j])
            }
        }
    }
    div5.appendChild(but5)
}

function CreateBlocks() {   //функция создания блока с настройками таблицы
    let functions = document.createElement("div")
    functions.classList.add("functions", "mx-1", "d-flex", "justify-content-around", "mt-3", "flex-wrap")
    document.querySelector(".container").appendChild(functions)

    First(functions)
    Second(functions)
    Third(functions)
    Fourth(functions)
    Fifth(functions)

    return false
}



let mas = []                                                 //вытаскиваю переданные параметры и добавляю их в массив
let raw = document.location.search.substring(1).split("&")
for (let i = 0; i < raw.length; i++) {
    let value = raw[i].split("=")[1]
    mas.push(value)
}


CreateBlocks()                      //создаю блок настроек

let H = document.createElement("h1")  //создлаю заголовок
H.innerHTML = "Без названия"
document.querySelector(".container").appendChild(H)

CreateTable(mas[0], mas[1])          //создаю таблицу