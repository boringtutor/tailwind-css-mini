import fs from "fs";
import path from "path";
import miniconfig from "./tailwind-mini.config.js";

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function generateUtilities(config) {
  let css = "";

  // Generate color utilities
  for (const color in config.theme.extend.colors) {
    css += `.text-${color} { color: ${config.theme.extend.colors[color]}; }\n`;
    css += `.bg-${color} { background-color: ${config.theme.extend.colors[color]}; }\n`;
  }

  // Generate spacing utilities
  for (const size in config.theme.extend.spacing) {
    css += `.p-${size} { padding: ${config.theme.extend.spacing[size]}; }\n`;
    css += `.m-${size} { margin: ${config.theme.extend.spacing[size]}; }\n`;
  }

  return css;
}

const css = generateUtilities(miniconfig);
fs.writeFileSync("output.css", css, "utf8");
