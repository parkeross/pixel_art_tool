const canvas = document.querySelector('.canvas');
const color_input = document.querySelector('#color');
const grid_input = document.querySelector('#grid_wd_ht');
const width_height = 20;
let color = 'black';

updateGrid();

//Update grid whenever text is entered
grid_input.addEventListener('keyup',updateGrid);
//Update color whenever text is entered
color_input.addEventListener('keyup',()=>{color=color_input.value});

//FUNCTIONS

//change color of div based on event
function changeColor(e){
    if ((e.buttons==1 && e.type==='mouseover')||e.type==='mousedown'){
        e.target.style.backgroundColor=color; 
    };
};

//Grab each piece of canvas and change color if mouse is clicked and/or draged
function addCanvasEventListeners(){
    const pieces = document.querySelectorAll('.canvasPiece');
    pieces.forEach((piece) => {piece.addEventListener('mouseover',changeColor)});
    pieces.forEach((piece) => {piece.addEventListener('mousedown',changeColor)});
};

//creates the grid
function updateGrid(){

    const grid_input = document.querySelector('#grid_wd_ht');
    const width_height = parseInt(grid_input.value);

    if (width_height > 100){
        alert('Max size is 100. Please enter a smaller width/height.');
    } else {
        deleteCanvas();

        for (let i=0;i<width_height**2;i++){
            const new_div = document.createElement('div');
            new_div.className = 'canvasPiece';
            new_div.style.width=`${canvas.clientWidth/width_height}px`;
            new_div.style.height=`${canvas.clientHeight/width_height}px`;
            canvas.appendChild(new_div);
        };
    
        addCanvasEventListeners();
    };
};

//deletes canvas
function deleteCanvas(){
    const currentCanvas = document.querySelectorAll('.canvasPiece');
    currentCanvas.forEach(piece=>{piece.remove()});
};