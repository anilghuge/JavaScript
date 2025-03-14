## JavaScript HTML reference methods
- DOM Hierarchy
- By using Name
- By using ID
- By query selector

## JavaScript output technique
- It is process of processing data dynamically in browser.
- JavaScript provides various techniques
    - alert()
    - confirm()
    - document.write()
    - console methods
    - innerHTML
    - outerHtml
    - innerText

- alert() :
    - it is used to display output in a message box.
    - Message box pop-up in browser window.
    - It comprises of only "OK",you can't cancel.
    - Using "esc" key you can cancel.
    - synatx : alert("message") // single line
               alert("message\n line2")//mutiple line
```
index.html
---------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body>
    <button onclick="DeleteClick()">Delete</button>
</body>
</html>

index.js
-------
function DeleteClick(){
   alert("Delete\nRecord will be deleted");
}
```
- confirm()
    - it is similer to alert but allows to cancel.
    - it is boolean method that returns
        - true =OK
        - false =Cancel
    -syntax :
            confirm("Mssage\nLine2");//true or false
```
index.js
---------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
      alert("Record deleted..");
   }else{
      alert("You canceled..")
   }
}
```
- document.write()
    - it is an output method,which can display output on a new screen.
    - it is on same page but a new screen
    - synatx : document.write("message"); // no "\n" for line break
    - document.write(<markup>)            // <br>
    - Note : markup is not allowed for alert() and confirm()
```
index.js
-------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.write("<b>Record deleted..</b>");
   }else{
      alert("You canceled..")
   }
}
```

- innerText
    - it can display output in any conatiner of HTML page,which can show text.
    - it will not allow formats for text.
    - it is only for plain text content.
    - markup not allowed for output
    - synatx : document.querySelector("refernce").innerText="message";
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body>
    <button onclick="DeleteClick()">Delete</button>
    <h2></h2>
    <p></p>
</body>
</html>

index.js
-------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("h2").innerText="Delete Confirmed"
      document.querySelector("p").innerText="Record deleted successfully.."
   }else{
      alert("You canceled..")
   }
}
```
- innerHTML
    - it is similar to innerText but allows formats with markup or functions
    - synatx : document.queryselector("refercene").innerHTML="markup/message"
```
index.js
----------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
      document.querySelector("h2").innerHTML="<font color=red>Delete Confirmed</font>"
      document.querySelector("p").innerHTML="<i><font color=red>Record deleted successfully..</font></i>"
   }else{
      alert("You canceled..")
   }
}
```
```
index.html
------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body>
    <button onclick="DeleteClick()">Delete</button>
   <input type="text">
</body>
</html>


index.js
--------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
     document.querySelector("input[type=text]").value="Delete Confirmed"
   }else{
      alert("You canceled..")
   }
}
```
- outerHtml
    - it can replace the target markup with the specified
    - synatx :document.querySelector("targetElement").outHTML="<newElemt>"
```
index.html
-----
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body>
    <button onclick="DeleteClick()">Delete</button>
   <p></p>
</body>
</html>

index.js
-------
"use strict"
function DeleteClick(){
    let flag=confirm("Delete\nRecord will be deleted");
   if(flag==true){
     document.querySelector("p").outerHTML="<h2>Deleted Confirmed</h2>"
   }else{
      alert("You canceled..")
   }
}
```

- console
    - it is a developer tool.
    - developer can test all his logic in console.
    - developer can log information in console with various contextual message
    - warning
    - success
    - error
    - debug
    - info
    - Note : make sure that console methods are not in production
    - synatx : console.log(),console.info(),console.error(),warn()
```
index.html
---------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body>
    <button onclick="DeleteClick()">Delete</button>
   <p></p>
</body>
</html>

index.js
--------
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
```





