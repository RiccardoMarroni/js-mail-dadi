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




// document.getElementById('result').innerHTML = test;