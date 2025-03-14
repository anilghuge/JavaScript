- Global Scope of variable is defined by declaring outside function and inside a module scope
```javascript
<script>
  "use strict";
  var x=10;
  let y=20;
  const z=30;
  function f1(){
    document.write(`F1 <br> x= ${x}<br> y = ${y}<br> z = ${z}<br>`);
  }

  function f2(){
    document.write(`<br>F2 <br> x= ${x}<br> y = ${y}<br> z = ${z}`);
  }
  f1();
  f2();
</script>
```
- FAQ : Can we define a global variable inside a function?
 > ANS : Yes
 - a. You have to turn off strict mode and define a variable in function without keyword
 ```javascript
 <script>
  var x=10;
  let y=20;
  const z=30;
  function f1(){
    a=10;
    document.write(`F1 <br> x= ${x}<br> y = ${y}<br> z = ${z}<br> a=${a}<br>` );
  }

  function f2(){
    document.write(`<br>F2 <br> x= ${x}<br> y = ${y}<br> z = ${z}<br> a=${a}<br>` );
  }
  f1();
  f2();
</script>
 ```
 - b. You can declare a global variable in side function using "window" object.
 ```javascript
 <script>
  "use strict";
  var x=10;
  let y=20;
  const z=30;
  function f1(){
    window.a=10;
    document.write(`F1 <br> x= ${x}<br> y = ${y}<br> z = ${z}<br> a=${a}<br>` );
  }

  function f2(){
    document.write(`<br>F2 <br> x= ${x}<br> y = ${y}<br> z = ${z}<br> a=${a}<br>` );
  }
  f1();
  f2();
</script>
 ```


 - ### Variable naming rules
  - Name must start with an alphabet or can start with _
  - _ is used for configured lot of constructrs
  - _ refers that variable requires future implmenetation
  ```
  var product // its functionality is final
  var _product // its need to be implemented
  ```

  - Don't use special chars in variable
  - Name can be alpha numberic
  - var product2020;
  - Name is case sensitive
  - Name can be max 255 char long
  - Avoid using single char and long variable name
  - Avoid using keyword - var const; ,var if;
  - Always use cameCase for name.
  - var userPassword;
  - PMD,Sonar - Code Analazer
  - https://pmd.github.io/

  - You can Configure mutiple variable with single keyword reference
  ```javascript
  <script>
  "use strict";
  var x,y,z;
  x=10;
  y=20;
  z=30;
  document.write("<br> x: " + x + "<br> y: " + y + "<br> z: " + z);
</script>

<script>
  "use strict";
  var x,y=50,z;
  x=10;
  z=30;
  document.write("<br> x: " + x + "<br> y: " + y + "<br> z: " + z);
</script>

<script>
  const x=y=z=30;
  document.write("<br> x: " + x + "<br> y: " + y + "<br> z: " + z);
</script>  allowed in without strict mode


<script>
  let y; //undefined
  let x=y; //undefined
  document.write("<br> x: " + x);
</script>
  ```

  - ES6 inttroduces de-strcuting of variable,which allows to define mutiple variable using "[]" meta character

  ```
  var[a,b,z]
  [] is an iterator, it needs only a collection of values to read
  var[a,b,c]=10 // invalid 10 it is not iterable
  ```
  - FAQ - how to create a collection of constants?[Enum]

  ```javascript
  <script>
  "use strict";
  const [x,y,z]=[10,20,40];
  document.write("x= "+x + "y= " + y + "z= " + z);
</script>

<script>
  "use strict";
  const [NotFound,OK,Redirect]=[404,200,302];
  document.write(NotFound+"<br>"+OK+"<br>"+Redirect+"<br>");
</script>
```

- Variable allows object de-strcturing,object comprises properties,values are stored under the reference of a property
```javascript
var {property1,proprty2}={property1:value1,property2:value2}
Ex :
<script>
  "use strict";
  const {rate,count}= {rate:4.5,count:2000};
  document.write(`Product Rate :${rate} Count:${count}`);
</script>
```
- []  iterator collection of values
- {}   object  set of properties and value

- ## JavaScript Data Type
- Javascript is not a strongly typed language.
- All JavaScript variable are implicitly typed
- The data type of variable is decided according to value initialized or assigned
- There is no restriction of type.
- Data Type defines "Data Strcture".[DS]
- Data Structure defined data rules.[type,size]
- var x=10; // x is number
- x="A" ;    // x is string
- x=true;     // x is boolean
- JavaScript allows various type of data,which is classified into 2 types
 - Primitive Type
 - Non-Primitive Type

- Primitive Type :
    - They are immutable types
    - Their strcture can't be changed
    - They have fixed range for values
    - They use a stack[LIFO]
    - 1.Number 2.String 3.Boolean 4.Null 5.Undefind 6.Symbol[ES6]