**1. What is the difference between useEffect and useLayoutEffect?**

> `useEffect` will run after React has finished updating the component and the DOM, but before the changes have actually been painted to the screen. `useLayoutEffect` will run after React has finished updating the component, the DOM, and the changes have actually been painted to the screen.

`useEffect` is a hook that lets you run code asynchronously after a component has been updated. It is called after the render has been committed to the DOM, but before the browser has painted the updated changes. This means that the code in useEffect will run after React has finished updating the component and the DOM, but before the changes have actually been painted to the screen.

Here's an example to demonstrate the use of useEffect:

```jsx
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

On the other hand, `useLayoutEffect` is a hook that lets you run code synchronously after a component has been updated. It is called after the render has been committed to the DOM and after the browser has painted the updated changes. This means that the code in useLayoutEffect will run after React has finished updating the component, the DOM, and the changes have actually been painted to the screen.

Here's an example to demonstrate the use of useLayoutEffect:

```jsx
function Example() {
  const [width, setWidth] = useState(0);
  const divRef = React.useRef(null);

  useLayoutEffect(() => {
    const div = divRef.current;
    setWidth(div.offsetWidth);
  }, []);

  return (
    <div ref={divRef}>
      <p>Width: {width}</p>
    </div>
  );
}
```

**2. What is virtual dom?**

- In-memory representation of Real DOM
- Keep the representation of UI in memory and synced with real DOM

It works in 3 simple steps,

1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
2. Then the difference between the previous DOM representation and the new one is calculated.
3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

**3. What is reconciliation?**

- Syncing v-dom and real dom is reconciliation
- Happens between invoking render method and painting in browser

`React Fiber` is a reconciliation engine and reimplemented in React v6. It improved,

- Animation
- Layout
- Gestures
- Ability to pause, abort, or reuse work
- Assign priority to different types of updates
- New concurrency primitives

**4. Whats the difference between controlled and uncontrolled components?**

When there is a input component and we take output of the input directly from the input control, it is controlled component.

When the data of input is stored in dom and after submit form, we query data from the dom, it is uncontrolled component.

**5. Whats the difference between createElement and cloneElement?**

Create element creates object representation of UI. Clone element use to clone a element to pass as props.

**6. What is Lifting State Up in React?**

When multiple sibling/ancestor components use same state, lift the state up to the parent component.

**7. Explain component lifecycle.**

Component has 3 lifecycle phases,

- Mounting
- Updating
- Unmounting

UI is changed with 3 different phases,

- Render
- Pre-commit
- Commit

Considering class component,

- componentWillMount (deprecated) - this is most commonly used for App configuration in your root component.
- componentDidMount - here you want to do all the setup you couldn’t do without a DOM, and start getting all the data you need. Also if you want to set up eventListeners etc. this lifecycle hook is a good place to do that.
- componentWillReceiveProps (deprecated) - this lifecycle acts on particular prop changes to trigger state transitions.
- shouldComponentUpdate - if you’re worried about wasted renders shouldComponentUpdate is a great place to improve performance as it allows you to prevent a rerender if component receives new prop. - shouldComponentUpdate should always return a boolean and based on what this is will determine if the component is rerendered or not.
- componentWillUpdate (deprecated) - rarely used. It can be used instead of componentWillReceiveProps on a component that also has shouldComponentUpdate (but no access to previous props).
- componentDidUpdate - also commonly used to update the DOM in response to prop or state changes.
- componentWillUnmount - enables you can cancel any outgoing network requests, or remove all event listeners associated with the component.

**8. What is HOC?**

- Higher Order Component
- Takes a component
- Returns a new component
- Its a pure component [For same props and state, always output is same]

**9. How do you access imperative API of web components?**

Imperative APIs are APIs that allow you to programmatically interact with a web component and control its behavior.

- ref can be used to interact with DOM node using imperative API
- For 3rd party component, better use a wrapper component

**10. What convert JSX to JS?**

Babel transpile JSX to JS.

**11. What are data flow in react?**

React has unidirectional data flow, i.e, only data is passed from parent to child.

**12. What is react-scripts?**

- Set of scripts
- Come with create-react-app dev pack
- Kick of dev environment, Create dev server, Enable Hot Module Reloading

**13. What is differences between redux and mobX?**

- Redux store data as object, mobX stores as observable
- Redux has one storage, mobX has multiple storage (each store is separate storage)

**14. What is concurrent rendering?**

- Make app responsive
- Used to call `async` mode
- Allow paused a long running rendering for high priority rendering
- Use `React.unstable_ConcurrentMode` to enable component level
- Use `ReactDom.unstable_ConcurrentMode` to enable in application level

Allow render component and interact with UI even though some components are still rendering.

```jsx
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <SlowComponent />
      <FastComponent />
    </div>
  );
}

function SlowComponent() {
  // Simulate a slow rendering component
  const startTime = performance.now();
  while (performance.now() - startTime < 2000) {}

  return <div>Slow component</div>;
}

function FastComponent() {
  return <div>Fast component</div>;
}
```

In this example, the App component renders a SlowComponent and a FastComponent. The SlowComponent simulates a slow rendering component by blocking the UI thread for 2 seconds. The FastComponent is a simple component that renders quickly.

If you click the "Increment" button in the App component, you'll notice that the count updates immediately, even though the SlowComponent is still rendering. This is because React is using concurrent rendering to prioritize the update to the count over the slow rendering of the SlowComponent. Once the count has updated, React can finish rendering the SlowComponent.

Overall, concurrent rendering can help make React applications feel more responsive and improve performance by optimizing the order and timing of component rendering.


**15. How to re render on change of browser window size?**

In React, you can re-render the view when the browser is resized by using the useEffect hook to subscribe to the window.onresize event and trigger a re-render whenever the event is fired. Here is an example:

```js
const MyComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
```

**16. Difference of setState and replaceState?**

`setState` update the existing state by merging the newly passed value. On the other hand, `replaceState` do not merge the passed value, it erase the existing value and set the passed value as new state.

**17. Preferred method of removing element from array state?**

Use filter and set the returned filtered array as new array.

**17. What can be returned from a component?**

- JSX
- true/false
- null
- []
- ""
- <></>
- undefined

**18. How to use HTTPS in cra?**

Run start script with `https=true && npm start`.

**19. What does `current` property means in `ref`?**

TODO

**20. How to get current react version?**

using `React.version`.

**21. How to update component every second?**

Using setInterval in useEffect.

```jsx
function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>The time is: {time.toLocaleTimeString()}</div>;
}
```

**22. What are the difference between history and react router?**

React router is a wrapper of history api.

**23. How to handle a default/not-found page?**

Render the not-found/default page at the end of router definition in the switch component.

**24. What is redux?**

Redux isa State container.

It's principles,

- Single source of truth, kept the whole application state in single object tree
- States are only readable
- States can be changed only with pure functions

**25. Can I dispatch an action in reducer?**

Reducer should be without side effects, so its anti pattern.

**26. What is react?**

- Use JSX, allows write html in JS
- Use virtualDOM instead of real dom, since modifying real dom is expensive
- Supports ssr
- Use unidirectional data flow

**27. What is the difference between component and element?**

Example of component,

```jsx
function MyComponent({ message }) {
  return <div>{message}</div>;
}
```

Example of element,

```jsx
const element = <MyComponent message="Hello, world!" />;
```

**28. What are synthetic events?**

React creates cross browser wrappers for events to simplify functionality.

Here's an example of how you can use a synthetic event in React to handle a button click:

```jsx
function handleClick(event) {
  console.log('Button was clicked');
}

function MyButton() {
  return <button onClick={handleClick}>Click me</button>;
}
```

In this example, we define a handleClick function that takes an event object as an argument. We then pass this function as a click event handler to a button component using the onClick attribute. When the button is clicked, React creates a synthetic event object and passes it to the handleClick function. We can then use the event object to perform some action, such as logging a message to the console.

**29. What is "key" prop and what is the benefit of using it in arrays of elements?**

Helps react to identify the changes. It is recommended to avoid using index as key.

**30. What are forward refs?**

Allowed to interact the child component elements.

```jsx
const ChildComponent = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const ParentComponent = () => {
  const inputRef = React.useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
```

**31. What are the advantage of fragments over div?**

- Faster
- Less memory
- Do not break CSS hierarchy
- DOM inspector is cleaner

**32. What is context?**

Context is a way to pass data to child without sending through props.

**33. What are props?**

Properties passed from parent to child and readonly.

**34. Whats the difference between props and state?**

Props are readonly, comes from the parent. States are components internal object and are supposed to change over time.

**35. What is pure component?**

When a component does not have any state.
OR
Return same output for same props and state.

**36. What are the difference of smart and dump component?**

Smart component has state or manage state by state container. Dump components are driven by it's props itself.

**37. What happens when setState is being called?**

- Update the state asynchronously with the passed object
- Update the component and corresponding child
- For multiple actions, it sometimes optimize operations by batch execution

**38. What is reactDom?**

It renders react components into DOM. Using reconciliation, it sync the vDom and rDom.

**39. How does React prevent injection attacks?**

TODO

**40. Explain SSR**

TODO

**41. What are children in react?**

TODO

**42. What are stores, actions, reducers and selectors in redux-toolkit?**

TODO

**43. What are redux-saga or redux-thunk? Use cases?**

TODO

**44. When to eject the create-react-app?**

- Require modifying the build configuration or webpack setup
- Need to add plugins in webpack
- 3rd party library requires to update webpack configurations

**45. Controlled vs Uncontrolled component**

A controlled component get data from props and on changes, pass these data using callback. Parent of the component are responsible to manage this controlled component.

On the other hand, uncontrolled component manage its own state and handle events inside the component.

**46. How to improve static type checking?**

Static type checking is compile time type checking. We can improve using,

- TypeScript
- Add types of props

**47. What is forceUpdate?**

In class component, we can update the component even if the state and props are not changed.

To force update the component,

```js
this.forceUpdate();
```

**48. How to optimize react app performance?**

- The chrome `performance` tab can provide good insights
- Look for not necessary rendering (React profiler can show the rendering of the components)
- Inside component, using `useMemo`, `useCallBack`, lazy loading can help improving the performance
- 3rd party tools, like New Relic, DataDog, AppDynamics can monitor app for better performance.

**49. What is strict mode component?**

- Identify legacy features
- Detect unexpected side-effects
- Detect deprecated APIs
- Warn about potential performance issues

To use strict mode in react,

```
function App() {
  return <React.StrictMode>
    <div></div>
  </React.StrictMode>
}
```

## References

- https://github.com/sudheerj/reactjs-interview-questions
- https://github.com/WebPredict/react-interview-questions
- https://github.com/Pau1fitz/react-interview
- https://devinterview.io/dev/react-interview-questions
