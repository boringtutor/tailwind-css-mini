
//   export default function generateAst(classes) {
//     let ast = [];
//     let i = 0;
//     console.log('classes are =>', classes);

//     classes.forEach((cls) => {
//         const cs = cls.split('-');
//         let node = {
//             kind: 'unknown', // Default kind
//             parts: cs
//         };

//         switch (cs.length) {
//             case 1:
//                 node.kind = 'design';
//                 node.value = cs[0];
//                 break;
//             case 2:
//                 node.kind = `${cs[0]}-property`;
//                 node.selector = cs[0];
//                 node.value = cs[1];
//                 break;
//             case 3:
//                 node.kind = 'responsive';
//                 node.media = cs[0]; // Assume first part is a responsive prefix
//                 node.selector = cs[1];
//                 node.value = cs[2];
//                 break;
//             default:
//                 node.kind = 'complex';
//                 node.description = 'Complex class names with multiple parts';
//                 break;
//         }
        
//         ast[i] = node;
//         i++;
//     });

//     return ast;
// }


export default function generateAst(classes){
    let ast = [];
    let i = 0;
    console.log('classes are =>', classes);

    classes.forEach((cls)=>{
        const parts = cls.split('-');
        let node = {
            kind: 'unknown', // Default kind
            selector: cls, 
            parts: parts
        };

        if(parts.length === 1){
            node.kind = 'utility'
        }
        else if (parts[0] === 'sm' || parts[0] === 'md' || parts[0] === 'lg' || parts[0] === 'xl') {
            node.kind = 'responsive'; // Responsive utilities, e.g., 'sm:text-sm'
            node.breakpoint = parts[0];
            node.property = parts.slice(1, parts.length).join('-');
        }
        else if (parts.includes('focus') || parts.includes('hover')) {
            node.kind = 'pseudo-class'; // Handle pseudo-classes like 'hover', 'focus'
            node.pseudo = parts[0];
            node.property = parts.slice(1, parts.length).join('-');
        }else {
            node.kind = 'property'; // General property adjustments, e.g., 'text-gray-500'
            node.property = parts.slice(0, parts.length - 1).join('-');
            node.value = parts[parts.length - 1];
        }
        ast.push(node);
    });
    return ast
}





