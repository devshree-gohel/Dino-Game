document.onkeydown = function(e){
    console.log("key code is: ", e.altKey)
    if(e.altKey==true){
        dino = document.querySelector(' .dino');
        dino.classList.add('.animateDino');
        setTimeout(() => {
            console.log(e)
           dino.classList.remove('.animateDino')
        }, 1000);
    }
}