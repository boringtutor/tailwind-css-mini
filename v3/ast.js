export let Rule ={
    kind: 'rule',
    selector: string,
    nodes: AstNode[]    
}
export const Declaration = {
    kind: 'declaration',
    property: string,
    value: string,
    important: boolean
}
export const Comment = {
    kind: 'comment',
    value: string
}  

export const AstNode = Rule | Declaration | Comment



export function rule(selector, nodes){
    return {
      kind: 'rule',
      selector,
      nodes,
    }
}

export function decl(property, value){
    return {
      kind: 'declaration',
      property,
      value,
      important: false,
    }
}

export function comment(value){
    return {
      kind: 'comment',
      value: value,
    }
  }

export const WalkAction {
    /** Continue walking, which is the default */
    Continue,
  
    /** Skip visiting the children of this node */
    Skip,
  
    /** Stop the walk entirely */
    Stop,
}

/**
 * 
 * @param {*} ast is the node 
 * @param {*} visit is the funciton
 *  visit(node,utils)=>void|walkAction
 */
export function walk(ast,visit){
    for(let i=0;i<ast.length;i++){
        let node=ast[i]
        let status = visit(node,{
            replaceWith(newnode){
                ast.splice(i, 1, ...(Array.isArray(newNode) ? newNode : [newNode]))
                i--
            }
        })??WalkAction.Continue

        if (status === WalkAction.Stop) return

        // Skip visiting the children of this node
        if (status === WalkAction.Skip) continue
    
        if (node.kind === 'rule') {
          walk(node.nodes, visit)
        }
    }

}
  