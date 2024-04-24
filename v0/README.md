# css reset

## first thing in the reset css across the browsers is using a system taht tailwind css is build on which is Normalize.css

Tailwind CSS uses a modified form of Normalize.css as the foundation of its CSS reset,
called Preflight. Here's what makes it different:

Key aspects of Tailwind CSS's Preflight:

    [x] Normalization: It inherits most foundational styles from Normalize.css, ensuring consistent rendering of basic elements across browsers.
    [] Barebones Styling: Preflight removes default margins from many elements. Styling opinions like default font sizes or heading sizes are removed to give you a nearly blank slate for your utility classes.
        [] Removing Default Margins:

```css
/* Option 1: Targeting specific elements */
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* Option 2:  A broader reset for more elements */
body > * {
  margin: 0;
}
```

        [] Neutralizing Default Styles:

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit; /* Reset to inherit from their parent element */
  font-weight: normal; /* Reset to normal font weight */
}
```

    [] Border Box: Applies the box-sizing: border-box; rule to all elements for a more predictable layout model.
    [x] Utility-Focused: Includes a few minor style adjustments specific to Tailwind's utility classes (e.g., how borders are handled).
    [] Add the colors from colors.js
