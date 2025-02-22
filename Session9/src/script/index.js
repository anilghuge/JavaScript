function CreateFolder(){
 let folderTextBox=document.getElementById("FolderName");
 let error= document.getElementById("Error");
 if (folderTextBox.value===""){
   error.innerHTML="Folder Name Required";
 }else{
   document.querySelector("p").innerHTML+=folderTextBox.value+"<br>";
   folderTextBox.value="";
   error.innerHTML="";
 }

}