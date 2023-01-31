# Multistep Form Using React and TypeScript

[Live Link](https://main.d36xf7etu9pi8e.amplifyapp.com/)

Being my first TypeScript based project, I tried to keep it simple in terms of libraries and functionality.

### Key Learnings

- useContext for state management (or Redux depending on the overall project scale) would have been extremely beneficial as state quickly creeped up in terms of complexity and taking the time to learn useContext in TS would have kept the code a lot cleaner.

- Passing props in TS takes a lot more thought and care than JavaScript.

- The useMultiStepForm hook was very easy to build the app from but limited the overall functionality and scale. Having an array of React Elements being given to the hook which returned the functions to change pages made it impossible to pass next, back and goTo to the pages, limiting functionality.

- Better planning up front would have avoided a lot of refactoring.

- Next time use a router instead of a custom hook to allow more flexibility in navigation.
