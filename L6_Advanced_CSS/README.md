So far, we have learned that CSS can govern how out layouts look, change fonts, text styles, colors, and make button styles, borders, shadows etc. But there's actually so much more that CSS can do for out websites, such as idle animations, complex layouts, hover animations and responsive design.

# Palettes
As a general rule of thumb, on your website you would want to stick to 2-3 theme colors. Someone created [this](https://coolors.co/) genius website, which can auto-generates color palettes that are pleasing to the eye.

# Box model
We have learned about that in box model, the padding surrounds the main area we're working in, the border surrounds the padding, and then the margin is outside of that. Make sure you know the difference between padding and margin! This is very important when working with things like NavBar and Buttons.

# Layouts
There are two major properties of layouts, `display` and `position`.

`display` determines how elements size & sit with/in each other. 
- The first type, most common one we use is display: `block`. If you don't set a display setting for your div, this will be the one that yor CSS default to. They stretch across your window and always sit on new lines. i.e. `i.e. <div>, <section>, <ul>, <p>, <h1-6>, <header>`.
- Another type we use in display is `inline`, an element that is part of text size is always proportional to text they do NOT accept width/height properties and top/bottom margins. i.e. `<span>, <a>, <img>`
- Now a variation of inline is inline BLOCK, which stays within its text but has its own size independent from it. So you can set things like width and height, and it's useful for things like having a button, image, emoji, etc. within your text.
- `flex`
- `grid` creates a "grid" of the child elements. It specify num of column and row by `grid-template-columns: 1fr 2fr 1fr` and `grid-template-rows: 100px 200px 50px`

`position` determines where an element sits based on other elements. 
- `static` renders boxes position based on order in document default property value for div.
- `relative` positions the element "relative" to where it would be if static useful for slight modifications in position.
- `absolute` positions the element relative to first ancestor positioned non-statically useful for navbars and sidebars.
- `fixed` positions the element relative to the screen useful for navbars and bulletins.

# Transitions & animations
[TODO]
# Responsive Layouts
[TODO]