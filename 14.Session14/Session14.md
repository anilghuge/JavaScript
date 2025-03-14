- ## JavaScript String
- String is liternal with group pf characters enclosed in 
    - a) Double Quotes ""
    - b)Single Quotes ''
    - c) Backtickts ``

- Double and Single quotes are used for inner and outer strings
- var link="<a href='home.html'>Home<a>";
- var link='<a href="home.html">Home<a>';

- String with single and double quote requires lot of contact technique with dynamic value.[string +dynamic +string]

- synatax -
   "string"+var +"string"+(expression)+"string";

- ES5+ versions can use "backtick" for string.
- Backtick allows a string which can embed expression
- ES5+ version introduced data binding expression "${}"
- Syntax: 
    - `string ${var} string ${expression} string`

```javascript
<script>
    var username=prompt("Enter Name");
    var age=Number.parseInt(prompt("Enter Age"));
    var msg1="Hello !"+" "+username +" you will be"+" "+(age+1)+" "+"next year.<br>";
    var msg2=`Hello ! ${username} you will be ${age+1} next year.<br>`
    var msg3='Hello ! ${username} you will be ${age+1} next year.<br>'
    document.write(msg1);
    document.write(msg2);
    document.write(msg3);
</script>
```
```javascript
<script>
    var title=prompt("Enter Title")
    var loginName=prompt("Enter Login Name","UserName,Email,Date");
    var loginType=prompt("Enter Login Type","Text|Email|Date")
    var login =`
    <form>
        <h2>${title}</h2>
    <dl>
        <dt>${loginName}</dt>
        <dd><input type=${loginType}></dd>
    </dl>
    <button>Login</button>
    </form>
    `;
    document.write(login);
</script>
```

- Note : single and double quotes will not allow binding expressions

- Serveral chars in a string are non-printable chars
- You can print the non-printable chars by using "\".
```javascript
<script>
    var path="C:\\images\\movies.png";
    document.write(path);
</script>
```
- These are reffered as escapse sequnce chars.
- \n new line in console,alerts,confirm
- \v vertical space
- \t tab space

- javascript provides various string methods for formatting for manipulations
- String Formatting methods
 - 1. bold()
 - 2. italics()
 - 3. fontcolor()
 - 4. fontsize()
 - 5. sup()
 - 6. sub
 - 7. toUpperCase()
 - 8. toLowerCase() etc.

 - These string formatting functions must be used on non-RC type
 ```javascript
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String</title>
    <script>
        function RegisterClick(){
            var username=document.getElementById("UserName").value;
            var UserError=document.getElementById("UserError");
            if(username==''){
                UserError.innerHTML="User Name Required".fontcolor('red').fontsize(2).bold().italics()
            }else{
                document.write("Registered..")
            }
        }

        function ChangeCase(){
         var IFSCCode=document.getElementById("IFSCCode").value;
        document.getElementById("IFSCCode").value=IFSCCode.toUpperCase();
        }
    </script>
</head>
<body>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" id="UserName"></dd>
        <dd id="UserError"></dd>
        <dt>IFSC Code</dt>
        <dd><input text="text" id="IFSCCode" onkeyup="ChangeCase()" size="6"></dd>
    </dl>
    <button onclick="RegisterClick()">Register</button>
</body>
</html>
 ```
- javascript allows to format a string using "style" and "class"
 - string.style.attributeName="value".
 - NOte - stylle attributes are written in camel case
 - background-color => backendgroundColor
 - text-align       => textAlign
 - margin-left      => marginLeft

 - style are not directly applied string. they are defined to element that handles string.
 ```javascript
  <script>
        function RegisterClick(){
            var username=document.getElementById("UserName").value;
            var UserError=document.getElementById("UserError");
            if(username==''){
                UserError.innerHTML="User Name Required";
                UserError.style.color='red';
                UserError.style.fontWeight="bold";
            }else{
                document.write("Registered..")
            }
        }

        function ChangeCase(){
         var IFSCCode=document.getElementById("IFSCCode").value;
        document.getElementById("IFSCCode").value=IFSCCode.toUpperCase();
        }
    </script>
 ```
 - Javascript allows to configure formats for elements using "css class"
 - CSS class is applied by using "className" property
 ```javascript
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String</title>
    <style>
        .error-style{
            color:red;
            font-weight: bold;
            font-style: italic;
        }
    </style>
    <script>
        function RegisterClick(){
            var username=document.getElementById("UserName").value;
            var UserError=document.getElementById("UserError");
            if(username==''){
                UserError.innerHTML="User Name Required";
                UserError.className="error-style";
            }else{
                document.write("Registered..")
            }
        }

        function ChangeCase(){
         var IFSCCode=document.getElementById("IFSCCode").value;
        document.getElementById("IFSCCode").value=IFSCCode.toUpperCase();
        }
    </script>
   
</head>
<body>
    <dl>
        <dt>User Name</dt>
        <dd><input type="text" id="UserName"></dd>
        <dd id="UserError"></dd>
        <dt>IFSC Code</dt>
        <dd><input text="text" id="IFSCCode" onkeyup="ChangeCase()" size="6"></dd>
    </dl>
    <button onclick="RegisterClick()">Register</button>
</body>
</html>
 ```