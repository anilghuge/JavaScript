# Project Setup Guide

### 1. Install Bootstrap for your project

Run the following commands to install Bootstrap, Bootstrap Icons, and jQuery:

```bash
npm install bootstrap --save
npm install bootstrap-icons --save
npm install jquery --save
```

# Project Setup Guide

### 1. Files in `node_modules`

After installing the necessary dependencies, the following files will be available in your `node_modules` directory:

- `node_modules/bootstrap/dist/css/bootstrap.css`
- `node_modules/bootstrap-icons/font/bootstrap-icons.css`
- `node_modules/jquery/dist/jquery.js`
- `node_modules/bootstrap/dist/js/bootstrap-bundle.js`
- `node_modules/bootstrap/dist/js/popper.js`

### 2. Link all Bootstrap files to your HTML page

To link the Bootstrap files in your HTML page, make sure to include them properly.

#### Example HTML (`input-demo.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Input Demo</title>
  
  <!-- Bootstrap CSS -->
  <link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link href="node_modules/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
  <!-- Your HTML content here -->

  <!-- jQuery -->
  <script src="node_modules/jquery/dist/jquery.js"></script>
  <!-- Bootstrap JS -->
  <script src="node_modules/bootstrap/dist/js/bootstrap-bundle.js"></script>
  <!-- Popper JS (required for Bootstrap's tooltips, dropdowns, etc.) -->
  <script src="node_modules/bootstrap/dist/js/popper.js"></script>

  <!-- Custom JS -->
  <script src="input.demo.js"></script>
</body>
</html>
```

- ### Assigment : https://www.inoxmovies.com/