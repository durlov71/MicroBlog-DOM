// let header = document.getElementById('add-post-title-id')
// console.log(header);
// header.style.backgroundColor = '#333'
// header.style.color = '#fff'
// header.style.padding = '15px'
//     // header.style.display = 'none'
// header.textContent = 'Hello world'
// header.innerText = 'hello World 2'
// header.innerHTML = '<span style="color:red;">Hello World 3</span>'



// let header = document.querySelector('.add-post-title-class')
// console.log(header);
// header.style.backgroundColor = '#333'
// header.style.color = '#fff'
// header.style.padding = '15px'
//     // header.style.display = 'none'
// header.textContent = 'Hello world'
// header.innerText = 'hello World 2'
// header.innerHTML = '<span style="color:red;">Hello World 3</span>'




//  parent children shibling properties

const tbody = document.querySelector('tbody');
console.log(tbody);

console.log(tbody.children);
console.log(tbody.childNodes);
console.log(tbody.childElementCount);
console.log(tbody.children[2])
tbody.children[2].innerText = 'Whats on your mind';

console.log(tbody.firstChild)
console.log(tbody.firstElementChild)
console.log(tbody.lastElementChild)
    // console.log(tbody.firstElementChild.children[1].children[0])
console.log(tbody.parentElement);
console.log(tbody.parentNode);

console.log(tbody.children[2].previousElementSibling);
console.log(tbody.children[2].nextElementSibling);


// element add post 6
/*
<tr>
                        <td class="post">post 5</td>
                        <td>
                            <span class="fa fa-times float-right pr-3"></span>
                        </td>
                    </tr>
*/

const tr = document.createElement('tr');
const td1 = document.createElement('td');
td1.className = "post";
td1.innerText = "post 6";
td1.setAttribute("title", 'post-title-6')
console.log(td1);


const td2 = document.createElement('td');
const span = document.createElement('span')
span.className = "fa fa-times float-right pr-3";
td2.append(span);
console.log(td2);

tr.append(td1, td2);
console.log(tr);

document.querySelector('tbody').append(tr);