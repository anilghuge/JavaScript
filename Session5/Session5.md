# FAQ: What is the MIME type of a script?
**Answer:** JavaScript is used in various methods:  
a) Interpreted  
b) Compiled  

If your JavaScript is used with HTML in a browser, then the MIME type is defined as `text/javascript`.

## What is MIME?
| File Type   | Extension             | MIME Type               |
|-------------|-----------------------|-------------------------|
| MS-Excel    | .xls, .xlsx, .csv     | application/msexcel     |
| Images      | .jpg, .jpeg, .jfif    | image/jpeg              |

- `text/javascript` - Interpreted
- `text/babel` - JavaScript used with Babel Compiler
- `text/module` - JavaScript module system

MIME type, which stands for **Multipurpose Internet Mail Extensions** type, is a standard used to indicate the nature and format of a file or data being transmitted over the internet. MIME types are primarily used in HTTP headers to tell the browser or other clients how to handle different types of content.

## Key Points about MIME Types:

1. **Structure:**
   - A MIME type typically consists of two parts: a **type** and a **subtype**, separated by a slash (`/`).
   - Example: `text/html`, `image/jpeg`, `application/json`.

2. **Categories:**
   - **Text Types:** Such as `text/plain` for plain text files or `text/html` for HTML documents.
   - **Image Types:** Such as `image/jpeg` for JPEG images or `image/png` for PNG images.
   - **Audio Types:** Such as `audio/mpeg` for MP3 files.
   - **Video Types:** Such as `video/mp4` for MP4 videos.
   - **Application Types:** Such as `application/json` for JSON data or `application/pdf` for PDF documents.

3. **Purpose:**
   - MIME types help browsers and other clients understand how to process or display the content. For example, when a server sends an image file with a MIME type of `image/png`, the browser knows to render it as an image.
   - They also help in determining how to handle files when downloading or sharing them. For example, a file with the MIME type `application/pdf` will typically prompt the browser to open a PDF viewer.

4. **Usage in HTTP:**
   - MIME types are often included in HTTP headers sent from the server to the client. For example, a server might send a response header like this:
     ```
     Content-Type: text/html; charset=UTF-8
     ```

5. **Custom MIME Types:**
   - In addition to standard MIME types, developers can define custom MIME types for specific applications or file types.

## Example MIME Types:
- `text/plain` - Plain text files
- `text/html` - HTML documents
- `image/jpeg` - JPEG images
- `application/json` - JSON data
- `application/octet-stream` - Generic binary data

In summary, MIME types are essential for correctly interpreting and displaying different types of content over the internet, allowing for better data handling and user experience.

**Synatx :**
```
<script type="text/javascript"></script>
<script type="text/babel"></script>
```
- FAQ : What is strict mode for JavaScript?
> Ans : Javascript is not implicitly strictly typed.it will not follow programming rules and standards. You have to manually turn on "Strict Mode". If strict mode is ON then developer have to write as per standards.

- You can turn on strict mode by using "use strict" in your snippet.
```
<script>
    "use strict"
   var x=10;  // invalid - x is not defined // valid if strict off
    document.write("x="+x);
</script>
```

***1. When you are using inline javscript use strict and MIME type is not required  
2. required in embedded and external file***

- FAQ :How to target Javascript for Legacy browsers?[old version Browsers]
> Ans : Developer can target new JavaScript code to the legacy browser by enclosing the code in HTML comments.
```
<script type="text/javascript">
       <!--
        "use strict"
        function PrintPage(){
            window.print();
        }
        -->
    </script>
```

- Issue with embedded technique is:
  - a) it is slow
  - b) You can't re-use across pages
  

### JavaScript in External File
- Javascript function are written in separate script file with extension ".js".
```
index.js
<!--
"use strict"
function PrintPage(){
    window.print();
}
-->
```

- You can link the script file to any HTML page by using `<script>` element
```
<script type="text/javascript"" src="index.js"></script>
```
- **Features**
    - Clean seperation of code and design
    - Hard to test if it is embedded
    - Hard to extend if it is embdded


- **Issues**
    - Using a external file for HTML page will increase the number of requests if number of requests are increased for page.then page load time will increases.

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
<body>
    <title>Home|JavaScript</title>
    <h2>JavaScript External Page</h2>
    <button onclick="PrintPage()">Print</button>
    <button onclick="PrintPage()">Print Page</button>
</body>
</html>

index.js
-----------
<!--
"use strict"
function PrintPage(){
 window.print();
}
 -->
```

- **Minification**
    - It is used in External File not for inline or embedded javascript
    - It is coding technique used by developers to reduces the size of file[compress]
    - Minified files are used in Production
    - Unminified files are use is Development.
 

- **Bundling**[WebPack,Parcel]
    -




























