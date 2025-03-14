function AmountChange(){
    document.getElementById("amount").value = document.getElementById("rangeAmount").value;
}

 function YearChange(){
    document.getElementById("for").value = document.getElementById("rangeYear").value;
 }

 function RateChange(){
    document.getElementById("interest").value = document.getElementById("rangerate").value;
 }


 function CalculateClick(){
    var p= parseInt(document.getElementById("amount").value);
    var n=parseInt(document.getElementById("for").value)*12;
    var r=parseFloat(document.getElementById("interest").value)/12/100;
    var emi=p*r*Math.pow(1+r,n)/Math.pow(1+r,n)-1;
    document.getElementById("result").innerHTML="Your Monthly Installment Amount is <b><span class='text-primary'>&#8377; "+Math.round(emi)+"</span></b> for "+p +" in "+(n/12)+ " years";
 }


 function AmountTextBoxChanged(){
     document.getElementById("rangeAmount").value = document.getElementById("amount").value;
 }

 function YearTextBoxChanged(){
     document.getElementById("rangeYear").value = document.getElementById("for").value;
 }

function RateTextBoxChanged(){
    document.getElementById("rangerate").value = document.getElementById("interest").value;
}