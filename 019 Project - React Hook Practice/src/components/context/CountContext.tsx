import React from "react";

const CountContext = React.createContext<null|{value:number,addValue:Function}>(null)

export default CountContext

