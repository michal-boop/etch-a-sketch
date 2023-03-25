getNo = 16; //an input to set initial size of the grid
gridIt(getNo); //passing it to the function responsible for creating the grid

const click = document.getElementById('btn_regular');
click.onclick = function() { //function responsible for action of button being pressed
    const grid = document.getElementById('grid'); 
    grid.replaceChildren(); //clears grid of previous elements
    let getNo = prompt('choose a number of side blocks up to a 100', ''); //takes an input
        if ((getNo>100) || isNaN(getNo)) { 
            alert('Choose again, remember to keep it under 100!')
            return; //only values up to 100 and only numbers are valid
        }
    console.log(getNo);
    gridIt(getNo); //this sends the input number to the function creating the grid and calls it
}

const click2 = document.getElementById('btn_rainbow');
click2.onclick = function() {
    document.getElementById('btn_rainbow'); //colors the button randomly everytime it is pressed
    btn_rainbow.style.backgroundColor = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
    colorIt(); //calls the function responsible for coloring in random colors
};

const click3 = document.getElementById('btn_darken');
click3.onclick = function() {
    pencilIt(); //calls the function responsible for drawing in gray
};

const click4 = document.getElementById('btn_erase');
click4.onclick = function() {
    eraseIt(); //calls the function responsible for drawing in white
};

const click5 = document.getElementById('btn_circle');
click5.onclick = function() {
    circleIt(); //calls the function changing the shape of grid elements from squares to circles and other way round
};

function gridIt (getNo) { //function creating the grid
    for (let i=1; i<((getNo*getNo)+1); i++) { // looping allows to create the number of squares equal to the square of an input
        const div = document.createElement('div'); 
        div.classList.add('square'); //this puts them all in one class 
        console.log(i); 
        const grid = document.getElementById('grid');
        grid.style.gridTemplate = `repeat(${getNo}, 1fr)/repeat(${getNo}, 1fr)`; //this makes sure all squares are equal size  
        grid.appendChild(div); //appends the squares to the grid element
    }
    black();
}

function black() {
    const squares = document.getElementsByClassName('square'); 
        for (let i=0; i<squares.length; i++) { //function allowing coloring of the elements on the mouseover
            squares[i].addEventListener('mouseenter', () => {
                squares[i].style.backgroundColor = 'black'; //color is by default set to black
            });
        };
};

function colorIt() { //function responsible for randmoly coloring the squares
const squares = document.getElementsByClassName('square');
    for (let i=0; i<squares.length; i++) { //function allowing coloring of the elements on the mouseover
        squares[i].addEventListener('mouseenter', () => {
            squares[i].style.backgroundColor = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
        });
    };
};

function pencilIt() { //function responsible for coloring the squares
    const squares = document.getElementsByClassName('square'); 
        for (let i=0; i<squares.length; i++) {
            squares[i].addEventListener('mouseenter', () => {
                squares[i].style.backgroundColor = `gray`; //color here is set to gray
            });
            };
        };

function eraseIt() { //function responsible for coloring the squares
    const squares = document.getElementsByClassName('square'); 
        for (let i=0; i<squares.length; i++) {
            squares[i].addEventListener('mouseenter', () => {
                squares[i].style.backgroundColor = `white`; //color here is set to white
            });
        };
};

function circleIt() { //function responsible for changing the shape of grid children elements
    if (document.getElementById("btn_circle")) { //conditional statement helpes define if it changes to circles 
        const squares = document.getElementsByClassName('square'); 
            for (let i=0; i<squares.length; i++) {
                   squares[i].style.borderRadius = `50%`;
            };
        let circleBtn = document.getElementById('btn_circle');
        circleBtn.innerHTML = 'SQUARES!';
        circleBtn.setAttribute('id', 'btn_square')
        }
    else { //or back to squares
        const squares = document.getElementsByClassName('square'); 
            for (let i=0; i<squares.length; i++) {
                   squares[i].style.borderRadius = `0%`;
            };
        let circleBtn = document.getElementById('btn_square');
        circleBtn.innerHTML = 'CIRCLES!';
        circleBtn.setAttribute('id', 'btn_circle')
    }
};


