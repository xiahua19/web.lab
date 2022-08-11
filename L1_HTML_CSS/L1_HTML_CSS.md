High-level: HTML is bones/structure, while css is skin/styling.
# HTML
> HTML is short for 'Hypertext Markup Language', which is the language your web browser uses to describe the content and structure of web pages.

HTML = Nested Boxes: HTML is a brunch of boxes, nested inside of each other.
```html
 <!--Comment: This makes sure page uses the latest html and not some random fallback version-->
<!DOCTYPE html>
<html>
    <head>
        <title>Title!</title>
    </head>

    <body>
        <h1>Heading!</h1>
        <p>Paragrapph!</p>
    </body>
</html>
```

## CSS
> CSS is short for 'Cascading Style Sheets', it is the rules that tell your web browser how stuff looks.

CSS = A list of descriptions
```css
div{
    color: red;
    font-family: Arial;
    font-size: 24pt;
}

/*Use class as a selector*/
.classname{
    color: red;
    font-family: Arial;
    font-size: 24pt;
}

/*Use id as a selector*/
#idname{
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
```
# Combine HTML and CSS
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <link rel="stylesheet" href="css_file_path"/>
    </head>
</html>
```