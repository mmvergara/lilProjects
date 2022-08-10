"use strict";
function autoBind(_, _2, propertyDescriptor) {
    const origConstructor = propertyDescriptor.value;
    const adjConstructor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origConstructor.bind(this);
            return boundFn;
        }
    };
    return adjConstructor;
}
