- Javascript Not Strongly Typed = Weakly Typed
- implicitly typed =Dynamic Types
- var x; undefined
- x=10; number
- x=true; boolean

1. Primitive Type
- They are Immutable
- Fixed range for values
- stored in meomry stack[LIFO]
- Javascript primitive types :
- a)Number b)String c)Boolean d)Nukk e)Undefined f)Symbol g)Bigint


- ### Number Type
- it represents a numberic value
- A numberic value can be
- Signed Integer      -5
- Unsigned Integre    5
- Floating Point     34.50
- Double             420.40
- Decimal            4320.50[29 places]
- Exponent           2e3[ 2 x 10^3=2000]
- Hexa              0f0033 [0 to f]
- Octa              0o756 [start with o]
- Binary             0b11001
- Bigint            2n[binary object][bmp]

- Javascript is not strongly typed,so we have to explicitly verify the number type by using "isNaN()"
- it is a boolean function that returns true if value is not a number
```javascript
<script>
    var age = prompt("Enter your age");
    if (isNaN(age)) {
        document.write("Age must be number");
    }else{
        document.write("Your Age : "+age);
    }
</script>
```
- Javascript provides pasring methods to convert a numberic string into number
- A numeric string starts with number and can contain chars