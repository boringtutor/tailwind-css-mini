import { findUsedClasses } from "./filescanner.js";
import { Node } from "./utils/segment.js";
import { cssParser } from "./cssparser.js";
//TODO: 1. design system
//TODO: 2. candidate for ast.
//TODO: 1. ast generation
//TODO: 1. transform ast to css
//TODO: 1. generate css file.




// const test = ['px-3 p-1 py-3', 'p-1 py-3 px-3']

//   // Utilities with variants
// const test2 =  ['px-3 focus:hover:p-3 hover:p-1 py-3', 'py-3 px-3 hover:p-1 focus:hover:p-3']



async function buildCSS() {
    const usedClasses = await findUsedClasses('**/*.html');
//    console.log(usedClasses);
   
    let nn = new Node('sm:text-sm');
    // let res = nn.append_colon_seprator();
    // console.log(res[0])
    let res = nn.createAst(usedClasses);
    let css = new cssParser(res);
    let res1 =css.cssparser(); 
    // console.warn('this is the result i got')
    console.log(res1);

  }
  
  buildCSS().then(() => console.log('CSS generated successfully.'));






