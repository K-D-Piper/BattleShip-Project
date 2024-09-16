//naming variables START

//Getting with Query Selector 

let hits = document.querySelectorAll('.hit');
let misses= document.querySelectorAll('.miss');
let clearId = document.getElementById("clearID")
//naming variables END

//clear START

clearId.addEventListener("click", () => {
    button.clearid.reset();
})

//clear END (doesn't work yet)


//Functions START

hits.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hit")
        alert("You HIT my battleship!")
        button.style.color = 'green'
    })
});

misses.forEach(button => {
    button.addEventListener('click', () => {
        console.log("miss")
        alert("HA! MISSED!")
        button.style.color = 'red'
    })
});

//Functions END

//Ramdomizing Squares START



