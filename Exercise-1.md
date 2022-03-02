## **Excercise 1**:

### **Question 1**: What is the diffference between the React's function components and class components ?
####  Functional Components
- A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
- There is no render method used in functional components
- Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
- React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
- Hooks can be easily used in functional components.
- Constructors are not used .

#### Class Components          
- A class component requires you to extend from React. Component and create a render function which returns a React element.
- It must have the render() method returning HTML
- Also known as Stateful components because they implement logic and state
- React lifecycle methods can be used inside class components (for example, componentDidMount ...)
- It requires different syntax inside a class component to implement hooks.
- Constructor are used as it needs to store state.

 
### **Question 2**: What is the component state ?
The state is an instance of React Component Class can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
