import { config } from "../tailwind-mini.config.js";
import postcss from "postcss/lib/postcss";
import chalk from "chalk";

function logg(message) {
  console.log(chalk.green(message));
}
function logerr(message) {
  console.log(chalk.red(message));
}

// logg("config", config.theme);
// const theme = config.theme.extend;
// logerr("theme", theme);
export default postcss.plugin("tailwindMiniPlugin", () => {
  return (root) => {
    root.walkAtRules("tailwind-mini", (rule) => {
      if (rule.params === "base") {
        rule.replaceWith(`
                    /* Base Styles */
                   
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

button {
  background-color: transparent;
  background-image: none;
}

fieldset {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}



html {
  font-family: theme(
    "fontFamily.sans",
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji"
  ); /* 1 */
  line-height: 1.5; /* 2 */
}


body {
  font-family: inherit;
  line-height: inherit;
}

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}


hr {
  border-top-width: 1px;
}


img {
  border-style: solid;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: theme("colors.gray.400", #a1a1aa);
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}



a {
  color: inherit;
  text-decoration: inherit;
}


button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}



pre,
code,
kbd,
samp {
  font-family: theme(
    "fontFamily.mono",
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace
  );
}


img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}


img,
video {
  max-width: 100%;
  height: auto;
}

                `);
      } else if (rule.params === "components") {
        rule.replaceWith(`
                    /* Components */
                    .btn {
                        padding: 0.5rem 1rem;
                        border-radius: 0.25rem;
                        background-color: #007bff;
                        color: white;
                        border: none;
                    }
                `);
      } else if (rule.params === "utilities") {
        rule.replaceWith(`
                    /* Utilities */
                    .mt-0 { margin-top: 0px; }
.mt-1 { margin-top: 1px; }
.mt-2 { margin-top: 2px; }
.mt-4 { margin-top: 4px; }
.mt-8 { margin-top: 8px; }
.mt-16 { margin-top: 16px; }
.mt-32 { margin-top: 32px; }
.mt-64 { margin-top: 64px; }
.mb-0 { margin-bottom: 0px; }
.mb-1 { margin-bottom: 1px; }
.mb-2 { margin-bottom: 2px; }
.mb-4 { margin-bottom: 4px; }
.mb-8 { margin-bottom: 8px; }
.mb-16 { margin-bottom: 16px; }
.mb-32 { margin-bottom: 32px; }
.mb-64 { margin-bottom: 64px; }
.ml-0 { margin-left: 0px; }
.ml-1 { margin-left: 1px; }
.ml-2 { margin-left: 2px; }
.ml-4 { margin-left: 4px; }
.ml-8 { margin-left: 8px; }
.ml-16 { margin-left: 16px; }
.ml-32 { margin-left: 32px; }
.ml-64 { margin-left: 64px; }
.mr-0 { margin-right: 0px; }
.mr-1 { margin-right: 1px; }
.mr-2 { margin-right: 2px; }
.mr-4 { margin-right: 4px; }
.mr-8 { margin-right: 8px; }
.mr-16 { margin-right: 16px; }
.mr-32 { margin-right: 32px; }
.mr-64 { margin-right: 64px; }
.mx-0 { margin-left: 0px; margin-right: 0px; }
.mx-1 { margin-left: 1px; margin-right: 1px; }
.mx-2 { margin-left: 2px; margin-right: 2px; }
.mx-4 { margin-left: 4px; margin-right: 4px; }
.mx-8 { margin-left: 8px; margin-right: 8px; }
.mx-16 { margin-left: 16px; margin-right: 16px; }
.mx-32 { margin-left: 32px; margin-right: 32px; }
.mx-64 { margin-left: 64px; margin-right: 64px; }
.my-0 { margin-top: 0px; margin-bottom: 0px; }
.my-1 { margin-top: 1px; margin-bottom: 1px; }
.my-2 { margin-top: 2px; margin-bottom: 2px; }
.my-4 { margin-top: 4px; margin-bottom: 4px; }
.my-8 { margin-top: 8px; margin-bottom: 8px; }
.my-16 { margin-top: 16px; margin-bottom: 16px; }
.my-32 { margin-top: 32px; margin-bottom: 32px; }
.my-64 { margin-top: 64px; margin-bottom: 64px; }
.m-0 { margin: 0px; }
.m-1 { margin: 1px; }
.m-2 { margin: 2px; }
.m-4 { margin: 4px; }
.m-8 { margin: 8px; }
.m-16 { margin: 16px; }
.m-32 { margin: 32px; }
.m-64 { margin: 64px; }
.pt-0 { padding-top: 0px; }
.pt-1 { padding-top: 1px; }
.pt-2 { padding-top: 2px; }
.pt-4 { padding-top: 4px; }
.pt-8 { padding-top: 8px; }
.pt-16 { padding-top: 16px; }
.pt-32 { padding-top: 32px; }
.pt-64 { padding-top: 64px; }
.pb-0 { padding-bottom: 0px; }
.pb-1 { padding-bottom: 1px; }
.pb-2 { padding-bottom: 2px; }
.pb-4 { padding-bottom: 4px; }
.pb-8 { padding-bottom: 8px; }
.pb-16 { padding-bottom: 16px; }
.pb-32 { padding-bottom: 32px; }
.pb-64 { padding-bottom: 64px; }
.pl-0 { padding-left: 0px; }
.pl-1 { padding-left: 1px; }
.pl-2 { padding-left: 2px; }
.pl-4 { padding-left: 4px; }
.pl-8 { padding-left: 8px; }
.pl-16 { padding-left: 16px; }
.pl-32 { padding-left: 32px; }
.pl-64 { padding-left: 64px; }
.pr-0 { padding-right: 0px; }
.pr-1 { padding-right: 1px; }
.pr-2 { padding-right: 2px; }
.pr-4 { padding-right: 4px; }
.pr-8 { padding-right: 8px; }
.pr-16 { padding-right: 16px; }
.pr-32 { padding-right: 32px; }
.pr-64 { padding-right: 64px; }
.px-0 { padding-left: 0px; padding-right: 0px; }
.px-1 { padding-left: 1px; padding-right: 1px; }
.px-2 { padding-left: 2px; padding-right: 2px; }
.px-4 { padding-left: 4px; padding-right: 4px; }
.px-8 { padding-left: 8px; padding-right: 8px; }
.px-16 { padding-left: 16px; padding-right: 16px; }
.px-32 { padding-left: 32px; padding-right: 32px; }
.px-64 { padding-left: 64px; padding-right: 64px; }
.py-0 { padding-top: 0px; padding-bottom: 0px; }
.py-1 { padding-top: 1px; padding-bottom: 1px; }
.py-2 { padding-top: 2px; padding-bottom: 2px; }
.py-4 { padding-top: 4px; padding-bottom: 4px; }
.py-8 { padding-top: 8px; padding-bottom: 8px; }
.py-16 { padding-top: 16px; padding-bottom: 16px; }
.py-32 { padding-top: 32px; padding-bottom: 32px; }
.py-64 { padding-top: 64px; padding-bottom: 64px; }
.p-0 { padding: 0px; }
.p-1 { padding: 1px; }
.p-2 { padding: 2px; }
.p-4 { padding: 4px; }
.p-8 { padding: 8px; }
.p-16 { padding: 16px; }
.p-32 { padding: 32px; }
.p-64 { padding: 64px; }
                `);
        Object.entries(config.theme.extend).forEach(([key, value]) => {
          if (key === "colors") {
            for (const color in value) {
              root.append(
                postcss
                  .rule({ selector: `.text-${color}` })
                  .append({ prop: "color", value: value[color] })
              );
              root.append(
                postcss
                  .rule({ selector: `.bg-${color}` })
                  .append({ prop: "background-color", value: value[color] })
              );
            }
          } else if (key === "spacing") {
            for (const size in value) {
              root.append(
                postcss
                  .rule({ selector: `.p-${size}` })
                  .append({ prop: "padding", value: value[size] })
              );
              root.append(
                postcss
                  .rule({ selector: `.m-${size}` })
                  .append({ prop: "margin", value: value[size] })
              );
            }
          }
        });
      }
    });
  };
});
