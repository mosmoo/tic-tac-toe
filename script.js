console.log("HEY");
let gameActive = true;
//Add event listeners to the boxes

//Event Listeners added
const box1 = document.getElementById("1");
box1.addEventListener("click", handleClick1);

const box2 = document.getElementById("2");
box2.addEventListener("click", handleClick2);

const box3 = document.getElementById("3");
box3.addEventListener("click", handleClick3);

const box4 = document.getElementById("4");
box4.addEventListener("click", handleClick4);

const box5 = document.getElementById("5");
box5.addEventListener("click", handleClick5);

const box6 = document.getElementById("6");
box6.addEventListener("click", handleClick6);

const box7 = document.getElementById("7");
box7.addEventListener("click", handleClick7);

const box8 = document.getElementById("8");
box8.addEventListener("click", handleClick8);

const box9 = document.getElementById("9");
box9.addEventListener("click", handleClick9);

//Switches from player 1 to 2
let count = 2;

function handleClick1(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save1= e.target.className
    // winningConditions();
  } else {
    if (box1) {
      if (count++ % 2) {
        box1.className = "active";
      } else {
        box1.className = "red";
      }
    }
    getAtt();
  }
}
function handleClick2(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save2= e.target.className
    // winningConditions();
  } else {
    if (box2) {
      if (count++ % 2) {
        box2.className = "active";
      } else {
        box2.className = "red";
      }
    }
    getAtt();
  }
}
function handleClick3(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save3= e.target.className
    // winningConditions();
  } else {
    if (box3) {
      if (count++ % 2) {
        box3.className = "active";
      } else {
        box3.className = "red";
      }
    }
    getAtt();
  }
}
function handleClick4(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save4= e.target.className
    // winningConditions();

  } else {
    if (box4) {
      if (count++ % 2) {
        box4.className = "active";
      } else {
        box4.className = "red";
      }
    }
    getAtt();

  }
}
function handleClick5(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save5= e.target.className
    // winningConditions();

  } else {
    if (box5) {
      if (count++ % 2) {
        box5.className = "active";
      } else {
        box5.className = "red";
      }
    }
    getAtt();

  }
}
function handleClick6(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save6= e.target.className
    // winningConditions();

  } else {
    if (box6) {
      if (count++ % 2)  {
        box6.className = "active";
      } else {
        box6.className = "red";
      }
    }
    getAtt();

  }
}
function handleClick7(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save7= e.target.className
    // winningConditions();

  } else {
    if (box7) {
      if (count++ % 2) {
        box7.className = "active";
      } else {
        box7.className = "red";
      }
    }
    getAtt();

  }
}
function handleClick8(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save8= e.target.className
    // winningConditions();

  } else {
    if (box8) {
      if (count++ % 2) {
        box8.className = "active";
      } else {
        box8.className = "red";
      }
    }
    getAtt();

  }
}
function handleClick9(e) {
  if (e.target.className == "red" || e.target.className == "active") {
    const save9= e.target.className
    // winningConditions();

  } else {
    if (box9) {
      if (count++ % 2) {
        box9.className = "active";
      } else {
        box9.className = "red";
      }
    }
    getAtt();
  }
}

function getAtt(){
    const box_class1= box1.className
    const box_class2= box2.className
    const box_class3= box3.className
    const box_class4= box4.className
    const box_class5= box5.className
    const box_class6= box6.className
    const box_class7= box7.className
    const box_class8= box8.className
    const box_class9= box9.className

    // console.log(box_class3)
    if (box_class1 === box_class2 === box_class3){
        console.log(true)
    }

}

// function winningConditions(){
//     console.log('blah')
// }
