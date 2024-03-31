import { useState } from "react";
import { isLoginContext } from "../context";
const IsLoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <isLoginContext.Provider value={{ login, setLogin }}>
      {children}
    </isLoginContext.Provider>
  );
};

export default IsLoginProvider;
