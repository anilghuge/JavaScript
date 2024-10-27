## Output Techniques
- alert()  : undefined
- confirm() :true/false
- document.write() : new screen
- innerText : text without formats
- innerHTML :text with markup
- outerHTML : replacing the element
- console methods : developer tools

## JavaScript Input Methods
- input is the process of taking value from client and handle the value in browser memory or to manage DOM.
- Javascript can take input from
    - a.Query String
    - b.Prompt()
    - c.Form input Elements

### Query String
- It is reference value created and appended into browser as URL
- It is present inbrowser address bar.
- User can input a value into page from query string.
- Querystring is  appended into URL using "?"
- page.html?usname=john&age=23
-Querystring is accessed and used in page by using Browser Object[BOM]"location".
-location.search => return the query string

- Example :
```
index.html
----------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body onload="bodyload()">
  Your Name : <span></span>
</body>
</html>

index.js
--------
function bodyload(){
   string=location.search;
   username=string.substring(string.indexOf("=")+1)
   document.querySelector("span").innerHTML=username;
}
```

### Prompt()
-it is an input box provided by browser to accept input from user.
-Synatx : prompt("Message","default value")
- Prompt returns - Empty String[""] :ON Okwithout value
- String [value enterted] : On OK with value =String
- null : On Cancel with or without value
```
index.html
----------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body onload="bodyload()">
  Your Name : <span></span>
</body>
</html>

index.js
--------
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
```
```
index.html
----------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <script type="text/javascript" src="./src/script/index.js"></script>
</head>
<body >
  <button onclick="CreateFolder()">Create Folder</button>
  <p></p>
</body>
</html>

index.js
---------
function CreateFolder(){
  folderName=prompt("Enter Folder Name");
  if(folderName==""){
    alert("Folder name can't be empty");
  }else if(folderName==null){
    alert("You Canceled")
  }else{
    document.querySelector("p").innerHTML+="Folder Created:"+folderName+"<br>"
  }
}
```

### Form Input Elements
- You can accept input fromuser by using various from elements
- textbox
- password
- checkbox
- dropbox
- listbox
- number,range,radio,etc.
-







