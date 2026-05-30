import { createContext } from "react";

export default createContext({
    value:0,
    handelChange:()=>{},
    drawerOpen:false ,
    setDrawerOpen:()=>{}
})