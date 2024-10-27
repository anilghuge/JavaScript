function CreateFolder(){
  folderName=document.getElementById("FolderName").value;
  document.querySelector("p").innerHTML+=folderName+"<br>"
  document.getElementById("FolderName").value="";
}