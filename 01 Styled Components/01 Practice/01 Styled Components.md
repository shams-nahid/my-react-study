## Styled Components

By default, the styled components css styles is scoped to the local css class. Although we can override the limitations by using the [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle).

### Advantages
---

* In component Provide scripted names

### Best Practices

---

- For nested css styles, should use `css` helper, provided by `styled-components` library
- End of the day, these are styled component, we should use define them outside of the component and name should start with Upper case letter.