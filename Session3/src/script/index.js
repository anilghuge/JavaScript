function bodyload(){
  username=prompt("Enter User Name");
  age=prompt("Enter age");
  if(username==""){
    alert("Name can't be empty");
  }else if(username==null){
    alert("you cancled")
  }else{
    document.querySelector("span").innerHTML=username+"<br>"+"Your Age:"+age;
  }
}