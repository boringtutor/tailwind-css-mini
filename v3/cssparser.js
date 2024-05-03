export class cssParser{
    constructor(ast){
        this.ast = ast;
        this.css = ''
        this.list = {
            'w':'width',
            'h':'height',

        }
        this.text_size={
            'xs':`{
                font-size: 0.75rem;
                line-height: 1rem; 
            }`,
            'sm':`{
                font-size: 0.875rem; /* 14px */
                line-height: 1.25rem;
            }`,
            'base':`{
                font-size: 1.125rem; /* 18px */
                line-height: 1.75rem; /* 28px */
            }`,
            'xl':`{
                font-size: 1.25rem; /* 20px */
                line-height: 1.75rem; /* 28px */
            }`,
            '2xl':`{
                font-size: 1.5rem; /* 24px */
                line-height: 2rem; /* 32px */
            }`,
            '3xl':`{
                font-size: 1.875rem; /* 30px */
                line-height: 2.25rem; /* 36px */
            }`
        }
    }

    cssparser(){
        this.ast.forEach(element => {
            if(element.kind==='static'){
                this.css+=`.${element.root}{
                    display:${element.root}
                }`
            }else if(element.kind=== 'functional'){
                if(element.variants.length === 0){
                    let res = this.getPaddingAndMargin(element.root,element.value.value);
                    if (res!==null){
                    this.css+=res
                    }
                    else if(element.root==='text') {
                        this.css+=`.text-${element.value.value}:${this.text_size[element.value.value]}`
                    }else if(element.value.value === 'full'){
                    this.css+='';
                    }
                    }
                }
            });
            return this.css
    }
    getPaddingAndMargin(root,value){
        if(root.charAt(0) === 'p'){
            // this is the case for all the paddings
            if(root.charAt(1)==='l'){
                return `.${root}{
                    padding-left:${value}
                }`
            }else if(root.charAt(1)==='r'){
                return `.${root}{
                    padding-right:${value}
                }`
            }else if(root.charAt(1)==='x'){
                `.${root}{
                    padding-left: ${value}px;
                    padding-right: ${value}px;
                }`
            }else if(root.charAt(1)==='y'){
                `.${root}{
                    padding-top: ${value}px;
                    padding-bottom: ${value}px;
                }`
            }else if(root.charAt(1)==='t'){
                return `.${root}{
                    padding-top:${value}
                }`
            }else if(root.charAt(1)==='b'){
                return `.${root}{
                    padding-bottom:${value}
                }`
            }
        }
        else if(root.charAt(0)==='m'){
            //this is the case for all the margins
            if(root.charAt(1)==='l'){
                return `.${root}{
                    margin-left:${value}
                }`
            }else if(root.charAt(1)==='r'){
                return `.${root}{
                    margin-right:${value}
                }`
            }else if(root.charAt(1)==='x'){
                `.${root}{
                    margin-left: ${value}px;
                    margin-right: ${value}px;
                }`
            }else if(root.charAt(1)==='y'){
                `.${root}{
                    margin-top: ${value}px;
                    margin-bottom: ${value}px;
                }`
            }else if(root.charAt(1)==='t'){
                return `.${root}{
                    margin-top:${value}
                }`
            }else if(root.charAt(1)==='b'){
                return `.${root}{
                    margin-bottom:${value}
                }`
            }
        }
        else{
            return null
        }
    }
    getBreakpoint(media) {
        // Simple function to convert media shorthand to actual breakpoints
        const breakpoints = {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        };
        return breakpoints[media] || null;
    }

}


