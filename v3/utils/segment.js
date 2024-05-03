

export class Node{
    // constructor(){
    //     this.node =[]
    //     this.size=0
    //     this.input = ''
        
    // }
    constructor(input){
        this.node =[]
        this.size=0
        this.input = input
        
    }
    incrementsize(){
        this.size=this.size+1
    }
    append_underscore_seprator(){
        let t = this.input.split('-');
       let data =  {
        kind:"functional",
        root:t[0],
        value:{
            kind:"named",
            value:t[1]+'-'+t[2]
        },
        variants:[],
       }
       this.node[this.size]=data
       this.incrementsize();
       
    }

    append_utility(){
        let data = {
            kind: "static",
            negative: false,
            root: this.input,
            variants: [],
        }
        this.node[this.size]=data
        this.incrementsize()
    }

    append_underscore_utility(){
        let t = this.input.split('-');
        let data = {
            kind:'functional',
            root:t[0],
            value:{
                kind:'named',
                value:t[1]
            },
            variants:[],
        }
        this.node[this.size]=data
        this.incrementsize();
    }

    append_colon_seprator(){
        let t = this.input.split(':');
        let ss =t[1].split('-');
        let data = ''
        console.log(ss.length)
        if(ss.length ===2){
            console.log('ss is small')
            data={
                kind:"functional",
            root:ss[0],
            value:{
                kind:"named",
                value:ss[1]
            },
            variants:[
                {
                    kind:'static',
                    root:t[0],
                }
            ],
            }
        }else{
            data =  {
                kind:"functional",
                root:ss[0],
                value:{
                    kind:"named",
                    value:ss[1]+'-'+ss[2]
                },
                variants:[
                    {
                        kind:'static',
                        root:t[0],
                    }
                ],
               }
        }
         
           this.node[this.size]=data
           this.incrementsize();
        return this.node
    }
    seprator(){
        if(this.input.includes(':')){
            this.append_colon_seprator();
        }
        else if(this.input.includes('-')){
            if(this.input.split('-').length === 2){
                this.append_underscore_utility()
            }
            else{

                this.append_underscore_seprator()
            }
        }
        else{
            this.append_utility()
        }
        return this.node
    }

    createAst(usedClasses){
        usedClasses.forEach(element => {
            this.input = element
            this.seprator()
        });
        return this.node
    }

}