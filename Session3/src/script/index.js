"use strict"
function DeleteClick(){
   console.log("delete Button Clicked");
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
      console.warn("OK Button Clicked -Record will delete");
     document.querySelector("p").outerHTML="<h2>Deleted Confirmed</h2>"
   }else{
      alert("You canceled..")
      console.error("Cancel Clicked");
   }
}