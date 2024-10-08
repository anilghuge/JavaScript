## JavaScript Client Side
- JavaScript is used client side with HTML

# Browser Rendering Process

- **Browser**
    - Displays: `Hello`
    
## Steps Breakdown

1. **Bytes**: `1000110101`
2. **Chars**: `<b>Hello</b>`
3. **Tokens**: 
    - Tag: `<b>`
    - Content: `Hello`
    - Closing Tag: `</b>`
4. **DOM (Document Object Model)**:
    - **Parent**
        - Child1
        - Child2
5. **Render**
6. **Layout**
7. **Painting**

## Elements and Tags

- **Elements**: Nodes
- **Tags**: 
    - `<b>` (Bold)
    - Text: `Hello`

```
                  Browser
                   Hello
                     |
                   Bytes
                1000110101
                     |
                   Chars
                 < b > h e
                     |
                   Token
                    Tags
               <b> Hello </b>
                     |
            Elements -> Nodes  <b> Bold
                     |
                Document Object
                    Model
                     |
                   Parent
                   /    \
              Child1    Child2
                     |
                   Render
                     |
                   Layout
                     |
                 Painting
                
            |----------- 
            |  Browser  |
            |  Hello    |
            |-----------|
```      
- JavaScript is used for :
   - a) DOM Manipulations
        - Adding Elements
        - Removing Elements
        - Updating data into Elements
  - b) Handling browser objects
       - Location
       - Navigator
       - History
       - Document
       - Windows
  - c) Client Side Validations
      - Verifying input
      - Ensure that contradictionary and unauthorized data is not stored into database.
      - Reduce burden on server

## JavaScript Problem or Disadvantages
- FAQ: What are the issues with JavaScript?
> Ans : JavaScript is not stronly typed language.  
>>var age=23;  
>age="John";//valid


- JavaScript is not implicitly strictly typed
> x=10 // valid

- JavaScript is not an OOP language
  - Extensibility Issues
  - Code Level Security Issues
  - Reusability Issues

- JavaScript is not having features for dynamic polymorphism.

- JavaScript can be disabled by browser.

- FAQ : What is Solution?
> Ans : TypeScript

                            Request Page from Browser
                                index.html
                                    |
                            DOMContentLoaded()[Event]
                            

```HTML Code                        |-------------|
<h2>JavaScript -ES6<h2>--------->   |    print    | Static DOM
<Button>Print</Button>              |-------------|
```

- FAQ : How JavaScript converts static DOm into Dynamic DOM?
> Ans : By Integrating JavaScript functions into Page.
- FAQ : How JavaScript can be integarted into Page?
> Ans : In 3 different ways
>> a) Inline b) Embedded c) External file

### Inline JavaScript
- In this Techique JavaScript functions are directly written in HTML elements start Tag.
>> <button onclick="window.print()"> Print</button>
- It is faster in responding
- It is not good for reuability
```
<body>
    <h2>JavaScript - ES6</h2>
    <button onclick="window.print()">Print</button>
    <select>
        <option>Open</option>
        <option>save</option>
        <option>Close</option>
        <option>Print</option>
    </select>
</body>
```

### Embedded JavaScript :
- JavaScript function are kept in a <script> container and can be accessed from any element.
- You can reuse the functions.
- The script container can be in <head> or <body>
- You have to define function in <script> container
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function PrintPage(){
            window.print();
        }
    </script>
</head>
<body>
    <h2>JavaScript - ES6</h2>
    <button onclick="PrintPage()">Print</button>
    <button onclick="PrintPage()">Print Page</button>
</body>
</html>
```
- it is slower when compared to inline.
- FAQ : What is difference between script in head and body?
> Ans: Script in head section is intended to load into browser memory and later accessed by page when ever required.  
> Script in body section is instended to load into page directly ,it is not in memory of browser.

- FAQ : Is it true that if a script is loaded in the <head> section, it is loaded into the browser's memory, but if the script is loaded in the <body> section, it is not loaded into the browser's memory?
> Ans : No, that understanding is not correct. Regardless of whether a script is loaded in the `<head>` or `<body>` section, **the browser will load the script into memory**. The difference is primarily about **when** the script is loaded and executed, not whether it is loaded into memory.

### Clarification:
- **All scripts** (whether in the `<head>`, `<body>`, or included via `async`/`defer`) are loaded into the browser’s memory when the browser fetches them from the server.
- The browser processes the scripts once they are downloaded. It stores them in memory to run the JavaScript code.
  
The key difference between placing a script in the `<head>` and `<body>` is about **execution timing** and **render-blocking**, not about memory loading:

1. **Scripts in the `<head>`**:
   - The script is loaded into memory **before** the page content is fully loaded.
   - It can block the rendering of the page until it is fully downloaded and executed.
   - However, it is still stored in the browser's memory regardless of where it is placed.

2. **Scripts in the `<body>`**:
   - The script is also loaded into memory, but the browser prioritizes rendering the HTML content first.
   - The script is typically executed after the page content is visible to the user, but it is still stored in memory when it loads.

### Conclusion:
- **All scripts are loaded into the browser's memory** whether they are placed in the `<head>` or `<body>`.
- The key difference is when the script is executed and how it affects the rendering process. The browser will handle memory management and script execution in both cases.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript">
        function PrintPage(){
            window.print();
        }
    </script>
</head>
<body>
    <title>Home|JavaScript</title>
    <h2>JavaScript - ES6</h2>
    <button onclick="PrintPage()">Print</button>
    <button onclick="PrintPage()">Print Page</button>
</body>
</html>

```