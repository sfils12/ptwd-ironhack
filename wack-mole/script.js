console.log('hello');

window.onload = function(){

 


    let mole = document.createElement('div');
    mole.classList.add('mole');



    function sendTheMole(){
            mole.remove();
           let randomNumWithGlobalScope = (Math.floor(Math.random() * 2000));

           if(randomNumWithGlobalScope > 1500 || randomNumWithGlobalScope < 250){
            setTimeout(sendTheMole, randomNumWithGlobalScope) 
               return;
           }
            // right now the mole simply appears in a different box once every second
            // instead, let's make it so the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            
            let boxes = document.getElementsByClassName('col');
            let randomBox = boxes[Math.floor(Math.random() * boxes.length)];
            
            randomBox.append(mole);

            setTimeout(sendTheMole, randomNumWithGlobalScope) 
    }





    sendTheMole();


    
    
 
    console.log(document.getElementById('game-board'))



mole.onclick = function(){
    alert('you clicked the mole')
}











}// end window onload