// vettore di Meil, ciclo for per controllare se è presente nrl vettore
// stampa dell'esito

// MAIL
let userword = "marroni.riccardo@gmail.com"
let flag = false;

let MailList = [
    "marroni.riccardo@gmail.com", 
    "giuseppe.lepri@gmail.com",
    "mario.rossi@mail.com",
    "giorgio.sonnoli@mail.com"
]

for(let i=0; i<MailList.length; i++){
    if(userword == MailList[i]){
        flag = true;
    } else{

    }
}
 
if(flag){
    console.log("mail valida")
} else{
    console.log("mail non valida")
}


// var test = ""
// document.getElementById("userMail").value;

// document.getElementById('result').innerHTML = test;