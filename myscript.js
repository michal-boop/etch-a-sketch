/*for (let i=0; i<256; i++) { //using loop to create a number of div elements equal to square of input
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.minWidth = '28px'; //in this case size of each element is defined to fit the container seamlessly
    div.style.minHeight = '28px';
    div.style.flex = '1'; //for equal size distribution between flex elements
    div.classList.add('square'); 
    console.log(i); //to make sure the numer of elements checks out
    const grid = document.getElementById('grid'); 
    grid.appendChild(div); //appending each element to the cointainer to make them flex items
}*/
getNo = 16;
gridIt(getNo);

const click = document.getElementById("btn");
click.onclick = function() {
    const grid = document.getElementById('grid'); 
    grid.replaceChildren();
    let getNo = prompt("choose a number of side blocks up to a 100", "");
        if (getNo>100) {
            alert("Choose again, remember to keep it under 100!")
            return
        }
    document.getElementById("btn");
    btn.style.backgroundColor = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
    console.log(getNo);
    gridIt(getNo);
}

function gridIt (getNo) {
    for (let i=1; i<((getNo*getNo)+1); i++) {
        const div = document.createElement('div');
        div.classList.add('square'); 
        console.log(i);
        const grid = document.getElementById('grid');
        grid.style.gridTemplate = `repeat(${getNo}, 1fr)/repeat(${getNo}, 1fr)`; 
        grid.appendChild(div);
    }
    colorIt();
}

function colorIt () {
const squares = document.getElementsByClassName('square'); 
    for (let i=0; i<squares.length; i++) { //function allowing coloring of the elements on the mouseover
        squares[i].addEventListener('mouseover', () => {
            squares[i].style.backgroundColor = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
        });
    };
};

let randomColor = function()  {
    let color = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
};