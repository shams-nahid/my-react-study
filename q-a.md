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

**8. What is HOC?**

- Higher Order Component
- Takes a component
- Returns a new component
- Its a pure component

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

- Used to call `async` mode
- Allow paused a long running rendering for high priority rendering
- Use `React.unstable_ConcurrentMode` to enable component level
- Use `ReactDom.unstable_ConcurrentMode` to enable in application level
