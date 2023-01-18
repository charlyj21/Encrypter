/*declarando variables*/
var buttonTwoCopy = document.querySelector(".boton-dos");
var buttonOneEn = document.querySelector(".boton-uno-en");
var buttonOneDes = document.querySelector(".boton-uno-des");
var textEntry = document.querySelector(".texto-ingreso");
var textExit = document.querySelector(".texto-salida");
var textAlert = document.querySelector(".alerta");
const validar = /^[a-z\s,ñ]+$/;
const mapEn = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}
const mapDes = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}
let textValue, result;
/*boton copiar*/
buttonTwoCopy.addEventListener("click",function(){
    navigator.clipboard.writeText(result); /*copiar result*/
    buttonTwoCopy.classList.add("alter"); /*agregar el alter*/
    buttonTwoCopy.innerHTML = "Copiado!"; /*cambiar texto a Copiado!*/
    setTimeout(function(){
        /*quitar alter y cambiar texto despues de 1.5seg*/
        buttonTwoCopy.classList.remove("alter");
        buttonTwoCopy.innerHTML = "Copiar"; 
    }, 1500);
});
/*boton encriptar*/
buttonOneEn.addEventListener("click",function(){
    textValue = textEntry.value.trim(); 
    /*si no encuentra valores, no hace nada*/
    if(textValue == ""){
        return;
    }
    /*valida las minisculas*/
    if(validar.test(textValue)){
        /*usando el map para cambiar los valores usando mapEn*/
        result = textValue.split("").map((m) => {
            return mapEn[m] || m;
        }).join("");
        textExit.innerHTML = result;
    }else{
        /*cambiando texto de alerta a rojo si hay excepcion*/
        textAlert.classList.add("alter");
        setTimeout(function(){
            textAlert.classList.remove("alter");
        }, 250);
    }
});
/*boton desencriptar*/
buttonOneDes.addEventListener("click",function(){
    textValue = textEntry.value.trim();
    /*si no encuentra valores, no hace nada*/
    if(textValue == ""){
        return;
    }
    /*usando el map para cambiar los valores usando mapDes*/
    if(validar.test(textValue)){
        /*| para separar los valores de la cadena y g para una busqueda global*/
        const pattern = new RegExp(Object.keys(mapDes).join("|"), "g");
        result = textValue.replace(pattern, (matched) => mapDes[matched]);
        textExit.innerHTML = result;
    }else{
        /*cambiando texto de alerta a rojo si hay excepcion*/
        textAlert.classList.add("alter");
        setTimeout(function(){
            textAlert.classList.remove("alter");
        }, 250);
    }
});