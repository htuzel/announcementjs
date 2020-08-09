# Anouncement.js

## Installation

Add js file to your html.
```<script src="./src/index.js"></script>```

Then you can call and use anouncement component like that
```
var options = {
    text : {
        title : "To new members",
        subtitle : "GIANT DISCOUNT",
        discountRate: 20
    }
};
var anounceCreator = new AnounceCreator();
anounceCreator.initialize(options); 
```

You are free to create PR to improve code quality and functionality.
