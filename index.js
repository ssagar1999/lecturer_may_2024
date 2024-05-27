function setfn1(){
    console.log('hello')

let element1= `<div> hey chitkara </div>`

document.getElementById('container1').innerHTML = element1;
    let element2 = React.createElement('div', null, "hey chitkara");
ReactDOM.render(element2, document.getElementById('container2'))
}

setInterval(setfn1, 1000)