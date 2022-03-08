
//WHY am I using logger i my project? While working on React projects, 
//logging provides a way to get feedback and information 
//about what’s happening within the running code

const logger = (store) =>(next)=>(action)=>{
    console.group(action.type)
    console.log('the action: ', action)
    const returnValue= next(action)
    console.log('The new state: ', store.getState())
    console.groupEnd()
    return returnValue;

}
export default logger; 