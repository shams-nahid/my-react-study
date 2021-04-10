## Styled Components

`Styled Components` is another cool library, we can use to style any HTML elements and reuse anywhere in our react application. There is a whole [motivation](https://styled-components.com/docs/basics#motivation) section, why this library is a really good approach to use CSS in the JSX.

### Comparing With Other CSS-in-JS Library
---

The purpose of `styled-component` is not meant to avoid using any other `UI Framework` like material-ui or semantic-ui. `UI Frameworks` are there to resolve the modular problem like creating a modal or expansion panel. With only CSS we can not crete a modal, we need to make use of the JavaScript. On the other hand, the `styled-components` are there to write CSS in modern Javascript.

A closer competitor of the `styled-component` can be [emotion.js](https://github.com/emotion-js/emotion) or [aphrodite](https://github.com/Khan/aphrodite). 

Both the `styled-component` and the `emotion` has pretty much similar syntax but `styled-component` got a better performance.

On the other hand, the `aphrodite` got faster performance but in this case, we have to write CSS in the JSS format. This could be a trade-off of using the `styled-component` over the `aphrodite`.

### Couple of Advantages
---

* By default, the styled components css styles is scoped to the local css class. Although we can override the limitations by using the [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle).
* Increase code readability by providing scripted names. Instead of using `HTML DOM`, in JSX we can explicitly named the component.
* It reduce the amount of code loaded in each page. If we use a button with styled component and that button is not loaded in a page, these CSS related to the button will not be loaded.
* Since the `styled-components` provide the unique names for each class, it ensures, the class name does not conflict with the global CSS or other library.
* My most favorite feature is, we can use our JavaScript skills to dynamically do the property binding in the CSS.
* Like other library, it also provide the theming support.

### Implementations
---

Let's actually implement these and seeing the advantages in firsthand instead of reading some words.

### Some Best Practices

---

- For nested css styles, should use `css` helper, provided by `styled-components` library
- End of the day, these are styled component, we should use define them outside of the component and name should start with Upper case letter.
- Theming and global CSS should go to a directory that provides the theming support.