// vettore di Meil, ciclo for per controllare se è presente nrl vettore
// stampa dell'esito

// MAIL


let MailList = [
    "marroni.riccardo@gmail.com", 
    "giuseppe.lepri@gmail.com",
    "mario.rossi@mail.com",
    "giorgio.sonnoli@mail.com"
]


const button = document.querySelector('.btn')

button.addEventListener('click' , function(){

    let usermail =  document.getElementById("userMail").value;
    let flag = false;
    for(let i=0; i<MailList.length; i++){
        if( usermail == MailList[i]){
            flag = true;
        } 
      }
      const result = document.getElementById('result');
      if(flag){
        result.innerHTML = "mail valida";
      }
      else {
        result.innerHTML = "mail non valida";
      }
     
    // if(flag){
    //     console.log("mail valida")
    // } else{
    //     console.log("mail non valida")
    // }
    
})



// DADI

 const btn = document.querySelector('.dadi')

 btn.addEventListener('click' , function(){
    var player = Math.floor(Math.random()*6) + 1;
    var computer = Math.floor(Math.random()*6) + 1;
    if (player > computer) {
        document.getElementById('placeholder').innerHTML = 'hai vinto';
        console.log('ciao')
      }else if (player == computer) {
        document.getElementById('placeholder').innerHTML = 'hai pareggiato';
        console.log('ciao')
      }else if(player < computer){
        document.getElementById('placeholder').innerHTML = 'hai perso';
        console.log('ciao')
      }else{
        
      }

})
