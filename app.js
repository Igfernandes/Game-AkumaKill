var lm = 0;
var am = 0;
var backaudio;
var nivel;
var nt = 6000;
var qtd = Math.random() * 2;
var value = 120; 
var candle = document.querySelector('.lifes').childNodes
var time = document.querySelector('.chronometer p')



var windowSize = function(){
    lm = window.innerWidth - 200;
    am = window.innerHeight;
}

window.addEventListener('resize', windowSize())
document.addEventListener('DOMContentLoaded', windowSize())

//NUMBER RANDOM
var sort = Math.floor(Math.random() * 3)

var exp;
var axp;

var creatElement = function(){

    var px = Math.floor(Math.random() * lm) - 100;
    var py = Math.floor(Math.random() * am) - 150;

    px = px < 0 ? 50 : px;
    py = py < 0 ? 300 : py;

    sort = Math.floor(Math.random() * 3)

    //FATHER DIV
    
    var div = document.createElement('div');
    div.classList.add('akuma_actions');
    div.style = 'top: '+ py + 'px; left: '+ px + 'px';
    document.body.appendChild(div)

    //Checked Size
    if(sort == 0){
        div.classList.add('size-small');
    }else if(sort == 1){
        div.classList.add('size-medium');
    }else if(sort == 2){
        div.classList.add('size-big');
    }

    //IMG FIRE GIF
    var img = document.createElement('img');
    img.src = './img/fire.gif';
    img.classList.add('fire');

    div.appendChild(img)


    //IMG AKUMA 
    if( sort == 0){
        var img = document.createElement('img');
        img.src = './img/one-akuma.png';
        img.classList.add('akuma');
        document.body.appendChild(img)
    }else if(sort == 1){
        var img = document.createElement('img');
        img.src = './img/two-akuma.png';
        img.classList.add('akuma');
        document.body.appendChild(img)
    }else if(sort == 2){
        var img = document.createElement('img');
        img.src = './img/three-akuma.png';
        img.classList.add('akuma');
        document.body.appendChild(img)
    }
    div.onclick = function(){
        var audio = new Audio('./song/shot.mp3');
        audio.addEventListener('canplaythrough', function() {
            audio.play();
        });
        
        this.querySelector('.fire').style="z-index: 3; animation: opacity .5s";

        setInterval(() => {
            this.remove()
        }, 300);
        
    }

    div.appendChild(img)
}

//CREAT BTN-RESTART

var restart = function(){
    var div = document.createElement('div');
    div.className = "restart";
    var button = document.createElement('button')
    button.textContent = 'RESTART'
    div.appendChild(button)

    var div2 = document.createElement('div');
    div2.className = "go-back";
    var button = document.createElement('button')
    button.textContent = 'GO BACK'
    div2.appendChild(button)
    document.body.appendChild(div)
    document.body.appendChild(div2);

    //COME BACK MENU 

    btnBack = document.querySelector('.go-back')
    btnBack.onclick = function(){
    window.location.href = "./index.html";
    }

    div.onclick = function(){
        backaudio = new Audio('./song/backsound.mp3');
        backaudio.addEventListener('canplaythrough', function() {
        backaudio.play();
        backaudio.volume = 0.15
        lifes = 1; 
        over = false;
        time.innerText = "Tempo restante: "+ 120;
        value = 120
        document.querySelector('.alert-fail').style="animation: none;display;none";  
        for(var itens of candle){
            itens.src ="./img/candle-active.png";
        }
        document.querySelector('.restart').remove();
        document.querySelector('.go-back').remove();
       loop;
        timing;
    });
}
}


//VICTORY SCREEN 

var victory = function(){
    
    backaudio.volume = 0;
    var div = document.createElement('div')
    div.className = "icon-victory"
    var img = document.createElement('img')
    img.src = './img/victory.png';
    div.appendChild(img)
    document.body.appendChild(div)
    var gameover = new Audio('./song/you-win.mp3')
    gameover.addEventListener('canplaythrough', function() {
        gameover.volume = 0.3
        gameover.play();
    });
}



//CREAT START ITENS
document.addEventListener('DOMContentLoaded', function(){


    //CREAT TITLE 
    var div = document.createElement('div');
    div.className = 'title-start'
    var h1 = document.createElement('h1')
    h1.textContent = 'KILL AKUMAS'
    div.appendChild(h1)
    document.body.appendChild(div)
    

    //CREAT BUTTONS
    var div2 = document.createElement('div');
    div2.className = "btn-start";
    var button = document.createElement('button');
    button.textContent = "START";
    div2.appendChild(button)
    document.body.appendChild(div2)


    
    //SELECT DIFICULTY
    var div3 = document.createElement('div');
    div3.className = "select-dificulty";
    var select = document.createElement('select');
    var option = document.createElement('option')
    option.value = 'easy';
    option.textContent = 'EASY';
    select.appendChild(option);
    var option = document.createElement('option')
    option.value = 'medium';
    option.textContent = 'MEDIUM';
    select.appendChild(option);
    var option = document.createElement('option')
    option.value = 'hard';
    option.textContent = 'HARD';
    select.appendChild(option);
    div3.appendChild(select)
    document.body.appendChild(div3)
   
    select.onchange = function(){
        nivel = this.value
    }
    
    //CLICK START 
    button.onclick = function(){
        document.querySelector('.filter_wallpaper').style="animation: trade 2s; animation-fill-mode: forwards;";
        
        
        if(nivel == 'easy'){
            nt = 6000;
            qtd = Math.random() * 3;
        }else if (nivel == 'medium'){
            nt = 4000;
            qt = Math.random() * 5;
        }else if(nivel == 'hard'){
            nt = 3000;
            qt = Math.random() * 7;
        }

        
        setTimeout(function(){
            document.body.style="background: url(./img/wallpaper-during-the-day.png) no-repeat center center scroll;background-size: cover;cursor: url(img/crosshair_112503.ico), auto !important;";
            document.querySelector('.filter_wallpaper').style="animation: trade-reverse 2s; animation-fill-mode: forwards;";
            div.remove();div2.remove();div3.remove();
            document.querySelector('.meters').style="display: block";
            setInterval(loop, nt);
            setInterval(timing, 1000);
        }, 4000);
             
        backaudio = new Audio('./song/backsound.mp3');
        backaudio.addEventListener('canplaythrough', function() {
            backaudio.play();
            backaudio.volume = 0.15
        });
    }
})


var lifes = 1;
var over = false;


//CALL ELEMENT'S

var loop = function(){
    var resp = document.querySelectorAll('.akuma_actions')
    if(document.querySelector('.akuma_actions')){
        for(var itens of resp){
            itens.remove()
        }
        
        candle[lifes].src = "./img/candle-desactive.png";
        lifes++;
    }
    
    if(lifes <= 5){
        var num = time.innerText
        if(num != 'Tempo restante: 0'){
            for(var x = 0; x <= qtd; x++){
                creatElement();
            }
        }

    }else{
        document.querySelector('.alert-fail').style="display:block;animation: alert 1s; animation-fill-mode: forwards;";
       
        backaudio.volume = 0;
        
        if(over == false){
            restart();
            document.querySelector('.restart').style="animation:  opacity 1s; animation-fill-mode: forwards;"
            var gameover = new Audio('./song/game-over.mp3')
            gameover.addEventListener('canplaythrough', function() {
                gameover.volume = 0.3
                gameover.play();
            });
            over = true;
            clearInterval(loop);
        }else if(over == true){
                gameover.addEventListener('canplaythrough', function() {
                    gameover.paused;
                });
            
            over = null;
        }
    }
}



//TIME PASS
var num = time.innerText;
var ts = false;
var timing = function(){ 
    value--;
    if((value >= 0) && (lifes < 6)){
        time.innerText = "Tempo restante: "+ value;
    }
    if(num != 'Tempo restante: 0'){
        if(ts == false){
            victory();
            ts = true;
        }
    }
}


