for (let i=0; i<256; i++) { //using loop to create a number of div elements equal to square of input
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.minWidth = '28px'; //in this case size of each element is defined to fit the container seamlessly
    div.style.minHeight = '28px';
    div.style.flex = '1'; //for equal size distribution between flex elements
    div.classList.add('square'); 
    console.log(i); //to make sure the numer of elements checks out
    const grid = document.getElementById('grid'); 
    grid.appendChild(div); //appending each element to the cointainer to make them flex items
}

const squares = document.getElementsByClassName('square'); 
for (let i=0; i<squares.length; i++) { //function allowing coloring of the elements on the mouseover
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = 'black';
    });
};