import { findUsedClasses } from "./filescanner.js";

import { Node } from "./utils/segment.js";
//TODO: 1. design system
//TODO: 2. candidate for ast.
//TODO: 1. ast generation
//TODO: 1. transform ast to css
//TODO: 1. generate css file.


function test(str){
    let ss = str.split(':');
    if(ss.length===1){
       ss  = str.split('-')
       console.log(`this is ${ss} with - varient`)
    }
    else{
        console.log(`this is ${ss} with : varient`)
    }
}

const test1 = 'bg-red-200'
const test2 = 'hover:bg-red-200'

async function buildCSS() {
    const usedClasses = await findUsedClasses('**/*.html');
//    console.log(usedClasses);
   
    let nn = new Node('sm:text-sm');
    let res = nn.append_colon_seprator();
    console.log(res[0])
    // let res = nn.createAst(usedClasses);
    // console.log('this is the result i got')
    // console.log(res)
    // console.warn('this is the result i got')
    

  }
  
  buildCSS().then(() => console.log('CSS generated successfully.'));






