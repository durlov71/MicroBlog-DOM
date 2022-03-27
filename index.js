// .........Basic

// console.log(document);
// console.log(document.all);
// console.log(document.all[1]);
// console.log(document.all.length);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.characterSet);
// console.log(document.contentType);
// console.log(document.body.className);
// console.log(document.body.classList);


// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms[0].id);
// console.log(document.forms[0].className);
// console.log(document.forms[0].action);
// console.log(document.forms[0].method);
// console.log(document.links);
// console.log(document.scripts);
// console.log(document.scripts[3]);
// console.log(document.scripts[3].getAttribute('src'));

// let scripts = Array.from(document.scripts);
// console.log(scripts);

// scripts.forEach(Element => {
//     console.log(Element.getAttribute('src'));
// });

// ..............................>>>>>><<<<<<<>>>>><<<<<<>>>>>


// let headers = document.getElementsByClassName('header');
// let headers = document.getElementsByTagName('h1');
let headers = document.querySelectorAll('h1');
console.log(headers);
// headers = Array.from(headers);  //when we use QueryselectorAll,we dontt need to convert to an array cause its return a nodelist
headers.forEach((element, index) => {
    console.log(element.className);
    element.style.color = '#fff';
    element.style.backgroundColor = '#333';
    element.style.padding = '20px';
    element.innerText = `Hello world: ${index}`


});