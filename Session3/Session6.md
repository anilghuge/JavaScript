- FAQ : How JavaScript takes control Over HTML elements?
1. JavaScript can access HTML elements in page by using DOM hierarchy
window => document => images[],forms[]

- it is faster in accessing elements
- it is the native method for JS
- if any element changes its position in page,then you have to update the index everytime.
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
    <img width="100" height="100" border="1">
    <div>
        <form>
            <h2>Register</h2>
            Your Email :<input type="email"><input type="button">
        </form>
    </div>
    <div>
        <form>
            <h2>Login</h2>
            Your Mobile :<input type="text"><input type="button">
        </form>
    </div>
</body>
</html>


index.js
--------
function bodyload(){
    window.document.images[0].src="public/images/DOM_Hierarchy.png"
    window.document.images[0].width=500;
    window.document.images[0].height=300;

    window.document.forms[0].elements[1].value="Register"

    window.document.forms[1].elements[1].value="Login"
}

```
2.JavaScript can refer elements by using "name".
-Every Element can defined with a name.
- JavaScript can access element by using name
- you can't access any child element directly
- Everytime to access a child you have to refer its parent.
- HTML elements can have same name for mutiple elements 
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
    <img width="100" height="100" border="1" name="pic">
    <div>
        <form name="frmRegsiter">
            <h2>Register</h2>
            Your Email :<input type="email"><input type="button" name="btnRegister">
        </form>
    </div>
    <div>
        <form name="frmLogin">
            <h2>Login</h2>
            Your Mobile :<input type="text"><input type="button" name="btnLogin">
        </form>
    </div>
</body>
</html>


index.js
-------
function bodyload(){
   pic.src="public/images/DOM_Hierarchy.png";
   pic.width=300;

   frmRegsiter.btnRegister.value="Register"
   frmLogin.btnLogin.value="Login"
}

```







