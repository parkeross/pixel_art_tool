const canvas = document.querySelector('.container');
const width_height = 16;

for (let i=1;i<width_height**2;i++){
    const new_div = document.createElement('div');
    new_div.className = 'canvasPiece'
    canvas.appendChild(new_div);
};

const pieces = document.querySelectorAll('.canvasPiece');
pieces.forEach((piece) => {piece.addEventListener('mouseover',(piece)=>{piece.style.backgroundColor='red'})});