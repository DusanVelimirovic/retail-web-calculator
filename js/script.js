//costum logic for different retail calculator modules

//poljoprivednici module
function compute()
{
   //get principal value
   var principal = document.getElementById("principal").value;

   //validate principal input
   if(principal <= 0){
    alert("Molim te da budes realan. Unesi neku normalnu cenu");
    principal.focus();
    return false;
}
    //get tax rate
    var taxRate = document.getElementById("taxrate").value;
    //console.log(taxRate);

    //get rateVpMarza
    var rateVpMarza = document.getElementById("rateVp").value;

    //get rateMpMarza
    var rateMpMarza = document.getElementById("rate").value;
                   
    //calculate VP cenu bez pdv-a
    var vpCenaBezPdv = principal - ((principal*7.4074)/100);
    console.log(vpCenaBezPdv);

    //calculate VP cenu bez PDV sa marzom
    var vpCenaBezPdvMarza = vpCenaBezPdv+((vpCenaBezPdv*rateVpMarza)/100);
    console.log(vpCenaBezPdvMarza);

    //calculate VP cena sa PDV 10% ili 20%
    var vpCenaSaPDV = vpCenaBezPdvMarza + ((vpCenaBezPdvMarza*taxRate)/100);
    console.log(vpCenaSaPDV);

    //MP cenu
    var mpCena = vpCenaSaPDV + ((vpCenaSaPDV*rateMpMarza)/100);
    console.log(mpCena);
       
    //show result za MP cenu
    document.getElementById("result").innerHTML="MP cena iznosi: <mark>"
    +mpCena+ " dinara" + "</mark>\<br\>";

    //show result za MP cenu
       document.getElementById("showResults").innerHTML="VP cena bez PDV: <mark>"
       +vpCenaBezPdv+ " dinara" + " </mark>\<br\>VP cena sa PDV iznosi: <mark>"
       +vpCenaSaPDV+ " dinara" + "</mark>,\<br\> MP cena iznosi: <mark>"
       +mpCena+ " dinara" + "</mark>\<br\>";
       return true;
}

    //display value selected on slider
    function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval + "%";
    }

    function updateRateVp() {
        var ratevalVp = document.getElementById("rateVp").value;
        document.getElementById("rate_valVp").innerText=ratevalVp + "%";
    }

//MP cena module

    function computeMpPrice(){
        //get VP price
        var vpPrice = document.getElementById("vpPdv").value;
        console.log(vpPrice);

        //get rateMpMarza
        var mpMarzaRate = document.getElementById("rateMp").value;
        console.log(mpMarzaRate);

        //get tax rate
        var taxRateMp = document.getElementById("taxrateMp").value;
        console.log(taxRateMp);

        //calculate VP cenu bez PDV sa marzom
        var p_decimal = 1 + (mpMarzaRate / 100);
        var tax_decimal = 1 + (taxRateMp / 100);
        var res = p_decimal * vpPrice * tax_decimal;

            //show result za MP cenu
        document.getElementById("resultMp").innerHTML="MP cena iznosi: <mark>"
        +res+ " dinara" + "</mark>\<br\>";

    }

    //display value selected on slider
    function updateRateMp(){
        var rateValMp = document.getElementById("rateMp").value;
        document.getElementById("rate_valMP").innerText=rateValMp + "%";

    }
