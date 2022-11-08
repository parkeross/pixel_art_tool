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



pieces.forEach((piece) => {piece.addEventListener('mousedown',function(e){piece.clicked=true;
checkEvents(piece)})});

pieces.forEach((piece) => {piece.addEventListener('mouseup',function(e){piece.clicked=false})});

pieces.forEach((piece) => {piece.addEventListener('mouseenter',function(e){piece.hover=true;if(e.buttons == 1){changeColor(piece)};}));

function changeColor(el){
    el.style.backgroundColor='purple';
};

function checkEvents(el){
    if(el.hover && el.clicked){
      el.style.backgroundColor = 'purple';
    };
};