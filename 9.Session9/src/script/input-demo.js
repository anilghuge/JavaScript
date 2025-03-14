function RegisterClick(){
    document.getElementById("DetailsContainer").style.display="block";
    document.getElementById("RegisterContainer").style.display="none";

    document.getElementById("ibName").innerHTML=document.getElementById("Name").value;
    document.getElementById("ibPrice").innerHTML=document.getElementById("Price").value;
    document.getElementById("ibCity").innerHTML=document.getElementById("City").value;
    document.getElementById("ibManufactured").innerHTML=document.getElementById("manufactured").value;


    let stockStatus = "";
    let stockCheckBox = document.getElementById("Stock");
    if(stockCheckBox.checked){
        stockStatus="Available";
    }else{
        stockStatus="NotAvailable";
    }
    document.getElementById("ibStock").innerHTML=stockStatus;

}

function EditClick(){
    document.getElementById("btnModalRegister").innerHTML="Save";

    document.getElementById("btnModalRegister").className="btn btn-info";
}