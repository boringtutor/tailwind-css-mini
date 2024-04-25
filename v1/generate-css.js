import fs from "fs";
import path from "path";

const outputPath = "./src/generated.css";

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function generateSpacingUtilities() {
  const sizes = ["0", "1", "2", "4", "8", "16", "32", "64"];
  const directions = ["t", "b", "l", "r", "x", "y", ""];
  const properties = ["m", "p"]; // m for margin, p for padding
  let classes = [];

  properties.forEach((prop) => {
    directions.forEach((dir) => {
      sizes.forEach((size) => {
        let property = prop === "m" ? "margin" : "padding";
        let side = "";
        switch (dir) {
          case "t":
            side = "top";
            break;
          case "b":
            side = "bottom";
            break;
          case "l":
            side = "left";
            break;
          case "r":
            side = "right";
            break;
          case "x":
            side = "left";
            break;
          case "y":
            side = "top";
            break;
          default:
            side = "";
        }

        if (dir === "x" || dir === "y") {
          classes.push(
            `.${prop}${dir}-${size} { ${property}-${side}: ${size}px; ${property}-${
              dir === "x" ? "right" : "bottom"
            }: ${size}px; }`
          );
        } else if (dir === "") {
          classes.push(`.${prop}-${size} { ${property}: ${size}px; }`);
        } else {
          classes.push(
            `.${prop}${dir}-${size} { ${property}-${side}: ${size}px; }`
          );
        }
      });
    });
  });

  return classes.join("\n");
}

function generateAllUtilities() {
  let css = "";

  css += generateSpacingUtilities();
  // Add other utility generators like generateColorUtilities(), generateTypographyUtilities(), etc.
  console.log("geenrated the css");
  return css;
}
ensureDirectoryExistence(outputPath);

// fs.makeDirSync("./src/generated.css");
fs.writeFileSync("./src/generated.css", generateAllUtilities());
