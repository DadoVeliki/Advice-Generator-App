let id=document.querySelector(".container p");
let advice=document.querySelector(".container h1");
let kockica=document.querySelector(".kockica");

const dohvatiSavjet=()=>{
    fetch("https://api.adviceslip.com/advice").then(response =>{
        return response.json();
    }).then(adviceData => {
        let Adviceobj=adviceData.slip;
        id.innerText="ADVICE #"+Adviceobj.id;
        advice.innerText='"'+Adviceobj.advice+'"';
    }).catch(error =>{
        console.log(error);
    });
}

dohvatiSavjet();

kockica.addEventListener("click",()=>{
    dohvatiSavjet();
});

