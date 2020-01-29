var topdiv = document.querySelector('#topdiv');
var rgb = document.querySelector('#guess');
var colorbtns = document.querySelectorAll(".box");
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var hidebox = document.querySelectorAll(".hidebox");
var result = document.querySelector('#result')
var rightbtn = document.querySelectorAll('.rightbtn');
var leftbtn = document.querySelector('#leftbtn');
var numbtns = colorbtns.length;
var gameover = false;
var clickedon = 'hard';

const rand = () => 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) +')'

var rgblower = rand()
rgb.textContent = rgblower.toUpperCase();
hard.style.background = 'rgb(87, 144, 219)';
hard.style.color = 'white';

generatecolors();

function generatecolors() {
    for (let i = 0; i < colorbtns.length; i++) {
        colorbtns[i].style.background = rand();
    }
    colorbtns[Math.floor(Math.random() * numbtns)].style.background = rgblower;
}

leftbtn.addEventListener('click', rest);
leftbtn.addEventListener('mouseover', () => {
    leftbtn.style.background = 'rgb(87, 144, 219)';
    leftbtn.style.color = 'white';
})
leftbtn.addEventListener('mouseout', () => {
    leftbtn.style.background = 'white';
    leftbtn.style.color = 'rgb(87, 144, 219)';
})


easy.addEventListener('click', function() {
    clickedon = 'easy';
    easy.style.background = 'rgb(87, 144, 219)';
    easy.style.color = 'white';
    if(hard.style.color == 'white') {
        hard.style.background = 'white';
        hard.style.color = 'rgb(87, 144, 219)'
    }

    for(let i = 0; i<hidebox.length; i++) {
        hidebox[i].classList.remove('visible');
        hidebox[i].classList.add('hidden');
        numbtns = 3;
    }
    rest();
})


hard.addEventListener('click', function() {
    clickedon = 'hard';
    hard.style.background = 'rgb(87, 144, 219)';
    hard.style.color = 'white';
    if(easy.style.color == 'white') {
        easy.style.background = 'white';
        easy.style.color = 'rgb(87, 144, 219)'
    }
    for(let i = 0; i<hidebox.length; i++) {
        hidebox[i].classList.remove('hidden');
        hidebox[i].classList.add('visible');
        numbtns = 6;
    }
    rest();
})

for(let i = 0; i < rightbtn.length; i++ ) {
    rightbtn[i].addEventListener('mouseover', function() {
        rightbtn[i].style.background = 'rgb(87, 144, 219)';
        rightbtn[i].style.color = 'white';
    })
}

easy.addEventListener('mouseout', function() {
    if(clickedon == 'hard') {
        easy.style.background = 'white';
        easy.style.color = 'rgb(87, 144, 219)';
    }
})

hard.addEventListener('mouseout', function() {
    if(clickedon == 'easy') {
        hard.style.background = 'white';
        hard.style.color = 'rgb(87, 144, 219)';
    }
})

for(let i = 0; i<colorbtns.length; i++) {
    colorbtns[i].addEventListener('click', function() {
        if(gameover === false) {
            if(colorbtns[i].style.background == rgblower) {
                topdiv.style.background = rgblower;
                leftbtn.textContent ='PLAY AGAIN?';
                for(let j = 0; j<numbtns; j++) {
                    colorbtns[j].style.background = rgblower;
                    colorbtns[j].classList.add('visible');
                }
                gameover = true
                result.textContent = 'Correct!';
            } else {
                result.textContent = 'Try Again!';
                colorbtns[i].classList.remove('visible');
                colorbtns[i].classList.add('hidden');
            }
        }
    })
}

function rest() {
    result.textContent = '';
    leftbtn.textContent = 'NEW COLORS';
    rgblower = rand();
    rgb.textContent = rgblower.toUpperCase();
    topdiv.style.background = 'RGB(87, 144, 219)'; 
    generatecolors();
    gameover = false;
    if(clickedon == 'hard') {
        for(let j = 0; j<colorbtns.length; j++) {
            colorbtns[j].classList.remove('hidden');
            colorbtns[j].classList.add('visible');
        }
    } else {
        for(let j = 0; j<3; j++) {
            colorbtns[j].classList.remove('hidden');
            colorbtns[j].classList.add('visible');
        }
    }

}