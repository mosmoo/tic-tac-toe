console.log('HEY')
//Add event listeners to the boxes

//Event Listeners added
const box1= document.getElementById('1')
box1.addEventListener("click", handleClick1)

const box2= document.getElementById('2')
box2.addEventListener("click", handleClick2)

const box3= document.getElementById('3')
box3.addEventListener("click", handleClick3)

const box4= document.getElementById('4')
box4.addEventListener("click", handleClick4)

const box5= document.getElementById('5')
box5.addEventListener("click", handleClick5)

const box6= document.getElementById('6')
box6.addEventListener("click", handleClick6)

const box7= document.getElementById('7')
box7.addEventListener("click", handleClick7)

const box8= document.getElementById('8')
box8.addEventListener("click", handleClick8)

const box9= document.getElementById('9')
box9.addEventListener("click", handleClick9)

//Switches from player 1 to 2
let count=2;

function handleClick1(e){
    if (box1){
        if (count++ % 2){
            box1.className="active"
        }else {
            box1.className="red"
            
        }
    }
}
function handleClick2(e){
    if (box2){
        if (count++ % 2){
            box2.className="active"
        }else {
            box2.className="red"
        }
    }
}
function handleClick3(e){
    if (box3){
        if (count++ % 2){
            box3.className="active"
        }else {
            box3.className="red"
        }
    }
}
function handleClick4(e){
    if (box4){
        if (count++ % 2){
            box4.className="active"
        }else {
            box4.className="red"
        }
    }
}
function handleClick5(e){
    if (box5){
        if (count++ % 2){
            box5.className="active"
        }else {
            box5.className="red"
        }
    }
}
function handleClick6(e){
    if (box6){
        if (count++ % 2){
            box6.className="active"
        }else {
            box6.className="red"
        }
    }
}
function handleClick7(e){
    if (box7){
        if (count++ % 2){
            box7.className="active"
        }else {
            box7.className="red"
        }
    }
}
function handleClick8(e){
    if (box8){
        if (count++ % 2){
            box8.className="active"
        }else {
            box8.className="red"
        }
    }
}
function handleClick9(e){
    if (box9){
        if (count++ % 2){
            box9.className="active"
        }else {
            box9.className="red"
        }
    }
}
console.log(handleClick1)



