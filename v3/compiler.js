import { findUsedClasses } from "./filescanner.js";
import generateCSS from "./lexer.js";
import generateAst from "./lexer.js";

const config = {
    spacing: {
      'p': 'padding',
      'm': 'margin',
      'pl': 'padding-left',
      'pr': 'padding-right',
      'py': 'padding-top padding-bottom',
      'my': 'margin-top margin-bottom',
      'mt': 'margin-top'
    },
    colors: {
      'text': 'color',
      'bg': 'background-color',
      'ring': 'border-color',
      'placeholder': 'color' // Simplified for demonstration
    },
    fontSize: {
      'text-sm': '0.875rem', // 14px
      'sm:text-sm': '0.875rem' // Responsive example, simplified
    },
    other: {
      'rounded-md': 'border-radius: 0.375rem',
      'shadow-sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'block': 'display: block',
      'relative': 'position: relative',
      'absolute': 'position: absolute',
      'flex': 'display: flex',
      'items-center': 'align-items: center',
      'w-full': 'width: 100%',
      'h-full': 'height: 100%',
      'border-0': 'border: 0',
      'bg-transparent': 'background-color: transparent',
      'sr-only': 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0'
    }
  };


async function buildCSS() {
    const usedClasses = await findUsedClasses('**/*.html');
    // console.warn(usedClasses)
    // const css = generateCSS(usedClasses, config);
    // await fs.writeFile('output.css', css, 'utf8');
    const ast =  generateAst(usedClasses);
    console.log('the ast generated is  -> ')
    console.log(ast)
  }
  
  buildCSS().then(() => console.log('CSS generated successfully.'));






