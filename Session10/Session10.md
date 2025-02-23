- ### JavaScript Language Basic
    - 1. Variables
    - 2. Data Type
    - 3. Operators
    - 4. Statements
    - 5. Functions

- ## Variables
 - variables are storage locations in memory,where you can store a value and use it as part of any expression

```javascript
<script>
    document.write("Hello "+prompt("Enter your name:") +"<br>");
    document.write("Mr. "+prompt("Enter your name:")+" Welcome to JavaScript!");
</script>
```
- In above code prompt("Enter your name:") use two time so we can declare in one time and it is two time
```javascript
<script>
    let name = prompt("Enter your name:");
    document.write("Hello "+ name +"<br>");
    document.write("Mr. "+name+" Welcome to JavaScript!");
</script>
```
 - ### Variable have 3 phase of configuration
    - Declaration
    - Assigment
    - Initialization

```javascript
var x; declaring
x=10; assignment
var x=10; Initilization
```

- javascript allows to use variable without declaring if it is not in strict mode

```javascript
<script>    //valid
x=10;
docuemnt.write("x ="+x);
<script>
```

```javascript
<script>
"use strict"
x=10; // invalid x is not defined
docuemnt.write("x ="+x);
<script>
```

- if Javscript is in strict mode,then you have to declare or initialize a variable
- JavaScript variable can be initialized or declared by using 3 keyword
- a. var
- b. let
- c. const

- #### var
- it defines a function scope variable
- You can declare in any block of function and access from any another block in the same function.
- it allows declaring,initialization and assignemnt
```javascript
<script>
    "use strict";
   function f1(){
       var x; // declaring
       x=10; // assignment
       if(x==10){
           var y=20; // initialization
       }
       document.write("x= "+x+"<br>"+"y="+y+"<br>");
   }

   f1();
</script>
```
- var allowed shadowing.it is the process of re-declaring or re-initializing same name identifier within the function scope.

``` javascript
syntax :
<script>
    "use strict"
    var x=10;
    var x=20;
    document.write("x="+x);
</script>

<script>
    "use strict";
   function f1(){
       var x; // declaring
       x=10; // assignment
       if(x==10){
           var y=20; // initialization
       }
       document.write("x= "+x+"<br>"+"y="+y+"<br>");
   }

   f1();
</script>
```

- var allows hoisting.it is the process of declaring or initializing a varible after using
```javascript
<script>
    "use strict";
    function f1() {
        x=10;
        document.write("x= " + x + "<br>");
        var x;   // hosting
    }

    f1();
</script>
```
- Interpreter uses Lexical Approach [Buttom to Top]


- #### let
- it is used to define a block scope variable
- it is accessible within the specified block and its inner blocks
```
{
    block outer -a 
    {
        block inner -a is accessible to inner
        b - is not accessible to outer 
    }
}
```
- it allows declaring ,initialization and assignment.
- it will not allow shadowing and hoisting.

```javascript
<script>
    "use strict";
    function f1() {
       let x;
       x=10;
       if(x===10){
           let y=20;
           document.write("x = " + x + "<br>" + "y = " + y + "<br>");
       }

    }

    f1();
</script>
```

- #### const
- it is also block scope variable
- it allows only initlization.
- it will not allow declaring and assignment
- it will not allow shadowing and hoisting
```javascript
<script>
    "use strict";
    function f1() {
      const pic=new Image();
      pic.src="public/images/DOM_Hierarchy.png";
      pic.src="public/images/Welcome.png";
    document.write(pic.src);
    }

    f1();
</script>

const x; //invalid
x=10; // invalid

const x=10; //valid
```