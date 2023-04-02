import { createContext, useEffect, useState } from "react";
import { ContextType } from "../Types/types";
const Context = createContext<ContextType>({logged: false, setLogged: ()=>{}});

export  function ContextProvider({children}: any) {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    console.log("Logged: ", logged);
  },[logged]);

  return (
    <Context.Provider value={{logged, setLogged}}>
      {children}
    </Context.Provider>
  )  
}

export default Context;

