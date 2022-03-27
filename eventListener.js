// EVENT LISTENER>>>>>>>>>>>>>>>>>>>>>>>>>>

const clearBtn = document.querySelector('button');
console.log(clearBtn);


// ..........<<<<<<<<__COUNT CLICK__>>>>>>>.................
const disp = document.getElementById('display');
console.log(disp)
let count = 0;
clearBtn.onclick = function() {
    count++;
    disp.innerHTML = count;
}

// ...............<<<<<<<<<<<<<___EVENT LISTENER__>>>>>>>>>>>>>>>........
clearBtn.addEventListener('click', function(event) {
    console.log('All Clear')

    console.log(event)
    console.log(event.clientX)
    console.log(event.clientY)
    console.log(event.offsetX)
    console.log(event.offsetY)
    console.log(event.altKey)
    console.log(event.shiftKey)
    console.log(event.ctrlKey)
    console.log(event.type)
    console.log(event.target.id)
    console.log(event.target.className)
    console.log(event.target.innerText)

    event.target.style.backgroundColor = 'Green'


});