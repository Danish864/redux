This the project built with different concepts of redux. I have given a summary of every file. 

index.js file contains redux implementation with combined reducer.

separate-reducer.js files have better implementation of reducer as separate reducer for differet state and corresponding actions.

nested-state.js contains implementation of immer package, it shows how it makes easy to use state in deep object. You can see commented code also if you wish to not use immer.

middleware.js

[ 
    Middleware Is the suggested way to extend Redux with custom functionality
    It Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
    Use middleware for logging, crash reporting, performing asynchronous tasks etc
]

asyncActions.js file contains implementation of redux thunk. Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.
That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed.