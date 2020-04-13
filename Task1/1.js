//1. Document.write, работа с url и строками
let firstSentence = document.write("Доброе утро!");
let text = document.body.innerText;
document.write("<br/>");
document.writeln(text.split(" ").length, ' ', text.split(" ").join("").length);
document.write("<br/>");

let hrefLocal = document.location.href;
let hrefInternet = "http://pngimg.com/uploads/cat/cat_PNG50509.png";
let hrefLocalInfo = getHrefInfo(hrefLocal);
let hrefInternetInfo = getHrefInfo(hrefInternet);

function getHrefInfo(href){
	let myHref = {
		protocol: href.substring(0, href.indexOf(':')),
		fileExtension: href.substring(href.lastIndexOf('.') + 1, href.length)
	};
	return myHref;
}

document.write(hrefLocal);
document.write("<br/>");
document.write(hrefLocalInfo.protocol, ' ', hrefInternetInfo.protocol);
document.write("<br/>");
document.write(hrefLocalInfo.fileExtension, ' ', hrefInternetInfo.fileExtension);
document.write("<br/>");