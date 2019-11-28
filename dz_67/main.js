function rand (){
    a = Math.random();
    a = a * 20;
    a = Math.ceil(a);
    return a
}

function creator() {
    let number = rand();
    let cont = $('#container');
    let element = `<div class="element">${number}</div>`;
    console.log(element);
    cont.append(element);
}

let create = setInterval(creator, 5000);
setTimeout(function(){clearInterval(create)}, 15000);