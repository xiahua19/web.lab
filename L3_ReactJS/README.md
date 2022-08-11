# What's ReactJS
> React is a JavaScript library for building user interfaces. It's modular, fast and readable.

These 'fake HTML tags' are called COMPONENTS. React Apps are "components of components", which can use a tree structure to display. React is a framework that lets you divide up your website into reusable components. Each component is kind of like a 'custom HTML tag' that you define.

`Props`: Inputs passed from a parent to a child component. Props are immutable(不可变的). In the html beside, name and text are all props(the inputs). Here, `props = {name:"Akshaj", text:"Welcome to web lab!"}`
```html
<Post name="Akshaj" text="Welcome to web lab!" />
```

`State`: Private information(updatable pieces of information) maintained by a component.
```javascript
const [status, setStatus] = useState("busy");
const [isOnline, setIsOnline] = useState(false);
const [isLiked, setIsLiked] = useState(0);
```

Now we have our reuasble comment component:
- We pass props in from parent to child.
- Allows out skeleton to render comments with content.
- State keeps track of private information that can be changed and influence how your app renders.

# Writing ReactJS Components
Take facebook for example, the component tree likes this:
- APP
  - Post
    - Comment
    - Comment
    - Comment
    - Comment

For post, the postContent, isLiked is `State`. For comment, the commentContent is `Props`, while isLiked is `State`.
```javascript
import React, { useState } from "react";

// Comment component is a function that takes in props as an input.
const Comment = (props) => {
    // 1. Set initial states. Declares isLiked to False, and specifies "setIsLiked" as the function to update the state.
    const [isLiked, setIsLiked] = useState(false);

    // Expects a return type of HTML like code. () allows us to write HTML code inside JavaScript.
    // What you return will describe how the component appears.
    return (
        // Return a div. style it appropriately. {} allows us to return to JavaScript inside the HTML environment inside the JavaScript class.
        // Note: we use className to access CSS classes.
        <div id="claireComment" className="comment-text">
            { props.content }
        </div>
    );
};

export default Comment;
```

# React-Guide-1
### App.js
```javascript
import React from "react";
import NavBar from "./NavBar.js";
import Intro from "./Intro.js";
import Photos from "./Photos.js";

const App = () => {
    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <Intro city="Fairfax, Virginia" pronunciation="AHKS-hahj..."/>
                    <Photos links={["firstpic.jpg", "dancepic.jpg", "funnypic.jpg"]}/>
                </div>
                <Post name="Akshaj Kadaveru" text="Sign up for web lab!"/>
            </div>
        </div>
    );
};

export default App;
```

### Intro.js
```javascript
import React from "react";
const Intro = (props) => {
    return (
        <div>
            <p>Lives in <b>{ props.city }</b></p>
            <p>Pronounces name { props.pronunciation }</p>
            <button>Edit Details</button>
            <button>Add Hobbies</button>
            <button>Add Featured</button>
        </div>
    );
};

export default Intro;
```

### Photos.js
```javascript
import React from "react";

const Photos = (props) => {
    const myImageTags = props.links.map(
        (photolink) => {
            return <img src = {photolink} />;
        }
    );

    return (
        <div>
            <h3>Photos</h3>
            { myImageTags }
        </div>
    );
};

export default Photos;
```

### Post.js
```javascript
import React { useState }from "react";

const Post = (props) => {
    const [numLikes, setNumLikes] = useState(0);

    return (
        <div className="post">
            <h3>{ props.name }</h3>
            <p>{ props.text }</p>
            <button 
                onClick = {
                    () => { setNumLinks(numLikes + 1); }
                }
            >
                <img src="likeIcon.jpg" />
                { numLikes }
            </button>
        </div>
    );
};

export default Post;
```

# Recap: Writing Components
- We divide our app into components, and put one in each file.
- Each component is a function with props as the input, and returns HTML-like code.
- () allow us to enter an HTML environment.
- Inside the HTML environment, {} allows us to create a mini JS environment.
- We pass in props with HTML tags.
- We read in those props with `.` function.
- We declare state variavles with `const [something, setSomething] = useState(initialValue)`.
- React uses `className` instead of class for css style.