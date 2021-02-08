
var brutoInput = document.querySelector(".brutoAlga");
var netoAutput = document.querySelector(".netoAlga");
var button = document.querySelector("button");
var apgadajamie = document.querySelector(".bernuSkaits");

button.addEventListener('click', aprekins);


function aprekins(){
    var bruto = brutoInput.value;
    var apgadajamoSkaits = apgadajamie.value;
    console.log(apadajamieValid(bruto, apgadajamoSkaits))
    apgadajamoSumma = apadajamieValid(bruto, apgadajamoSkaits)
    var socNod = bruto * 0.11;
    var neapliekMin = 82.14;
    var apliekSum = bruto - socNod - apgadajamoSumma - neapliekMin;
    var IIN = apliekSum * 0.20
    netoAutput.innerHTML = Math.round(bruto - socNod - IIN) + " Eur";
    validacija(bruto);
};
function validacija(algaBruto){
    if(isNaN(algaBruto)){
        netoAutput.innerHTML = "Ievadi pareizi algas apjomu";
    }else if(algaBruto == ""){
        netoAutput.innerHTML = "Algas ievades lauks tukšs";
    }else if(algaBruto == 0){
        netoAutput.innerHTML = "0 Euro";
    }
}
function apadajamieValid(brutoAlga, bernuSkaits){  
    var avieglinParApgadajamiem = bernuSkaits * 250;
    // while(brutoAlga > bernuSkaits){
    //     return avieglinParApgadajamiem;  
    // }
    return avieglinParApgadajamiem; 
}

