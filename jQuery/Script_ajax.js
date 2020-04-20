//функция обработки json 
function createList(element) { //prop - key, req[prop] - value
    let ul = document.createElement('ul');
    for (const props in element) {
        let li = document.createElement('li');
        if (typeof (element[props]) !== 'object') {
            li.innerText = element[props];
        } else {
            li.innerText = props;
            // добавляет вложенный список в li
            li.append(createList(element[props]));
        }
        ul.append(li);
    }
    return ul;
}

$(document).ready(() =>{
	//п.1
	$('.update').on('click', ()  =>{
		$('.content').load("https://inxaoc.github.io/example/ajax-1.html");
	});
	//п.2
	$.ajax({
    	url: "https://inxaoc.github.io/example/ajax.json"
	}).done((e) => {
    	let req = Object.assign({}, e);
    	console.log(req);
    	$(".json").append(createList(req));
	});

});