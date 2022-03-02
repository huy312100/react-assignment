## Exercise 2
### 1. What is the order lifecycles in ReactJS ?
- Initialization: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
- Mounting: Mounting is the stage of rendering the JSX returned by the render method itself 
  - componentWillMount() -> render() -> componentDidMount()
- Updating: Updating is the stage when the state of a component is updated and the application is repainted.
  - componentWillReceiveProps() -> shouldComponentUpdate()-> render() -> componentDidUpdate()
- Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page
  - componentWillUnmount()

### 2. What is the difference between React's handling events vs HTML handling events?
Event handling in HTML and React are different from one another in terms of syntax and some rules. The reason behind this is that React works on the concept of virtual DOM, on the other hand, the HTML has access to the Real DOM all the time.

### 3.How to send data from child component to its parents?
Following are the steps to pass data from child component to parent component:
- In the parent component, create a callback function. This callback function will retrieve the data from the child component.
- Pass the callback function to the child as a props from the parent component.
- The child component calls the parent callback function using props and passes the data to the parent component.
