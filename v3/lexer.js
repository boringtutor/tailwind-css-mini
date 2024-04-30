import postcss from 'postcss';

// export type Rule = {
//     kind: 'rule'
//     selector: string
//     nodes: AstNode[]
//   }
  
//   export type Declaration = {
//     kind: 'declaration'
//     property: string
//     value: string
//     important: boolean
//   }
  
//   export type Comment = {
//     kind: 'comment'
//     value: string
//   }
  
//   export type AstNode = Rule | Declaration | Comment



// export default function generateCSS(usedClasses, config) {
// //   const root = postcss.root();

//     const ast = []
    
//   usedClasses.forEach(cls => {
//     console.log(' the class is ')
//     if(cls.startsWith('block')){
//         const node = {
//             rule:'block',
//             selector:'block',
            
//         }
//         ast.append(node);
//     } 
//     else if(cls.startsWith('text')){
//         const value = cls.split('-')[1];
//         if (value ==='sm' || value ==='md' || value === 'lg'){
//             const node = {
//                 kind:'declaration',
//                 property:'text',
//                 value : value
//             }
//             ast.append(node)
//         }
//         else if(value === "grey"){
//             const node = {
//                 kind: 'declaration',
//                 property:'text',
//                 value:`${value}+${cls[2]}`
//             }
//             ast.append(node)
//         }
//     }
//     else if(cls.startsWith('font')){
//         const node = {

//         }
//     }
   
//   });

//   return root.toString();
// }




  export default function generateAst(classes) {
    let ast = [];
    let i = 0;
    console.log('classes are =>', classes);

    classes.forEach((cls) => {
        const cs = cls.split('-');
        let node = {
            kind: 'unknown', // Default kind
            parts: cs
        };

        switch (cs.length) {
            case 1:
                node.kind = 'design';
                node.value = cs[0];
                break;
            case 2:
                node.kind = `${cs[0]}-property`;
                node.selector = cs[0];
                node.value = cs[1];
                break;
            case 3:
                node.kind = 'responsive';
                node.media = cs[0]; // Assume first part is a responsive prefix
                node.selector = cs[1];
                node.value = cs[2];
                break;
            default:
                node.kind = 'complex';
                node.description = 'Complex class names with multiple parts';
                break;
        }
        
        ast[i] = node;
        i++;
    });

    return ast;
}







