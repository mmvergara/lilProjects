
function autoBind(_:any,_2:any,propertyDescriptor:PropertyDescriptor){
    const origConstructor = propertyDescriptor.value
    const adjConstructor = {
        configurable:true,
        enumerable:false,
        get() {
            const boundFn = origConstructor.bind(this)
            return boundFn
        }
    }
    return adjConstructor
}
