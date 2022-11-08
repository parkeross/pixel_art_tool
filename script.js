const canvas = document.querySelector('.canvas');
const width_height = 10;

for (let i=0;i<width_height**2;i++){
    const new_div = document.createElement('div');
    new_div.className = 'canvasPiece';
    new_div.style.width=`${canvas.clientWidth/width_height}px`;
    new_div.style.height=`${canvas.clientHeight/width_height}px`;
    //new_div.textContent = `${i}`;

    canvas.appendChild(new_div);
};

const pieces = document.querySelectorAll('.canvasPiece');
//pieces.forEach((piece) => {piece.addEventListener('mouseenter',function(){piece.style.backgroundColor='purple'})});



pieces.forEach((piece) => {piece.addEventListener('mouseover',changeColor)});
pieces.forEach((piece) => {piece.addEventListener('mousedown',changeColor)});

function changeColor(e){
    if ((e.buttons==1 && e.type==='mouseover')||e.type==='mousedown'){
        e.target.style.backgroundColor='purple'; 
    };
};